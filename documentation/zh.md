<!-- ELUCENIA technical documentation · psi-port · zh · no clinical/professional/rights approval -->

# PSI/PORT（肺炎严重程度指数）

[条件、来源与许可](https://elucenia.org/zh/tools/psi-port)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 性别

`sexo`

- `F` — 女性
- `M` — 男性

### 年龄

`idade`

年 · 范围: 18–110

### 住在长期照护机构（+10）

`casa`

### 活动性恶性肿瘤或过去一年诊断（+30）

`neoplasia`

### 肝病（肝硬化、慢性肝炎）（+20）

`hepatica`

### 心力衰竭（+10）

`icc`

### 脑血管病（+10）

`avc`

### 慢性肾病（+10）

`renal`

### 精神状态改变（+20）

`confusao`

### 呼吸频率 ≥ 30 irpm (+20)

`fr`

### 收缩压 \< 90 mmHg (+20)

`pas`

### 体温 \< 35 °C 或 ≥ 40 °C（+15）

`temp`

### 心率 ≥ 125 bpm (+10)

`fc`

### 动脉血 pH \< 7.35 (+30)

`ph`

### 尿素 ≥ 64 mg/dL（BUN ≥ 30 mg/dL）（+20）

`ureia`

### 钠 \< 130 mEq/L (+20)

`sodio`

### 葡萄糖 ≥ 250 mg/dL (+10)

`glicose`

### 红细胞比容 \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg 或氧饱和度 \< 90%（+10）

`pao2`

### X 线胸腔积液（+10）

`derrame`

## 方法版本

PSI/PORT/Fine 1997：I级规则及步骤2的I–V计分；非CURB-65

## 已记录的公式

步骤1（I级）： 年龄（岁） ≤ 50; 无合并症 (5: 肿瘤、肝病、心力衰竭、脑血管病或肾病); 无查体异常 (5: 意识混乱、呼吸频率≥30、收缩压\<90、体温\<35或≥40 °C、心率≥125).

步骤2（其余）：分数=年龄（女性：年龄−10）+各阳性项目分；分级： II ≤ 70; III 71–90; IV 91–130; V \> 130.

## 限制与适用人群

PSI/PORT为成人社区获得性肺炎的30天死亡风险而开发。低风险类别不意味着没有风险，也不自动决定出院。适用资格、肺炎定义和门诊管理条件须遵循临床方案。

## 参考文献

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
