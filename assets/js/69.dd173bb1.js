(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{439:function(t,s,a){"use strict";a.r(s);var n=a(45),m=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lowpass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lowpass"}},[t._v("#")]),t._v(" LowPass")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("This function performs low-pass filtering on the input series and extracts components below the cutoff frequency.\nThe timestamps of input will be ignored and all data points will be regarded as equidistant.")]),t._v(" "),a("p",[a("strong",[t._v("Name:")]),t._v(" LOWPASS")]),t._v(" "),a("p",[a("strong",[t._v("Input:")]),t._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("wpass")]),t._v(": The normalized cutoff frequency which values (0,1). This parameter cannot be lacked.")])]),t._v(" "),a("p",[a("strong",[t._v("Output:")]),t._v(" Output a single series. The type is DOUBLE. It is the input after filtering. The length and timestamps of output are the same as the input.")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" "),a("code",[t._v("NaN")]),t._v(" in the input series will be ignored.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Input series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|1970-01-01T08:00:00.000+08:00|       2.902113|\n|1970-01-01T08:00:01.000+08:00|      1.1755705|\n|1970-01-01T08:00:02.000+08:00|     -2.1755705|\n|1970-01-01T08:00:03.000+08:00|     -1.9021131|\n|1970-01-01T08:00:04.000+08:00|            1.0|\n|1970-01-01T08:00:05.000+08:00|      1.9021131|\n|1970-01-01T08:00:06.000+08:00|      0.1755705|\n|1970-01-01T08:00:07.000+08:00|     -1.1755705|\n|1970-01-01T08:00:08.000+08:00|      -0.902113|\n|1970-01-01T08:00:09.000+08:00|            0.0|\n|1970-01-01T08:00:10.000+08:00|       0.902113|\n|1970-01-01T08:00:11.000+08:00|      1.1755705|\n|1970-01-01T08:00:12.000+08:00|     -0.1755705|\n|1970-01-01T08:00:13.000+08:00|     -1.9021131|\n|1970-01-01T08:00:14.000+08:00|           -1.0|\n|1970-01-01T08:00:15.000+08:00|      1.9021131|\n|1970-01-01T08:00:16.000+08:00|      2.1755705|\n|1970-01-01T08:00:17.000+08:00|     -1.1755705|\n|1970-01-01T08:00:18.000+08:00|      -2.902113|\n|1970-01-01T08:00:19.000+08:00|            0.0|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("SQL for query:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" lowpass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wpass'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.45'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),a("p",[t._v("Output series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+----------------------------------------+\n|                         Time|lowpass(root.test.d1.s1, "wpass"="0.45")|\n+-----------------------------+----------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                      1.9021130073323922|\n|1970-01-01T08:00:01.000+08:00|                      1.1755704705132448|\n|1970-01-01T08:00:02.000+08:00|                     -1.1755705286582614|\n|1970-01-01T08:00:03.000+08:00|                     -1.9021130389094498|\n|1970-01-01T08:00:04.000+08:00|                    7.450580419288145E-9|\n|1970-01-01T08:00:05.000+08:00|                       1.902113046743454|\n|1970-01-01T08:00:06.000+08:00|                      1.1755705212076808|\n|1970-01-01T08:00:07.000+08:00|                     -1.1755704886020932|\n|1970-01-01T08:00:08.000+08:00|                     -1.9021130222335536|\n|1970-01-01T08:00:09.000+08:00|                   3.552713678800501E-16|\n|1970-01-01T08:00:10.000+08:00|                      1.9021130222335536|\n|1970-01-01T08:00:11.000+08:00|                      1.1755704886020932|\n|1970-01-01T08:00:12.000+08:00|                     -1.1755705212076801|\n|1970-01-01T08:00:13.000+08:00|                      -1.902113046743454|\n|1970-01-01T08:00:14.000+08:00|                    -7.45058112983088E-9|\n|1970-01-01T08:00:15.000+08:00|                      1.9021130389094498|\n|1970-01-01T08:00:16.000+08:00|                      1.1755705286582616|\n|1970-01-01T08:00:17.000+08:00|                     -1.1755704705132448|\n|1970-01-01T08:00:18.000+08:00|                     -1.9021130073323924|\n|1970-01-01T08:00:19.000+08:00|                  -2.664535259100376E-16|\n+-----------------------------+----------------------------------------+\n')])])]),a("p",[t._v("Note: The input is "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C0"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"/"}})],1)],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"4"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C0"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"/"}})],1)],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"5"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" with a length of 20. Thus, the output is "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C0"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"/"}})],1)],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"5"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" after low-pass filtering.")],1)])}),[],!1,null,null,null);s.default=m.exports}}]);