(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{589:function(t,s,n){"use strict";n.r(s);var e=n(45),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"missdetect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#missdetect"}},[t._v("#")]),t._v(" MissDetect")]),t._v(" "),n("h2",{attrs:{id:"函数简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),n("p",[t._v("本函数用于检测数据中的缺失异常。在一些数据中，缺失数据会被线性插值填补，在数据中出现完美的线性片段，且这些片段往往长度较大。本函数通过在数据中发现这些完美线性片段来检测缺失异常。")]),t._v(" "),n("p",[n("strong",[t._v("函数名：")]),t._v(" MISSDETECT")]),t._v(" "),n("p",[n("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),t._v(" "),n("p",[n("strong",[t._v("参数：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("minlen")]),t._v("：被标记为异常的完美线性片段的最小长度，是一个大于等于10的整数，默认值为10。")])]),t._v(" "),n("p",[n("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为BOOLEAN，即该数据点是否为缺失异常。")]),t._v(" "),n("p",[n("strong",[t._v("提示：")]),t._v(" 数据中的"),n("code",[t._v("NaN")]),t._v("将会被忽略。")]),t._v(" "),n("h2",{attrs:{id:"使用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),n("p",[t._v("输入序列：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d2.s2|\n+-----------------------------+---------------+\n|2021-07-01T12:00:00.000+08:00|            0.0|\n|2021-07-01T12:00:01.000+08:00|            1.0|\n|2021-07-01T12:00:02.000+08:00|            0.0|\n|2021-07-01T12:00:03.000+08:00|            1.0|\n|2021-07-01T12:00:04.000+08:00|            0.0|\n|2021-07-01T12:00:05.000+08:00|            0.0|\n|2021-07-01T12:00:06.000+08:00|            0.0|\n|2021-07-01T12:00:07.000+08:00|            0.0|\n|2021-07-01T12:00:08.000+08:00|            0.0|\n|2021-07-01T12:00:09.000+08:00|            0.0|\n|2021-07-01T12:00:10.000+08:00|            0.0|\n|2021-07-01T12:00:11.000+08:00|            0.0|\n|2021-07-01T12:00:12.000+08:00|            0.0|\n|2021-07-01T12:00:13.000+08:00|            0.0|\n|2021-07-01T12:00:14.000+08:00|            0.0|\n|2021-07-01T12:00:15.000+08:00|            0.0|\n|2021-07-01T12:00:16.000+08:00|            1.0|\n|2021-07-01T12:00:17.000+08:00|            0.0|\n|2021-07-01T12:00:18.000+08:00|            1.0|\n|2021-07-01T12:00:19.000+08:00|            0.0|\n|2021-07-01T12:00:20.000+08:00|            1.0|\n+-----------------------------+---------------+\n")])])]),n("p",[t._v("用于查询的SQL语句：")]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" missdetect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minlen'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),n("p",[t._v("输出序列：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('+-----------------------------+------------------------------------------+\n|                         Time|missdetect(root.test.d2.s2, "minlen"="10")|\n+-----------------------------+------------------------------------------+\n|2021-07-01T12:00:00.000+08:00|                                     false|\n|2021-07-01T12:00:01.000+08:00|                                     false|\n|2021-07-01T12:00:02.000+08:00|                                     false|\n|2021-07-01T12:00:03.000+08:00|                                     false|\n|2021-07-01T12:00:04.000+08:00|                                      true|\n|2021-07-01T12:00:05.000+08:00|                                      true|\n|2021-07-01T12:00:06.000+08:00|                                      true|\n|2021-07-01T12:00:07.000+08:00|                                      true|\n|2021-07-01T12:00:08.000+08:00|                                      true|\n|2021-07-01T12:00:09.000+08:00|                                      true|\n|2021-07-01T12:00:10.000+08:00|                                      true|\n|2021-07-01T12:00:11.000+08:00|                                      true|\n|2021-07-01T12:00:12.000+08:00|                                      true|\n|2021-07-01T12:00:13.000+08:00|                                      true|\n|2021-07-01T12:00:14.000+08:00|                                      true|\n|2021-07-01T12:00:15.000+08:00|                                      true|\n|2021-07-01T12:00:16.000+08:00|                                     false|\n|2021-07-01T12:00:17.000+08:00|                                     false|\n|2021-07-01T12:00:18.000+08:00|                                     false|\n|2021-07-01T12:00:19.000+08:00|                                     false|\n|2021-07-01T12:00:20.000+08:00|                                     false|\n+-----------------------------+------------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=a.exports}}]);