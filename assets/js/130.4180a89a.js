(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{499:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"conv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conv"}},[t._v("#")]),t._v(" Conv")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("This function is used to calculate the convolution, i.e. polynomial multiplication.")]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" CONV")]),t._v(" "),e("p",[e("strong",[t._v("Input:")]),t._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),e("p",[e("strong",[t._v("Output:")]),t._v(" Output a single series. The type is DOUBLE. It is the result of convolution whose timestamps starting from 0 only indicate the order.")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" "),e("code",[t._v("NaN")]),t._v(" in the input series will be ignored.")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("p",[t._v("Input series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|1970-01-01T08:00:00.000+08:00|            1.0|            7.0|\n|1970-01-01T08:00:00.001+08:00|            0.0|            2.0|\n|1970-01-01T08:00:00.002+08:00|            1.0|           null|\n+-----------------------------+---------------+---------------+\n")])])]),e("p",[t._v("SQL for query:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" conv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+--------------------------------------+\n|                         Time|conv(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+--------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                   7.0|\n|1970-01-01T08:00:00.001+08:00|                                   2.0|\n|1970-01-01T08:00:00.002+08:00|                                   7.0|\n|1970-01-01T08:00:00.003+08:00|                                   2.0|\n+-----------------------------+--------------------------------------+\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);