(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{507:function(n,T,t){"use strict";t.r(T);var s=t(45),a=Object(s.a)({},(function(){var n=this,T=n.$createElement,t=n._self._c||T;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"spline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spline"}},[n._v("#")]),n._v(" Spline")]),n._v(" "),t("h2",{attrs:{id:"函数简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[n._v("#")]),n._v(" 函数简介")]),n._v(" "),t("p",[n._v("本函数提供对原始序列进行三次样条曲线拟合后的插值重采样。")]),n._v(" "),t("p",[t("strong",[n._v("函数名：")]),n._v(" SPLINE")]),n._v(" "),t("p",[t("strong",[n._v("输入序列：")]),n._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),n._v(" "),t("p",[t("strong",[n._v("参数：")])]),n._v(" "),t("ul",[t("li",[t("code",[n._v("points")]),n._v("：重采样个数。")])]),n._v(" "),t("p",[t("strong",[n._v("输出序列")]),n._v("：输出单个序列，类型为DOUBLE。")]),n._v(" "),t("p",[t("strong",[n._v("提示")]),n._v("：输出序列保留输入序列的首尾值，等时间间隔采样。仅当输入点个数不少于4个时才计算插值。")]),n._v(" "),t("h2",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[n._v("#")]),n._v(" 使用示例")]),n._v(" "),t("h3",{attrs:{id:"指定插值个数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定插值个数"}},[n._v("#")]),n._v(" 指定插值个数")]),n._v(" "),t("p",[n._v("输入序列：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("+-----------------------------+------------+\n|                         Time|root.test.s1|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.000+08:00|         0.0|\n|1970-01-01T08:00:00.300+08:00|         1.2|\n|1970-01-01T08:00:00.500+08:00|         1.7|\n|1970-01-01T08:00:00.700+08:00|         2.0|\n|1970-01-01T08:00:00.900+08:00|         2.1|\n|1970-01-01T08:00:01.100+08:00|         2.0|\n|1970-01-01T08:00:01.200+08:00|         1.8|\n|1970-01-01T08:00:01.300+08:00|         1.2|\n|1970-01-01T08:00:01.400+08:00|         1.0|\n|1970-01-01T08:00:01.500+08:00|         1.6|\n+-----------------------------+------------+\n")])])]),t("p",[n._v("用于查询的SQL语句：")]),n._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" spline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"points"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"151"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("from")]),n._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("test\n")])])]),t("p",[n._v("输出序列：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('+-----------------------------+------------------------------------+\n|                         Time|spline(root.test.s1, "points"="151")|\n+-----------------------------+------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                 0.0|\n|1970-01-01T08:00:00.010+08:00|                 0.04870000251134237|\n|1970-01-01T08:00:00.020+08:00|                 0.09680000495910646|\n|1970-01-01T08:00:00.030+08:00|                 0.14430000734329226|\n|1970-01-01T08:00:00.040+08:00|                 0.19120000966389972|\n|1970-01-01T08:00:00.050+08:00|                 0.23750001192092896|\n|1970-01-01T08:00:00.060+08:00|                  0.2832000141143799|\n|1970-01-01T08:00:00.070+08:00|                 0.32830001624425253|\n|1970-01-01T08:00:00.080+08:00|                  0.3728000183105469|\n|1970-01-01T08:00:00.090+08:00|                   0.416700020313263|\n|1970-01-01T08:00:00.100+08:00|                  0.4600000222524008|\n|1970-01-01T08:00:00.110+08:00|                  0.5027000241279602|\n|1970-01-01T08:00:00.120+08:00|                  0.5448000259399414|\n|1970-01-01T08:00:00.130+08:00|                  0.5863000276883443|\n|1970-01-01T08:00:00.140+08:00|                   0.627200029373169|\n|1970-01-01T08:00:00.150+08:00|                  0.6675000309944153|\n|1970-01-01T08:00:00.160+08:00|                  0.7072000325520833|\n|1970-01-01T08:00:00.170+08:00|                  0.7463000340461731|\n|1970-01-01T08:00:00.180+08:00|                  0.7848000354766846|\n|1970-01-01T08:00:00.190+08:00|                  0.8227000368436178|\n|1970-01-01T08:00:00.200+08:00|                  0.8600000381469728|\n|1970-01-01T08:00:00.210+08:00|                  0.8967000393867494|\n|1970-01-01T08:00:00.220+08:00|                  0.9328000405629477|\n|1970-01-01T08:00:00.230+08:00|                  0.9683000416755676|\n|1970-01-01T08:00:00.240+08:00|                  1.0032000427246095|\n|1970-01-01T08:00:00.250+08:00|                   1.037500043710073|\n|1970-01-01T08:00:00.260+08:00|                   1.071200044631958|\n|1970-01-01T08:00:00.270+08:00|                  1.1043000454902647|\n|1970-01-01T08:00:00.280+08:00|                  1.1368000462849934|\n|1970-01-01T08:00:00.290+08:00|                  1.1687000470161437|\n|1970-01-01T08:00:00.300+08:00|                  1.2000000476837158|\n|1970-01-01T08:00:00.310+08:00|                  1.2307000483103594|\n|1970-01-01T08:00:00.320+08:00|                  1.2608000489139557|\n|1970-01-01T08:00:00.330+08:00|                  1.2903000494873524|\n|1970-01-01T08:00:00.340+08:00|                  1.3192000500233967|\n|1970-01-01T08:00:00.350+08:00|                  1.3475000505149364|\n|1970-01-01T08:00:00.360+08:00|                  1.3752000509548186|\n|1970-01-01T08:00:00.370+08:00|                   1.402300051335891|\n|1970-01-01T08:00:00.380+08:00|                  1.4288000516510009|\n|1970-01-01T08:00:00.390+08:00|                  1.4547000518929958|\n|1970-01-01T08:00:00.400+08:00|                   1.480000052054723|\n|1970-01-01T08:00:00.410+08:00|                  1.5047000521290301|\n|1970-01-01T08:00:00.420+08:00|                  1.5288000521087646|\n|1970-01-01T08:00:00.430+08:00|                  1.5523000519867738|\n|1970-01-01T08:00:00.440+08:00|                   1.575200051755905|\n|1970-01-01T08:00:00.450+08:00|                   1.597500051409006|\n|1970-01-01T08:00:00.460+08:00|                   1.619200050938924|\n|1970-01-01T08:00:00.470+08:00|                  1.6403000503385066|\n|1970-01-01T08:00:00.480+08:00|                   1.660800049600601|\n|1970-01-01T08:00:00.490+08:00|                   1.680700048718055|\n|1970-01-01T08:00:00.500+08:00|                  1.7000000476837158|\n|1970-01-01T08:00:00.510+08:00|                  1.7188475466453037|\n|1970-01-01T08:00:00.520+08:00|                  1.7373800457262996|\n|1970-01-01T08:00:00.530+08:00|                  1.7555825448831923|\n|1970-01-01T08:00:00.540+08:00|                  1.7734400440724702|\n|1970-01-01T08:00:00.550+08:00|                   1.790937543250622|\n|1970-01-01T08:00:00.560+08:00|                  1.8080600423741364|\n|1970-01-01T08:00:00.570+08:00|                  1.8247925413995016|\n|1970-01-01T08:00:00.580+08:00|                  1.8411200402832066|\n|1970-01-01T08:00:00.590+08:00|                  1.8570275389817397|\n|1970-01-01T08:00:00.600+08:00|                  1.8725000374515897|\n|1970-01-01T08:00:00.610+08:00|                  1.8875225356492449|\n|1970-01-01T08:00:00.620+08:00|                   1.902080033531194|\n|1970-01-01T08:00:00.630+08:00|                  1.9161575310539258|\n|1970-01-01T08:00:00.640+08:00|                  1.9297400281739288|\n|1970-01-01T08:00:00.650+08:00|                  1.9428125248476913|\n|1970-01-01T08:00:00.660+08:00|                  1.9553600210317021|\n|1970-01-01T08:00:00.670+08:00|                    1.96736751668245|\n|1970-01-01T08:00:00.680+08:00|                  1.9788200117564232|\n|1970-01-01T08:00:00.690+08:00|                  1.9897025062101101|\n|1970-01-01T08:00:00.700+08:00|                                 2.0|\n|1970-01-01T08:00:00.710+08:00|                  2.0097024933913334|\n|1970-01-01T08:00:00.720+08:00|                  2.0188199867081615|\n|1970-01-01T08:00:00.730+08:00|                   2.027367479995188|\n|1970-01-01T08:00:00.740+08:00|                  2.0353599732971155|\n|1970-01-01T08:00:00.750+08:00|                  2.0428124666586482|\n|1970-01-01T08:00:00.760+08:00|                   2.049739960124489|\n|1970-01-01T08:00:00.770+08:00|                   2.056157453739342|\n|1970-01-01T08:00:00.780+08:00|                    2.06207994754791|\n|1970-01-01T08:00:00.790+08:00|                   2.067522441594897|\n|1970-01-01T08:00:00.800+08:00|                   2.072499935925006|\n|1970-01-01T08:00:00.810+08:00|                    2.07702743058294|\n|1970-01-01T08:00:00.820+08:00|                   2.081119925613404|\n|1970-01-01T08:00:00.830+08:00|                     2.0847924210611|\n|1970-01-01T08:00:00.840+08:00|                  2.0880599169707317|\n|1970-01-01T08:00:00.850+08:00|                  2.0909374133870027|\n|1970-01-01T08:00:00.860+08:00|                  2.0934399103546166|\n|1970-01-01T08:00:00.870+08:00|                  2.0955824079182768|\n|1970-01-01T08:00:00.880+08:00|                  2.0973799061226863|\n|1970-01-01T08:00:00.890+08:00|                   2.098847405012549|\n|1970-01-01T08:00:00.900+08:00|                  2.0999999046325684|\n|1970-01-01T08:00:00.910+08:00|                  2.1005574051201332|\n|1970-01-01T08:00:00.920+08:00|                  2.1002599065303778|\n|1970-01-01T08:00:00.930+08:00|                  2.0991524087846245|\n|1970-01-01T08:00:00.940+08:00|                  2.0972799118041947|\n|1970-01-01T08:00:00.950+08:00|                  2.0946874155104105|\n|1970-01-01T08:00:00.960+08:00|                  2.0914199198245944|\n|1970-01-01T08:00:00.970+08:00|                  2.0875224246680673|\n|1970-01-01T08:00:00.980+08:00|                   2.083039929962151|\n|1970-01-01T08:00:00.990+08:00|                  2.0780174356281687|\n|1970-01-01T08:00:01.000+08:00|                  2.0724999415874406|\n|1970-01-01T08:00:01.010+08:00|                    2.06653244776129|\n|1970-01-01T08:00:01.020+08:00|                   2.060159954071038|\n|1970-01-01T08:00:01.030+08:00|                   2.053427460438006|\n|1970-01-01T08:00:01.040+08:00|                   2.046379966783517|\n|1970-01-01T08:00:01.050+08:00|                  2.0390624730288924|\n|1970-01-01T08:00:01.060+08:00|                   2.031519979095454|\n|1970-01-01T08:00:01.070+08:00|                  2.0237974849045237|\n|1970-01-01T08:00:01.080+08:00|                   2.015939990377423|\n|1970-01-01T08:00:01.090+08:00|                  2.0079924954354746|\n|1970-01-01T08:00:01.100+08:00|                                 2.0|\n|1970-01-01T08:00:01.110+08:00|                  1.9907018211101906|\n|1970-01-01T08:00:01.120+08:00|                  1.9788509124245144|\n|1970-01-01T08:00:01.130+08:00|                  1.9645127287932083|\n|1970-01-01T08:00:01.140+08:00|                  1.9477527250665083|\n|1970-01-01T08:00:01.150+08:00|                  1.9286363560946513|\n|1970-01-01T08:00:01.160+08:00|                  1.9072290767278735|\n|1970-01-01T08:00:01.170+08:00|                  1.8835963418164114|\n|1970-01-01T08:00:01.180+08:00|                  1.8578036062105014|\n|1970-01-01T08:00:01.190+08:00|                  1.8299163247603802|\n|1970-01-01T08:00:01.200+08:00|                  1.7999999523162842|\n|1970-01-01T08:00:01.210+08:00|                  1.7623635841923329|\n|1970-01-01T08:00:01.220+08:00|                  1.7129696477516976|\n|1970-01-01T08:00:01.230+08:00|                  1.6543635959181928|\n|1970-01-01T08:00:01.240+08:00|                  1.5890908816156328|\n|1970-01-01T08:00:01.250+08:00|                  1.5196969577678319|\n|1970-01-01T08:00:01.260+08:00|                  1.4487272772986044|\n|1970-01-01T08:00:01.270+08:00|                  1.3787272931317647|\n|1970-01-01T08:00:01.280+08:00|                  1.3122424581911272|\n|1970-01-01T08:00:01.290+08:00|                   1.251818225400506|\n|1970-01-01T08:00:01.300+08:00|                  1.2000000476837158|\n|1970-01-01T08:00:01.310+08:00|                  1.1548000470995912|\n|1970-01-01T08:00:01.320+08:00|                  1.1130667107899999|\n|1970-01-01T08:00:01.330+08:00|                  1.0756000393033045|\n|1970-01-01T08:00:01.340+08:00|                   1.043200033187868|\n|1970-01-01T08:00:01.350+08:00|                   1.016666692992053|\n|1970-01-01T08:00:01.360+08:00|                  0.9968000192642223|\n|1970-01-01T08:00:01.370+08:00|                  0.9844000125527389|\n|1970-01-01T08:00:01.380+08:00|                  0.9802666734059655|\n|1970-01-01T08:00:01.390+08:00|                  0.9852000023722649|\n|1970-01-01T08:00:01.400+08:00|                                 1.0|\n|1970-01-01T08:00:01.410+08:00|                   1.023999999165535|\n|1970-01-01T08:00:01.420+08:00|                  1.0559999990463256|\n|1970-01-01T08:00:01.430+08:00|                  1.0959999996423722|\n|1970-01-01T08:00:01.440+08:00|                  1.1440000009536744|\n|1970-01-01T08:00:01.450+08:00|                  1.2000000029802322|\n|1970-01-01T08:00:01.460+08:00|                   1.264000005722046|\n|1970-01-01T08:00:01.470+08:00|                  1.3360000091791153|\n|1970-01-01T08:00:01.480+08:00|                  1.4160000133514405|\n|1970-01-01T08:00:01.490+08:00|                  1.5040000182390214|\n|1970-01-01T08:00:01.500+08:00|                   1.600000023841858|\n+-----------------------------+------------------------------------+\n')])])])])}),[],!1,null,null,null);T.default=a.exports}}]);