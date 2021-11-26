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
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package cn.edu.thu.iotdb.quality.dquality;

import cn.edu.thu.iotdb.quality.util.NoNumberException;
import cn.edu.thu.iotdb.quality.util.Util;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.iotdb.db.query.udf.api.UDTF;
import org.apache.iotdb.db.query.udf.api.access.RowWindow;
import org.apache.iotdb.db.query.udf.api.collector.PointCollector;
import org.apache.iotdb.db.query.udf.api.customizer.config.UDTFConfigurations;
import org.apache.iotdb.db.query.udf.api.customizer.parameter.UDFParameters;
import org.apache.iotdb.db.query.udf.api.customizer.strategy.SlidingSizeWindowAccessStrategy;
import org.apache.iotdb.db.query.udf.api.customizer.strategy.SlidingTimeWindowAccessStrategy;
import org.apache.iotdb.tsfile.file.metadata.enums.TSDataType;

/**
 * 用于计算时间序列的一致性的UDTF
 *
 * @author Wang Haoyu
 */
public class UDTFConsistency implements UDTF {

  @Override
  public void beforeStart(UDFParameters udfp, UDTFConfigurations udtfc) throws Exception {
    boolean isTime = false;
    long window = Integer.MAX_VALUE;
    if (udfp.hasAttribute("window")) {
      String s = udfp.getString("window");
      window = Util.parseTime(s);
      if (window > 0) {
        isTime = true;
      } else {
        window = Long.parseLong(s);
      }
    }
    if (isTime) {
      udtfc.setAccessStrategy(new SlidingTimeWindowAccessStrategy(window));
    } else {
      udtfc.setAccessStrategy(new SlidingSizeWindowAccessStrategy((int) window));
    }
    udtfc.setOutputDataType(TSDataType.DOUBLE);
  }

  @Override
  public void transform(RowWindow rowWindow, PointCollector collector) throws Exception {
    try {
      if (rowWindow.windowSize() > TimeSeriesQuality.windowSize) {
        TimeSeriesQuality tsq = new TimeSeriesQuality(rowWindow.getRowIterator());
        tsq.timeDetect();
        collector.putDouble(rowWindow.getRow(0).getTime(), tsq.getConsistency());
      }
    } catch (IOException | NoNumberException ex) {
      Logger.getLogger(UDTFCompleteness.class.getName()).log(Level.SEVERE, null, ex);
    }
  }
}
