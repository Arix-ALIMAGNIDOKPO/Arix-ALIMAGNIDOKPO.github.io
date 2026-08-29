---
title: 'La fracture numérique en Afrique est d’abord une fracture linguistique'
description: 'La connectivité n’est plus le goulot d’étranglement. Le goulot, c’est que la machine ne parle pas fon — et que la personne devant elle ne parle pas français.'
date: 2026-02-18
lang: fr
tags: [NLP, Langues peu dotées, Inclusion]
translationKey: language-divide
---

Nous continuons de mesurer l’inclusion numérique en mégabits. Cartes de couverture, taux d’abonnement, pénétration du smartphone. Selon ces chiffres, le Bénin s’en sort bien : le réseau atteint les villages, les téléphones sont dans les mains.

Et pourtant, une vendeuse de tomates à Dantokpa ne peut pas renouveler sa carte d’identité en ligne.

Non pas faute de connexion. Parce que le formulaire est en français, le SMS de confirmation est en français, le message d’erreur qui lui signale une date de naissance mal saisie est en français — et elle parle fon.

## L’écart que personne ne mesure

Environ deux adultes sur trois au Bénin parlent une langue locale à la maison. Une grande partie d’entre eux ne lit pas confortablement le français administratif, qui est un dialecte à part entière, même pour ceux qui ont été scolarisés dedans. Nous avons donc construit une administration numérique qui est, en pratique, verrouillée derrière une langue que la majorité de ses usagers ne lit pas.

Le contournement est humain : un neveu, un gérant de cybercafé, un voisin qui remplit le formulaire à votre place. Ce contournement coûte de l’argent, coûte de la vie privée, et ne passe pas à l’échelle.

Ce que nous appelons fracture numérique, c’est aujourd’hui essentiellement cela.

## Pourquoi les recettes NLP habituelles ne s’appliquent pas

Le réflexe est de sortir un modèle de traduction. Le réflexe est bon ; les modèles disponibles ne le sont pas.

Trois choses cassent :

**Il n’existe presque pas de texte parallèle.** Les paires de phrases fon–français ne dorment pas dans Common Crawl. Ce qui existe est dispersé entre du matériel liturgique, quelques corpus académiques et des archives radio jamais transcrites. On ne se sort pas d’un désert de données par du fine-tuning.

**Le texte est la mauvaise interface.** Le fon s’écrit avec des diacritiques que la plupart des claviers ne produisent pas, et une bonne partie de la population visée ne lit couramment ni l’une ni l’autre langue. Un traducteur texte-vers-texte résout un problème que ces usagers n’ont pas. Ce qu’il leur faut, c’est la voix en entrée et la voix en sortie.

**L’évaluation est un problème de recherche à part entière.** Un score BLEU sur cent paires de phrases fabriquées à la main ne dit presque rien sur le fait qu’un agriculteur ait compris les règles de subvention des engrais. Il nous manque les benchmarks autant que les modèles.

## Ce que nous avons construit, et ce que cela nous a appris

Au hackathon SENIA en 2024, nous avons construit Alodometo, un traducteur multimodal français ⇄ fon : parlez français, entendez le fon ; parlez fon, lisez le français. Il a obtenu la deuxième place. Plus utilement, il a rendu les vraies contraintes lisibles.

Trois choses que nous n’attendions pas :

- **La reconnaissance vocale, pas la traduction, était le point dur.** Une fois la transcription fiable obtenue, la qualité de traduction compte moins qu’on ne le croit pour une tâche du type « à quel guichet dois-je aller ». C’est l’obtention de la transcription qui fait tout s’effondrer.
- **Le ton n’est pas un détail.** Le fon est une langue à tons. Les modèles entraînés sur des langues non tonales écrasent régulièrement des distinctions qui changent entièrement le sens. Ce n’est pas une erreur d’arrondi ; c’est tout le message.
- **Les gens pardonnaient une mauvaise sortie, mais pas une sortie lente.** Une traduction maladroite livrée en deux secondes battait une traduction élégante livrée en quinze. La latence est une fonctionnalité d’accessibilité.

## La suite

C’est le problème qu’[Ayoka](https://ayoka.aida.bj/) existe pour résoudre : une API vocale pour les langues africaines — transcription et synthèse pour le fon, le yoruba, le français et l’anglais — avec une précision suffisante pour qu’un service se construise dessus, et pas seulement se démontre dessus.

Le pari est simple. Si l’interface parle la langue, le reste de la pile devient enfin atteignable. Chaque service d’e-administration, chaque parcours bancaire, chaque ligne d’assistance santé qui ne fonctionne aujourd’hui que pour ceux qui lisent le français devient utilisable par tous les autres, sans rien changer au service lui-même.

C’est un problème de langue déguisé en problème d’infrastructure. Il vaut la peine de le nommer correctement, parce qu’on le règle avec des corpus, des modèles et de l’évaluation — pas avec davantage d’antennes.
