(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{455:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("h2",{attrs:{id:"什么是iotdb-quality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是iotdb-quality"}},[t._v("#")]),t._v(" 什么是IoTDB-Quality")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache IoTDB"),a("OutboundLink")],1),t._v(" (Internet of Things Database) 是一个时序数据的数据管理系统，可以为用户提供数据收集、存储和分析等特定的服务。")]),t._v(" "),a("p",[t._v("对基于时序数据的应用而言，数据质量至关重要。"),a("strong",[t._v("IoTDB-Quality")]),t._v("基于IoTDB用户自定义函数(UDF)，实现了一系列关于数据质量的函数，包括数据画像、数据质量评估与修复等，有效满足了工业领域对数据质量的需求。")]),t._v(" "),a("h2",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("ol",[a("li",[t._v("下载包含全部依赖的jar包")]),t._v(" "),a("li",[t._v("将jar包复制到IoTDB程序目录的"),a("code",[t._v("ext\\udf")]),t._v("目录下")]),t._v(" "),a("li",[t._v("在IoTDB中使用下面的SQL语句注册UDF")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" completeness "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dquality.UDTFCompleteness'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" consistency "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dquality.UDTFConsistency'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" timeliness "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dquality.UDTFTimeliness'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" validity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dquality.UDTFValidity'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" percentile "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dprofile.UDAFPercentile'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dprofile.UDTFDistinct'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dprofile.UDAFMode'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" spread "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.edu.thu.iotdb.quality.dprofile.UDAFSpread'")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);