---
title: 'Un an à déployer de l’IA dans un ministère : ce que ça m’a appris'
description: 'La génération augmentée par récupération se démontre facilement et se déploie difficilement dans une institution. Notes de terrain sur une plateforme documentaire pour le Ministère des Affaires Étrangères du Bénin.'
date: 2026-06-04
lang: fr
tags: [RAG, Secteur public, Ingénierie]
translationKey: rag-in-a-ministry
---

Un chatbot à récupération augmentée, c’est un projet de week-end. On découpe les documents, on les vectorise, on met une recherche sémantique devant un modèle, on livre la démo. Tout le monde hoche la tête.

Puis on essaie de le mettre dans un ministère, et on découvre que la démo, c’était les 5 % faciles.

Voici ce qu’étaient les 95 % restants.

## Les documents ne sont pas des documents

Le modèle mental de départ, c’est un dossier de PDF propres. La réalité, ce sont des scans de scans, des fax photographiés au téléphone, des tableaux qui n’existent que sous forme d’images, et une convention de classement qui a changé trois fois depuis 2011.

Avant que le moindre travail intéressant puisse commencer, l’essentiel de l’effort est parti dans l’ingestion : un OCR qui survit à un scan de travers, une détection de mise en page qui garde un tableau sous forme de tableau, et une passe de normalisation qui transforme quarante ans de nommage incohérent en quelque chose d’adressable.

La leçon est ingrate et totale : **la qualité de la récupération est plafonnée par la qualité de l’ingestion**, et aucune montée de version de modèle ne rattrape un mauvais pipeline.

## L’ancrage est une exigence de politique, pas un confort

Dans un produit commercial, une hallucination est embarrassante. Dans de la correspondance diplomatique, une hallucination est un document qui affirme que l’État s’est engagé sur quelque chose qu’il n’a pas fait.

L’assistant n’a donc pas le droit d’être créatif. Chaque réponse doit être traçable jusqu’à un passage d’un document réel, avec la référence visible à côté de l’affirmation. Si la récupération ne remonte rien de pertinent, la bonne sortie est « je n’ai pas trouvé » — et amener un modèle à préférer ne rien dire plutôt que dire quelque chose de plausible est un vrai problème d’ingénierie, pas un prompt.

Nous avons fini par traiter l’ancrage comme une contrainte dure imposée à l’extérieur du modèle : récupérer d’abord, ne répondre qu’à partir de ce qui est remonté, et afficher la source en ligne pour qu’un humain vérifie en deux secondes plutôt que de faire confiance.

## Le workflow compte plus que le modèle

La fonctionnalité réellement adoptée n’a pas été le chatbot. C’est le workflow de validation — rédiger, relire, approuver, archiver — avec l’assistant à l’intérieur plutôt qu’à côté.

Une note verbale passe entre plusieurs mains avant de quitter le bâtiment. Un outil d’IA qui ignore cette chaîne produit du texte qu’il faut ensuite ressaisir dans le vrai processus. Un outil d’IA qui vit dans la chaîne fait gagner le temps que la chaîne coûtait.

C’est la partie qui n’apparaît dans aucun article : **le modèle est une fonctionnalité d’un workflow, pas un produit**.

## La souveraineté est une contrainte technique aux conséquences réelles

Les documents ne peuvent pas quitter l’institution. Cette seule phrase supprime la plupart des options confortables : pas d’API tierce, pas de données qui traversent une frontière, pas de dépendance à un fournisseur qui pourrait couper l’accès.

Elle pousse vers des modèles plus petits, un déploiement on-premise, et une architecture où chaque composant a un repli local. Ça coûte de la performance. Ça achète la seule chose qui rend le système déployable.

C’est exactement pour cette raison que [Sovrean](https://sovrean.aida.bj/) est construit ainsi : cloud, on-premise, ou entièrement dans l’infrastructure du client — parce que pour toute une classe d’institutions, la troisième option est la seule sur la table.

## Ce que je dirais à moi-même il y a un an

- Passer le premier mois sur l’ingestion et l’évaluation, pas sur le modèle. La tentation sera de faire l’inverse.
- Construire le chemin « je ne sais pas » avant le chemin de la réponse.
- Se demander quel processus existant l’outil rejoint. Si la réponse est « aucun », l’outil ne sera pas utilisé.
- Mesurer avec les documents de l’institution, pas avec un benchmark public. L’écart entre les deux est l’endroit où meurent les projets.

Rien de tout cela n’est exotique. C’est simplement ce qui arrive quand une démo doit devenir quelque chose sur quoi des gens s’appuient au travail.
