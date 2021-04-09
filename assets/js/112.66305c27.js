(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{482:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stddev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stddev"}},[t._v("#")]),t._v(" Stddev")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数用于计算单列数值型数据的总体标准差。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" STDDEV")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE。序列仅包含一个时间戳为0、值为总体标准差的数据点。")]),t._v(" "),a("p",[a("strong",[t._v("提示：")]),t._v(" 数据中的空值、缺失值和"),a("code",[t._v("NaN")]),t._v("将会被忽略。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:00.000+08:00|            1.0|\n|2020-01-01T00:00:01.000+08:00|            2.0|\n|2020-01-01T00:00:02.000+08:00|            3.0|\n|2020-01-01T00:00:03.000+08:00|            4.0|\n|2020-01-01T00:00:04.000+08:00|            5.0|\n|2020-01-01T00:00:05.000+08:00|            6.0|\n|2020-01-01T00:00:06.000+08:00|            7.0|\n|2020-01-01T00:00:07.000+08:00|            8.0|\n|2020-01-01T00:00:08.000+08:00|            9.0|\n|2020-01-01T00:00:09.000+08:00|           10.0|\n|2020-01-01T00:00:10.000+08:00|           11.0|\n|2020-01-01T00:00:11.000+08:00|           12.0|\n|2020-01-01T00:00:12.000+08:00|           13.0|\n|2020-01-01T00:00:13.000+08:00|           14.0|\n|2020-01-01T00:00:14.000+08:00|           15.0|\n|2020-01-01T00:00:15.000+08:00|           16.0|\n|2020-01-01T00:00:16.000+08:00|           17.0|\n|2020-01-01T00:00:17.000+08:00|           18.0|\n|2020-01-01T00:00:18.000+08:00|           19.0|\n|2020-01-01T00:00:19.000+08:00|           20.0|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" stddev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+-----------------------+\n|                         Time|stddev(root.test.d1.s1)|\n+-----------------------------+-----------------------+\n|1970-01-01T08:00:00.000+08:00|     5.7662812973353965|\n+-----------------------------+-----------------------+\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);