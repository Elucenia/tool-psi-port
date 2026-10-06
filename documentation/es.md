<!-- ELUCENIA technical documentation · psi-port · es · no clinical/professional/rights approval -->

# PSI/PORT (índice de gravedad de la neumonía)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/psi-port)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sexo

`sexo`

- `F` — Femenino
- `M` — Masculino

### Edad

`idade`

años · intervalo: 18–110

### Reside en una institución de larga estancia (+10)

`casa`

### Neoplasia activa o diagnosticada en el último año (+30)

`neoplasia`

### Enfermedad hepática (cirrosis, hepatitis crónica) (+20)

`hepatica`

### Insuficiencia cardíaca (+10)

`icc`

### Enfermedad cerebrovascular (+10)

`avc`

### Enfermedad renal crónica (+10)

`renal`

### Alteración del estado mental (+20)

`confusao`

### Frecuencia respiratoria ≥ 30 respiraciones/min (+20)

`fr`

### Presión arterial sistólica \< 90 mmHg (+20)

`pas`

### Temperatura \< 35 °C o ≥ 40 °C (+15)

`temp`

### Frecuencia cardíaca ≥ 125 bpm (+10)

`fc`

### pH arterial \< 7,35 (+30)

`ph`

### Urea ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)

`ureia`

### Sodio \< 130 mEq/L (+20)

`sodio`

### Glucosa ≥ 250 mg/dL (+10)

`glicose`

### Hematocrito \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg o saturación de O₂ \< 90% (+10)

`pao2`

### Derrame pleural en la radiografía (+10)

`derrame`

## Edición del método

PSI/PORT/Fine 1997: regla clase I y puntuación fase 2 I–V; no CURB-65

## Fórmula documentada

Paso 1 (clase I): edad en años ≤ 50; sin comorbilidades (5: neoplasia, hepatopatía, insuficiencia cardíaca, enfermedad cerebrovascular o renal); sin hallazgos de examen (5: confusión, FR ≥ 30, PAS \< 90, temperatura \< 35 o ≥ 40 °C, FC ≥ 125).

Paso 2 (otros): puntos = edad en años (mujeres: edad − 10) + puntos de cada elemento presente; clases: II ≤ 70; III 71–90; IV 91–130; V \> 130.

## Límites y población

El PSI/PORT se desarrolló para adultos con neumonía adquirida en la comunidad y riesgo de muerte a 30 días. Las clases bajas no significan ausencia de riesgo ni una decisión automática de alta. Los criterios de elegibilidad, la definición de neumonía y las condiciones de manejo ambulatorio deben seguir el protocolo clínico.

## Referencias

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Clase I: mortalidad a 30 días de 0,1 a 0,4%

| Detalles del resultado | |
| --- | --- |
| Puntos | no aplica (clase I por la etapa 1) |
| Conducta sugerida (Fine 1997) | Tratamiento ambulatorio |

El PSI subestima la gravedad en jóvenes sin comorbilidades: la hipoxemia, la inestabilidad o la imposibilidad de vía oral indican internación independientemente de la clase.


### 2

Clase I: mortalidad a 30 días de 0,1 a 0,4%

| Detalles del resultado | |
| --- | --- |
| Puntos | no aplica (clase I por la etapa 1) |
| Conducta sugerida (Fine 1997) | Tratamiento ambulatorio |

El PSI subestima la gravedad en jóvenes sin comorbilidades: la hipoxemia, la inestabilidad o la imposibilidad de vía oral indican internación independientemente de la clase.


### 3

Clase II: mortalidad a 30 días de 0,6 a 0,7%

| Detalles del resultado | |
| --- | --- |
| Puntos | 70 |
| Conducta sugerida (Fine 1997) | Tratamiento ambulatorio |

El PSI subestima la gravedad en jóvenes sin comorbilidades: la hipoxemia, la inestabilidad o la imposibilidad de vía oral indican internación independientemente de la clase.


### 4

Clase III: mortalidad a 30 días de 0,9 a 2,8%

| Detalles del resultado | |
| --- | --- |
| Puntos | 82 |
| Conducta sugerida (Fine 1997) | Ambulatorio o internación breve en observación |

El PSI subestima la gravedad en jóvenes sin comorbilidades: la hipoxemia, la inestabilidad o la imposibilidad de vía oral indican internación independientemente de la clase.


### 5

Clase IV: mortalidad a 30 días de 8,2 a 9,3%

| Detalles del resultado | |
| --- | --- |
| Puntos | 125 |
| Conducta sugerida (Fine 1997) | Internación hospitalaria |


### 6

Clase V: mortalidad a 30 días de 27,0 a 31,1%

| Detalles del resultado | |
| --- | --- |
| Puntos | 140 |
| Conducta sugerida (Fine 1997) | Internación hospitalaria |

