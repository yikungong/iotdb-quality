(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{548:function(t,s,a){"use strict";a.r(s);var n=a(45),c=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pacf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pacf"}},[t._v("#")]),t._v(" PACF")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数通过求解Yule-Walker方程，计算序列的偏自相关系数。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" PACF")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),t._v(" "),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lag")]),t._v("：最大滞后阶数。默认值为"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"m"}}),a("mjx-c",{attrs:{c:"i"}}),a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"0"}})],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-n",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"l"}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.241em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2061"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("​，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1),t._v("​表示数据点个数。​")],1)]),t._v(" "),a("p",[a("strong",[t._v("输出序列")]),t._v("：输出单个序列，类型为DOUBLE。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"指定滞后阶数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定滞后阶数"}},[t._v("#")]),t._v(" 指定滞后阶数")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s1|\n+-----------------------------+------------+\n|2019-12-27T00:00:00.000+08:00|         5.0|\n|2019-12-27T00:05:00.000+08:00|         5.0|\n|2019-12-27T00:10:00.000+08:00|         5.0|\n|2019-12-27T00:15:00.000+08:00|         5.0|\n|2019-12-27T00:20:00.000+08:00|         6.0|\n|2019-12-27T00:25:00.000+08:00|         5.0|\n|2019-12-27T00:30:00.000+08:00|         6.0|\n|2019-12-27T00:35:00.000+08:00|         6.0|\n|2019-12-27T00:40:00.000+08:00|         6.0|\n|2019-12-27T00:45:00.000+08:00|         6.0|\n|2019-12-27T00:50:00.000+08:00|         6.0|\n|2019-12-27T00:55:00.000+08:00|    5.982609|\n|2019-12-27T01:00:00.000+08:00|   5.9652176|\n|2019-12-27T01:05:00.000+08:00|    5.947826|\n|2019-12-27T01:10:00.000+08:00|   5.9304347|\n|2019-12-27T01:15:00.000+08:00|   5.9130435|\n|2019-12-27T01:20:00.000+08:00|   5.8956523|\n|2019-12-27T01:25:00.000+08:00|    5.878261|\n|2019-12-27T01:30:00.000+08:00|   5.8608694|\n|2019-12-27T01:35:00.000+08:00|    5.843478|\n............\nTotal line number = 18066\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" pacf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+-----------------------------+\n|                         Time|pacf(root.test.s1, "lag"="5")|\n+-----------------------------+-----------------------------+\n|2019-12-27T00:00:00.000+08:00|                          1.0|\n|2019-12-27T00:05:00.000+08:00|           0.3528915091942786|\n|2019-12-27T00:10:00.000+08:00|           0.1761346122516304|\n|2019-12-27T00:15:00.000+08:00|           0.1492391973294682|\n|2019-12-27T00:20:00.000+08:00|          0.03560059645868398|\n|2019-12-27T00:25:00.000+08:00|           0.0366222998995286|\n+-----------------------------+-----------------------------+\n')])])])])}),[],!1,null,null,null);s.default=c.exports}}]);