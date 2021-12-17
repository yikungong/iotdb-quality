(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{652:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"strreplace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strreplace"}},[t._v("#")]),t._v(" StrReplace")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数用于将文本中的子串替换为指定的字符串。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" STRREPLACE")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 TEXT。")]),t._v(" "),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("target")]),t._v(": 需要替换的字符子串")]),t._v(" "),a("li",[a("code",[t._v("replace")]),t._v(": 替换后的字符串。")]),t._v(" "),a("li",[a("code",[t._v("limit")]),t._v(": 替换次数，大于等于-1的整数，默认为-1表示所有匹配的子串都会被替换。")]),t._v(" "),a("li",[a("code",[t._v("offset")]),t._v(": 需要跳过的匹配次数，即前"),a("code",[t._v("offset")]),t._v("次匹配到的字符子串并不会被替换，默认为0。")]),t._v(" "),a("li",[a("code",[t._v("reverse")]),t._v(": 是否需要反向计数，默认为false即按照从左向右的次序。")])]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为TEXT。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|\n|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|\n|2021-01-01T00:00:03.000+08:00|         B+,B,B|\n|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|\n|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" strreplace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+-----------------------------------------+\n|                         Time|strreplace(root.test.d1.s1, "target"=",",|\n|                             |              "replace"="/", "limit"="2")|\n+-----------------------------+-----------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                A/B/A+,B-|\n|2021-01-01T00:00:02.000+08:00|                                A/A+/A,B+|\n|2021-01-01T00:00:03.000+08:00|                                   B+/B/B|\n|2021-01-01T00:00:04.000+08:00|                                A+/A/A+,A|\n|2021-01-01T00:00:05.000+08:00|                                 A/B-/B,B|\n+-----------------------------+-----------------------------------------+\n')])])]),a("p",[t._v("另一个用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" strreplace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"offset"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reverse"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+-----------------------------------------------------+\n|                         Time|strreplace(root.test.d1.s1, "target"=",", "replace"= | \n|                             |    "|", "limit"="1", "offset"="1", "reverse"="true")|\n+-----------------------------+-----------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                            A,B/A+,B-|\n|2021-01-01T00:00:02.000+08:00|                                            A,A+/A,B+|\n|2021-01-01T00:00:03.000+08:00|                                               B+/B,B|\n|2021-01-01T00:00:04.000+08:00|                                            A+,A/A+,A|\n|2021-01-01T00:00:05.000+08:00|                                             A,B-/B,B|\n+-----------------------------+-----------------------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);