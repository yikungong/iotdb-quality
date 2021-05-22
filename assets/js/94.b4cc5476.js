(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{486:function(t,s,e){"use strict";e.r(s);var a=e(45),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"timeweightedavg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeweightedavg"}},[t._v("#")]),t._v(" TimeWeightedAvg")]),t._v(" "),e("h2",{attrs:{id:"函数简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),e("p",[t._v("本函数用于计算时间序列的时间加权平均值，即在相同时间单位下的数值积分除以序列总的时间跨度。更多关于数值积分计算的信息请参考"),e("code",[t._v("Integral")]),t._v("函数。")]),t._v(" "),e("p",[e("strong",[t._v("函数名：")]),t._v(" TIMEWEIGHTEDAVG")]),t._v(" "),e("p",[e("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),t._v(" "),e("p",[e("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE，序列仅包含一个时间戳为0、值为时间加权平均结果的数据点。")]),t._v(" "),e("p",[e("strong",[t._v("提示：")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("时间加权的平均值等于在任意时间单位"),e("code",[t._v("unit")]),t._v("下计算的数值积分（即折线图中每相邻两个数据点和时间轴形成的直角梯形的面积之和），\n除以相同时间单位下输入序列的时间跨度，其值与具体采用的时间单位无关，默认与IoTDB时间单位一致。")])]),t._v(" "),e("li",[e("p",[t._v("数据中的"),e("code",[t._v("NaN")]),t._v("将会被忽略。折线将以临近两个有值数据点为准。")])]),t._v(" "),e("li",[e("p",[t._v("输入序列为空时，函数输出结果为0；仅有一个数据点时，输出结果为该点数值。")])])]),t._v(" "),e("h2",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),e("p",[t._v("输入序列：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:01.000+08:00|              1|\n|2020-01-01T00:00:02.000+08:00|              2|\n|2020-01-01T00:00:03.000+08:00|              5|\n|2020-01-01T00:00:04.000+08:00|              6|\n|2020-01-01T00:00:05.000+08:00|              7|\n|2020-01-01T00:00:08.000+08:00|              8|\n|2020-01-01T00:00:09.000+08:00|            NaN|\n|2020-01-01T00:00:10.000+08:00|             10|\n+-----------------------------+---------------+\n")])])]),e("p",[t._v("用于查询的SQL语句：")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" timeweightedavg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("p",[t._v("输出序列：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+--------------------------------+\n|                         Time|timeweightedavg(root.test.d1.s1)|\n+-----------------------------+--------------------------------+\n|1970-01-01T08:00:00.000+08:00|                            5.75|\n+-----------------------------+--------------------------------+\n")])])]),e("p",[t._v("其计算公式为：\n$$\\frac{1}{2}[(1+2)\\times 1 + (2+5) \\times 1 + (5+6) \\times 1 + (6+7) \\times 1 + (7+8) \\times 3 + (8+10) \\times 2] / 10 = 5.75$$")])])}),[],!1,null,null,null);s.default=r.exports}}]);