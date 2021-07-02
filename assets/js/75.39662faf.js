(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{441:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lof"}},[t._v("#")]),t._v(" LOF")]),t._v(" "),a("h2",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[t._v("#")]),t._v(" 函数简介")]),t._v(" "),a("p",[t._v("本函数使用局部离群点检测方法用于查找序列的密度异常。将根据提供的第k距离数及局部离群点因子(lof)阈值，判断输入数据是否为离群点，即异常，并输出各点的LOF值。")]),t._v(" "),a("p",[a("strong",[t._v("函数名：")]),t._v(" LOF")]),t._v(" "),a("p",[a("strong",[t._v("输入序列：")]),t._v(" 多个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("method")]),t._v(":使用的检测方法。默认为default，以高维数据计算。设置为series，将一维时间序列转换为高维数据计算。")]),t._v(" "),a("li",[a("code",[t._v("k")]),t._v(":使用第k距离计算局部离群点因子.默认为3。")]),t._v(" "),a("li",[a("code",[t._v("window")]),t._v(":每次读取数据的窗口长度。默认为10000.")]),t._v(" "),a("li",[a("code",[t._v("windowsize")]),t._v(":使用series方法时，转化高维数据的维数，即单个窗口的大小。默认为5。")])]),t._v(" "),a("p",[a("strong",[t._v("输出序列：")]),t._v(" 输出单时间序列，类型为DOUBLE。")]),t._v(" "),a("p",[a("strong",[t._v("提示：")]),t._v(" 不完整的数据行会被忽略，不参与计算，也不标记为离群点。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"默认参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认参数"}},[t._v("#")]),t._v(" 默认参数")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d1.s1|root.test.d1.s2|\n+-----------------------------+---------------+---------------+\n|1970-01-01T08:00:00.100+08:00|            0.0|            0.0|\n|1970-01-01T08:00:00.200+08:00|            0.0|            1.0|\n|1970-01-01T08:00:00.300+08:00|            1.0|            1.0|\n|1970-01-01T08:00:00.400+08:00|            1.0|            0.0|\n|1970-01-01T08:00:00.500+08:00|            0.0|           -1.0|\n|1970-01-01T08:00:00.600+08:00|           -1.0|           -1.0|\n|1970-01-01T08:00:00.700+08:00|           -1.0|            0.0|\n|1970-01-01T08:00:00.800+08:00|            2.0|            2.0|\n|1970-01-01T08:00:00.900+08:00|            0.0|           null|\n+-----------------------------+---------------+---------------+\n")])])]),a("p",[t._v("查询语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" lof"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+-------------------------------------+\n|                         Time|lof(root.test.d1.s1, root.test.d1.s2)|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.100+08:00|                   3.8274824267668244|\n|1970-01-01T08:00:00.200+08:00|                   3.0117631741126156|\n|1970-01-01T08:00:00.300+08:00|                    2.838155437762879|\n|1970-01-01T08:00:00.400+08:00|                   3.0117631741126156|\n|1970-01-01T08:00:00.500+08:00|                     2.73518261244453|\n|1970-01-01T08:00:00.600+08:00|                    2.371440975708148|\n|1970-01-01T08:00:00.700+08:00|                     2.73518261244453|\n|1970-01-01T08:00:00.800+08:00|                   1.7561416374270742|\n+-----------------------------+-------------------------------------+\n")])])]),a("h3",{attrs:{id:"诊断一维时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诊断一维时间序列"}},[t._v("#")]),t._v(" 诊断一维时间序列")]),t._v(" "),a("p",[t._v("输入序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|1970-01-01T08:00:00.100+08:00|            1.0|\n|1970-01-01T08:00:00.200+08:00|            2.0|\n|1970-01-01T08:00:00.300+08:00|            3.0|\n|1970-01-01T08:00:00.400+08:00|            4.0|\n|1970-01-01T08:00:00.500+08:00|            5.0|\n|1970-01-01T08:00:00.600+08:00|            6.0|\n|1970-01-01T08:00:00.700+08:00|            7.0|\n|1970-01-01T08:00:00.800+08:00|            8.0|\n|1970-01-01T08:00:00.900+08:00|            9.0|\n|1970-01-01T08:00:01.000+08:00|           10.0|\n|1970-01-01T08:00:01.100+08:00|           11.0|\n|1970-01-01T08:00:01.200+08:00|           12.0|\n|1970-01-01T08:00:01.300+08:00|           13.0|\n|1970-01-01T08:00:01.400+08:00|           14.0|\n|1970-01-01T08:00:01.500+08:00|           15.0|\n|1970-01-01T08:00:01.600+08:00|           16.0|\n|1970-01-01T08:00:01.700+08:00|           17.0|\n|1970-01-01T08:00:01.800+08:00|           18.0|\n|1970-01-01T08:00:01.900+08:00|           19.0|\n|1970-01-01T08:00:02.000+08:00|           20.0|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("查询语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" lof"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"series"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),a("p",[t._v("输出序列：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+--------------------+\n|                         Time|lof(root.test.d1.s1)|\n+-----------------------------+--------------------+\n|1970-01-01T08:00:00.100+08:00|    3.77777777777778|\n|1970-01-01T08:00:00.200+08:00|    4.32727272727273|\n|1970-01-01T08:00:00.300+08:00|    4.85714285714286|\n|1970-01-01T08:00:00.400+08:00|    5.40909090909091|\n|1970-01-01T08:00:00.500+08:00|    5.94999999999999|\n|1970-01-01T08:00:00.600+08:00|    6.43243243243243|\n|1970-01-01T08:00:00.700+08:00|    6.79999999999999|\n|1970-01-01T08:00:00.800+08:00|                 7.0|\n|1970-01-01T08:00:00.900+08:00|                 7.0|\n|1970-01-01T08:00:01.000+08:00|    6.79999999999999|\n|1970-01-01T08:00:01.100+08:00|    6.43243243243243|\n|1970-01-01T08:00:01.200+08:00|    5.94999999999999|\n|1970-01-01T08:00:01.300+08:00|    5.40909090909091|\n|1970-01-01T08:00:01.400+08:00|    4.85714285714286|\n|1970-01-01T08:00:01.500+08:00|    4.32727272727273|\n|1970-01-01T08:00:01.600+08:00|    3.77777777777778|\n+-----------------------------+--------------------+\n")])])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=e.exports}}]);