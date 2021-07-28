(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{396:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"pearson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pearson"}},[t._v("#")]),t._v(" Pearson")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("This function is used to calculate the Pearson Correlation Coefficient.")]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" PEARSON")]),t._v(" "),e("p",[e("strong",[t._v("Input Series:")]),t._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),e("p",[e("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the Pearson Correlation Coefficient.")]),t._v(" "),e("p",[e("strong",[t._v("Note:")])]),t._v(" "),e("ul",[e("li",[t._v("If a row contains missing points, null points or "),e("code",[t._v("NaN")]),t._v(", it will be ignored;")]),t._v(" "),e("li",[t._v("If all rows are ignored, "),e("code",[t._v("NaN")]),t._v(" will be output.")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("p",[t._v("Input series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|           null|\n|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|\n|2020-01-01T00:00:12.000+08:00|           null|          103.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|           null|\n|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|\n+-----------------------------+---------------+---------------+\n")])])]),e("p",[t._v("SQL for query:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" pearson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+-----------------------------------------+\n|                         Time|pearson(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-----------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                       0.5630881927754872|\n+-----------------------------+-----------------------------------------+\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);