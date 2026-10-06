<!-- ELUCENIA technical documentation · psi-port · pt-BR · no clinical/professional/rights approval -->

# PSI/PORT (índice de gravidade da pneumonia)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/psi-port)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sexo

`sexo`

- `F` — Feminino
- `M` — Masculino

### Idade

`idade`

anos · intervalo: 18–110

### Mora em instituição de longa permanência (+10)

`casa`

### Neoplasia ativa ou diagnosticada no último ano (+30)

`neoplasia`

### Doença hepática (cirrose, hepatite crônica) (+20)

`hepatica`

### Insuficiência cardíaca (+10)

`icc`

### Doença cerebrovascular (+10)

`avc`

### Doença renal crônica (+10)

`renal`

### Alteração do estado mental (+20)

`confusao`

### FR ≥ 30 irpm (+20)

`fr`

### PA sistólica \< 90 mmHg (+20)

`pas`

### Temperatura \< 35 °C ou ≥ 40 °C (+15)

`temp`

### FC ≥ 125 bpm (+10)

`fc`

### pH arterial \< 7,35 (+30)

`ph`

### Ureia ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)

`ureia`

### Sódio \< 130 mEq/L (+20)

`sodio`

### Glicose ≥ 250 mg/dL (+10)

`glicose`

### Hematócrito \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg ou SatO₂ \< 90% (+10)

`pao2`

### Derrame pleural na radiografia (+10)

`derrame`

## Edição do método

PSI/PORT/Fine 1997:regra classe I efase 2 pontuação I–V; sem CURB 65

## Fórmula documentada

Etapa 1 (classe I): idade ≤ 50 anos, sem nenhuma das 5 comorbidades (neoplasia, doença hepática, insuficiência cardíaca, cerebrovascular ou renal) e sem nenhum dos 5 achados de exame (confusão, FR ≥ 30, PAS \< 90, temperatura \< 35 ou ≥ 40 °C, FC ≥ 125).

Etapa 2 (demais): pontos = idade em anos (mulheres: idade − 10) + pontos de cada item presente. Classe II ≤ 70; III 71–90; IV 91–130; V \> 130.

## Limites e população

O PSI/PORT foi desenvolvido para adultos com pneumonia adquirida na comunidade e risco de morte em 30 dias. Classes baixas não significam ausência de risco nem decisão automática de alta. Critérios de elegibilidade, definição de pneumonia e condições para manejo ambulatorial devem acompanhar o protocolo clínico.

## Referências

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Classe I: mortalidade em 30 dias de 0,1 a 0,4%

| Detalhes do resultado | |
| --- | --- |
| Pontos | não se aplica (classe I pela etapa 1) |
| Conduta sugerida (Fine 1997) | Tratamento ambulatorial |

O PSI subestima a gravidade em jovens sem comorbidades: hipoxemia, instabilidade ou impossibilidade de via oral indicam internação independentemente da classe.


### 2

Classe I: mortalidade em 30 dias de 0,1 a 0,4%

| Detalhes do resultado | |
| --- | --- |
| Pontos | não se aplica (classe I pela etapa 1) |
| Conduta sugerida (Fine 1997) | Tratamento ambulatorial |

O PSI subestima a gravidade em jovens sem comorbidades: hipoxemia, instabilidade ou impossibilidade de via oral indicam internação independentemente da classe.


### 3

Classe II: mortalidade em 30 dias de 0,6 a 0,7%

| Detalhes do resultado | |
| --- | --- |
| Pontos | 70 |
| Conduta sugerida (Fine 1997) | Tratamento ambulatorial |

O PSI subestima a gravidade em jovens sem comorbidades: hipoxemia, instabilidade ou impossibilidade de via oral indicam internação independentemente da classe.


### 4

Classe III: mortalidade em 30 dias de 0,9 a 2,8%

| Detalhes do resultado | |
| --- | --- |
| Pontos | 82 |
| Conduta sugerida (Fine 1997) | Ambulatorial ou internação breve em observação |

O PSI subestima a gravidade em jovens sem comorbidades: hipoxemia, instabilidade ou impossibilidade de via oral indicam internação independentemente da classe.


### 5

Classe IV: mortalidade em 30 dias de 8,2 a 9,3%

| Detalhes do resultado | |
| --- | --- |
| Pontos | 125 |
| Conduta sugerida (Fine 1997) | Internação hospitalar |


### 6

Classe V: mortalidade em 30 dias de 27,0 a 31,1%

| Detalhes do resultado | |
| --- | --- |
| Pontos | 140 |
| Conduta sugerida (Fine 1997) | Internação hospitalar |

