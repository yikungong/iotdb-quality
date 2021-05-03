(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{487:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"validity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validity"}},[t._v("#")]),t._v(" Validity")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数用于计算时间序列的有效性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的有效性，并输出窗口第一个数据点的时间戳和窗口的有效性。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" VALIDITY")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("window")]),t._v("：每一个窗口包含的数据点数目（一个大于0的整数），最后一个窗口的数据点数目可能会不足。缺省情况下，全部输入数据都属于同一个窗口。")])]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE，其中每一个数据点的值的范围都是[0,1]。")]),t._v(" "),a("p",[a("strong",[t._v("提示：")]),t._v(" 只有当窗口内的数据点数目超过10时，才会进行有效性计算。否则，该窗口将被忽略，不做任何输出。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"参数缺省"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数缺省"}},[t._v("#")]),t._v(" 参数缺省")]),t._v(" "),a("p",[t._v("在参数缺省的情况下，本函数将会把全部输入数据都作为同一个窗口计算有效性。")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|\n|2020-01-01T00:00:04.000+08:00|          102.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|\n|2020-01-01T00:00:16.000+08:00|          114.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|\n|2020-01-01T00:00:22.000+08:00|          120.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" validity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+-------------------------+\n|                         Time|validity(root.test.d1.s1)|\n+-----------------------------+-------------------------+\n|2020-01-01T00:00:02.000+08:00|       0.8833333333333333|\n+-----------------------------+-------------------------+\n")])])]),a("h3",{attrs:{id:"指定窗口大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定窗口大小"}},[t._v("#")]),t._v(" 指定窗口大小")]),t._v(" "),a("p",[t._v("在指定窗口大小的情况下，本函数会把输入数据划分为若干个窗口计算有效性。")]),t._v(" "),a("p",[t._v("输入序列:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|\n|2020-01-01T00:00:04.000+08:00|          102.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|\n|2020-01-01T00:00:16.000+08:00|          114.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|\n|2020-01-01T00:00:22.000+08:00|          120.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n|2020-01-01T00:00:32.000+08:00|          130.0|\n|2020-01-01T00:00:34.000+08:00|          132.0|\n|2020-01-01T00:00:36.000+08:00|          134.0|\n|2020-01-01T00:00:38.000+08:00|          136.0|\n|2020-01-01T00:00:40.000+08:00|          138.0|\n|2020-01-01T00:00:42.000+08:00|          140.0|\n|2020-01-01T00:00:44.000+08:00|          142.0|\n|2020-01-01T00:00:46.000+08:00|          144.0|\n|2020-01-01T00:00:48.000+08:00|          146.0|\n|2020-01-01T00:00:50.000+08:00|          148.0|\n|2020-01-01T00:00:52.000+08:00|          150.0|\n|2020-01-01T00:00:54.000+08:00|          152.0|\n|2020-01-01T00:00:56.000+08:00|          154.0|\n|2020-01-01T00:00:58.000+08:00|          156.0|\n|2020-01-01T00:01:00.000+08:00|          158.0|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" validity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v("\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+----------------------------------------+\n|                         Time|validity(root.test.d1.s1, "window"="15")|\n+-----------------------------+----------------------------------------+\n|2020-01-01T00:00:02.000+08:00|                      0.8833333333333333|\n|2020-01-01T00:00:32.000+08:00|                                     1.0|\n+-----------------------------+----------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);