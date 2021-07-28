(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{420:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"timestamprepair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timestamprepair"}},[t._v("#")]),t._v(" TimestampRepair")]),t._v(" "),a("p",[t._v("This function is used for timestamp repair.\nAccording to the given standard time interval,\nthe method of minimizing the repair cost is adopted.\nBy fine-tuning the timestamps,\nthe original data with unstable timestamp interval is repaired to strictly equispaced data.\nIf no standard time interval is given,\nthis function will use the "),a("strong",[t._v("median")]),t._v(", "),a("strong",[t._v("mode")]),t._v(" or "),a("strong",[t._v("cluster")]),t._v(" of the time interval to estimate the standard time interval.")]),t._v(" "),a("p",[a("strong",[t._v("Name:")]),t._v(" TIMESTAMPREPAIR")]),t._v(" "),a("p",[a("strong",[t._v("Input Series:")]),t._v(" Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("interval")]),t._v(": The standard time interval whose unit is millisecond. It is a positive integer. By default, it will be estimated according to the given method.")]),t._v(" "),a("li",[a("code",[t._v("method")]),t._v(": The method to estimate the standard time interval, which is 'median', 'mode' or 'cluster'. This parameter is only valid when "),a("code",[t._v("interval")]),t._v(" is not given. By default, median will be used.")])]),t._v(" "),a("p",[a("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is the same as the input. This series is the input after repairing.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"manually-specify-the-standard-time-interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-specify-the-standard-time-interval"}},[t._v("#")]),t._v(" Manually Specify the Standard Time Interval")]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("interval")]),t._v(" is given, this function repairs according to the given standard time interval.")]),t._v(" "),a("p",[t._v("Input series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d2.s1|\n+-----------------------------+---------------+\n|2021-07-01T12:00:00.000+08:00|            1.0|\n|2021-07-01T12:00:10.000+08:00|            2.0|\n|2021-07-01T12:00:19.000+08:00|            3.0|\n|2021-07-01T12:00:30.000+08:00|            4.0|\n|2021-07-01T12:00:40.000+08:00|            5.0|\n|2021-07-01T12:00:50.000+08:00|            6.0|\n|2021-07-01T12:01:01.000+08:00|            7.0|\n|2021-07-01T12:01:11.000+08:00|            8.0|\n|2021-07-01T12:01:21.000+08:00|            9.0|\n|2021-07-01T12:01:31.000+08:00|           10.0|\n+-----------------------------+---------------+\n")])])]),a("p",[t._v("SQL for query:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" timestamprepair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interval'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),a("p",[t._v("Output series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('+-----------------------------+----------------------------------------------------+\n|                         Time|timestamprepair(root.test.d2.s1, "interval"="10000")|\n+-----------------------------+----------------------------------------------------+\n|2021-07-01T12:00:00.000+08:00|                                                 1.0|\n|2021-07-01T12:00:10.000+08:00|                                                 2.0|\n|2021-07-01T12:00:20.000+08:00|                                                 3.0|\n|2021-07-01T12:00:30.000+08:00|                                                 4.0|\n|2021-07-01T12:00:40.000+08:00|                                                 5.0|\n|2021-07-01T12:00:50.000+08:00|                                                 6.0|\n|2021-07-01T12:01:00.000+08:00|                                                 7.0|\n|2021-07-01T12:01:10.000+08:00|                                                 8.0|\n|2021-07-01T12:01:20.000+08:00|                                                 9.0|\n|2021-07-01T12:01:30.000+08:00|                                                10.0|\n+-----------------------------+----------------------------------------------------+\n')])])]),a("h3",{attrs:{id:"automatically-estimate-the-standard-time-interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatically-estimate-the-standard-time-interval"}},[t._v("#")]),t._v(" Automatically Estimate the Standard Time Interval")]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("interval")]),t._v(" is default, this function estimates the standard time interval.")]),t._v(" "),a("p",[t._v("Input series is the same as above, the SQL for query is shown below:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" timestamprepair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2\n")])])]),a("p",[t._v("Output series:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+-----------------------------+--------------------------------+\n|                         Time|timestamprepair(root.test.d2.s1)|\n+-----------------------------+--------------------------------+\n|2021-07-01T12:00:00.000+08:00|                             1.0|\n|2021-07-01T12:00:10.000+08:00|                             2.0|\n|2021-07-01T12:00:20.000+08:00|                             3.0|\n|2021-07-01T12:00:30.000+08:00|                             4.0|\n|2021-07-01T12:00:40.000+08:00|                             5.0|\n|2021-07-01T12:00:50.000+08:00|                             6.0|\n|2021-07-01T12:01:00.000+08:00|                             7.0|\n|2021-07-01T12:01:10.000+08:00|                             8.0|\n|2021-07-01T12:01:20.000+08:00|                             9.0|\n|2021-07-01T12:01:30.000+08:00|                            10.0|\n+-----------------------------+--------------------------------+\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);