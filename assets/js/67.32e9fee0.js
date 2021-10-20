(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{437:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ifft"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ifft"}},[t._v("#")]),t._v(" IFFT")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("This function treats the two input series as the real and imaginary part of a complex series, performs an inverse fast Fourier transform (IFFT), and outputs the real part of the result.\nFor the input format, please refer to the output format of "),e("code",[t._v("FFT")]),t._v(" function.\nMoreover, the compressed output of "),e("code",[t._v("FFT")]),t._v(" function is also supported.")]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" IFFT")]),t._v(" "),e("p",[e("strong",[t._v("Input:")]),t._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("start")]),t._v(": The start time of the output series with the format 'yyyy-MM-dd HH:mm:ss'. By default, it is '1970-01-01 08:00:00'.")]),t._v(" "),e("li",[e("code",[t._v("interval")]),t._v(": The interval of the output series, which is a positive number with an unit. The unit is 'ms' for millisecond, 's' for second, 'm' for minute, 'h' for hour and 'd' for day. By default, it is 1s.")])]),t._v(" "),e("p",[e("strong",[t._v("Output:")]),t._v(" Output a single series. The type is DOUBLE. It is strictly equispaced. The values are the results of IFFT.")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" If a row contains null points or "),e("code",[t._v("NaN")]),t._v(", it will be ignored.")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("p",[t._v("Input series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+----------------------+----------------------+\n|                         Time|       root.test.d1.re|       root.test.d1.im|\n+-----------------------------+----------------------+----------------------+\n|1970-01-01T08:00:00.000+08:00|                   0.0|                   0.0|\n|1970-01-01T08:00:00.001+08:00| -3.932894010461041E-9| 1.2104201863039066E-8|\n|1970-01-01T08:00:00.002+08:00|-1.4021739447490164E-7| 1.9299268669082926E-7|\n|1970-01-01T08:00:00.003+08:00| -7.057291240286645E-8|  5.127422242345858E-8|\n|1970-01-01T08:00:00.004+08:00|    19.021130288047125|    -6.180339875198807|\n|1970-01-01T08:00:00.005+08:00|     9.999999850988388| 3.501852745067114E-16|\n|1970-01-01T08:00:00.019+08:00| -3.932894898639461E-9|-1.2104202549376264E-8|\n+-----------------------------+----------------------+----------------------+\n")])])]),e("p",[t._v("SQL for query:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" ifft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" im"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interval'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1m'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-01-01 00:00:00'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('+-----------------------------+-------------------------------------------------------+\n|                         Time|ifft(root.test.d1.re, root.test.d1.im, "interval"="1m",|\n|                             |                         "start"="2021-01-01 00:00:00")|\n+-----------------------------+-------------------------------------------------------+\n|2021-01-01T00:00:00.000+08:00|                                      2.902112992431231|\n|2021-01-01T00:01:00.000+08:00|                                     1.1755704705132448|\n|2021-01-01T00:02:00.000+08:00|                                     -2.175570513757101|\n|2021-01-01T00:03:00.000+08:00|                                    -1.9021130389094498|\n|2021-01-01T00:04:00.000+08:00|                                     0.9999999925494194|\n|2021-01-01T00:05:00.000+08:00|                                      1.902113046743454|\n|2021-01-01T00:06:00.000+08:00|                                    0.17557053610884188|\n|2021-01-01T00:07:00.000+08:00|                                    -1.1755704886020932|\n|2021-01-01T00:08:00.000+08:00|                                    -0.9021130371347148|\n|2021-01-01T00:09:00.000+08:00|                                  3.552713678800501E-16|\n|2021-01-01T00:10:00.000+08:00|                                     0.9021130371347154|\n|2021-01-01T00:11:00.000+08:00|                                     1.1755704886020932|\n|2021-01-01T00:12:00.000+08:00|                                   -0.17557053610884144|\n|2021-01-01T00:13:00.000+08:00|                                     -1.902113046743454|\n|2021-01-01T00:14:00.000+08:00|                                    -0.9999999925494196|\n|2021-01-01T00:15:00.000+08:00|                                     1.9021130389094498|\n|2021-01-01T00:16:00.000+08:00|                                     2.1755705137571004|\n|2021-01-01T00:17:00.000+08:00|                                    -1.1755704705132448|\n|2021-01-01T00:18:00.000+08:00|                                     -2.902112992431231|\n|2021-01-01T00:19:00.000+08:00|                                 -3.552713678800501E-16|\n+-----------------------------+-------------------------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);