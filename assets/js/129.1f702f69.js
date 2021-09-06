(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{500:function(t,n,s){"use strict";s.r(n);var a=s(45),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"segment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segment"}},[t._v("#")]),t._v(" Segment")]),t._v(" "),s("h2",{attrs:{id:"函数简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),s("p",[t._v("本函数按照数据的线性变化趋势将数据划分为多个子序列，返回分段直线拟合后的子序列首值或所有拟合值。")]),t._v(" "),s("p",[s("strong",[t._v("函数名：")]),t._v(" SEGMENT")]),t._v(" "),s("p",[s("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("output")]),t._v('："all"输出所有拟合值；"first"输出子序列起点拟合值。默认为"first"。')])]),t._v(" "),s("li",[s("p",[s("code",[t._v("error")]),t._v("：判定存在线性趋势的误差允许阈值。误差的定义为子序列进行线性拟合的误差的绝对值的均值。默认为0.1.")])])]),t._v(" "),s("p",[s("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE。")]),t._v(" "),s("p",[s("strong",[t._v("提示：")]),t._v(" 函数默认所有数据等时间间隔分布。函数读取所有数据，若原始数据过多，请先进行降采样处理。拟合采用自底向上方法，子序列的尾值可能会被认作子序列首值输出。")]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("p",[t._v("输入序列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s1|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.000+08:00|         5.0|\n|1970-01-01T08:00:00.100+08:00|         0.0|\n|1970-01-01T08:00:00.200+08:00|         1.0|\n|1970-01-01T08:00:00.300+08:00|         2.0|\n|1970-01-01T08:00:00.400+08:00|         3.0|\n|1970-01-01T08:00:00.500+08:00|         4.0|\n|1970-01-01T08:00:00.600+08:00|         5.0|\n|1970-01-01T08:00:00.700+08:00|         6.0|\n|1970-01-01T08:00:00.800+08:00|         7.0|\n|1970-01-01T08:00:00.900+08:00|         8.0|\n|1970-01-01T08:00:01.000+08:00|         9.0|\n|1970-01-01T08:00:01.100+08:00|         9.1|\n|1970-01-01T08:00:01.200+08:00|         9.2|\n|1970-01-01T08:00:01.300+08:00|         9.3|\n|1970-01-01T08:00:01.400+08:00|         9.4|\n|1970-01-01T08:00:01.500+08:00|         9.5|\n|1970-01-01T08:00:01.600+08:00|         9.6|\n|1970-01-01T08:00:01.700+08:00|         9.7|\n|1970-01-01T08:00:01.800+08:00|         9.8|\n|1970-01-01T08:00:01.900+08:00|         9.9|\n|1970-01-01T08:00:02.000+08:00|        10.0|\n|1970-01-01T08:00:02.100+08:00|         8.0|\n|1970-01-01T08:00:02.200+08:00|         6.0|\n|1970-01-01T08:00:02.300+08:00|         4.0|\n|1970-01-01T08:00:02.400+08:00|         2.0|\n|1970-01-01T08:00:02.500+08:00|         0.0|\n|1970-01-01T08:00:02.600+08:00|        -2.0|\n|1970-01-01T08:00:02.700+08:00|        -4.0|\n|1970-01-01T08:00:02.800+08:00|        -6.0|\n|1970-01-01T08:00:02.900+08:00|        -8.0|\n|1970-01-01T08:00:03.000+08:00|       -10.0|\n|1970-01-01T08:00:03.100+08:00|        10.0|\n|1970-01-01T08:00:03.200+08:00|        10.0|\n|1970-01-01T08:00:03.300+08:00|        10.0|\n|1970-01-01T08:00:03.400+08:00|        10.0|\n|1970-01-01T08:00:03.500+08:00|        10.0|\n|1970-01-01T08:00:03.600+08:00|        10.0|\n|1970-01-01T08:00:03.700+08:00|        10.0|\n|1970-01-01T08:00:03.800+08:00|        10.0|\n|1970-01-01T08:00:03.900+08:00|        10.0|\n+-----------------------------+------------+\n")])])]),s("p",[t._v("用于查询的SQL语句：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" segment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),s("p",[t._v("输出序列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('+-----------------------------+------------------------------------+\n|                         Time|segment(root.test.s1, "error"="0.1")|\n+-----------------------------+------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                 5.0|\n|1970-01-01T08:00:00.200+08:00|                                 1.0|\n|1970-01-01T08:00:01.000+08:00|                                 9.0|\n|1970-01-01T08:00:02.000+08:00|                                10.0|\n|1970-01-01T08:00:03.000+08:00|                               -10.0|\n|1970-01-01T08:00:03.200+08:00|                                10.0|\n+-----------------------------+------------------------------------+\n')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);