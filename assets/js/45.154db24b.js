(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{415:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"resample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resample"}},[t._v("#")]),t._v(" Resample")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("This function is used to resample the input series according to a given frequency,\nincluding up-sampling and down-sampling.\nCurrently, the supported up-sampling methods are\nNaN (filling with "),e("code",[t._v("NaN")]),t._v("),\nFFill (filling with previous value),\nBFill (filling with next value) and\nLinear (filling with linear interpolation).\nDown-sampling relies on group aggregation,\nwhich supports Max, Min, First, Last, Mean and Median.")]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" RESAMPLE")]),t._v(" "),e("p",[e("strong",[t._v("Input Series:")]),t._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("every")]),t._v(": The frequency of resampling, which is a positive number with an unit. The unit is 'ms' for millisecond, 's' for second, 'm' for minute, 'h' for hour and 'd' for day. This parameter cannot be lacked.")]),t._v(" "),e("li",[e("code",[t._v("interp")]),t._v(": The interpolation method of up-sampling, which is 'NaN', 'FFill', 'BFill' or 'Linear'. By default, NaN is used.")]),t._v(" "),e("li",[e("code",[t._v("aggr")]),t._v(": The aggregation method of down-sampling, which is 'Max', 'Min', 'First', 'Last', 'Mean' or 'Median'. By default, Mean is used.")]),t._v(" "),e("li",[e("code",[t._v("start")]),t._v(": The start time (inclusive) of resampling with the format 'yyyy-MM-dd HH:mm:ss'. By default, it is the timestamp of the first valid data point.")]),t._v(" "),e("li",[e("code",[t._v("end")]),t._v(": The end time (exclusive) of resampling with the format 'yyyy-MM-dd HH:mm:ss'. By default, it is the timestamp of the last valid data point.")])]),t._v(" "),e("p",[e("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is DOUBLE. It is strictly equispaced with the frequency "),e("code",[t._v("every")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" "),e("code",[t._v("NaN")]),t._v(" in the input series will be ignored.")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"up-sampling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#up-sampling"}},[t._v("#")]),t._v(" Up-sampling")]),t._v(" "),e("p",[t._v("When the frequency of resampling is higher than the original frequency, up-sampling starts.")]),t._v(" "),e("p",[t._v("Input series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2021-03-06T16:00:00.000+08:00|           3.09|\n|2021-03-06T16:15:00.000+08:00|           3.53|\n|2021-03-06T16:30:00.000+08:00|            3.5|\n|2021-03-06T16:45:00.000+08:00|           3.51|\n|2021-03-06T17:00:00.000+08:00|           3.41|\n+-----------------------------+---------------+\n")])])]),e("p",[t._v("SQL for query:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" resample"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'every'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5m'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interp'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('+-----------------------------+----------------------------------------------------------+\n|                         Time|resample(root.test.d1.s1, "every"="5m", "interp"="linear")|\n+-----------------------------+----------------------------------------------------------+\n|2021-03-06T16:00:00.000+08:00|                                        3.0899999141693115|\n|2021-03-06T16:05:00.000+08:00|                                        3.2366665999094644|\n|2021-03-06T16:10:00.000+08:00|                                        3.3833332856496177|\n|2021-03-06T16:15:00.000+08:00|                                        3.5299999713897705|\n|2021-03-06T16:20:00.000+08:00|                                        3.5199999809265137|\n|2021-03-06T16:25:00.000+08:00|                                         3.509999990463257|\n|2021-03-06T16:30:00.000+08:00|                                                       3.5|\n|2021-03-06T16:35:00.000+08:00|                                         3.503333330154419|\n|2021-03-06T16:40:00.000+08:00|                                         3.506666660308838|\n|2021-03-06T16:45:00.000+08:00|                                         3.509999990463257|\n|2021-03-06T16:50:00.000+08:00|                                        3.4766666889190674|\n|2021-03-06T16:55:00.000+08:00|                                         3.443333387374878|\n|2021-03-06T17:00:00.000+08:00|                                        3.4100000858306885|\n+-----------------------------+----------------------------------------------------------+\n')])])]),e("h3",{attrs:{id:"down-sampling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#down-sampling"}},[t._v("#")]),t._v(" Down-sampling")]),t._v(" "),e("p",[t._v("When the frequency of resampling is lower than the original frequency, down-sampling starts.")]),t._v(" "),e("p",[t._v("Input series is the same as above, the SQL for query is shown below:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" resample"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'every'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'30m'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aggr'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('+-----------------------------+--------------------------------------------------------+\n|                         Time|resample(root.test.d1.s1, "every"="30m", "aggr"="first")|\n+-----------------------------+--------------------------------------------------------+\n|2021-03-06T16:00:00.000+08:00|                                      3.0899999141693115|\n|2021-03-06T16:30:00.000+08:00|                                                     3.5|\n|2021-03-06T17:00:00.000+08:00|                                      3.4100000858306885|\n+-----------------------------+--------------------------------------------------------+\n')])])]),e("h3",{attrs:{id:"specify-the-time-period"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-time-period"}},[t._v("#")]),t._v(" Specify the time period")]),t._v(" "),e("p",[t._v("The time period of resampling can be specified with "),e("code",[t._v("start")]),t._v(" and "),e("code",[t._v("end")]),t._v(".\nThe period outside the actual time range will be interpolated.")]),t._v(" "),e("p",[t._v("Input series is the same as above, the SQL for query is shown below:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" resample"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'every'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'30m'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-03-06 15:00:00'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])])]),e("p",[t._v("Output series:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('+-----------------------------+-----------------------------------------------------------------------+\n|                         Time|resample(root.test.d1.s1, "every"="30m", "start"="2021-03-06 15:00:00")|\n+-----------------------------+-----------------------------------------------------------------------+\n|2021-03-06T15:00:00.000+08:00|                                                                    NaN|\n|2021-03-06T15:30:00.000+08:00|                                                                    NaN|\n|2021-03-06T16:00:00.000+08:00|                                                      3.309999942779541|\n|2021-03-06T16:30:00.000+08:00|                                                     3.5049999952316284|\n|2021-03-06T17:00:00.000+08:00|                                                     3.4100000858306885|\n+-----------------------------+-----------------------------------------------------------------------+\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);