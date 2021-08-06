(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{408:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"histogram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#histogram"}},[t._v("#")]),t._v(" Histogram")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("This function is used to calculate the distribution histogram of a single column of numerical data.")]),t._v(" "),s("p",[s("strong",[t._v("Name:")]),t._v(" HISTOGRAM")]),t._v(" "),s("p",[s("strong",[t._v("Input Series:")]),t._v(" Only supports a single input sequence, the type is INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("p",[s("strong",[t._v("Parameters:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("start")]),t._v(": The lower limit of the requested data range, the default value is -Double.MAX_VALUE.")]),t._v(" "),s("li",[s("code",[t._v("end")]),t._v(": The upper limit of the requested data range, the default value is Double.MAX_VALUE, and the value of start must be less than or equal to end.")]),t._v(" "),s("li",[s("code",[t._v("count")]),t._v(": The number of buckets of the histogram, the default value is 1. It must be a positive integer.")])]),t._v(" "),s("p",[s("strong",[t._v("Output Series:")]),t._v(" The value of the bucket of the histogram, where the lower bound represented by the i-th bucket (index starts from 1) is $start+ (i-1)\\cdot\\frac{end-start}{count}$ and the upper bound is $start+ i \\cdot \\frac{end-start}{count}$.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[t._v("If the value is lower than "),s("code",[t._v("start")]),t._v(", it will be put into the 1st bucket. If the value is larger than "),s("code",[t._v("end")]),t._v(", it will be put into the last bucket.")]),t._v(" "),s("li",[t._v("Missing points, null points and "),s("code",[t._v("NaN")]),t._v(" in the input series will be ignored.")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Input series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:00.000+08:00|            1.0|\n|2020-01-01T00:00:01.000+08:00|            2.0|\n|2020-01-01T00:00:02.000+08:00|            3.0|\n|2020-01-01T00:00:03.000+08:00|            4.0|\n|2020-01-01T00:00:04.000+08:00|            5.0|\n|2020-01-01T00:00:05.000+08:00|            6.0|\n|2020-01-01T00:00:06.000+08:00|            7.0|\n|2020-01-01T00:00:07.000+08:00|            8.0|\n|2020-01-01T00:00:08.000+08:00|            9.0|\n|2020-01-01T00:00:09.000+08:00|           10.0|\n|2020-01-01T00:00:10.000+08:00|           11.0|\n|2020-01-01T00:00:11.000+08:00|           12.0|\n|2020-01-01T00:00:12.000+08:00|           13.0|\n|2020-01-01T00:00:13.000+08:00|           14.0|\n|2020-01-01T00:00:14.000+08:00|           15.0|\n|2020-01-01T00:00:15.000+08:00|           16.0|\n|2020-01-01T00:00:16.000+08:00|           17.0|\n|2020-01-01T00:00:17.000+08:00|           18.0|\n|2020-01-01T00:00:18.000+08:00|           19.0|\n|2020-01-01T00:00:19.000+08:00|           20.0|\n+-----------------------------+---------------+\n")])])]),s("p",[t._v("SQL for query:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" histogram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),s("p",[t._v("Output series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('+-----------------------------+-----------------------------------------------------------------+\n|                         Time|histogram(root.test.d1.s1, "start"="1", "end"="20", "count"="10")|\n+-----------------------------+-----------------------------------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                                                2|\n|1970-01-01T08:00:00.001+08:00|                                                                2|\n|1970-01-01T08:00:00.002+08:00|                                                                2|\n|1970-01-01T08:00:00.003+08:00|                                                                2|\n|1970-01-01T08:00:00.004+08:00|                                                                2|\n|1970-01-01T08:00:00.005+08:00|                                                                2|\n|1970-01-01T08:00:00.006+08:00|                                                                2|\n|1970-01-01T08:00:00.007+08:00|                                                                2|\n|1970-01-01T08:00:00.008+08:00|                                                                2|\n|1970-01-01T08:00:00.009+08:00|                                                                2|\n+-----------------------------+-----------------------------------------------------------------+\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);