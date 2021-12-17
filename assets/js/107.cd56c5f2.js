(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{480:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"minmax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minmax"}},[t._v("#")]),t._v(" MinMax")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("This function is used to standardize the input series with min-max. Minimum value is transformed to 0; maximum value is transformed to 1.")]),t._v(" "),s("p",[s("strong",[t._v("Name:")]),t._v(" MINMAX")]),t._v(" "),s("p",[s("strong",[t._v("Input Series:")]),t._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("compute")]),t._v(': When set to "batch", anomaly test is conducted after importing all data points; when set to "stream", it is required to provide minimum and maximum values. The default method is "batch".')]),t._v(" "),s("li",[s("code",[t._v("min")]),t._v(': The maximum value when method is set to "stream".')]),t._v(" "),s("li",[s("code",[t._v("max")]),t._v(': The minimum value when method is set to "stream".')])]),t._v(" "),s("p",[s("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is DOUBLE.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"batch-computing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch-computing"}},[t._v("#")]),t._v(" Batch computing")]),t._v(" "),s("p",[t._v("Input series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s1|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.100+08:00|         0.0|\n|1970-01-01T08:00:00.200+08:00|         0.0|\n|1970-01-01T08:00:00.300+08:00|         1.0|\n|1970-01-01T08:00:00.400+08:00|        -1.0|\n|1970-01-01T08:00:00.500+08:00|         0.0|\n|1970-01-01T08:00:00.600+08:00|         0.0|\n|1970-01-01T08:00:00.700+08:00|        -2.0|\n|1970-01-01T08:00:00.800+08:00|         2.0|\n|1970-01-01T08:00:00.900+08:00|         0.0|\n|1970-01-01T08:00:01.000+08:00|         0.0|\n|1970-01-01T08:00:01.100+08:00|         1.0|\n|1970-01-01T08:00:01.200+08:00|        -1.0|\n|1970-01-01T08:00:01.300+08:00|        -1.0|\n|1970-01-01T08:00:01.400+08:00|         1.0|\n|1970-01-01T08:00:01.500+08:00|         0.0|\n|1970-01-01T08:00:01.600+08:00|         0.0|\n|1970-01-01T08:00:01.700+08:00|        10.0|\n|1970-01-01T08:00:01.800+08:00|         2.0|\n|1970-01-01T08:00:01.900+08:00|        -2.0|\n|1970-01-01T08:00:02.000+08:00|         0.0|\n+-----------------------------+------------+\n")])])]),s("p",[t._v("SQL for query:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" minmax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),s("p",[t._v("Output series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+--------------------+\n|                         Time|minmax(root.test.s1)|\n+-----------------------------+--------------------+\n|1970-01-01T08:00:00.100+08:00| 0.16666666666666666|\n|1970-01-01T08:00:00.200+08:00| 0.16666666666666666|\n|1970-01-01T08:00:00.300+08:00|                0.25|\n|1970-01-01T08:00:00.400+08:00| 0.08333333333333333|\n|1970-01-01T08:00:00.500+08:00| 0.16666666666666666|\n|1970-01-01T08:00:00.600+08:00| 0.16666666666666666|\n|1970-01-01T08:00:00.700+08:00|                 0.0|\n|1970-01-01T08:00:00.800+08:00|  0.3333333333333333|\n|1970-01-01T08:00:00.900+08:00| 0.16666666666666666|\n|1970-01-01T08:00:01.000+08:00| 0.16666666666666666|\n|1970-01-01T08:00:01.100+08:00|                0.25|\n|1970-01-01T08:00:01.200+08:00| 0.08333333333333333|\n|1970-01-01T08:00:01.300+08:00| 0.08333333333333333|\n|1970-01-01T08:00:01.400+08:00|                0.25|\n|1970-01-01T08:00:01.500+08:00| 0.16666666666666666|\n|1970-01-01T08:00:01.600+08:00| 0.16666666666666666|\n|1970-01-01T08:00:01.700+08:00|                 1.0|\n|1970-01-01T08:00:01.800+08:00|  0.3333333333333333|\n|1970-01-01T08:00:01.900+08:00|                 0.0|\n|1970-01-01T08:00:02.000+08:00| 0.16666666666666666|\n+-----------------------------+--------------------+\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);