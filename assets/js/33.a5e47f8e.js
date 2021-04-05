(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{399:function(s,t,e){"use strict";e.r(t);var a=e(45),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"skew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skew"}},[s._v("#")]),s._v(" Skew")]),s._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to calculate the overall skewness.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" SKEW")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the overall skewness.")]),s._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:00.000+08:00|            1.0|\n|2020-01-01T00:00:01.000+08:00|            2.0|\n|2020-01-01T00:00:02.000+08:00|            3.0|\n|2020-01-01T00:00:03.000+08:00|            4.0|\n|2020-01-01T00:00:04.000+08:00|            5.0|\n|2020-01-01T00:00:05.000+08:00|            6.0|\n|2020-01-01T00:00:06.000+08:00|            7.0|\n|2020-01-01T00:00:07.000+08:00|            8.0|\n|2020-01-01T00:00:08.000+08:00|            9.0|\n|2020-01-01T00:00:09.000+08:00|           10.0|\n|2020-01-01T00:00:10.000+08:00|           10.0|\n|2020-01-01T00:00:11.000+08:00|           10.0|\n|2020-01-01T00:00:12.000+08:00|           10.0|\n|2020-01-01T00:00:13.000+08:00|           10.0|\n|2020-01-01T00:00:14.000+08:00|           10.0|\n|2020-01-01T00:00:15.000+08:00|           10.0|\n|2020-01-01T00:00:16.000+08:00|           10.0|\n|2020-01-01T00:00:17.000+08:00|           10.0|\n|2020-01-01T00:00:18.000+08:00|           10.0|\n|2020-01-01T00:00:19.000+08:00|           10.0|\n+-----------------------------+---------------+\n")])])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" skew"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------------+\n|                         Time|  skew(root.test.d1.s1)|\n+-----------------------------+-----------------------+\n|1970-01-01T08:00:00.000+08:00|    -0.9998427402292644|\n+-----------------------------+-----------------------+\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);