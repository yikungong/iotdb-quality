(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{435:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deconv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deconv"}},[t._v("#")]),t._v(" Deconv")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("This function is used to calculate the deconvolution, i.e. polynomial division.")]),t._v(" "),s("p",[s("strong",[t._v("Name:")]),t._v(" DECONV")]),t._v(" "),s("p",[s("strong",[t._v("Input:")]),t._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),s("p",[s("strong",[t._v("Parameters:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("result")]),t._v(": The result of deconvolution, which is 'quotient' or 'remainder'. By default, the quotient will be output.")])]),t._v(" "),s("p",[s("strong",[t._v("Output:")]),t._v(" Output a single series. The type is DOUBLE. It is the result of deconvolving the second series from the first series (dividing the first series by the second series) whose timestamps starting from 0 only indicate the order.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("NaN")]),t._v(" in the input series will be ignored.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"calculate-the-quotient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calculate-the-quotient"}},[t._v("#")]),t._v(" Calculate the quotient")]),t._v(" "),s("p",[t._v("When "),s("code",[t._v("result")]),t._v(" is 'quotient' or the default, this function calculates the quotient of the deconvolution.")]),t._v(" "),s("p",[t._v("Input series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s3|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|1970-01-01T08:00:00.000+08:00|            8.0|            7.0|\n|1970-01-01T08:00:00.001+08:00|            2.0|            2.0|\n|1970-01-01T08:00:00.002+08:00|            7.0|           null|\n|1970-01-01T08:00:00.003+08:00|            2.0|           null|\n+-----------------------------+---------------+---------------+\n")])])]),s("p",[t._v("SQL for query:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" deconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),s("p",[t._v("Output series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+----------------------------------------+\n|                         Time|deconv(root.test.d2.s3, root.test.d2.s2)|\n+-----------------------------+----------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                     1.0|\n|1970-01-01T08:00:00.001+08:00|                                     0.0|\n|1970-01-01T08:00:00.002+08:00|                                     1.0|\n+-----------------------------+----------------------------------------+\n")])])]),s("h3",{attrs:{id:"calculate-the-remainder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calculate-the-remainder"}},[t._v("#")]),t._v(" Calculate the remainder")]),t._v(" "),s("p",[t._v("When "),s("code",[t._v("result")]),t._v(" is 'remainder', this function calculates the remainder of the deconvolution.")]),t._v(" "),s("p",[t._v("Input series is the same as above, the SQL for query is shown below:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" deconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remainder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),s("p",[t._v("Output series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('+-----------------------------+--------------------------------------------------------------+\n|                         Time|deconv(root.test.d2.s3, root.test.d2.s2, "result"="remainder")|\n+-----------------------------+--------------------------------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                                           1.0|\n|1970-01-01T08:00:00.001+08:00|                                                           0.0|\n|1970-01-01T08:00:00.002+08:00|                                                           0.0|\n|1970-01-01T08:00:00.003+08:00|                                                           0.0|\n+-----------------------------+--------------------------------------------------------------+\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);