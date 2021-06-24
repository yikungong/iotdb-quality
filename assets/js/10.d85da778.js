(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(s,t,e){"use strict";e.r(t);var a=e(45),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ksigma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ksigma"}},[s._v("#")]),s._v(" KSigma")]),s._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to detect distribution anomaly of time series. According to k parameter, the function judges if a input value is an extreme value beyond k-sigma, aka distribution anomaly, and a new time series of anomaly will be output.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" KSIGMA")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("k")]),s._v(":how many times to multiply on standard deviation to define extreme value.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is same as input series.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" Only when is larger than 0, the anomaly detection will be performed. Otherwise, nothing will be output.")]),s._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("h3",{attrs:{id:"assigning-k"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#assigning-k"}},[s._v("#")]),s._v(" Assigning k")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|            0.0|\n|2020-01-01T00:00:03.000+08:00|           50.0|\n|2020-01-01T00:00:04.000+08:00|          100.0|\n|2020-01-01T00:00:06.000+08:00|          150.0|\n|2020-01-01T00:00:08.000+08:00|          200.0|\n|2020-01-01T00:00:10.000+08:00|          200.0|\n|2020-01-01T00:00:14.000+08:00|          200.0|\n|2020-01-01T00:00:15.000+08:00|          200.0|\n|2020-01-01T00:00:16.000+08:00|          200.0|\n|2020-01-01T00:00:18.000+08:00|          200.0|\n|2020-01-01T00:00:20.000+08:00|          150.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|\n|2020-01-01T00:00:26.000+08:00|           50.0|\n|2020-01-01T00:00:28.000+08:00|            0.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n+-----------------------------+---------------+\n")])])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ksigma"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n")])])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+---------------------------------+\n|Time                         |ksigma(root.test.d1.s1,"k"="3.0")|\n+-----------------------------+---------------------------------+\n|2020-01-01T00:00:02.000+08:00|                              0.0|\n|2020-01-01T00:00:03.000+08:00|                             50.0|\n|2020-01-01T00:00:26.000+08:00|                             50.0|\n|2020-01-01T00:00:28.000+08:00|                              0.0|\n+-----------------------------+---------------------------------+\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);