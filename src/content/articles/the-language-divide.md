---
title: 'The digital divide in Africa is a language divide'
description: 'Connectivity is not the bottleneck any more. The bottleneck is that the machine does not speak Fon — and the person in front of it does not speak French.'
date: 2026-02-18
lang: en
tags: [NLP, Low-resource languages, Inclusion]
translationKey: language-divide
---

We keep measuring digital inclusion in megabits. Coverage maps, subscription rates, smartphone penetration. By those numbers Benin is doing fine: the network reaches the villages, the phones are in the hands.

And yet a woman selling tomatoes at Dantokpa cannot renew her national ID online.

Not because there is no connection. Because the form is in French, the confirmation SMS is in French, the error message that tells her she typed her birth date wrong is in French — and she speaks Fon.

## The gap nobody instruments

Roughly two out of three adults in Benin speak a local language at home. A large share of them are not comfortable reading administrative French, which is its own dialect even for people who did go to school in it. So we have built a public-service stack that is, in practice, gated behind a language most of its users do not read.

The workaround is human: a nephew, a cybercafé operator, a neighbour who fills the form for you. That workaround costs money, costs privacy, and fails at scale.

What we call the digital divide is, at this point, mostly this.

## Why the usual NLP playbook does not apply

The instinct is to reach for a translation model. That instinct is right; the available models are not.

Three things break:

**There is barely any parallel text.** Fon–French sentence pairs are not sitting in Common Crawl. What exists is scattered across liturgical material, a few academic corpora, and radio archives that were never transcribed. You do not fine-tune your way out of a data desert.

**Text is the wrong interface.** Fon is written with diacritics that most keyboards do not produce, and much of the target population reads neither language fluently. A text-in, text-out translator solves a problem these users do not have. What they need is voice in, voice out.

**Evaluation is a research problem of its own.** BLEU on a hundred hand-made sentence pairs tells you almost nothing about whether a farmer understood the fertiliser subsidy rules. We are missing the benchmarks as much as we are missing the models.

## What we built, and what it taught us

At the SENIA hackathon in 2024 we built Alodometo, a multimodal French ⇄ Fon translator: speak French, hear Fon; speak Fon, read French. It placed second. More usefully, it made the actual constraints legible.

Three things we did not expect:

- **Speech recognition, not translation, was the hard part.** Once you have a reliable transcript, translation quality matters less than you think for a task like "which counter do I go to". Getting the transcript is where everything falls apart.
- **Tone is not a detail.** Fon is a tonal language. Models trained on non-tonal languages routinely collapse distinctions that change meaning entirely. This is not a rounding error; it is the whole message.
- **People forgave bad output, but not slow output.** A clumsy translation delivered in two seconds beat an elegant one delivered in fifteen. Latency is an accessibility feature.

## Where this goes

This is the problem [Ayoka](https://ayoka.aida.bj/) exists to solve: a voice API for African languages — speech-to-text and text-to-speech for Fon, Yoruba, French and English — with accuracy good enough that a service can be built on top of it rather than demoed on top of it.

The bet is simple. If the interface speaks the language, the rest of the stack finally becomes reachable. Every e-government service, every banking flow, every health hotline that currently works only for people who read French becomes usable by everyone else, with no change to the service itself.

That is a language problem wearing an infrastructure costume. It is worth naming it correctly, because you fix it with corpora, models and evaluation — not with more towers.
