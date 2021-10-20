(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{503:function(s,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[s._v("#")]),s._v(" Sample")]),s._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数对输入序列进行采样，即从输入序列中选取指定数量的数据点并输出。目前，本函数支持两种采样方法："),a("strong",[s._v("蓄水池采样法（reservoir sampling）")]),s._v(" 对数据进行随机采样，所有数据点被采样的概率相同；"),a("strong",[s._v("等距采样法（isometric sampling）")]),s._v(" 按照相等的索引间隔对数据进行采样。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" SAMPLE")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型可以是任意的。")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("method")]),s._v("：采样方法，取值为'reservoir'或'isometric'。在缺省情况下，采用蓄水池采样法。")]),s._v(" "),a("li",[a("code",[s._v("k")]),s._v("：采样数，它是一个正整数，在缺省情况下为1。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型与输入序列相同。该序列的长度为采样数，序列中的每一个数据点都来自于输入序列。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")]),s._v(" 如果采样数大于序列长度，那么输入序列中所有的数据点都会被输出。")]),s._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("h3",{attrs:{id:"蓄水池采样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#蓄水池采样"}},[s._v("#")]),s._v(" 蓄水池采样")]),s._v(" "),a("p",[s._v("当"),a("code",[s._v("method")]),s._v("参数为'reservoir'或缺省时，采用蓄水池采样法对输入序列进行采样。由于该采样方法具有随机性，下面展示的输出序列只是一种可能的结果。")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:01.000+08:00|            1.0|\n|2020-01-01T00:00:02.000+08:00|            2.0|\n|2020-01-01T00:00:03.000+08:00|            3.0|\n|2020-01-01T00:00:04.000+08:00|            4.0|\n|2020-01-01T00:00:05.000+08:00|            5.0|\n|2020-01-01T00:00:06.000+08:00|            6.0|\n|2020-01-01T00:00:07.000+08:00|            7.0|\n|2020-01-01T00:00:08.000+08:00|            8.0|\n|2020-01-01T00:00:09.000+08:00|            9.0|\n|2020-01-01T00:00:10.000+08:00|           10.0|\n+-----------------------------+---------------+\n")])])]),a("p",[s._v("用于查询的SQL语句：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" sample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'method'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reservoir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'k'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+------------------------------------------------------+\n|                         Time|sample(root.test.d1.s1, "method"="reservoir", "k"="5")|\n+-----------------------------+------------------------------------------------------+\n|2020-01-01T00:00:02.000+08:00|                                                   2.0|\n|2020-01-01T00:00:03.000+08:00|                                                   3.0|\n|2020-01-01T00:00:05.000+08:00|                                                   5.0|\n|2020-01-01T00:00:08.000+08:00|                                                   8.0|\n|2020-01-01T00:00:10.000+08:00|                                                  10.0|\n+-----------------------------+------------------------------------------------------+\n')])])]),a("h3",{attrs:{id:"等距采样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等距采样"}},[s._v("#")]),s._v(" 等距采样")]),s._v(" "),a("p",[s._v("当"),a("code",[s._v("method")]),s._v("参数为'isometric'时，采用等距采样法对输入序列进行采样。")]),s._v(" "),a("p",[s._v("输入序列同上，用于查询的SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" sample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'method'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'isometric'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'k'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+------------------------------------------------------+\n|                         Time|sample(root.test.d1.s1, "method"="isometric", "k"="5")|\n+-----------------------------+------------------------------------------------------+\n|2020-01-01T00:00:01.000+08:00|                                                   1.0|\n|2020-01-01T00:00:03.000+08:00|                                                   3.0|\n|2020-01-01T00:00:05.000+08:00|                                                   5.0|\n|2020-01-01T00:00:07.000+08:00|                                                   7.0|\n|2020-01-01T00:00:09.000+08:00|                                                   9.0|\n+-----------------------------+------------------------------------------------------+\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);