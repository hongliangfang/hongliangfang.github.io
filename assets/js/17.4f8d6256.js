(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{335:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("目的：最近学习单细胞学的很乱，搞得有点盲目，所以想直奔主题--文献，以张老师这篇单细胞的文章，展开学习，以及整理单细胞所学习的内容！")]),t._v(" "),s("h2",{attrs:{id:"本文用到的所有技术-汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本文用到的所有技术-汇总"}},[t._v("#")]),t._v(" 本文用到的所有技术（汇总）")]),t._v(" "),s("ul",[s("li",[t._v("[ ] Sample collection and flow cytometry，流式")]),t._v(" "),s("li",[t._v("[ ] Multiplex immunofluorescent staining，多重免疫荧光")]),t._v(" "),s("li",[t._v("[ ] Single cell RNA library preparation and sequencing，单细胞测序建库")]),t._v(" "),s("li",[t._v("[x] Single-cell RNA-seq data "),s("strong",[t._v("preprocessing")]),t._v(" ，单细胞预处理")]),t._v(" "),s("li",[t._v("[x] "),s("strong",[t._v("Batch effect")]),t._v(" correction and unsupervised clustering ，批次矫正/bbknn，无监督聚类/leiden")]),t._v(" "),s("li",[t._v("[x] The "),s("strong",[t._v("proportion and tissue distribution")]),t._v(" of NK cell subsets ，比例和组织分布")]),t._v(" "),s("li",[t._v("[ ] Calculation of "),s("strong",[t._v("signature score")]),t._v(" ，计算特征得分")]),t._v(" "),s("li",[t._v("[ ] Definition of cytotoxicity, inflammatory and stress "),s("strong",[t._v("gene sets")]),t._v("，定义细胞毒性，炎症，压力基因集（找到）")]),t._v(" "),s("li",[t._v("[ ] Definition of HLA-dependent and -independent receptors ，定义HLA，独立受体")]),t._v(" "),s("li",[t._v("[ ] "),s("strong",[t._v("Hierarchical clustering")]),t._v(" of cancer types ，对癌细胞，层次聚类")]),t._v(" "),s("li",[t._v("[ ] Specificity and sensitivity assessment ，特异性和敏感性，评估")]),t._v(" "),s("li",[t._v("[ ] RNA "),s("strong",[t._v("velocity analysis")]),t._v(" ，速率分析")]),t._v(" "),s("li",[t._v("[ ] "),s("strong",[t._v("Pseudotime trajectory")]),t._v(" inference ，伪轨迹推断")]),t._v(" "),s("li",[t._v("[ ] "),s("strong",[t._v("SCENIC analysis")]),t._v(" ，转录调控")]),t._v(" "),s("li",[t._v("[x] "),s("strong",[t._v("Cell-cell interaction")]),t._v(" analysis by CellPhoneDB ，细胞间相互作用及其可视化")]),t._v(" "),s("li",[t._v("[ ] Analysis of immunotherapy datasets ，分析免疫治疗数据库")]),t._v(" "),s("li",[t._v("[ ] "),s("strong",[t._v("TCGA RNA-seq data analysis")]),t._v(" ，TCGA的数据分析")]),t._v(" "),s("li",[t._v("[ ] "),s("strong",[t._v("Survival analysis")]),t._v(" ，生存分析")]),t._v(" "),s("li",[t._v("[ ] "),s("strong",[t._v("Comparison")]),t._v(" with human peripheral blood for NK cells，和人类外周血比较")])]),t._v(" "),s("p",[t._v("有个疑问的地方")]),t._v(" "),s("p",[t._v("“computational gating (CD3CD56+/KLRF1+)”计算门控( CD3 CD56 + / KLRF1 + )，是什么意思？")]),t._v(" "),s("p",[t._v("嗯，需要认真学这几个点（也是我暂时不能详细的想到的几个分析代码）")]),t._v(" "),s("ul",[s("li",[t._v("[x] 合并样本如何去掉batch effect")]),t._v(" "),s("li",[t._v("[x] cluster后如何annotation")]),t._v(" "),s("li",[t._v("[x] 上面这俩先后顺序是什么")]),t._v(" "),s("li",[t._v("[x] 如何注释上那么多的metadata/description data")]),t._v(" "),s("li",[t._v("[x] 注释上“元数据/描述数据“，如何分门别类地展示？（涉及到提取用于别的分析和绘图分类）")]),t._v(" "),s("li",[t._v("[x] 如何进行细胞互作分析/")]),t._v(" "),s("li",[t._v("[x] 拟时序分析/")]),t._v(" "),s("li",[t._v("[ ] 转录因子分析/")]),t._v(" "),s("li",[t._v("[ ] 生存分析，以及如何展示？？？")])]),t._v(" "),s("h3",{attrs:{id:"batch-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch-effect"}},[t._v("#")]),t._v(" batch effect")]),t._v(" "),s("p",[t._v("先是批量读取，大致展示，合并数据，check_data()\n合并数据，combined.h5ad\n矫正批次效应，bbknn")]),t._v(" "),s("h3",{attrs:{id:"annotation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[t._v("#")]),t._v(" annotation")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/42.Scanpy.html"}},[t._v("42.Scanpy")])],1),t._v(" "),s("h3",{attrs:{id:"sub-plot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sub-plot"}},[t._v("#")]),t._v(" sub & plot")]),t._v(" "),s("p",[t._v("scanpy注释处理之后，取出来metadata\n再用R语言对metadata的各种处理和操作")]),t._v(" "),s("h3",{attrs:{id:"crosstalk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crosstalk"}},[t._v("#")]),t._v(" crosstalk")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/45.CellPhoneDB.html"}},[t._v("45.CellPhoneDB")])],1),t._v(" "),s("h3",{attrs:{id:"differentiation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#differentiation"}},[t._v("#")]),t._v(" differentiation")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/43.Monocle2.html"}},[t._v("43.Monocle2")])],1),t._v(" "),s("blockquote",[s("p",[t._v("目前算是一种轨迹分析 / 拟时序分析的方法吧，后续有条件的话，可以尝试一下上游的RNA速率分析")])]),t._v(" "),s("h3",{attrs:{id:"regulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regulation"}},[t._v("#")]),t._v(" regulation")]),t._v(" "),s("h3",{attrs:{id:"clinical-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clinical-data"}},[t._v("#")]),t._v(" clinical data")]),t._v(" "),s("p",[t._v("数据来源：TCGA数据库")]),t._v(" "),s("p",[t._v("分析方法：R语言，进行，HR calculation，survival分析")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/23.临床相关性.html"}},[t._v("23.临床相关性")])],1),t._v(" "),s("h2",{attrs:{id:"梳理分析-总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#梳理分析-总"}},[t._v("#")]),t._v(" 梳理分析(总)")]),t._v(" "),s("p",[t._v("基础分析")]),t._v(" "),s("ul",[s("li",[t._v("数据标准化，normalization")]),t._v(" "),s("li",[t._v("选择特征，HVG")]),t._v(" "),s("li",[t._v("降维：PCA，tSNE，UMAP")]),t._v(" "),s("li",[t._v("聚类：（KNN，SNN）-- louvain，leiden")]),t._v(" "),s("li",[t._v("Marker注释：")])]),t._v(" "),s("p",[t._v("较高级的分析")]),t._v(" "),s("ul",[s("li",[t._v("合并分析：concat")]),t._v(" "),s("li",[t._v("批次效应：bbknn，combat，harmony")]),t._v(" "),s("li",[t._v("差异表达：")]),t._v(" "),s("li",[t._v("富集分析："),s("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/22.富集分析.html"}},[t._v("22.富集分析")])],1)]),t._v(" "),s("h3",{attrs:{id:"理解降维和聚类-抄的-还不错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解降维和聚类-抄的-还不错"}},[t._v("#")]),t._v(" 理解降维和聚类（抄的-还不错）：")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/100.算法.html"}},[t._v("100.算法")])],1),t._v(" "),s("h3",{attrs:{id:"scanpy标准流程-基础流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scanpy标准流程-基础流程"}},[t._v("#")]),t._v(" scanpy标准流程/基础流程")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scanpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sc\nadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pbmc3k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PBMC3K数据")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 质量控制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基本过滤")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min_genes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_genes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min_cells"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算质量控制指标")]),t._v("\nadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("var_names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startswith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MT-'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注释线粒体基因为“mt”")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calculate_qc_metrics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qc_vars"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" percent_top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" log1p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inplace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据基因数量和线粒体百分比进行过滤")]),t._v("\nadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n_genes_by_counts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pct_counts_mt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据标准化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize_total"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target_sum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#总计数归一化")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log1p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对数化")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 特征选取")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("highly_variable_genes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min_mean"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0125")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_mean"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min_disp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 识别高度可变的基因")]),t._v("\n\nadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adata "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存原始数据")]),t._v("\nadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("highly_variable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 过滤")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将数据缩放到单位方差")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("regress_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'total_counts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pct_counts_mt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 降维、聚类、可视化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过运行umap来降低数据的维数。")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("neighbors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_neighbors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("umap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leiden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("umap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leiden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_pbmc3k_leiden.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发现标志基因")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==========================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据聚类结果，找出代表该类的标志基因")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank_genes_groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leiden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t-test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank_genes_groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_genes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sharey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 细胞类型标注")]),t._v("\nnew_cluster_names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CD4 T'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CD14 Monocytes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CD8 T'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FCGR3A Monocytes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NK'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dendritic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Megakaryocytes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rename_categories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leiden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_cluster_names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("umap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leiden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend_loc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" frameon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_pbmc3k_annotation.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br"),s("span",{staticClass:"line-number"},[t._v("67")]),s("br"),s("span",{staticClass:"line-number"},[t._v("68")]),s("br")])]),s("h3",{attrs:{id:"降维聚类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#降维聚类"}},[t._v("#")]),t._v(" 降维聚类")]),t._v(" "),s("p",[t._v("降维的主要目的都是，降维降到二维，方便可视化；降低数据量，方便后续分析")]),t._v(" "),s("p",[t._v("PCA ，Principal Component Analysis)，即主成分分析"),s("br"),t._v("\nt-SNE，t-distributed Stochastic Neighbor Embedding，t分布-随机邻近嵌入"),s("br"),t._v("\nUMAP，Uniform Manifold Approximation and Projection，统一流形逼近与投影")]),t._v(" "),s("p",[t._v("保留主要结构？"),s("br"),t._v("\n保留局部特征？"),s("br"),t._v("\n保留更多全局结构？")]),t._v(" "),s("p",[t._v("这个neighbor支持直接使用原始矩阵呀，所以没有PCA的话也可以找邻居")]),t._v(" "),s("p",[t._v("聚类"),s("br"),t._v("\nKNN--SNN算法，sc.pp.neighbors()"),s("br"),t._v("\nLeiden算法，sc.tl.teiden()")]),t._v(" "),s("h3",{attrs:{id:"差异表达"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#差异表达"}},[t._v("#")]),t._v(" 差异表达")]),t._v(" "),s("p",[t._v("在Scanpy中包含T-Test、wilcoxon、logreg逻辑回归的方法。")]),t._v(" "),s("p",[t._v("参考原理："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/539863500",target:"_blank",rel:"noopener noreferrer"}},[t._v("单细胞分析-差异表达"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"状态基因集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态基因集"}},[t._v("#")]),t._v(" 状态基因集")]),t._v(" "),s("p",[t._v("1、The "),s("strong",[t._v("cytotoxicity gene sets")]),t._v(" were defined as GZMA, GZMB, GZMH, GZMM, GZMK, GNLY, PRF1 and CTSW")]),t._v(" "),s("p",[t._v("2、The "),s("strong",[t._v("inflammatory gene set")]),t._v(" was defined as CCL2, CCL3, CCL4, CCL5, CXCL10, CXCL9, IL1B, IL6, IL7, IL15 and IL1")]),t._v(" "),s("p",[t._v("3、The general "),s("strong",[t._v("stress gene set")]),t._v(" was defined as BAG3, CALU, DNAJB1, DUSP1, EGR1, FOS, FOSB, HIF1A, HSP90AA1, HSP90AB1, HSP90B1, HSPA1A, HSPA1B, HSPA6, HSPB1, HSPH1, IER2, JUN, JUNB, NFKBIA, NFKBIZ, RGS2, SLC2A3, SOCS3, UBC, ZFAND2A, ZFP36 and ZFP36L1")])])}),[],!1,null,null,null);s.default=e.exports}}]);