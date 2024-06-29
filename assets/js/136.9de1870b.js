(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{452:function(s,e,t){"use strict";t.r(e);var n=t(7),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("标题：Hepatocytes demarcated by EphB2 contribute to the progression of nonalcoholic steatohepatitis")]),s._v(" "),e("p",[s._v("开始时间：2024-03-04")]),s._v(" "),e("p",[s._v("复现的整体思路：")]),s._v(" "),e("ol",[e("li",[s._v("首先再次阅读文献，整理分析的流程（使用的工具，详细的参数）；")]),s._v(" "),e("li",[s._v("其次，下载数据，调整数据，调包进行处理；")]),s._v(" "),e("li",[s._v("最后，整理输出数据，进行统计分析，绘制重要的结果图。")])]),s._v(" "),e("h2",{attrs:{id:"文章思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章思路"}},[s._v("#")]),s._v(" 文章思路")]),s._v(" "),e("p",[e("strong",[s._v("Introduction")])]),s._v(" "),e("p",[s._v("nonalcoholic fatty liver disease (NAFLD)；nonalcoholic fatty liver (NAFL)；nonalcoholic steatohepatitis (NASH)")]),s._v(" "),e("p",[s._v("NASH病理生理过程涉及多种细胞，scRNA技术对肝细胞、以及肝脏特定细胞的覆盖率不高，对该疾病的进展过程研究也不多，相对来说局限于终末期这个时间点，我们用snRNA-seq，snATAC-seq技术能够有效的捕获人类和小鼠，NASH疾病过程中的，肝细胞核其它类型的细胞。最后我们鉴定出来一个和在人类肝脏中一致的小鼠干细胞亚群，在NASH阶段还表达EphB2。单独激活EphB2就足够引起细胞自身炎症，抑制就能减缓NASH模型小鼠中的干细胞纤维化。因此EphB2定义的干细胞对NASH过程有贡献。")]),s._v(" "),e("p",[e("strong",[s._v("R1：characterization of mouse models of NASH progression")])]),s._v(" "),e("p",[s._v("Gubra amylin NASH (GAN) diet，American lifestyle–induced obesity syndrome (ALIOS) diet")]),s._v(" "),e("ul",[e("li",[s._v("3 months → hepatomegaly（肝肿大）；")]),s._v(" "),e("li",[s._v("9 months → NASH；")])]),s._v(" "),e("p",[s._v("肝肿大，体重升高，中度葡萄糖耐受不良，肝组织病理切片 ——→ 证明 NAFL & NASH 小鼠模型成功")]),s._v(" "),e("p",[e("strong",[s._v("R2：Global transcriptomic feture shifts across all major mouse liver cell types during NASH progression")])]),s._v(" "),e("p",[s._v("Sequencing samples / Condition groups / 四种样本：")]),s._v(" "),e("ul",[e("li",[s._v("3、9 months ALIOS = 3moALIOS、9moALIOS；")]),s._v(" "),e("li",[s._v("3、9 months normal chow = 3moNC、9moNC；")])]),s._v(" "),e("p",[s._v("Studying / focusing cells / 研究关注的细胞类型：")]),s._v(" "),e("ul",[e("li",[s._v("hepatocytes & nonparenchymal cells（NPCs）")])]),s._v(" "),e("blockquote",[e("p",[s._v("NPCs 包括：macrophage，endothelial cells（ECs），stellate cells，cholangiocytes")])]),s._v(" "),e("p",[s._v("comparable recovery：线粒体比例，基因数量")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## 描述统计比例的变化，相关基因的丰度变化\nliver sinusoid endothelial markers Stab2\nadhesion molecule PECAM1\ncontribute to fibrosis and extracellular matrix assembly such as Col1a1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("描述细胞比例的变化，以及重要基因的丰度变化，与前人研究"),e("code",[s._v("一致")]),s._v("，表明小鼠模型的有效性，对人NASH疾病进展的代表性。")]),s._v(" "),e("p",[e("strong",[s._v("R3：The transcriptomic signature of hepatocytes switches from macronutrient processing to cell migration during NASH progression in mice")])]),s._v(" "),e("p",[s._v("hepatocyte")]),s._v(" "),e("ul",[e("li",[s._v("pericentral zone hepatocyte cluster (mPC-Hep),")]),s._v(" "),e("li",[s._v("intermediate zone hepatocyte cluster (mInt-Hep),")]),s._v(" "),e("li",[s._v("periportal zone hepatocyte cluster (mPP-Hep)")])]),s._v(" "),e("blockquote",[e("p",[s._v("distinct expression patterns of liver zonation markers：Glul, Aldh3a2, and Gls2")])]),s._v(" "),e("p",[s._v("more shared changes：不同状态的差异Venn图，可以展示这个信息（交集越小，差异越大，越个性，specific）；")]),s._v(" "),e("p",[s._v("组间比较细胞比例：细胞的比例变化，也和疾病进展有很大的关系；")]),s._v(" "),e("p",[s._v("hepatokine fibrinogen-like protein 1 (Fgl1),\nphospholipid-binding protein annexin A2 protein (Anxa2), senescence marker Cdkn1a (P21)")]),s._v(" "),e("p",[s._v("Elovl5 and Insig2，supporting an adaptive en")]),s._v(" "),e("p",[s._v("hancement of both de novo lipogenesis and fatty acid oxidation to process excessive nutrients in NAFL")]),s._v(" "),e("p",[e("strong",[s._v("R4：Transcriptomic signatures of hepatocytes in human NASH resemble those of mouse")])]),s._v(" "),e("p",[s._v("首先说明，数据质量较好、可比较：线粒体比例，基因数量（展示形式为：violin plot、UMAP plot）")]),s._v(" "),e("p",[s._v("All major liver cell types were identified by snRNA-seq, including hepatocytes, ECs, stellate cells, cholangiocytes, vascular smooth muscle cells, and monocytes/macrophages")]),s._v(" "),e("p",[s._v("肝细胞 ↓，NPCs ↑")]),s._v(" "),e("blockquote",[e("p",[s._v("specific zonation genes / zonation landmarks GLUL, SLCO1B3, and HSD17B13\nlineage markers of hepatocytes, ACSL1, ALDH1A2, HNF4A")])]),s._v(" "),e("p",[s._v("gluconeogenesis FOXO1 and glucose transporter SLC2A2 (GLUT2) -- 糖异生，葡萄糖转运体")]),s._v(" "),e("p",[s._v("对人的单细胞数据，也用monocle2进行分析，得到与小鼠分化相似的轨迹，然后做差异基因的功能研究。")]),s._v(" "),e("p",[e("strong",[s._v("R5：EphB2 demarcates a subset of NASH hepatocytes engaged in intercellular cross-talk and trajectory bifurcation")])]),s._v(" "),e("p",[s._v("与重要细胞间的，crosstalk，筛选出来了重要的细胞类型，在重要的细胞类型中，发现重要的受体/配体（receptor / ligand）")]),s._v(" "),e("p",[s._v("Ephb2 RNA was expressed in a subset of hepatocytes labeled with Hnf4a")]),s._v(" "),e("p",[s._v("another diet-induced NASH model, the cholinedeficient L-amino acid–defined high-fat diet (CDAHFD) administered for 2 months")]),s._v(" "),e("p",[s._v("Ephb2-positive cells abundantly expressed pericentral marker Aldh3a2 but lacked periportal marker Gls2")]),s._v(" "),e("p",[s._v("根据基因的作用，重新聚类 / cluster，然后以一个新的角度，分析差异基因（新cluster，新比较角度，新差异基因）")]),s._v(" "),e("p",[e("strong",[s._v("R6：Notch induces EphB2 expression in hepatocytes")])]),s._v(" "),e("p",[s._v("肝细胞的表观遗传情况 / landscape → snATAC-seq")]),s._v(" "),e("p",[s._v("transferred cell clustering labels")]),s._v(" "),e("blockquote",[e("p",[s._v("scATAC-seq如何进行降维聚类，以及注释的？得到的信息都是开放染色质信息呀？是不是开放的染色质信息转变成基因表达信息，再据此 基因/marker 定义不同的细胞类型？")])]),s._v(" "),e("p",[s._v("不懂：表观调控关系，以及信号通路的关系，所以这段的后半部分看不懂。")]),s._v(" "),e("p",[e("strong",[s._v("R7：EphB2 is sufficient to induce cell-autonomous inflammation in mouse and human hepatocytes")])]),s._v(" "),e("p",[s._v("判断 EphB2（+）hepatocytes的功能 → gain-of-function study")]),s._v(" "),e("p",[s._v("Forced expression of EphB2 in hepatocytes did not cause apparent cell apoptosis → DAPI，TUNEL（无则表明无凋亡）")]),s._v(" "),e("p",[s._v("之后许多流式细胞分析，免疫荧光（共定位判断），验证了EphB2的作用；")]),s._v(" "),e("p",[s._v("还用腺病毒载体，让细胞高表达这个EphB2，然后检测炎症指标。")]),s._v(" "),e("p",[e("strong",[s._v("R8：Disease-activate EphB2 in hepatocytes contributes to NASH progression")])]),s._v(" "),e("p",[s._v("next performed a loss-of-function study using an AAV-based CasRx-mediated RNA targeting system → to interrogate the role of EphB2")]),s._v(" "),e("p",[s._v("a potent inducer：强效诱导剂")]),s._v(" "),e("p",[s._v("Sirius Red：天狼星红")]),s._v(" "),e("p",[e("strong",[s._v("Discussion")])]),s._v(" "),e("p",[s._v("总结全文的工作，讨论应用的意义，研究的不足，后续的展望。")]),s._v(" "),e("h2",{attrs:{id:"使用的工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用的工具"}},[s._v("#")]),s._v(" 使用的工具")]),s._v(" "),e("p",[e("strong",[s._v("snRNA-seq")])]),s._v(" "),e("p",[s._v("The nuclei isolation for snRNA-seq and snATAC-seq was adapted from the 10X Genomics nuclei demonstration protocol.")]),s._v(" "),e("p",[s._v("snRNA-seq，raw fastq files，GRCH38（mm10，hg38），CellRanger（3.0.2）")]),s._v(" "),e("p",[s._v("Seurat（3.2.0）"),e("br"),s._v("\nnFeature_RNA > 500 & nFeature_RNA < 8000 & percent.mt < 2 for mice；"),e("br"),s._v("\nnFeature_RNA > 500 & nFeature_RNA < 8000 & percent.mt < 10 for humans；")]),s._v(" "),e("p",[s._v("merge and correct batch effect by harmony")]),s._v(" "),e("p",[s._v("Unsupervised clustering，first 40 principal components，visualized in UMAP plot")]),s._v(" "),e("p",[s._v("Cluster identities were annotated based on prior knowledge")]),s._v(" "),e("p",[s._v("The doublets with mixed cell features were manually removed")]),s._v(" "),e("p",[s._v("Pseudotime analysis of hepatocytes was performed with Monocle2 with default parameters")]),s._v(" "),e("ul",[e("li",[s._v("mouse: all hepatocytes;")]),s._v(" "),e("li",[s._v("human: randomly selected 2000 hepatocytes from each hepatocyte cluster")])]),s._v(" "),e("p",[s._v("The genes determined the bifurcation of hepatocyte trajectories were defined with q value < 1e-20")]),s._v(" "),e("p",[s._v("GO analysis -- Metascape (http://metascape.org)")]),s._v(" "),e("p",[s._v("Cell-cell communication was analyzed with CellChat")]),s._v(" "),e("p",[s._v("To analyze correlation between Ephb2 expression and the expression of inflammatory genes in hepatocytes, the expression value was transformed using "),e("strong",[s._v("MAGIC")]),s._v(" due to the sparsity of single-cell dataset")]),s._v(" "),e("p",[e("strong",[s._v("snATAC-seq")])]),s._v(" "),e("p",[s._v("raw fastq files，mapped to GRCm38（mm10） using Cellranger-atac（1.2.0）")]),s._v(" "),e("p",[s._v("fragment count matrix → Signac（1.8.0）")]),s._v(" "),e("blockquote",[e("p",[s._v("The nuclei with TSS enrichment score < 2 & pct_reads_in_peaks < 40 & nucleosome_signal > 4 & blacklist_ratio > 0.025 were removed\nThe chromatin assays were integrated using FindIntegrationAnchors with dimension 2:30")])]),s._v(" "),e("p",[s._v("ChromVAR，JASPAR 2018 core motifs (Homo sapiens)，STREAM pseudotime analysis，")]),s._v(" "),e("p",[e("strong",[s._v("Integration of snRNA-seq and snATAC-seq")])]),s._v(" "),e("p",[s._v("Signac for integrating")]),s._v(" "),e("p",[s._v("The "),e("strong",[s._v("peak to gene links")]),s._v(" were defined by the "),e("strong",[s._v("correlation between peak accessibility")]),s._v(" (snATAC-seq) and "),e("strong",[s._v("gene expression")]),s._v(" (transferred snRNA-seq information) in the matched cells.")]),s._v(" "),e("p",[s._v("Signaling pathway enrichment analysis for candidate TFs regulating EphB2 was performed with R package clusterProfiler using all human genes as background and filtered by signaling transduction pathway annotation")]),s._v(" "),e("p",[e("strong",[s._v("Bulk-seq")])]),s._v(" "),e("p",[s._v("raw fastq mapped to Mus musculus assembly GRCm38 (mm10) using STAR (2.5.4)")]),s._v(" "),e("p",[s._v("R package DEseq2 to quantify gene expression")]),s._v(" "),e("blockquote",[e("p",[s._v("Significantly change genes → Genes with padj<0.1 and Log2(FC) > 0.5 or < -0.5")])]),s._v(" "),e("p",[s._v("Transcript-specific quantification of GSE119340 and GSE130970 were analyzed by Salmon")]),s._v(" "),e("h2",{attrs:{id:"尝试处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尝试处理"}},[s._v("#")]),s._v(" 尝试处理")]),s._v(" "),e("p",[s._v("数据早就下载好了，主要是下游的表达矩阵数据，但是还有几个工具不太会用，包括monocle2，CellChat，Signac；先Seurat 跑出来，注释好一部分内容后，再稍稍学习一下这三个工具吧")]),s._v(" "),e("p",[s._v("后续进行R包的学习记录位置\n"),e("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/41.Seurat.html"}},[s._v("monocle2")]),s._v(" "),e("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/45.CellPhoneDB.html"}},[s._v("CellPhoneDB")]),s._v(" "),e("RouterLink",{attrs:{to:"/01.科研学习/02.生信分析/04.单细胞-ATAC.html"}},[s._v("Signac")])],1),s._v(" "),e("p",[s._v("数据的名称和位置调整 -- 循环改名字和调整位置")]),s._v(" "),e("p",[s._v("跑到cluster之后，但是注释给整不会了，不知道marker，难道要一个个找嘛？")]),s._v(" "),e("p",[s._v("去看问文献的注释参考文献，5，6，7，10")]),s._v(" "),e("p",[s._v("小鼠的\n5："),e("a",{attrs:{href:"https://www.nature.com/articles/s41591-021-01344-3",target:"_blank",rel:"noopener noreferrer"}},[s._v("XCR1+ type 1 conventional dendritic cells drive liver pathology in non-alcoholic steatohepatitis | Nature Medicine"),e("OutboundLink")],1),e("br"),s._v("\n6："),e("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7262680/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Landscape of intercellular crosstalk in healthy and NASH liver revealed by single-cell secretome gene analysis - PMC (nih.gov)"),e("OutboundLink")],1),e("br"),s._v("\n7："),e("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7305990/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Niche-Specific Re-Programming of Epigenetic Landscapes Drives Myeloid Cell Diversity in Nonalcoholic Steatohepatitis - PMC (nih.gov)"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("人的\n10："),e("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6876711/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Resolving the fibrotic niche of human liver cirrhosis at single cell level - PMC (nih.gov)"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("找Marker找的好辛苦啊....... hepatocyt，cholangiocyte，EC cell，Stellate，T cell，B cell，Macrophage，")]),s._v(" "),e("p",[e("strong",[s._v("Hepatocyte / 肝细胞（PC，Int，PP，NASH-Hep1，NASH-Hep2）：")]),e("br"),s._v(" "),e("strong",[s._v("Cholangiocyte / 胆管细胞：")]),e("br"),s._v(" "),e("strong",[s._v("EC cell（EC，NASH-EC）：")]),e("br"),s._v(" "),e("strong",[s._v("Stellate（Stellate，NASH-Stellate）：")]),e("br"),s._v(" "),e("strong",[s._v("Macrophage（Mac1，Mac2）：")]),e("br"),s._v(" "),e("strong",[s._v("T cell：")]),e("br"),s._v(" "),e("strong",[s._v("B cell：")])]),s._v(" "),e("p",[s._v("leucocyte -- CD45+；"),e("br"),s._v("\nfluorescence activated cell sorting，荧光激活细胞分选法"),e("br"),s._v("\nKupffer cells -- KCs")]),s._v(" "),e("p",[s._v("最后还是按照原文来吧：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("参考来源：Figure.S2\n0：mNASH-EC\n1：mInt-Hep\n2：mNASH-Hep2\n3：mInt-Hep\n4：mPC-Hep\n5：mNASH-Hep2\n6：Stellate\n7：mHASH-Mac2\n8：mNASH-Hep1\n9：mNASH-Stellate\n10：Mac\n11：mPP-Hep\n12：mNASH-Cholangiocyte\n13：mInt-Hep\n14：EC\n15：mNASH-Hep2\n16：T cell\n17：mNASH-Mac1\n18：B cell\n19：EC\n20：Meso.cell\n21：EC\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("看到几个蛮好的教程：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhihu.com/people/just-1-89/posts",target:"_blank",rel:"noopener noreferrer"}},[s._v("立源 - 知乎 (zhihu.com)"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("原文："),e("a",{attrs:{href:"https://github.com/hbctraining/scRNA-seq/blob/master/lessons/01_intro_to_scRNA-seq.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("scRNA-seq/lessons/01_intro_to_scRNA-seq.md (github.com)"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/343032046",target:"_blank",rel:"noopener noreferrer"}},[s._v("第一章 RNA-seq入门 - 知乎 (zhihu.com)"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("原文："),e("a",{attrs:{href:"https://github.com/hbctraining/Intro-to-rnaseq-hpc-salmon-flipped/blob/main/lessons/01_intro-to-RNAseq.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Intro-to-rnaseq/01_intro-to-RNAseq.md at main · hbctraining(github.com)"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("2024-03-07，19:02，遇到一个很大的难题，就是Seurat分群之后，分的群合不合适？我不知道如何判断，这个cluster的数量是可以很方便的根据前面的参数调整的，但是如何调整到符合生物学意义，就不好判断了。")]),s._v(" "),e("p",[s._v("方便判断细胞类型：\n"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/384840499",target:"_blank",rel:"noopener noreferrer"}},[s._v("多个单细胞亚群合并 - 知乎 (zhihu.com)"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("其中一些值得借鉴的代码\n"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/e9Js1gLIVYgzPkOaamsgIg",target:"_blank",rel:"noopener noreferrer"}},[s._v("单细胞 | 多样本整合-harmony去批次"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-R line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[s._v("scobj "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" merge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" project "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pbmc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nscobj "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" RunHarmony"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n\treduction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pca"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 默认reduction = "pca",')]),s._v("\n\tgroup.by.vars "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# group.by.vars 参数输入的是批次信息,")]),s._v("\n\treduction.save "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harmony"')]),s._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reduction.save 是结果保存的名称  ")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \nscobj "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" RunUMAP"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reduction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harmony"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dims "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("reduction.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"umap"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nscobj "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" FindNeighbors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reduction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harmony"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dims "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nscobj "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" FindClusters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resolution "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" seq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置多个resolution选择合适的resolution")]),s._v("\nlibrary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clustree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# （PCA那一步，**ElbowPlot()** ）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("clustree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断 cluster 这一步之后，需要多少分辨率！！")]),s._v("\nscobj"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("meta.data"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("$")]),s._v("seurat_clusters "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" scobj"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("meta.data"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("$")]),s._v("RNA_snn_res."),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改seurat_clusters 选定分辨率0.5作为分群 ")]),s._v("\nIdents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"seurat_clusters"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改active.ident")]),s._v("\n\nDimPlot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reduction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"umap"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作图展示  ")]),s._v("\nDimPlot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reduction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"umap"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" group.by "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# group.by, 在一张图中展示多个信息 ")]),s._v("\nDimPlot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reduction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"umap"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" split.by "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# split.by, 分成多个信息来展示  ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("2024-03-10，22:42，R中处理是真慢....于是，转换到了python中处理，seurat对象可以直接变成anndata对象")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('library(sceasy)\nsceasy::convertFormat(seuratobject,\n  from="seurat",\n  to="anndata",\n  outFile=\'mergeHarmony_annotation.h5ad\')\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("python中处理的风格与R有很大的不同，特别是他的leiden算法，感觉结果有一小部分的分群是和seurat是不一样的，导致注释的时候，标记基因的marker表达量不太一致")]),s._v(" "),e("p",[s._v("2024-03-14，人类的marker小提琴图，对其注释")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hNASH-Hep\nhPP-Hep\nhInt-Hep\nhPC-Hep\nhNASH-Stellate1\nMono/Macs\nEC1\nhNASH-Cholangiocyte1\nhPC-Hep\nhPC-Hep\nhNASH-Cholangiocyte1\nhNASH-VSMC\nhNASH-Stellate2\nhPC-Hep\nhNASH-Cholangiocyte2\nStellate\nhNASH-EC\nEC2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("小提琴图，UMAP聚类图，一起判断")]),s._v(" "),e("p",[s._v("hPC-Hep，hInt-Hep，hPP-Hep，hNASH-Hep\nhNASH-EC，EC1，EC2\nStellate，hNASH-Stellate1，hNASH-Stellate2\nMono/Macs，hNASH-VSMC\nhNASH-Cholangiocyte1，hNASH-Cholangiocyte2")]),s._v(" "),e("p",[s._v("得到注释的结果之后，就比较简单了，是各种样子的展示数据方式了。")]),s._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),e("p",[s._v("2024-03-17，小结")]),s._v(" "),e("p",[s._v("从最开始，2024-03-04，开始重读文献，下载数据，接着运行，试着复现文献，到现在大概有十四天，也就是两周的时间，总体上不是很满意现在的结果或状态。")]),s._v(" "),e("p",[s._v("第一周，主要是比较熟悉的seurat进行处理，降维聚类，之后注释，算是把基本细胞分类确定了，但是那个差异基因的热图却没有理解，不知道咋做出来的；")]),s._v(" "),e("p",[s._v("第二周，实际上没做啥图出来，主要就是学习了cellchat2，monocle2，这俩包而已，得到了流程中的一些图而已，而作者用的那个signac包，因为作者没给全所需的数据，所以也没有进一步学下去，进一步准备选择ArchR这个包，但是还没到这一步，所以暂时还没学到。")]),s._v(" "),e("p",[s._v("为啥感觉速度那么慢呢？？两周时间，还是有不少时间是在上课的，课上偶尔在试着跑代码，课下的时间，不多，不少时间用在了理解新的内容，等待运行结果上面，之后应该能注意到不少地方，会省下检索的时间。同时，晚自习的一些比较完整的时间去跑步了，这短时间不考虑转到分析中。课上也有不少内容，需要及时记录诶，省的最后复习太狼狈。")]),s._v(" "),e("p",[s._v("同时，为啥会感到比较混乱呢？嗯，有几个工具包，是没有那么熟悉的，所以重新学习和了解花了不少时间，没有完整的时间，容易来回混乱的进行学习，导致不连贯，没有一个比较完整的，连贯的思路。还有不少教程，需要去辨别，来回参考和调整，也是较为混乱的。seurat的参数，monocle2，cellchat2的参数，特别是后两个的，不是很熟悉，所以需要多次调整。")]),s._v(" "),e("br"),s._v(" "),e("p",[e("strong",[s._v("得到的几点收获")])]),s._v(" "),e("p",[s._v("在计划复现过程的时候，详细的分析过程没有安排好，应该以数据的变化来安排操作记录，seurat → cellchat → monocle → signac/archr，从counts矩阵到展示基因相互关系，到基因的变化细节分析，再加上表观数据的展示，嗯。")]),s._v(" "),e("p",[s._v("然后，那个"),e("strong",[s._v("数据的内容 & 格式变化")]),s._v("，特别是这几个包处理的过程中，不同的函数对数据处理后的变化，需要仔细了解，这样才能在变化中，及时根据目的及时调整。")]),s._v(" "),e("p",[s._v("有一个文件处理的方式很不错，值得后续借鉴")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 建文件夹 - 改名字 - 移动文件\nallfiles <- list.files(\'./\',\'.gz\')\n\nfor (file in allfiles){\n  dir_name <- sub("^(.*?)_.*", "\\\\1", file)\n  new_name <- sub("^.*_(.*)", "\\\\1", file) \n  \n  dir.create(dir_name)\n  file.rename(file, file.path(dir_name,new_name))\n} \n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("有那么几个小"),e("strong",[s._v("问题")]),s._v("，最后结束的时候，还是不能有把握的理解：")]),s._v(" "),e("ol",[e("li",[s._v("14种细胞，一般要分成几个cluster？")]),s._v(" "),e("li",[s._v("注释的方法有哪些？（细化到代码，表达图的类型）")])])])}),[],!1,null,null,null);e.default=a.exports}}]);