/*
 * Copyright © 2021 iotdb-quality developer group (iotdb-quality@protonmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.edu.thu.iotdb.quality.dmatch;

import org.apache.iotdb.db.query.udf.api.UDTF;
import org.apache.iotdb.db.query.udf.api.access.Row;
import org.apache.iotdb.db.query.udf.api.collector.PointCollector;
import org.apache.iotdb.db.query.udf.api.customizer.config.UDTFConfigurations;
import org.apache.iotdb.db.query.udf.api.customizer.parameter.UDFParameterValidator;
import org.apache.iotdb.db.query.udf.api.customizer.parameter.UDFParameters;
import org.apache.iotdb.db.query.udf.api.customizer.strategy.RowByRowAccessStrategy;
import org.apache.iotdb.tsfile.file.metadata.enums.TSDataType;

import cn.edu.thu.iotdb.quality.dmatch.util.CrossCorrelation;
import cn.edu.thu.iotdb.quality.util.Util;
import org.eclipse.collections.impl.list.mutable.primitive.DoubleArrayList;

/**
 * @ClassName UDTFXCorr @Description This function calculates DTW distance between two input
 * series. @Author thulab @Version 1.0.0
 */
public class UDTFXCorr implements UDTF {

  private DoubleArrayList valueArrayList0 = new DoubleArrayList();
  private DoubleArrayList valueArrayList1 = new DoubleArrayList();

  @Override
  public void beforeStart(UDFParameters udfParameters, UDTFConfigurations udtfConfigurations)
      throws Exception {
    udtfConfigurations
        .setAccessStrategy(new RowByRowAccessStrategy())
        .setOutputDataType(TSDataType.DOUBLE);
    valueArrayList0.clear();
    valueArrayList1.clear();
  }

  @Override
  public void transform(Row row, PointCollector collector) throws Exception {
    if (row.isNull(0) || row.isNull(1)) {
      valueArrayList0.add(Double.NaN);
      valueArrayList1.add(Double.NaN);
    } else {
      valueArrayList0.add(Util.getValueAsDouble(row, 0));
      valueArrayList1.add(Util.getValueAsDouble(row, 1));
    }
  }

  @Override
  public void terminate(PointCollector collector) throws Exception {
    DoubleArrayList correlationArrayList =
        CrossCorrelation.calculateCrossCorrelation(valueArrayList0, valueArrayList1);
    for (int i = 0; i < correlationArrayList.size(); i++) {
      collector.putDouble(i, correlationArrayList.get(i));
    }
  }

  @Override
  public void validate(UDFParameterValidator validator) throws Exception {
    validator
        .validateInputSeriesNumber(2)
        .validateInputSeriesDataType(
            0, TSDataType.INT32, TSDataType.INT64, TSDataType.FLOAT, TSDataType.DOUBLE)
        .validateInputSeriesDataType(
            1, TSDataType.INT32, TSDataType.INT64, TSDataType.FLOAT, TSDataType.DOUBLE);
  }

  @Override
  public void beforeDestroy() {
    valueArrayList0.clear();
    valueArrayList1.clear();
  }
}
