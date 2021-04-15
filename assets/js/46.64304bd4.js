(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{417:function(t,s,a){"use strict";a.r(s);var e=a(45),c=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mad"}},[t._v("#")]),t._v(" Mad")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("The function is used to compute the exact or approximate median absolute deviation (MAD) of a numeric time series. MAD is the median of the deviation of each element from the elements' median.")]),t._v(" "),a("p",[t._v("Take a dataset "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"{"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"5"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"5"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"6"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"7"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"8"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"9"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"}"}})],1)],1)],1),t._v(" as an instance. Its median is 5 and the deviation of each element from the median is "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"{"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"0"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"4"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"4"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"}"}})],1)],1)],1),t._v(", whose median is 2. Therefore, the MAD of the original dataset is 2.")],1),t._v(" "),a("p",[a("strong",[t._v("Name:")]),t._v(" MAD")]),t._v(" "),a("p",[a("strong",[t._v("Input Series:")]),t._v(" Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),a("p",[a("strong",[t._v("Parameter:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("error")]),t._v(": The relative error of the approximate MAD. It should be within [0,1] and the default value is 0. Taking "),a("code",[t._v("error")]),t._v("=0.01 as an instance, suppose the exact MAD is "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1),t._v(" and the approximate MAD is "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1),t._v(", we have "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"."}}),a("mjx-c",{attrs:{c:"9"}}),a("mjx-c",{attrs:{c:"9"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2264"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2264"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"."}}),a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1),t._v(". With "),a("code",[t._v("error")]),t._v("=0, the output is the exact MAD.")],1)]),t._v(" "),a("p",[a("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the approximate MAD.")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" Missing points, null points and "),a("code",[t._v("NaN")]),t._v(" in the input series will be ignored.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"exact-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exact-query"}},[t._v("#")]),t._v(" Exact Query")]),t._v(" "),a("p",[t._v("With the default "),a("code",[t._v("error")]),t._v("("),a("code",[t._v("error")]),t._v("=0), the function queries the exact MAD.")]),t._v(" "),a("p",[t._v("Input series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+------------+\n|                         Time|root.test.s0|\n+-----------------------------+------------+\n|2021-03-17T10:32:17.054+08:00|   0.5319929|\n|2021-03-17T10:32:18.054+08:00|   0.9304316|\n|2021-03-17T10:32:19.054+08:00|  -1.4800133|\n|2021-03-17T10:32:20.054+08:00|   0.6114087|\n|2021-03-17T10:32:21.054+08:00|   2.5163336|\n|2021-03-17T10:32:22.054+08:00|  -1.0845392|\n|2021-03-17T10:32:23.054+08:00|   1.0562582|\n|2021-03-17T10:32:24.054+08:00|   1.3867859|\n|2021-03-17T10:32:25.054+08:00| -0.45429882|\n|2021-03-17T10:32:26.054+08:00|   1.0353678|\n|2021-03-17T10:32:27.054+08:00|   0.7307929|\n|2021-03-17T10:32:28.054+08:00|   2.3167255|\n|2021-03-17T10:32:29.054+08:00|    2.342443|\n|2021-03-17T10:32:30.054+08:00|   1.5809103|\n|2021-03-17T10:32:31.054+08:00|   1.4829416|\n|2021-03-17T10:32:32.054+08:00|   1.5800357|\n|2021-03-17T10:32:33.054+08:00|   0.7124368|\n|2021-03-17T10:32:34.054+08:00| -0.78597564|\n|2021-03-17T10:32:35.054+08:00|   1.2058644|\n|2021-03-17T10:32:36.054+08:00|   1.4215064|\n|2021-03-17T10:32:37.054+08:00|   1.2808295|\n|2021-03-17T10:32:38.054+08:00|  -0.6173715|\n|2021-03-17T10:32:39.054+08:00|  0.06644377|\n|2021-03-17T10:32:40.054+08:00|    2.349338|\n|2021-03-17T10:32:41.054+08:00|   1.7335888|\n|2021-03-17T10:32:42.054+08:00|   1.5872132|\n............\nTotal line number = 10000\n")])])]),a("p",[t._v("SQL for query:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" mad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),a("p",[t._v("Output series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+------------------+\n|                         Time| mad(root.test.s0)|\n+-----------------------------+------------------+\n|1970-01-01T08:00:00.000+08:00|0.6806197166442871|\n+-----------------------------+------------------+\n")])])]),a("h3",{attrs:{id:"approximate-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approximate-query"}},[t._v("#")]),t._v(" Approximate Query")]),t._v(" "),a("p",[t._v("By setting "),a("code",[t._v("error")]),t._v(" within (0,1], the function queries the approximate MAD.")]),t._v(" "),a("p",[t._v("SQL for query:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" mad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test\n")])])]),a("p",[t._v("Output series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+---------------------------------+\n|                         Time|mad(root.test.s0, "error"="0.01")|\n+-----------------------------+---------------------------------+\n|1970-01-01T08:00:00.000+08:00|               0.6806616245859518|\n+-----------------------------+---------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=c.exports}}]);