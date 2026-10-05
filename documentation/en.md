<!-- ELUCENIA technical documentation · psi-port · en · no clinical/professional/rights approval -->

# PSI/PORT (Pneumonia Severity Index)

[conditions, sources and permissions](https://elucenia.org/en/tools/psi-port)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Sex

`sexo`

- `F` — Female
- `M` — Male

### Age

`idade`

years · range: 18–110

### Lives in a long-term care facility (+10)

`casa`

### Active neoplasm or diagnosed in the last year (+30)

`neoplasia`

### Liver disease (cirrhosis, chronic hepatitis) (+20)

`hepatica`

### Heart failure (+10)

`icc`

### Cerebrovascular disease (+10)

`avc`

### Chronic kidney disease (+10)

`renal`

### Altered mental status (+20)

`confusao`

### Respiratory rate ≥ 30 breaths/min (+20)

`fr`

### Systolic blood pressure \< 90 mmHg (+20)

`pas`

### Temperature \< 35 °C or ≥ 40 °C (+15)

`temp`

### Heart rate ≥ 125 bpm (+10)

`fc`

### Arterial pH \< 7.35 (+30)

`ph`

### Urea ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)

`ureia`

### Sodium \< 130 mEq/L (+20)

`sodio`

### Glucose ≥ 250 mg/dL (+10)

`glicose`

### Hematocrit \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg or O₂ saturation \< 90% (+10)

`pao2`

### Pleural effusion on radiograph (+10)

`derrame`

## Method edition

PSI/PORT/Fine 1997: class I rule and stage 2 scores I–V; not CURB-65

## Documented formula

Step 1 (class I): age in years ≤ 50; no comorbidities (5: neoplasm, liver disease, heart failure, cerebrovascular or renal disease); no examination findings (5: confusion, RR ≥ 30, SBP \< 90, temperature \< 35 or ≥ 40 °C, HR ≥ 125).

Step 2 (others): points = age in years (women: age − 10) + points for each present item; classes: II ≤ 70; III 71–90; IV 91–130; V \> 130.

## Limits and population

PSI/PORT was developed for adults with community-acquired pneumonia and 30-day mortality risk. Low classes do not mean no risk or an automatic discharge decision. Eligibility criteria, pneumonia definition and conditions for outpatient management must follow the clinical protocol.

## References

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
