(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{436:function(s,t,a){"use strict";a.r(t);var n=a(45),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ksigma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ksigma"}},[s._v("#")]),s._v(" KSigma")]),s._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于查找时间序列的k倍标准差分布异常。将根据提供的k，判断输入数据是否为超过k-sigma的极端分布，即分布异常，并输出所有异常点为新的时间序列。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" KSIGMA")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("k")]),s._v(":确定极端分布时标准差sigma的倍数。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型与输入序列一致。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")]),s._v(" k应大于0，否则将不做输出。")]),s._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("h3",{attrs:{id:"指定k"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定k"}},[s._v("#")]),s._v(" 指定k")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|            0.0|\n|2020-01-01T00:00:03.000+08:00|           50.0|\n|2020-01-01T00:00:04.000+08:00|          100.0|\n|2020-01-01T00:00:06.000+08:00|          150.0|\n|2020-01-01T00:00:08.000+08:00|          200.0|\n|2020-01-01T00:00:10.000+08:00|          200.0|\n|2020-01-01T00:00:14.000+08:00|          200.0|\n|2020-01-01T00:00:15.000+08:00|          200.0|\n|2020-01-01T00:00:16.000+08:00|          200.0|\n|2020-01-01T00:00:18.000+08:00|          200.0|\n|2020-01-01T00:00:20.000+08:00|          150.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|\n|2020-01-01T00:00:26.000+08:00|           50.0|\n|2020-01-01T00:00:28.000+08:00|            0.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n+-----------------------------+---------------+\n")])])]),a("p",[s._v("用于查询的SQL语句：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ksigma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n")])])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+---------------------------------+\n|Time                         |ksigma(root.test.d1.s1,"k"="3.0")|\n+-----------------------------+---------------------------------+\n|2020-01-01T00:00:02.000+08:00|                              0.0|\n|2020-01-01T00:00:03.000+08:00|                             50.0|\n|2020-01-01T00:00:26.000+08:00|                             50.0|\n|2020-01-01T00:00:28.000+08:00|                              0.0|\n+-----------------------------+---------------------------------+\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);