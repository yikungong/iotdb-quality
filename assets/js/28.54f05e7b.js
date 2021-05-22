(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{443:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"integral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integral"}},[t._v("#")]),t._v(" Integral")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("This function is used to calculate the integration of time series,\nwhich equals to the area under the curve with time as X-axis and values as Y-axis.")]),t._v(" "),s("p",[s("strong",[t._v("Name:")]),t._v(" INTEGRAL")]),t._v(" "),s("p",[s("strong",[t._v("Input Series:")]),t._v(" Only support a single input numeric series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),t._v(" "),s("p",[s("strong",[t._v("Parameters:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("unit")]),t._v(': The unit of time used when computing the integral.\nThe value should be chosen from "1S", "1s", "1m", "1H", "1d"(case-sensitive),\nand each represents taking one millisecond / second / minute / hour / day as 1.0 while calculating the area and integral.')])]),t._v(" "),s("p",[s("strong",[t._v("Output Series:")]),t._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the integration.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("The integral value equals to the sum of the areas of right-angled trapezoids consisting of each two adjacent points and the time-axis.\nChoosing different "),s("code",[t._v("unit")]),t._v(" implies different scaling of time axis, thus making it apparent to convert the value among those results with constant coefficient.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("NaN")]),t._v(" values in the input series will be ignored. The curve or trapezoids will skip these points and use the next valid point.")])])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"default-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-parameters"}},[t._v("#")]),t._v(" Default Parameters")]),t._v(" "),s("p",[t._v("With default parameters, this function will take one second as 1.0.")]),t._v(" "),s("p",[t._v("Input series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:01.000+08:00|              1|\n|2020-01-01T00:00:02.000+08:00|              2|\n|2020-01-01T00:00:03.000+08:00|              5|\n|2020-01-01T00:00:04.000+08:00|              6|\n|2020-01-01T00:00:05.000+08:00|              7|\n|2020-01-01T00:00:08.000+08:00|              8|\n|2020-01-01T00:00:09.000+08:00|            NaN|\n|2020-01-01T00:00:10.000+08:00|             10|\n+-----------------------------+---------------+\n")])])]),s("p",[t._v("SQL for query:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" integral"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("p",[t._v("Output series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------+\n|                         Time|integral(root.test.d1.s1)|\n+-----------------------------+-------------------------+\n|1970-01-01T08:00:00.000+08:00|                     57.5|\n+-----------------------------+-------------------------+\n")])])]),s("p",[t._v("Calculation expression:\n$$\\frac{1}{2}[(1+2) \\times 1 + (2+5) \\times 1 + (5+6) \\times 1 + (6+7) \\times 1 + (7+8) \\times 3 + (8+10) \\times 2] = 57.5$$")]),t._v(" "),s("h3",{attrs:{id:"specific-time-unit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specific-time-unit"}},[t._v("#")]),t._v(" Specific time unit")]),t._v(" "),s("p",[t._v('With time unit specified as "1m", this function will take one minute as 1.0.')]),t._v(" "),s("p",[t._v("Input series is the same as above, the SQL for query is shown below:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" integral"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1m"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("p",[t._v("Output series:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------+\n|                         Time|integral(root.test.d1.s1)|\n+-----------------------------+-------------------------+\n|1970-01-01T08:00:00.000+08:00|                    0.958|\n+-----------------------------+-------------------------+\n")])])]),s("p",[t._v("Calculation expression:\n$$\\frac{1}{2\\times 60}[(1+2) \\times 1 + (2+5) \\times 1 + (5+6) \\times 1 + (6+7) \\times 1 + (7+8) \\times 3 + (8+10) \\times 2] = 0.958$$")])])}),[],!1,null,null,null);e.default=n.exports}}]);