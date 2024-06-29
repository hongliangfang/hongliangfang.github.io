(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{361:function(t,e,v){"use strict";v.r(e);var _=v(7),n=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("线性降维——PCA\n非线性降维——tSNE，UMAP\nUMAP：Uniform manifold approximation and projection")]),t._v(" "),e("p",[t._v("cluster：聚类\n概念：根据gene matrix（种类和数量），运用算法，归类细胞")]),t._v(" "),e("p",[t._v("calssify：定义\n概念：根据已知marker gene，定义cell type")]),t._v(" "),e("p",[t._v("dispersion：散布")]),t._v(" "),e("p",[t._v('negative binomial model：负二项式模型\nsparseMatrix：稀疏矩阵（"0"用"."代替，减少计算内存）')]),t._v(" "),e("p",[t._v("spike-in：插入，其他来源的等量RNA，用于标准化数据")]),t._v(" "),e("p",[t._v("mRNAs per cell (RPC)：")]),t._v(" "),e("p",[t._v("co-vary：一起变化的（可以设置marker gene后找co-vary genes）")]),t._v(" "),e("p",[t._v("vignette~protocol~pipeline：流程，参考，指南类的信息\nimage individual cells after capture but prior to lysis：捕获后裂解前，观察独立的细胞\nexcess cell debris：多余的细胞碎片\na cell sequenced with only a few thousand reads is unlikely to yield meaningful measurements.\n一个细胞只测到几千个读数不太可能产生有意义的测量结果\nThese genes（highly expressed and highly variable） tend to be highly informative about cell state.\n表达较多的，方差较大的，可能更“有信息性”（informative）\nIn many biological processes, cells do not progress in perfect synchrony\n完全的同步")]),t._v(" "),e("h2",{attrs:{id:"可比-标化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可比-标化"}},[t._v("#")]),t._v(" 可比/标化")]),t._v(" "),e("p",[t._v("示例数据（参考理解）：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Gene name")]),t._v(" "),e("th",[t._v("Rep1 counts")]),t._v(" "),e("th",[t._v("Rep2 counts")]),t._v(" "),e("th",[t._v("Rep3 counts")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("A(2kb)")]),t._v(" "),e("td",[t._v("10")]),t._v(" "),e("td",[t._v("12")]),t._v(" "),e("td",[t._v("30")])]),t._v(" "),e("tr",[e("td",[t._v("B(4kb)")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",[t._v("25")]),t._v(" "),e("td",[t._v("60")])]),t._v(" "),e("tr",[e("td",[t._v("C(1kb)")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("8")]),t._v(" "),e("td",[t._v("15")])]),t._v(" "),e("tr",[e("td",[t._v("D(10kb)")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")])])])]),t._v(" "),e("p",[e("strong",[t._v("TPM，Transcripts Per Million")]),t._v("，每百万转录")]),t._v(" "),e("p",[t._v("TPM = （基因数量/（基因长度-kb × 样本总基因数））/（基因总数量/100w）")]),t._v(" "),e("blockquote",[e("p",[t._v("每一百万个转录，每千个碱基，每个样本总数，某个样本的某个基因，有多少量 → 不同实验可比")])]),t._v(" "),e("p",[e("strong",[t._v("FPKM，Fragments Per Kilobase of transcript per Million mapped reads")]),t._v("，每百万转录的每千碱基")]),t._v(" "),e("p",[t._v("FPKM = （基因数量/基因长度-kb）/（基因总数量/100w）")]),t._v(" "),e("blockquote",[e("p",[t._v("每一百万个转录，每千个碱基，某个样品的某个基因，有多少量 → 实验内不同样本可比")])]),t._v(" "),e("p",[t._v("分子的基因长度，相当于标化了每个基因的长度，使得不同的基因可以相互比较；")]),t._v(" "),e("p",[t._v("分子的样本总基因数，相当于标化了每个样本的基因表达量，使得不同的样本可以相互比较；")]),t._v(" "),e("p",[t._v("分母的一百万，相当于标化了每个实验的基因表达量，使得不同实验的表达矩阵可以相互比较；")]),t._v(" "),e("h2",{attrs:{id:"降维、聚类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降维、聚类"}},[t._v("#")]),t._v(" 降维、聚类")]),t._v(" "),e("p",[e("strong",[t._v("PCA 、 UMAP 、leiden，t-SNE区别")]),t._v("\nPCA、UMAP、t-SNE都是非监督的降维算法，可以用于发现高维数据中的结构。其中PCA是一种线性降维方法，将数据在原始特征空间中进行正交变换，得到新的低维特征空间。t-SNE和UMAP是非线性降维方法，它们试图在低维空间中保留数据点之间的局部结构，而忽略全局结构。")]),t._v(" "),e("p",[t._v("Leiden是一种聚类算法，可以将类似的数据点分组到一起形成簇。它基于模块化最大化原理，试图找到一个最优的分割，使得分割后的子图内部密度较大，子图之间联系较小。与传统的聚类算法相比，Leiden算法更适用于处理大规模高维数据。")]),t._v(" "),e("p",[t._v("在实际应用中，不同算法的选择取决于数据的性质、分析目的和实际需求。")]),t._v(" "),e("ul",[e("li",[t._v("PCA通常用于数据预处理和探索性分析，")]),t._v(" "),e("li",[t._v("而UMAP和t-SNE则更适用于可视化高维数据，")]),t._v(" "),e("li",[t._v("Leiden算法则可用于数据聚类和发现细胞类型等应用场景。")])]),t._v(" "),e("p",[e("strong",[t._v("降维算法和聚类算法")]),t._v("\n降维算法和聚类算法都是常用于对高维数据进行分析的方法，但它们的目的和实现方式略有不同。")]),t._v(" "),e("p",[t._v("降维算法的主要目的是将高维数据映射到低维空间中，以便进行可视化和数据分析。在降维过程中，保留数据的主要特征和信息，以尽可能地减少数据的冗余和噪声。常用的降维算法有PCA、t-SNE、UMAP等。")]),t._v(" "),e("p",[t._v("聚类算法的主要目的是将数据分成若干个类别，每个类别内部的数据相似度较高，而不同类别之间的相似度较低。聚类算法的实现通常基于某种距离或相似度度量，以便将数据划分成不同的组别。常用的聚类算法有K-means、DBSCAN、Hierarchical Clustering等。")]),t._v(" "),e("p",[t._v("需要注意的是，降维算法和聚类算法通常是相互独立的，它们的目的和实现方式都有所不同，但在某些情况下，可以将它们组合起来使用，例如先使用降维算法将高维数据映射到低维空间，再使用聚类算法对低维数据进行聚类。\n————————————————"),e("br"),t._v("\n原文链接：https://blog.csdn.net/weixin_43314378/article/details/130419508")]),t._v(" "),e("p",[t._v("降维：PCA，tSNE，UMAP"),e("br"),t._v("\n聚类：KNN，SNN，Louvain，Leiden")]),t._v(" "),e("p",[t._v("如何理解降维："),e("br"),t._v("\n降维算法，用于发现高维数据中的结构"),e("br"),t._v("\n上面三者也都是无监督的降维算法")]),t._v(" "),e("p",[t._v("如何理解聚类："),e("br"),t._v("\n聚类是一种无监督学习过程，用于凭经验定义具有相似表达谱的细胞组。其主要目的是将复杂的 scRNA-seq 数据汇总为可消化的格式以供人类解释。")]),t._v(" "),e("p",[t._v("聚类算法："),e("br"),t._v("\nLouvain算法是一种基于多层次（逐轮启发式迭代）优化模块度的算法。"),e("br"),t._v("\nLeiden算法，解决了上面的一些啥问题\n（算法看不懂）")]),t._v(" "),e("p",[t._v("找到一个生物工程的大哥~"),e("br"),t._v("\n突然发现他的笔记教程还挺简洁的，该展示的展示了，没必要的全没有，还有不少我暂时有点难理解的/不想花时间理解的东西；"),e("br"),t._v("\n每个时间阶段都有不一样的见解，主要矛盾和次要矛盾分清楚，一次之解决一个问题，不那么冗余！")]),t._v(" "),e("h2",{attrs:{id:"pca"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pca"}},[t._v("#")]),t._v(" PCA")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# 主成分分析\nlibrary(ggplot2)\nlibrary(ggfortify) # 增强ggplot2，图形化展示统计分析结果，能自动转化些数据给ggplot2\n\ndata("iris")\niris_features <- iris[,1:4]\n\npca_result <- prcomp(iris_features, scale = TRUE)\n\nautoplot(pca_result, data = iris, colour = "Species", loadings = TRUE)+ # data是为了显示不同颜色加的，color，设定颜色分类的列名，loading加上指示箭头\n  theme_minimal() +\n  geom_point(size = 3,shape = 30)  # 添加圆形数据点，并设定颜色\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("h2",{attrs:{id:"tsne"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsne"}},[t._v("#")]),t._v(" tSNE")]),t._v(" "),e("p",[t._v("t-SNE（t-distributed Stochastic Neighbor Embedding）是一种流行的降维技术，特别适用于将高维数据嵌入到二维或三维空间中，以便于可视化。t-SNE最初是为了处理大规模的基因表达数据而设计的，但它也被广泛应用于其他类型的高维数据。")]),t._v(" "),e("p",[t._v("t-SNE的输入数据通常是一组高维特征向量，这些特征向量可以是任何类型的数值数据，但最常见的是连续型变量。在生物学领域，这些特征向量往往是基因表达水平，每个维度代表一个基因，而每个样本（例如，一个细胞）则对应于一个特征向量。")]),t._v(" "),e("p",[t._v("具体来说，t-SNE的输入数据通常是一个矩阵，其中：")]),t._v(" "),e("ul",[e("li",[t._v("每一行代表一个样本（例如，一个细胞或一个个体）。")]),t._v(" "),e("li",[t._v("每一列代表一个特征（例如，一个基因或一个变量）。")]),t._v(" "),e("li",[t._v("矩阵中的每个元素是该样本在该特征上的数值。")])]),t._v(" "),e("p",[t._v("在使用t-SNE之前，数据通常需要进行预处理，如中心化（减去均值）和缩放（除以标准差），使得每个特征的均值为0且标准差为1。这有助于t-SNE算法更好地区分不同的特征和样本。")]),t._v(" "),e("p",[t._v("在R语言中，这样的数据结构通常是一个数据框（data frame）或矩阵（matrix）。")]),t._v(" "),e("p",[t._v("在Python的"),e("code",[t._v("scikit-learn")]),t._v("库中，t-SNE算法可以通过"),e("code",[t._v("TfidfVectorizer")]),t._v("类实现，该类接受稀疏矩阵作为输入，这意味着数据可以以稀疏格式表示，这对于大规模数据集非常有用。")]),t._v(" "),e("p",[t._v("总的来说，t-SNE的输入数据格式应该是一个数值型的矩阵或数据框，其中每一行代表一个样本，每一列代表一个特征，且数据已经过适当的预处理。")])])}),[],!1,null,null,null);e.default=n.exports}}]);