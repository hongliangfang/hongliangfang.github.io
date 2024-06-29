(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{382:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("2024-04-01，前两天在试着绘制一个文献中很好看的GO富集结果的时候，不少参数都忘记了，调整不到想要的效果，这两天重新复习整理一下。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2024/04/01/RfDs5yQAgiNnXFv.png",alt:"GO富集分析结果2.png|400"}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://ggplot2-book.org/getting-started#sec-qplot-faceting",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggplot2"),e("OutboundLink")],1),t._v("的设计思路：采用图层设计的方式，从原始的图层开始，首先绘制原始数据，然后不断的添加图形注释和统计汇总结果。")]),t._v(" "),e("p",[t._v("类似这种效果：\n"),e("img",{attrs:{src:"https://ggplot2.tidyverse.org/articles/ggplot2_files/figure-html/overview_graphic-1.png",alt:"ggplot2绘图思路|400"}})]),t._v(" "),e("p",[t._v("包含以下这些对象/调整的参数：")]),t._v(" "),e("ul",[e("li",[t._v("几何对象，geometric object，"),e("code",[t._v("geom")]),t._v("：包括点，线，条形等")]),t._v(" "),e("li",[t._v("图形属性，aesthetic attributes，"),e("code",[t._v("aes")]),t._v("：包括形状，大小，颜色，位置，透明度等")]),t._v(" "),e("li",[t._v("统计变换，statistical transformation，"),e("code",[t._v("stats")]),t._v("：对数据进行某种统计，如绘制直方图，添加拟合线，分位数等")]),t._v(" "),e("li",[t._v("坐标系，coordinate system，"),e("code",[t._v("coord")]),t._v("：默认笛卡尔坐标系，还有极坐标系，地图")]),t._v(" "),e("li",[t._v("标度，"),e("code",[t._v("scale")]),t._v("：指定数据图形属性的关系")]),t._v(" "),e("li",[t._v("分面，"),e("code",[t._v("facet")]),t._v("：可以将绘图窗口划分成若干个子窗口，用于生成不同子集的图形")]),t._v(" "),e("li",[t._v("主题，"),e("code",[t._v("theme")]),t._v("：允许对图形进行更精细的调整，如坐标轴上的刻度，名称，文本，图例背景，文本，绘图区域的网格等，还有很多扩展包")])]),t._v(" "),e("p",[t._v("一般的公式：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ggplot(data = , aes(x = , y = , )) + \n\tgeom_XXX(...) + ... + \n\tstat_XXX(...) + ... +\n\tscale_XXX(...) +\n\tcoord_XXX(...) +\n\ttheme(...)\n\n\nggplot(mpg, aes(cty, hwy)) +\n  geom_point(mapping = aes(colour = displ)) +\n  geom_smooth(formula = y ~ x, method = "lm") +\n  scale_colour_viridis_c() +\n  facet_grid(year ~ drv) +\n  coord_fixed() +\n  theme_minimal() +\n  theme(panel.grid.minor = element_blank())\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("常用的函数")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("geom_point()\ngeom_line()\ngeom_bar()\ngeom_boxplot()\ngeom_smooth()\n\nstat_smooth() # 添加平滑的曲线图层，用于模拟并绘制平滑曲线\nlabs()\ntheme()\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[e("code",[t._v("aes")]),t._v("中常用的参数")]),t._v(" "),e("ul",[e("li",[t._v("data、x、y")]),t._v(" "),e("li",[t._v("color: "),e("RouterLink",{attrs:{to:"/01.科研学习/04.整理归纳/06.科研绘图采色.html"}},[t._v("颜色")])],1),t._v(" "),e("li",[t._v("shape:")]),t._v(" "),e("li",[t._v("size:")]),t._v(" "),e("li",[t._v("alpha: 透明度，0~1")]),t._v(" "),e("li",[t._v("linetype: solid dashed dotted dotdash")])]),t._v(" "),e("p",[t._v("还有一个基于ggplot2的一个包，简化了绘图的参数，添加了不少好看的颜色、主题的调整，ggplot2 Based Publication Ready Plots -- "),e("a",{attrs:{href:"https://rpkgs.datanovia.com/ggpubr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggpubr"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("学习参考：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://ggplot2-book.org/getting-started#sec-qplot-faceting",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggplot2: Elegant Graphics for Data Analysis (ggplot2-book.org)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://r-statistics.co/Top50-Ggplot2-Visualizations-MasterList-R-Code.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Top 50 ggplot2 Visualizations - The Master List (With Full R Code)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/370223674",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggplot2作图最全教程（上）- 知乎"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/374283162",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggplot2作图最全教程（中）- 知乎"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/460976888",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggplot2作图最全教程（下）- 知乎"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);