<!-- ELUCENIA technical documentation · psi-port · de · no clinical/professional/rights approval -->

# PSI/PORT (Pneumonie-Schweregradindex)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/psi-port)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Geschlecht

`sexo`

- `F` — Weiblich
- `M` — Männlich

### Alter

`idade`

Jahre · Bereich: 18–110

### Lebt in einer Langzeitpflegeeinrichtung (+10)

`casa`

### Aktive oder im letzten Jahr diagnostizierte Neoplasie (+30)

`neoplasia`

### Lebererkrankung (Zirrhose, chronische Hepatitis) (+20)

`hepatica`

### Herzinsuffizienz (+10)

`icc`

### Zerebrovaskuläre Erkrankung (+10)

`avc`

### Chronische Nierenerkrankung (+10)

`renal`

### Veränderter Bewusstseinszustand (+20)

`confusao`

### Atemfrequenz ≥ 30 Atemzüge/min (+20)

`fr`

### Systolischer Blutdruck \< 90 mmHg (+20)

`pas`

### Temperatur \< 35 °C oder ≥ 40 °C (+15)

`temp`

### Herzfrequenz ≥ 125 bpm (+10)

`fc`

### Arterieller pH-Wert \< 7,35 (+30)

`ph`

### Harnstoff ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)

`ureia`

### Natrium \< 130 mEq/L (+20)

`sodio`

### Glukose ≥ 250 mg/dL (+10)

`glicose`

### Hämatokrit \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg oder O₂-Sättigung \< 90 % (+10)

`pao2`

### Pleuraerguss im Röntgenbild (+10)

`derrame`

## Fassung der Methode

PSI/PORT/Fine 1997: Klasse-I-Regel und Stufe-2-Punkte I–V; kein CURB-65

## Dokumentierte Formel

Schritt 1 (Klasse I): Alter in Jahren ≤ 50; keine Komorbiditäten (5: Neoplasie, Leberkrankheit, Herzinsuffizienz, zerebrovaskuläre oder Nierenkrankheit); keine Untersuchungsbefunde (5: Verwirrtheit, AF ≥ 30, systolisch \< 90, Temperatur \< 35 oder ≥ 40 °C, HF ≥ 125).

Schritt 2 (andere): Punkte = Alter in Jahren (Frauen: Alter − 10) + Punkte vorhandener Befunde; Klassen: II ≤ 70; III 71–90; IV 91–130; V \> 130.

## Grenzen und Population

PSI/PORT wurde bei Erwachsenen mit ambulant erworbener Pneumonie für das 30-Tage-Sterberisiko entwickelt. Niedrige Klassen bedeuten weder Risikofreiheit noch automatische Entlassung. Eignungskriterien, Pneumoniedefinition und Bedingungen ambulanter Versorgung müssen das klinische Protokoll begleiten.

## Referenzen

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Klasse I: 30-Tage-Mortalität von 0,1 bis 0,4%

| Ergebnisdetails | |
| --- | --- |
| Punkte | nicht anwendbar (Klasse I nach Schritt 1) |
| Vorgeschlagenes Vorgehen (Fine 1997) | Ambulante Behandlung |

Der PSI unterschätzt die Schwere bei jungen Erwachsenen ohne Komorbiditäten: Hypoxämie, Instabilität oder Unfähigkeit zur oralen Einnahme sprechen unabhängig von der Klasse für eine Hospitalisierung.


### 2

Klasse I: 30-Tage-Mortalität von 0,1 bis 0,4%

| Ergebnisdetails | |
| --- | --- |
| Punkte | nicht anwendbar (Klasse I nach Schritt 1) |
| Vorgeschlagenes Vorgehen (Fine 1997) | Ambulante Behandlung |

Der PSI unterschätzt die Schwere bei jungen Erwachsenen ohne Komorbiditäten: Hypoxämie, Instabilität oder Unfähigkeit zur oralen Einnahme sprechen unabhängig von der Klasse für eine Hospitalisierung.


### 3

Klasse II: 30-Tage-Mortalität von 0,6 bis 0,7%

| Ergebnisdetails | |
| --- | --- |
| Punkte | 70 |
| Vorgeschlagenes Vorgehen (Fine 1997) | Ambulante Behandlung |

Der PSI unterschätzt die Schwere bei jungen Erwachsenen ohne Komorbiditäten: Hypoxämie, Instabilität oder Unfähigkeit zur oralen Einnahme sprechen unabhängig von der Klasse für eine Hospitalisierung.


### 4

Klasse III: 30-Tage-Mortalität von 0,9 bis 2,8%

| Ergebnisdetails | |
| --- | --- |
| Punkte | 82 |
| Vorgeschlagenes Vorgehen (Fine 1997) | Ambulant oder kurze stationäre Aufnahme zur Beobachtung |

Der PSI unterschätzt die Schwere bei jungen Erwachsenen ohne Komorbiditäten: Hypoxämie, Instabilität oder Unfähigkeit zur oralen Einnahme sprechen unabhängig von der Klasse für eine Hospitalisierung.


### 5

Klasse IV: 30-Tage-Mortalität von 8,2 bis 9,3%

| Ergebnisdetails | |
| --- | --- |
| Punkte | 125 |
| Vorgeschlagenes Vorgehen (Fine 1997) | Krankenhausaufnahme |


### 6

Klasse V: 30-Tage-Mortalität von 27,0 bis 31,1 %

| Ergebnisdetails | |
| --- | --- |
| Punkte | 140 |
| Vorgeschlagenes Vorgehen (Fine 1997) | Krankenhausaufnahme |

