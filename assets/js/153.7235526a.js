(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{522:function(t,n,s){"use strict";s.r(n);var a=s(45),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"twosidedfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#twosidedfilter"}},[t._v("#")]),t._v(" TwoSidedFilter")]),t._v(" "),s("h2",{attrs:{id:"函数简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),s("p",[t._v("本函数基于双边窗口检测法对输入序列中的异常点进行过滤。")]),t._v(" "),s("p",[s("strong",[t._v("函数名：")]),t._v(" TWOSIDEDFILTER")]),t._v(" "),s("p",[s("strong",[t._v("输出序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("p",[s("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型与输入相同，是输入序列去除异常点后的结果。")]),t._v(" "),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("len")]),t._v("：双边窗口检测法中的窗口大小，取值范围为正整数，默认值为5.如当"),s("code",[t._v("len")]),t._v("=3时，算法向前、向后各取长度为3的窗口，在窗口中计算异常度。")]),t._v(" "),s("li",[s("code",[t._v("threshold")]),t._v("：异常度的阈值，取值范围为(0,1)，默认值为0.3。阈值越高，函数对于异常度的判定标准越严格。")])]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("p",[t._v("输入序列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s0|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.000+08:00|      2002.0|\n|1970-01-01T08:00:01.000+08:00|      1946.0|\n|1970-01-01T08:00:02.000+08:00|      1958.0|\n|1970-01-01T08:00:03.000+08:00|      2012.0|\n|1970-01-01T08:00:04.000+08:00|      2051.0|\n|1970-01-01T08:00:05.000+08:00|      1898.0|\n|1970-01-01T08:00:06.000+08:00|      2014.0|\n|1970-01-01T08:00:07.000+08:00|      2052.0|\n|1970-01-01T08:00:08.000+08:00|      1935.0|\n|1970-01-01T08:00:09.000+08:00|      1901.0|\n|1970-01-01T08:00:10.000+08:00|      1972.0|\n|1970-01-01T08:00:11.000+08:00|      1969.0|\n|1970-01-01T08:00:12.000+08:00|      1984.0|\n|1970-01-01T08:00:13.000+08:00|      2018.0|\n|1970-01-01T08:00:37.000+08:00|      1484.0|\n|1970-01-01T08:00:38.000+08:00|      1055.0|\n|1970-01-01T08:00:39.000+08:00|      1050.0|\n|1970-01-01T08:01:05.000+08:00|      1023.0|\n|1970-01-01T08:01:06.000+08:00|      1056.0|\n|1970-01-01T08:01:07.000+08:00|       978.0|\n|1970-01-01T08:01:08.000+08:00|      1050.0|\n|1970-01-01T08:01:09.000+08:00|      1123.0|\n|1970-01-01T08:01:10.000+08:00|      1150.0|\n|1970-01-01T08:01:11.000+08:00|      1034.0|\n|1970-01-01T08:01:12.000+08:00|       950.0|\n|1970-01-01T08:01:13.000+08:00|      1059.0|\n+-----------------------------+------------+\n")])])]),s("p",[t._v("用于查询的SQL语句：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" TwoSidedFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'len'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'threshold'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),s("p",[t._v("输出序列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s0|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.000+08:00|      2002.0|\n|1970-01-01T08:00:01.000+08:00|      1946.0|\n|1970-01-01T08:00:02.000+08:00|      1958.0|\n|1970-01-01T08:00:03.000+08:00|      2012.0|\n|1970-01-01T08:00:04.000+08:00|      2051.0|\n|1970-01-01T08:00:05.000+08:00|      1898.0|\n|1970-01-01T08:00:06.000+08:00|      2014.0|\n|1970-01-01T08:00:07.000+08:00|      2052.0|\n|1970-01-01T08:00:08.000+08:00|      1935.0|\n|1970-01-01T08:00:09.000+08:00|      1901.0|\n|1970-01-01T08:00:10.000+08:00|      1972.0|\n|1970-01-01T08:00:11.000+08:00|      1969.0|\n|1970-01-01T08:00:12.000+08:00|      1984.0|\n|1970-01-01T08:00:13.000+08:00|      2018.0|\n|1970-01-01T08:01:05.000+08:00|      1023.0|\n|1970-01-01T08:01:06.000+08:00|      1056.0|\n|1970-01-01T08:01:07.000+08:00|       978.0|\n|1970-01-01T08:01:08.000+08:00|      1050.0|\n|1970-01-01T08:01:09.000+08:00|      1123.0|\n|1970-01-01T08:01:10.000+08:00|      1150.0|\n|1970-01-01T08:01:11.000+08:00|      1034.0|\n|1970-01-01T08:01:12.000+08:00|       950.0|\n|1970-01-01T08:01:13.000+08:00|      1059.0|\n+-----------------------------+------------+\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);