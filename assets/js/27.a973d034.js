(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{397:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ksigma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ksigma"}},[t._v("#")]),t._v(" KSigma")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("This function is used to detect distribution anomaly of time series. According to k parameter, the function judges if a input value is an extreme value beyond k-sigma, aka distribution anomaly, and a new time series of anomaly will be output.")]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" KSIGMA")]),t._v(" "),e("p",[e("strong",[t._v("Input Series:")]),t._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("k")]),t._v(":how many times to multiply on standard deviation to define extreme value.")])]),t._v(" "),e("p",[e("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is DOUBLE.")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" Only when is larger than 0, the anomaly detection will be performed. Otherwise, nothing will be output.")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"assigning-k"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#assigning-k"}},[t._v("#")]),t._v(" Assigning k")]),t._v(" "),e("p",[t._v("Input series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|            0.0|\n|2020-01-01T00:00:03.000+08:00|           50.0|\n|2020-01-01T00:00:04.000+08:00|          100.0|\n|2020-01-01T00:00:06.000+08:00|          150.0|\n|2020-01-01T00:00:08.000+08:00|          200.0|\n|2020-01-01T00:00:10.000+08:00|          200.0|\n|2020-01-01T00:00:14.000+08:00|          200.0|\n|2020-01-01T00:00:15.000+08:00|          200.0|\n|2020-01-01T00:00:16.000+08:00|          200.0|\n|2020-01-01T00:00:18.000+08:00|          200.0|\n|2020-01-01T00:00:20.000+08:00|          150.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|\n|2020-01-01T00:00:26.000+08:00|           50.0|\n|2020-01-01T00:00:28.000+08:00|            0.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n+-----------------------------+---------------+\n")])])]),e("p",[t._v("SQL for query:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" ksigma"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('+-----------------------------+---------------------------------+\n|Time                         |ksigma(root.test.d1.s1,"k"="3.0")|\n+-----------------------------+---------------------------------+\n|2020-01-01T00:00:02.000+08:00|                              0.0|\n|2020-01-01T00:00:03.000+08:00|                             50.0|\n|2020-01-01T00:00:26.000+08:00|                             50.0|\n|2020-01-01T00:00:28.000+08:00|                              0.0|\n+-----------------------------+---------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);