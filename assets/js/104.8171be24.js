(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{474:function(t,s,a){"use strict";a.r(s);var r=a(45),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"selfcorrelation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selfcorrelation"}},[t._v("#")]),t._v(" SelfCorrelation")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数用于计算时间序列的自相关函数值，即序列与自身之间的互相关函数，详情参见"),a("code",[t._v("CrossCorrelation")]),t._v("函数文档。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" SELFCORRELATION")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE。序列中共包含"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"N"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v("个数据点，每个值的具体含义参见"),a("code",[t._v("CrossCorrelation")]),t._v("函数文档。")],1),t._v(" "),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("序列中的"),a("code",[t._v("NaN")]),t._v("值会被忽略，在计算中表现为0。")])]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:01.000+08:00|              1|\n|2020-01-01T00:00:02.000+08:00|            NaN|\n|2020-01-01T00:00:03.000+08:00|              3|\n|2020-01-01T00:00:04.000+08:00|            NaN|\n|2020-01-01T00:00:05.000+08:00|              5|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" selfcorrelation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),t._v("\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+--------------------------------+\n|                         Time|selfcorrelation(root.test.d1.s1)|\n+-----------------------------+--------------------------------+\n|1970-01-01T08:00:00.001+08:00|                             1.0|\n|1970-01-01T08:00:00.002+08:00|                             0.0|\n|1970-01-01T08:00:00.003+08:00|                             3.6|\n|1970-01-01T08:00:00.004+08:00|                             0.0|\n|1970-01-01T08:00:00.005+08:00|                             7.0|\n|1970-01-01T08:00:00.006+08:00|                             0.0|\n|1970-01-01T08:00:00.007+08:00|                             3.6|\n|1970-01-01T08:00:00.008+08:00|                             0.0|\n|1970-01-01T08:00:00.009+08:00|                             1.0|\n+-----------------------------+--------------------------------+\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);