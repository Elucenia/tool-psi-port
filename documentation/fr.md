<!-- ELUCENIA technical documentation · psi-port · fr · no clinical/professional/rights approval -->

# PSI/PORT (indice de gravité de la pneumonie)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/psi-port)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sexe

`sexo`

- `F` — Féminin
- `M` — Masculin

### Âge

`idade`

ans · intervalle: 18–110

### Réside en établissement de soins de longue durée (+10)

`casa`

### Néoplasie active ou diagnostiquée au cours de la dernière année (+30)

`neoplasia`

### Maladie hépatique (cirrhose, hépatite chronique) (+20)

`hepatica`

### Insuffisance cardiaque (+10)

`icc`

### Maladie cérébrovasculaire (+10)

`avc`

### Maladie rénale chronique (+10)

`renal`

### Altération de l’état mental (+20)

`confusao`

### Fréquence respiratoire ≥ 30 respirations/min (+20)

`fr`

### Pression artérielle systolique \< 90 mmHg (+20)

`pas`

### Température \< 35 °C ou ≥ 40 °C (+15)

`temp`

### Fréquence cardiaque ≥ 125 bpm (+10)

`fc`

### pH artériel \< 7,35 (+30)

`ph`

### Urée ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)

`ureia`

### Sodium \< 130 mEq/L (+20)

`sodio`

### Glucose ≥ 250 mg/dL (+10)

`glicose`

### Hématocrite \< 30% (+10)

`ht`

### PaO₂ \< 60 mmHg ou saturation en O₂ \< 90 % (+10)

`pao2`

### Épanchement pleural à la radiographie (+10)

`derrame`

## Édition de la méthode

PSI/PORT/Fine 1997 : règle classe I et scores étape 2 I–V ; pas CURB-65

## Formule documentée

Étape 1 (classe I) : âge en années ≤ 50; aucune comorbidité (5: néoplasie, maladie hépatique, insuffisance cardiaque, maladie cérébrovasculaire ou rénale); aucun signe d’examen (5: confusion, FR ≥ 30, PAS \< 90, température \< 35 ou ≥ 40 °C, FC ≥ 125).

Étape 2 (autres) : points = âge en années (femmes : âge − 10) + points des éléments présents ; classes : II ≤ 70; III 71–90; IV 91–130; V \> 130.

## Limites et population

Le PSI/PORT a été développé chez des adultes atteints de pneumonie communautaire pour le risque de décès à 30 jours. Les classes basses ne signifient ni absence de risque ni décision automatique de sortie. Les critères d’éligibilité, la définition de la pneumonie et les conditions de prise en charge ambulatoire doivent accompagner le protocole clinique.

## Références

- [Fine MJ et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med, 1997.](https://doi.org/10.1056/NEJM199701233360402)

- [Metlay JP et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med, 2019.](https://doi.org/10.1164/rccm.201908-1581ST)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Classe I : mortalité à 30 jours de 0,1 à 0,4 %

| Détails du résultat | |
| --- | --- |
| Points | sans objet (classe I à l’étape 1) |
| Conduite suggérée (Fine 1997) | Traitement ambulatoire |

Le PSI sous-estime la gravité chez les jeunes sans comorbidités : l’hypoxémie, l’instabilité ou l’impossibilité de voie orale indiquent une hospitalisation indépendamment de la classe.


### 2

Classe I : mortalité à 30 jours de 0,1 à 0,4 %

| Détails du résultat | |
| --- | --- |
| Points | sans objet (classe I à l’étape 1) |
| Conduite suggérée (Fine 1997) | Traitement ambulatoire |

Le PSI sous-estime la gravité chez les jeunes sans comorbidités : l’hypoxémie, l’instabilité ou l’impossibilité de voie orale indiquent une hospitalisation indépendamment de la classe.


### 3

Classe II : mortalité à 30 jours de 0,6 à 0,7 %

| Détails du résultat | |
| --- | --- |
| Points | 70 |
| Conduite suggérée (Fine 1997) | Traitement ambulatoire |

Le PSI sous-estime la gravité chez les jeunes sans comorbidités : l’hypoxémie, l’instabilité ou l’impossibilité de voie orale indiquent une hospitalisation indépendamment de la classe.


### 4

Classe III : mortalité à 30 jours de 0,9 à 2,8 %

| Détails du résultat | |
| --- | --- |
| Points | 82 |
| Conduite suggérée (Fine 1997) | Prise en charge ambulatoire ou courte hospitalisation en observation |

Le PSI sous-estime la gravité chez les jeunes sans comorbidités : l’hypoxémie, l’instabilité ou l’impossibilité de voie orale indiquent une hospitalisation indépendamment de la classe.


### 5

Classe IV : mortalité à 30 jours de 8,2 à 9,3 %

| Détails du résultat | |
| --- | --- |
| Points | 125 |
| Conduite suggérée (Fine 1997) | Hospitalisation |


### 6

Classe V : mortalité à 30 jours de 27,0 à 31,1 %

| Détails du résultat | |
| --- | --- |
| Points | 140 |
| Conduite suggérée (Fine 1997) | Hospitalisation |

