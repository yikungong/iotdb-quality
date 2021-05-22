(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{467:function(e,s,t){"use strict";t.r(s);var a=t(45),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"valuerepair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#valuerepair"}},[e._v("#")]),e._v(" ValueRepair")]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("This function is used to repair the value of the time series.\nCurrently, two methods are supported:\n"),t("strong",[e._v("Screen")]),e._v(" is a method based on speed threshold, which makes all speeds meet the threshold requirements under the premise of minimum changes;\n"),t("strong",[e._v("LsGreedy")]),e._v(" is a method based on speed change likelihood, which models speed changes as Gaussian distribution, and uses a greedy algorithm to maximize the likelihood.")]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" VALUEREPAIR")]),e._v(" "),t("p",[t("strong",[e._v("Input Series:")]),e._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),e._v(" "),t("p",[t("strong",[e._v("Parameters:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("method")]),e._v(": The method used to repair, which is 'Screen' or 'LsGreedy'. By default, Screen is used.")]),e._v(" "),t("li",[t("code",[e._v("minSpeed")]),e._v(": This parameter is only valid with Screen. It is the speed threshold. Speeds below it will be regarded as outliers. By default, it is the median minus 3 times of median absolute deviation.")]),e._v(" "),t("li",[t("code",[e._v("maxSpeed")]),e._v(": This parameter is only valid with Screen. It is the speed threshold. Speeds above it will be regarded as outliers. By default, it is the median plus 3 times of median absolute deviation.")]),e._v(" "),t("li",[t("code",[e._v("center")]),e._v(": This parameter is only valid with LsGreedy. It is the center of the Gaussian distribution of speed changes. By default, it is 0.")]),e._v(" "),t("li",[t("code",[e._v("sigma")]),e._v(": This parameter is only valid with LsGreedy. It is the standard deviation of the Gaussian distribution of speed changes. By default, it is the median absolute deviation.")])]),e._v(" "),t("p",[t("strong",[e._v("Output Series:")]),e._v(" Output a single series. The type is the same as the input. This series is the input after repairing.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" "),t("code",[e._v("NaN")]),e._v(" will be filled with linear interpolation before repairing.")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"repair-with-screen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repair-with-screen"}},[e._v("#")]),e._v(" Repair with Screen")]),e._v(" "),t("p",[e._v("When "),t("code",[e._v("method")]),e._v(" is 'Screen' or the default, Screen method is used.")]),e._v(" "),t("p",[e._v("Input series:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------------------+---------------+\n|                         Time|root.test.d2.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|\n|2020-01-01T00:00:04.000+08:00|          102.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|\n|2020-01-01T00:00:16.000+08:00|          114.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n+-----------------------------+---------------+\n")])])]),t("p",[e._v("SQL for query:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" valuerepair"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("d2\n")])])]),t("p",[e._v("Output series:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------------------+----------------------------+\n|                         Time|valuerepair(root.test.d2.s1)|\n+-----------------------------+----------------------------+\n|2020-01-01T00:00:02.000+08:00|                       100.0|\n|2020-01-01T00:00:03.000+08:00|                       101.0|\n|2020-01-01T00:00:04.000+08:00|                       102.0|\n|2020-01-01T00:00:06.000+08:00|                       104.0|\n|2020-01-01T00:00:08.000+08:00|                       106.0|\n|2020-01-01T00:00:10.000+08:00|                       108.0|\n|2020-01-01T00:00:14.000+08:00|                       112.0|\n|2020-01-01T00:00:15.000+08:00|                       113.0|\n|2020-01-01T00:00:16.000+08:00|                       114.0|\n|2020-01-01T00:00:18.000+08:00|                       116.0|\n|2020-01-01T00:00:20.000+08:00|                       118.0|\n|2020-01-01T00:00:22.000+08:00|                       120.0|\n|2020-01-01T00:00:26.000+08:00|                       124.0|\n|2020-01-01T00:00:28.000+08:00|                       126.0|\n|2020-01-01T00:00:30.000+08:00|                       128.0|\n+-----------------------------+----------------------------+\n")])])]),t("h3",{attrs:{id:"repair-with-lsgreedy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repair-with-lsgreedy"}},[e._v("#")]),e._v(" Repair with LsGreedy")]),e._v(" "),t("p",[e._v("When "),t("code",[e._v("method")]),e._v(" is 'LsGreedy', LsGreedy method is used.")]),e._v(" "),t("p",[e._v("Input series is the same as above, the SQL for query is shown below:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" valuerepair"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'method'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'LsGreedy'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("d2\n")])])]),t("p",[e._v("Output series:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('+-----------------------------+-------------------------------------------------+\n|                         Time|valuerepair(root.test.d2.s1, "method"="LsGreedy")|\n+-----------------------------+-------------------------------------------------+\n|2020-01-01T00:00:02.000+08:00|                                            100.0|\n|2020-01-01T00:00:03.000+08:00|                                            101.0|\n|2020-01-01T00:00:04.000+08:00|                                            102.0|\n|2020-01-01T00:00:06.000+08:00|                                            104.0|\n|2020-01-01T00:00:08.000+08:00|                                            106.0|\n|2020-01-01T00:00:10.000+08:00|                                            108.0|\n|2020-01-01T00:00:14.000+08:00|                                            112.0|\n|2020-01-01T00:00:15.000+08:00|                                            113.0|\n|2020-01-01T00:00:16.000+08:00|                                            114.0|\n|2020-01-01T00:00:18.000+08:00|                                            116.0|\n|2020-01-01T00:00:20.000+08:00|                                            118.0|\n|2020-01-01T00:00:22.000+08:00|                                            120.0|\n|2020-01-01T00:00:26.000+08:00|                                            124.0|\n|2020-01-01T00:00:28.000+08:00|                                            126.0|\n|2020-01-01T00:00:30.000+08:00|                                            128.0|\n+-----------------------------+-------------------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);