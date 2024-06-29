(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{357:function(e,t,a){"use strict";a.r(t);var s=a(7),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("2024-03-06，最近复现文献需要，但还没学到")]),e._v(" "),t("h2",{attrs:{id:"初步了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初步了解"}},[e._v("#")]),e._v(" 初步了解")]),e._v(" "),t("p",[e._v("2024-03-11，开始了解、学习：")]),e._v(" "),t("p",[t("strong",[e._v("相关数据")]),e._v("\nfragments.tsv：Tn5转座酶连接后，剪切出的片段，经过测序/sequence和比对mapping后，得到的，不同细胞的染色质"),t("code",[e._v("开放信息")]),e._v("，类似于如下格式：")]),e._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("#     V1    V2    V3                 V4 V5\n# 1 chr1 10066 10279 TTAGCTTAGGAGAACA-1  2\n# 2 chr1 10072 10279 TTAGCTTAGGAGAACA-1  2\n# 3 chr1 10079 10316 ATATTCCTCTTGTACT-1  2\n\nps：很长很长\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("peak_counts matrix：经过统计分析后，得到的行为峰/peak（基因组的一个区域），列为细胞/cell，中间值为某个细胞在某个峰中的数量的，一个"),t("code",[e._v("表达量信息")])]),e._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("#                    AAACGAAAGAGCGAAA-1 AAACGAAAGAGTTTGA-1 AAACGAAAGCGAGCTA-1 AAACGAAAGGCTTCGC-1\n# chr1:565107-565550                  .                  .                  .                  .\n# chr1:569174-569639                  .                  .                  .                  .\n# chr1:713460-714823                  .                  .                  2                  8\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("从fragments.tsv 到 peak_count matix 数据，需要对细胞进行筛选/cell calling，以及对峰的合并和筛选/peak calling")]),e._v(" "),t("p",[e._v("metadata，这个是每个细胞/cell的，元素据，或是统计信息")]),e._v(" "),t("p",[e._v("单独处理fragment数据的工具是另几个 --  "),t("code",[e._v("ArchR")]),e._v("，或是这个"),t("code",[e._v("SnapATAC2")]),e._v("\nSignac则需要"),t("code",[e._v("fragments")]),e._v("，"),t("code",[e._v("peak_matrix")]),e._v("，"),t("code",[e._v("metadata")]),e._v("这三个数据一起")]),e._v(" "),t("blockquote",[t("p",[e._v("可恶的作者用的是signac，却只上传了fragment数据")])]),e._v(" "),t("p",[e._v("ArchR，R包，也是处理scATAC-seq数据的软件。")]),e._v(" "),t("p",[e._v("据说ArchR这个软件，功能比Signac全，相同性能的计算机，处理速度还更快，那要不试一试吧，暂时没找到合适的，处理fragments的其他工具了。")]),e._v(" "),t("p",[e._v("两个"),t("code",[e._v("Tn5")]),e._v("结合，形成两个"),t("code",[e._v("insertions")]),e._v("，才会产生一个"),t("code",[e._v("fragment")]),e._v("，测序后会形成一个"),t("code",[e._v("read")]),e._v("，"),t("code",[e._v("map")]),e._v("到参考基因组后，会形成后续的"),t("code",[e._v("fragments")]),e._v("文件")]),e._v(" "),t("p",[e._v("基于Unix系统，所以在Windows系统上，就没有那么明显的优势。")]),e._v(" "),t("p",[e._v("ArchR处理项目的基础是"),t("code",[e._v("Arrow file")]),e._v("，算是一个独立的样本 / sample，存储着metadata，accessible fragments，data matrixs\n在处理fragments文件的时候，先切割成较小的hdf5 chunk文件，barcode改成RLE（run-length encoding），如AAATTGCCCCTTTT，改成A3T2G1C4T4，chunks arrow file（HDF5 feile）再连接成arrow文件，用于后续处理。")]),e._v(" "),t("blockquote",[t("p",[e._v("根据chr分类成chunk，barcode缩减成RLE，分块读取处理")])]),e._v(" "),t("p",[e._v("Arrow file不是R对象，而是一个经该包处理后，存储在硬盘上的新文件，靠着位置索引关系来进行随时的处理，直接面对的对象是"),t("code",[e._v("ArchRProject")])]),e._v(" "),t("p",[e._v("常用的输入文件为 fragment files 和 BAM files，fragment files是一个tabix排序的文本文件，包含fragment和相应细胞ID，BAM files是一个tabix排序的二进制文件，包含fragment，细胞barcode ID，还有其他信息。")]),e._v(" "),t("p",[e._v("开始首先要做的是，设置工作目录，设置线程（windows系统只能是单线程），输入基因和基因组注释信息，")]),e._v(" "),t("p",[e._v("ArchR supports “hg19”, “hg38”, “mm9”, and “mm10” natively，没有可以自己造 -- "),t("code",[e._v("createGeneAnnotation()")]),e._v("，"),t("code",[e._v("createGenomeAnnotation()")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("a "),t("code",[e._v("BSgenome")]),e._v(" object that defines the genomic coordinates and sequence of each chromosome,")])]),e._v(" "),t("li",[t("p",[e._v("a "),t("code",[e._v("GRanges")]),e._v(" object containing a set of blacklisted regions,")])]),e._v(" "),t("li",[t("p",[e._v("a "),t("code",[e._v("TxDb")]),e._v(" object that defines the positions and structures of all genes,")])]),e._v(" "),t("li",[t("p",[e._v("an "),t("code",[e._v("OrgDb")]),e._v(" object that provides a central gene identifier and contains mappings between this identifier and other kinds of identifiers")]),e._v(" "),t("ul",[t("li",[e._v("BSgenome: 记录 染色体坐标信息和染色体序列信息")]),e._v(" "),t("li",[e._v("GRanges: 记录blacklist, 即对分析没有用设置可能产生干扰的区域")]),e._v(" "),t("li",[e._v("TxDb: 定义所有基因的位置信息")]),e._v(" "),t("li",[e._v("OrgDb: 提供基因编号，以及不同基因编号之间的转换")])])])]),e._v(" "),t("p",[t("strong",[e._v("加载包，输入文件，初始化对象")])]),e._v(" "),t("div",{staticClass:"language-R line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[e._v("library"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ArchR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# addArchRThreads(threads = 16) # windows没用")]),e._v("\n\ninputFiles "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<-")]),e._v(" getTutorialData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hematopoiesis"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\naddArchRGenome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hg19"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# hg38, mm9, mm10 # 要与align时候使用的参考基因组一致")]),e._v("\n\nArrowFiles "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<-")]),e._v(" createArrowFiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  inputFiles "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" inputFiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  sampleNames "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" names"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("inputFiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  filterTSS "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 这个参数不需要过高，后续可以调整")]),e._v("\n  filterFrags "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  addTileMat "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("TRUE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  addGeneScoreMat "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("TRUE")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nArrowFiles\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])]),t("p",[t("strong",[e._v("数据质控")])]),e._v(" "),t("p",[e._v("several matrics / 一些度量标准：")]),e._v(" "),t("ol",[t("li",[e._v("nuclear fragments，核DNA片段，")]),e._v(" "),t("li",[e._v("signal-to-background radio，信号-背景比例，")]),e._v(" "),t("li",[e._v("fragment size distribution，片段大小分布，应该有一部分片段分布在147bp左右")])]),e._v(" "),t("p",[e._v("太少的核DNA片段无法提供有效信息，例如只在一个细胞里匹配到的fragment，应该排除；或者mapping to mitochondrial DNA，也应该根据目的去除")]),e._v(" "),t("p",[t("strong",[e._v("信号-背景比例")]),e._v("，ATAC实验中，开放的染色质片段一般是TSS位点，所以根据TSS信号与其他 genomic regions 的信号强度比较，得到 TSS enrichment score / TSS富集得分；")]),e._v(" "),t("p",[e._v("同时，如果peak占比太多的话，可能是因为细胞死掉，DNA散开，染色质开放太多了")]),e._v(" "),t("p",[e._v("Due to nucleosomal periodicity, we expect to see depletion of fragments that are the length of DNA wrapped around a nucleosome (approximately 147 bp) /\n核小体周期性，预期会看到能够包裹一个核小体的片段（长度147bp左右）")]),e._v(" "),t("p",[e._v("对于ArchR，默认过滤细胞的条件是，TSS得分大于4，超过1000个单一核片段")]),e._v(" "),t("p",[e._v("创建这个Arrow files文件后，会在工作目录中创建个QualityControl directory，包括两张关于数据的图，")]),e._v(" "),t("ul",[t("li",[e._v("The first plot shows the "),t("code",[e._v("log10(unique nuclear fragments)")]),e._v(" vs TSS enrichment score and indicates the thresholds used with dotted lines.")]),e._v(" "),t("li",[e._v("The second shows the fragment size distribution.")])]),e._v(" "),t("p",[e._v("unique nuclear fragments，的分太高意味着太多单独匹配的片段，没有太大的意义；")]),e._v(" "),t("p",[e._v("会推断和去掉双胞")]),e._v(" "),t("p",[t("strong",[e._v("参考资料：")]),t("br"),e._v(" "),t("a",{attrs:{href:"https://stuartlab.org/signac/articles/pbmc_vignette.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analyzing PBMC scATAC-seq • Signac (stuartlab.org)"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.archrproject.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analyzing single-cell regulatory chromatin in R. • ArchR (archrproject.com)"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("中文")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/ZIGRA/article/details/132312220",target:"_blank",rel:"noopener noreferrer"}},[e._v("scATAC-seq 数据分析: Signac（官方流程复现 + 步骤详解）-CSDN博客"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);