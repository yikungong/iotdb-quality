(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{455:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"adwin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adwin"}},[t._v("#")]),t._v(" ADWIN")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数用于查找时间序列可能的概念漂移。本方法根据提供的δ，使用ADWIN方法判断是否存在异常大于置信度δ的位置。返回所有认为发生概念漂移的时间戳。具体方法请参见")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Learning from Time-Changing Data with Adaptive Windowing, A Bifetet al., 2005\n")])])]),a("p",[a("strong",[t._v("函数名：")]),t._v(" ADWIN")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("delta")]),t._v(":判断发生概念漂移的阈值。详见论文中定义的δ，默认为0.01.")]),t._v(" "),a("li",[a("code",[t._v("windowsize")]),t._v(":进行检测的窗口大小，该值应大于20。")])]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单个序列，类型为INT32，异常输出1，非异常输出0。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"提供参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供参数"}},[t._v("#")]),t._v(" 提供参数")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s1|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.000+08:00|         5.0|\n|1970-01-01T08:00:00.100+08:00|         5.0|\n|1970-01-01T08:00:00.200+08:00|         5.0|\n|1970-01-01T08:00:00.300+08:00|         5.0|\n|1970-01-01T08:00:00.400+08:00|         5.0|\n|1970-01-01T08:00:00.500+08:00|         5.0|\n|1970-01-01T08:00:00.600+08:00|         5.0|\n|1970-01-01T08:00:00.700+08:00|         5.0|\n|1970-01-01T08:00:00.800+08:00|         5.0|\n|1970-01-01T08:00:00.900+08:00|         5.0|\n|1970-01-01T08:00:01.000+08:00|         5.0|\n|1970-01-01T08:00:01.100+08:00|         5.0|\n|1970-01-01T08:00:01.200+08:00|         5.0|\n|1970-01-01T08:00:01.300+08:00|         5.0|\n|1970-01-01T08:00:01.400+08:00|         5.0|\n|1970-01-01T08:00:01.500+08:00|         5.0|\n|1970-01-01T08:00:01.600+08:00|         5.0|\n|1970-01-01T08:00:01.700+08:00|         5.0|\n|1970-01-01T08:00:01.800+08:00|         5.0|\n|1970-01-01T08:00:01.900+08:00|         5.0|\n|1970-01-01T08:00:02.000+08:00|        10.0|\n|1970-01-01T08:00:02.100+08:00|        10.0|\n|1970-01-01T08:00:02.200+08:00|        10.0|\n|1970-01-01T08:00:02.300+08:00|        10.0|\n|1970-01-01T08:00:02.400+08:00|        10.0|\n|1970-01-01T08:00:02.500+08:00|        10.0|\n|1970-01-01T08:00:02.600+08:00|        10.0|\n|1970-01-01T08:00:02.700+08:00|        10.0|\n|1970-01-01T08:00:02.800+08:00|        10.0|\n|1970-01-01T08:00:02.900+08:00|        10.0|\n|1970-01-01T08:00:03.000+08:00|        10.0|\n|1970-01-01T08:00:03.100+08:00|        10.0|\n|1970-01-01T08:00:03.200+08:00|        10.0|\n|1970-01-01T08:00:03.300+08:00|        10.0|\n|1970-01-01T08:00:03.400+08:00|        10.0|\n|1970-01-01T08:00:03.500+08:00|        10.0|\n|1970-01-01T08:00:03.600+08:00|        10.0|\n|1970-01-01T08:00:03.700+08:00|        10.0|\n|1970-01-01T08:00:03.800+08:00|        10.0|\n|1970-01-01T08:00:03.900+08:00|        10.0|\n+-----------------------------+------------+\n")])])]),a("p",[t._v("用于查询的SQL语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" adwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windowsize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delta"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+------------------------------------------------------+\n|                         Time|adwin(root.test.s1, "windowsize"="30", "delta"="0.01")|\n+-----------------------------+------------------------------------------------------+\n|1970-01-01T08:00:02.100+08:00|                                                     1|\n+-----------------------------+------------------------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);