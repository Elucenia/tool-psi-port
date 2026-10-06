<!-- ELUCENIA technical documentation · psi-port · it · no clinical/professional/rights approval -->

# PSI/PORT (indice di gravità della polmonite)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/psi-port)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sesso

`sexo`

- `F` — Femminile
- `M` — Maschile

### Età

`idade`

anni · intervallo: 18–110

### Risiede in una struttura di lungodegenza (+10)

`casa`

### Neoplasia attiva o diagnosticata nell’ultimo anno (+30)

`neoplasia`

### Malattia epatica (cirrosi, epatite cronica) (+20)

`hepatica`

### Insufficienza cardiaca (+10)

`icc`

### Malattia cerebrovascolare (+10)

`avc`

### Malattia renale cronica (+10)

`renal`

### Alterazione dello stato mentale (+20)

`confusao`

### Frequenza respiratoria ≥ 30 atti/min (+20)

`fr`

### Pressione arteriosa sistolica \< 90 mmHg (+20)

`pas`

### Temperatura \< 35 °C o ≥ 40 °C (+15)

`temp`

### Frequenza cardiaca ≥ 125 bpm (+10)

`fc`

### pH arterioso \< 7,35 (+30)

`ph`

### Urea ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)

`ureia`

### Sodio \< 130 mEq/L (+20)

`sodio`

### Glucosio ≥ 250 mg/dL (+10)

`glicose`

### Ematocrito \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg o saturazione di O₂ \< 90% (+10)

`pao2`

### Versamento pleurico alla radiografia (+10)

`derrame`

## Edizione del metodo

PSI/PORT/Fine 1997: regola classe I e fase 2 I–V; non CURB-65

## Formula documentata

Fase 1 (classe I): età in anni ≤ 50; nessuna comorbilità (5: neoplasia, epatopatia, insufficienza cardiaca, malattia cerebrovascolare o renale); nessun reperto obiettivo (5: confusione, FR ≥ 30, PAS \< 90, temperatura \< 35 o ≥ 40 °C, FC ≥ 125).

Fase 2 (altri): punti = età in anni (donne: età − 10) + punti per elementi presenti; classi: II ≤ 70; III 71–90; IV 91–130; V \> 130.

## Limiti e popolazione

Il PSI/PORT è stato sviluppato per adulti con polmonite acquisita in comunità e rischio di morte a 30 giorni. Le classi basse non significano assenza di rischio né una decisione automatica di dimissione. Criteri di ammissibilità, definizione di polmonite e condizioni per la gestione ambulatoriale devono seguire il protocollo clinico.

## Riferimenti

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Classe I: mortalità a 30 giorni dallo 0,1 allo 0,4%

| Dettagli del risultato | |
| --- | --- |
| Punti | non applicabile (classe I alla fase 1) |
| Condotta suggerita (Fine 1997) | Trattamento ambulatoriale |

Il PSI sottostima la gravità nei giovani senza comorbidità: ipossiemia, instabilità o impossibilità alla via orale indicano ricovero indipendentemente dalla classe.


### 2

Classe I: mortalità a 30 giorni dallo 0,1 allo 0,4%

| Dettagli del risultato | |
| --- | --- |
| Punti | non applicabile (classe I alla fase 1) |
| Condotta suggerita (Fine 1997) | Trattamento ambulatoriale |

Il PSI sottostima la gravità nei giovani senza comorbidità: ipossiemia, instabilità o impossibilità alla via orale indicano ricovero indipendentemente dalla classe.


### 3

Classe II: mortalità a 30 giorni dallo 0,6 allo 0,7%

| Dettagli del risultato | |
| --- | --- |
| Punti | 70 |
| Condotta suggerita (Fine 1997) | Trattamento ambulatoriale |

Il PSI sottostima la gravità nei giovani senza comorbidità: ipossiemia, instabilità o impossibilità alla via orale indicano ricovero indipendentemente dalla classe.


### 4

Classe III: mortalità a 30 giorni dallo 0,9 al 2,8%

| Dettagli del risultato | |
| --- | --- |
| Punti | 82 |
| Condotta suggerita (Fine 1997) | Ambulatoriale o breve ricovero in osservazione |

Il PSI sottostima la gravità nei giovani senza comorbidità: ipossiemia, instabilità o impossibilità alla via orale indicano ricovero indipendentemente dalla classe.


### 5

Classe IV: mortalità a 30 giorni dall'8,2 al 9,3%

| Dettagli del risultato | |
| --- | --- |
| Punti | 125 |
| Condotta suggerita (Fine 1997) | Ricovero ospedaliero |


### 6

Classe V: mortalità a 30 giorni dal 27,0 al 31,1%

| Dettagli del risultato | |
| --- | --- |
| Punti | 140 |
| Condotta suggerita (Fine 1997) | Ricovero ospedaliero |

