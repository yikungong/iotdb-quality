(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{571:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dwt"}},[t._v("#")]),t._v(" DWT")]),t._v(" "),s("h2",{attrs:{id:"函数简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),s("p",[t._v("本函数对输入序列进行一维离散小波变换。")]),t._v(" "),s("p",[s("strong",[t._v("函数名：")]),t._v(" DWT")]),t._v(" "),s("p",[s("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("p",[s("strong",[t._v("参数：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("method")]),t._v("：小波滤波的类型，提供'Haar', 'DB4', 'DB6', 'DB8'，其中DB指代Daubechies。若不设置该参数，则用户需提供小波滤波的系数。不区分大小写。")]),t._v(" "),s("li",[s("code",[t._v("coef")]),t._v("：小波滤波的系数。若提供该参数，请使用英文逗号','分割各项，不添加空格或其它符号。")]),t._v(" "),s("li",[s("code",[t._v("layer")]),t._v("：进行变换的次数，最终输出的向量个数等同于"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v("​.默认取1。")],1)]),t._v(" "),s("p",[s("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为DOUBLE，长度与输入相等。")]),t._v(" "),s("p",[s("strong",[t._v("提示：")]),t._v(" 输入序列长度必须为2的整数次幂。")]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("h3",{attrs:{id:"haar变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haar变换"}},[t._v("#")]),t._v(" Haar变换")]),t._v(" "),s("p",[t._v("输入序列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|1970-01-01T08:00:00.000+08:00|            0.0|\n|1970-01-01T08:00:00.100+08:00|            0.2|\n|1970-01-01T08:00:00.200+08:00|            1.5|\n|1970-01-01T08:00:00.300+08:00|            1.2|\n|1970-01-01T08:00:00.400+08:00|            0.6|\n|1970-01-01T08:00:00.500+08:00|            1.7|\n|1970-01-01T08:00:00.600+08:00|            0.8|\n|1970-01-01T08:00:00.700+08:00|            2.0|\n|1970-01-01T08:00:00.800+08:00|            2.5|\n|1970-01-01T08:00:00.900+08:00|            2.1|\n|1970-01-01T08:00:01.000+08:00|            0.0|\n|1970-01-01T08:00:01.100+08:00|            2.0|\n|1970-01-01T08:00:01.200+08:00|            1.8|\n|1970-01-01T08:00:01.300+08:00|            1.2|\n|1970-01-01T08:00:01.400+08:00|            1.0|\n|1970-01-01T08:00:01.500+08:00|            1.6|\n+-----------------------------+---------------+\n")])])]),s("p",[t._v("用于查询的SQL语句：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" dwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"haar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),s("p",[t._v("输出序列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('+-----------------------------+-------------------------------------+\n|                         Time|dwt(root.test.d1.s1, "method"="haar")|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                  0.14142135834465192|\n|1970-01-01T08:00:00.100+08:00|                    1.909188342921157|\n|1970-01-01T08:00:00.200+08:00|                   1.6263456473052773|\n|1970-01-01T08:00:00.300+08:00|                   1.9798989957517026|\n|1970-01-01T08:00:00.400+08:00|                    3.252691126023161|\n|1970-01-01T08:00:00.500+08:00|                    1.414213562373095|\n|1970-01-01T08:00:00.600+08:00|                   2.1213203435596424|\n|1970-01-01T08:00:00.700+08:00|                   1.8384776479437628|\n|1970-01-01T08:00:00.800+08:00|                 -0.14142135834465192|\n|1970-01-01T08:00:00.900+08:00|                  0.21213200063848547|\n|1970-01-01T08:00:01.000+08:00|                  -0.7778174761639416|\n|1970-01-01T08:00:01.100+08:00|                  -0.8485281289944873|\n|1970-01-01T08:00:01.200+08:00|                   0.2828427799095765|\n|1970-01-01T08:00:01.300+08:00|                   -1.414213562373095|\n|1970-01-01T08:00:01.400+08:00|                  0.42426400127697095|\n|1970-01-01T08:00:01.500+08:00|                 -0.42426408557066786|\n+-----------------------------+-------------------------------------+\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);