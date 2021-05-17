(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{444:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cov"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cov"}},[t._v("#")]),t._v(" Cov")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数用于计算两列数值型数据的总体协方差。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" COV")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。")]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE。序列仅包含一个时间戳为0、值为总体协方差的数据点。")]),t._v(" "),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("如果某行数据中包含空值、缺失值或"),a("code",[t._v("NaN")]),t._v("，该行数据将会被忽略；")]),t._v(" "),a("li",[t._v("如果数据中所有的行都被忽略，函数将会输出"),a("code",[t._v("NaN")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|           null|\n|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|\n|2020-01-01T00:00:12.000+08:00|           null|          103.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|           null|\n|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|\n+-----------------------------+---------------+---------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" cov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+-------------------------------------+\n|                         Time|cov(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                   12.291666666666666|\n+-----------------------------+-------------------------------------+\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);