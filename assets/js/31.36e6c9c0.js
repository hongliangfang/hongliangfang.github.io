(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{349:function(e,r,t){"use strict";t.r(r);var a=t(7),n=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("笔记")]),e._v(" "),r("p",[e._v("2024-05-30，想了解一下胃癌相关研究，看看人家用数据得到些什么结论，怎么做的，想试一试了。")])]),e._v(" "),r("h3",{attrs:{id:"identification-and-validation-of-ferroptosis‐related-biomarkers-and-the-related-pathogenesis-in-precancerous-lesions-of-gastric-cancer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#identification-and-validation-of-ferroptosis‐related-biomarkers-and-the-related-pathogenesis-in-precancerous-lesions-of-gastric-cancer"}},[e._v("#")]),e._v(" Identification and validation of ferroptosis‑related biomarkers and the related pathogenesis in precancerous lesions of gastric cancer")]),e._v(" "),r("p",[e._v("Scientific reports，IF：4.6（2023）")]),e._v(" "),r("p",[e._v("研究内容：")]),e._v(" "),r("ul",[r("li",[e._v("advanced bioinformatics techniques，先进的生物信息学技术")]),e._v(" "),r("li",[e._v("ferroptosis‑related genes，FRGs，铁死亡相关基因")]),e._v(" "),r("li",[e._v("precancerous lesions of gastric cancer，PLGC，胃癌癌前病变")]),e._v(" "),r("li",[e._v("immune cell infiltration and diagnostic value，免疫浸润和诊断价值")])]),e._v(" "),r("p",[e._v("研究的方法")]),e._v(" "),r("ol",[r("li",[e._v("Gene Expression Omnibus，GEO + FerrDb V2 database → FRGs")]),e._v(" "),r("li",[e._v("ClueGO pathways，Gene Ontology (GO) enrichment analysis")]),e._v(" "),r("li",[e._v("single-cell datasets analysis")]),e._v(" "),r("li",[e._v("machine learning model → hub genes "),r("code",[e._v("&~")]),e._v(" ferroptosis")]),e._v(" "),r("li",[e._v("Receiver Operating Characteristics (ROC) curve analysis → diagnostic efficacy")]),e._v(" "),r("li",[e._v("GSEA，GSVA，MCPcounter，ssGSEA")]),e._v(" "),r("li",[e._v("noncoding RNA regulatory networks，transcription factor regulatory networks")])]),e._v(" "),r("p",[e._v("a ferroptosis diagnosis model nomogram，铁死亡诊断模型列线图")]),e._v(" "),r("p",[e._v("The widely recognized worldwide progression model for gastric cancer is “normal gastric mucosa — chronic superficial gastritis — chronic atrophic gastritis — intestinal metaplasia — dysplasia — gastric cancer”")]),e._v(" "),r("p",[e._v("慢性浅表 - 慢性萎缩 - 肠化生 - 异型增生 - 胃癌")]),e._v(" "),r("p",[e._v("实验流程和技术的设计\n"),r("img",{attrs:{src:"https://s2.loli.net/2024/05/30/LIm2EvUunDrFxpe.png",alt:"image.png|700"}})]),e._v(" "),r("p",[e._v("提死亡相关的基因数据库："),r("a",{attrs:{href:"http://www.zhounan.org/ferrdb/current/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FerrDb (zhounan.org)"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("limma package → differential analysis")]),e._v(" "),r("li",[e._v("VennDiagram package → Venn diagram")]),e._v(" "),r("li",[e._v("ferroptosis-related genes → Spearman correlation analysis")]),e._v(" "),r("li",[e._v("Heatmaps")]),e._v(" "),r("li",[e._v("UCell package → ferroptosis-related gene set in various cells")])]),e._v(" "),r("p",[e._v("四种机器学习模型，random forests / RF，support vector machine / SVM，eXtreme Gradient Boosting / XGBoost，generalized linear model / GLM，来鉴定铁死亡相关基因集")]),e._v(" "),r("p",[e._v("pROC package，确定诊断效能 / diagnostic efficacy")]),e._v(" "),r("p",[e._v("decision curve analysis / DCA，决策曲线 + C-index，判断模型的可靠性 / reliability")]),e._v(" "),r("p",[e._v("寻找调控hub genes的miRNAs")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mirtarbase.cuhk.edu.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("miRTarBase"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://starbase.sysu.edu.cn/starbase2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starbase 24"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.targetscan.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("TargetScan25"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("寻找调控miRNAs 的 lncRNAs")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://spongescan.rc.ufl.edu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("spongeScan26"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("转录因子预测 / TF prediction")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://maayanlab.cloud/Enrichr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enrichr"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("如何绘制多个基因的表达密度图？"),r("br"),e._v(" "),r("img",{attrs:{src:"https://s2.loli.net/2024/05/31/hAybit6DdpeXa7x.png",alt:"image.png|800"}}),r("br"),e._v("\nThe density of gene expression distribution pertaining to the ferroptosis-related gene set exhibited in the cellular population")]),e._v(" "),r("p",[e._v("hub genes：")]),e._v(" "),r("ul",[r("li",[e._v("机器学习模型：RF，SVM，XGB，GLM")]),e._v(" "),r("li",[e._v("模型的表现：ROC → high diagnostic efficiency")]),e._v(" "),r("li",[e._v("模型的稳定性：RDG，RB → stable，practical value")])]),e._v(" "),r("p",[e._v("residual distribution graph，残差分布图；residual boxplot，残差分布图")]),e._v(" "),r("p",[e._v("ROC curve & AUC value")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://s21.ax1x.com/2024/05/31/pk88dtH.png",alt:"pk88dtH.png|800"}})]),e._v(" "),r("ul",[r("li",[e._v("(D) C-index plot of the model（Hosmer‒Lemeshow test）")]),e._v(" "),r("li",[e._v("(E) DCA curve of the model（decision curve analysis，DCA，curve）")]),e._v(" "),r("li",[e._v("(F) ROC curves of the model（AUC value）")])]),e._v(" "),r("p",[e._v("MCPcounter，ssGSEA algorithm → immune infiltration and function")]),e._v(" "),r("p",[e._v("Regulatory network of lncRNA – miRNA – mRNA")]),e._v(" "),r("h3",{attrs:{id:"bulk-and-single‐cell-transcriptome-profiling-reveal-the-metabolic-heterogeneity-in-gastric-cancer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bulk-and-single‐cell-transcriptome-profiling-reveal-the-metabolic-heterogeneity-in-gastric-cancer"}},[e._v("#")]),e._v(" Bulk and single‑cell transcriptome profiling reveal the metabolic heterogeneity in gastric cancer")]),e._v(" "),r("p",[e._v("Scientific reports，IF：4.6（2023）")]),e._v(" "),r("ul",[r("li",[e._v("发病率高致死率高")]),e._v(" "),r("li",[e._v("早癌筛查依赖胃肠镜 / gastroscopy")]),e._v(" "),r("li",[e._v("治疗策略要靠临床病理评估 / clinicopathological assessment")]),e._v(" "),r("li",[e._v("治疗方案包括手术，化疗，免疫治疗（靶向ICIs）")]),e._v(" "),r("li",[e._v("异质性高，治疗有效患者有限")]),e._v(" "),r("li",[e._v("主要分类依靠：AJCC分期、Lauren分型、分级")]),e._v(" "),r("li",[e._v("还需要根据肿瘤内在的异质性，确定和治疗效果的关系来分类")])]),e._v(" "),r("p",[e._v("This is the largest number size study to date for single-cell sequencing of gastric cancer.\n"),r("a",{attrs:{href:"https://pubmed.ncbi.nlm.nih.gov/34642171/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single-Cell Atlas of Lineage States, Tumor Microenvironment, and Subtype-Specific Expression Programs in Gastric Cancer - PubMed (nih.gov)"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("胃癌分型：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.yxj.org.cn/detailPage?articleId=21723",target:"_blank",rel:"noopener noreferrer"}},[e._v("一篇文读懂胃癌的分子病理分型"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cn-healthcare.com/articlewm/20221017/content-1451214.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("一文看懂胃癌的分型|胃癌|分型|肿瘤|浸润|预后"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("根据98个基因和患者的表达矩阵，进行一致性聚类（这个图还蛮好看的，也能聚到一起去）\n"),r("img",{attrs:{src:"https://s2.loli.net/2024/06/01/BGaMX1gTDuL4bkr.png",alt:"image.png|600"}})]),e._v(" "),r("p",[e._v("数据库应该能输入数据，得到免疫功能情况和药物治疗情况\n"),r("img",{attrs:{src:"https://s2.loli.net/2024/06/01/TYaEzJHLh97S2Mf.png",alt:"image.png|600"}})]),e._v(" "),r("ul",[r("li",[e._v("Tumor Immune Dysfunction and Exclusion，"),r("a",{attrs:{href:"http://tide.dfci.harvard.edu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIDE"),r("OutboundLink")],1),e._v(" for TCGA-STAD cohort.")]),e._v(" "),r("li",[e._v("The Cancer Genome Project (CGP) database was used to predict chemotherapeutic response")])]),e._v(" "),r("p",[e._v("五种胃癌常用的化疗药物：5-Fluorouracil，Cisplatin，Docetaxel，Mitomycin C，Paclitaxel")]),e._v(" "),r("blockquote",[r("p",[e._v("5 -氟尿嘧啶，顺铂，多西他赛/多烯紫杉醇，丝裂霉素C，紫杉醇")])]),e._v(" "),r("p",[e._v("CGP数据库，也能根据差异表达基因，找到一些治疗胃癌，潜在的小分子药物")]),e._v(" "),r("p",[e._v("胃癌单细胞分群一般有：epithelial cell, T cell, B cell, stromal cell and myeloid cell")]),e._v(" "),r("p",[e._v("逐个计算每个细胞的GSVA得分，是怎么得到的？"),r("br"),e._v(" "),r("img",{attrs:{src:"https://s2.loli.net/2024/06/01/4Q6eom2GElWrwN7.png",alt:"image.png|700"}})]),e._v(" "),r("p",[e._v("Disscussion：")]),e._v(" "),r("p",[e._v("根据代谢情况，将胃癌分成了两种，然后描述两类患者的免疫功能，代谢通路，单细胞功能状态特点，富集的基因导致患者生存差异。")]),e._v(" "),r("p",[e._v("（鉴于两种代谢亚型之间显著的预后差异，我们探索了亚型特异性基因作为潜在的预后标志物）")]),e._v(" "),r("p",[e._v("metabolically indolent gastric cancer，代谢懒惰型的胃癌")]),e._v(" "),r("h3",{attrs:{id:"肿瘤免疫浸润细胞打分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#肿瘤免疫浸润细胞打分"}},[e._v("#")]),e._v(" 肿瘤免疫浸润细胞打分")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/UTKKWaXUUN_olWqgFmli6Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("中南大学湘雅医学院胸外科联合单细胞，转录组和机器学习构建预测肺腺癌患者的结果和免疫治疗反应的TIIC模型 (qq.com)"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"代谢组和机器学习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代谢组和机器学习"}},[e._v("#")]),e._v(" 代谢组和机器学习")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/uzt5gsbbf10Onn0EXavLeg",target:"_blank",rel:"noopener noreferrer"}},[e._v("用血液样本测代谢组+机器学习用于胃癌诊断和预后的代谢组学机器学习预测器"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/TKwC9k8r1OSMidQzz4YfLg",target:"_blank",rel:"noopener noreferrer"}},[e._v("JC | 代谢组学预测胃癌的诊断和预后 (qq.com)"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("3个队列，（GC = 389, NGC = 313），对血浆样本中的258种内源性水溶性代谢物进行了靶向代谢组学检测，保留了147种在超过80%样本中表达的代谢物进行后续代谢组学分析。")]),e._v(" "),r("p",[e._v("cohort 1，差异分析，秩和检验")]),e._v(" "),r("p",[e._v("cohort 2，2/3训练，LASSO筛选前10差异代谢物，随机森林构建诊断模型，1/3内部测试集")]),e._v(" "),r("p",[e._v("cohort 3，随即生存森林模型，28个代谢物预后模型，Cox分析中与结局显著相关的临床特征，评估GC生存结局")])])}),[],!1,null,null,null);r.default=n.exports}}]);