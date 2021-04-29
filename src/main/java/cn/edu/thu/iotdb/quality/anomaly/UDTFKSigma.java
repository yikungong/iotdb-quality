package cn.edu.thu.iotdb.quality.anomaly;

import cn.edu.thu.iotdb.quality.Util;
import cn.edu.thu.iotdb.quality.Queue;
import org.apache.iotdb.db.query.udf.api.UDTF;
import org.apache.iotdb.db.query.udf.api.access.Row;
import org.apache.iotdb.db.query.udf.api.collector.PointCollector;
import org.apache.iotdb.db.query.udf.api.customizer.config.UDTFConfigurations;
import org.apache.iotdb.db.query.udf.api.customizer.parameter.UDFParameters;
import org.apache.iotdb.db.query.udf.api.customizer.strategy.RowByRowAccessStrategy;
import org.apache.iotdb.tsfile.file.metadata.enums.TSDataType;
import org.apache.iotdb.db.query.udf.api.customizer.parameter.UDFParameterValidator;

public class UDTFKSigma implements UDTF {

    //private long count = 0;
    private double mean = 0.0;
    private double var = 0.0;
    private double sum_x_2 = 0.0;
    private double sum_x_1 = 0.0;
    private double k;
    private Queue q = new Queue(10000);

    @Override
    public void validate(UDFParameterValidator validator) throws Exception {
        validator.validateInputSeriesNumber(1)
                .validateInputSeriesDataType(0,
                        TSDataType.INT32,
                        TSDataType.INT64,
                        TSDataType.FLOAT,
                        TSDataType.DOUBLE);
    }

    @Override
    public void beforeStart(UDFParameters udfParameters, UDTFConfigurations udtfConfigurations) throws Exception {
        udtfConfigurations.setAccessStrategy(new RowByRowAccessStrategy())
                .setOutputDataType(TSDataType.DOUBLE);
        this.k = udfParameters.getDoubleOrDefault("k", 3);
    }

    @Override
    public void transform(Row row, PointCollector collector) throws Exception {
        double value = Util.getValueAsDouble(row);
        long timestamp = row.getTime();
        if (Double.isFinite(value)) {
            if (q.isFull()) {
                double frontValue = q.queueFrontValue();
                q.pop();
                q.push(timestamp, value);
                this.sum_x_1 = this.sum_x_1 - frontValue + value;
                this.sum_x_2 = this.sum_x_2 - frontValue * frontValue + value * value;
                this.mean = this.sum_x_1 / q.getLength();
                this.var = this.sum_x_2 / q.getLength() - this.mean * this.mean;
                if (Math.abs(value - mean) > k * Math.sqrt(this.var * q.getLength() / (q.getLength() - 1))) {
                    collector.putDouble(timestamp, value);
                }
            } else {
                q.push(timestamp, value);
                this.sum_x_1 = this.sum_x_1 + value;
                this.sum_x_2 = this.sum_x_2 + value * value;
                this.mean = this.sum_x_1 / q.getLength();
                this.var = this.sum_x_2 / q.getLength() - this.mean * this.mean;
                if (q.isFull()) {
                    double stddev = Math.sqrt(this.var * q.getLength() / (q.getLength() - 1));
                    for (int i = 0; i < q.getLength(); i++) {
                        value = q.queueithValue(i);
                        timestamp = q.queueithTime(i);
                        if (Math.abs(value - mean) > k * stddev) {
                            collector.putDouble(timestamp, value);
                        }
                    }
                }
            }
        }

    }

    @Override
    public void terminate(PointCollector collector) throws Exception {
        if (!q.isFull() && q.getLength() > 1) {
            double stddev = Math.sqrt(this.var * q.getLength() / (q.getLength() - 1));
            for (int i = 0; i < q.getLength(); i++) {
                double value = q.queueithValue(i);
                long timestamp = q.queueithTime(i);
                if (Math.abs(value - mean) > k * stddev) {
                    collector.putDouble(timestamp, value);
                }
            }
        }
    }
}
