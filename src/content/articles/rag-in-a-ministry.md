---
title: 'What a year of shipping AI inside a ministry actually taught me'
description: 'Retrieval-augmented generation is easy to demo and hard to deploy in an institution. Notes from building a document platform for Benin’s Ministry of Foreign Affairs.'
date: 2026-06-04
lang: en
tags: [RAG, Public sector, Engineering]
translationKey: rag-in-a-ministry
---

A retrieval-augmented chatbot is a weekend project. Chunk the documents, embed them, stick a vector search in front of a model, ship the demo. Everyone in the room nods.

Then you try to put it inside a ministry, and you discover the demo was the easy 5%.

Here is what the other 95% turned out to be.

## The documents are not documents

The mental model going in is a folder of clean PDFs. The reality is scans of scans, faxes photographed with a phone, tables that only exist as images, and a filing convention that changed three times since 2011.

Before any of the interesting work could start, most of the effort went into ingestion: OCR that survives a crooked scan, layout detection that keeps a table a table, and a normalisation pass that turns forty years of inconsistent naming into something addressable.

The lesson is unglamorous and total: **retrieval quality is capped by ingestion quality**, and no model upgrade rescues a bad pipeline.

## Grounding is a policy requirement, not a nice-to-have

In a commercial product, a hallucination is embarrassing. In diplomatic correspondence, a hallucination is a document that says the state committed to something it did not.

So the assistant is not allowed to be creative. Every answer must be traceable to a passage in a real document, with the reference visible next to the claim. If retrieval returns nothing relevant, the correct output is "I did not find this" — and getting a model to prefer saying nothing over saying something plausible is a real engineering problem, not a prompt.

We ended up treating groundedness as a hard constraint enforced outside the model: retrieve first, answer only from what came back, and show the source inline so a human can check in two seconds rather than trusting in good faith.

## The workflow matters more than the model

The feature people actually adopted was not the chatbot. It was the validation workflow — draft, review, approve, archive — with the assistant sitting inside it rather than beside it.

A note verbale passes through several hands before it leaves the building. An AI tool that ignores that chain produces text that then has to be re-entered into the real process. An AI tool that lives inside the chain saves the time the chain was costing.

This is the part that does not appear in any paper: **the model is a feature of a workflow, not a product**.

## Sovereignty is a technical constraint with real consequences

The documents cannot leave the institution. That single sentence removes most of the convenient options: no third-party API, no data crossing a border, no dependency on a provider that could revoke access.

It pushes you toward smaller models, on-premise deployment, and an architecture where every component has a local fallback. It costs performance. It buys the only thing that makes the system deployable at all.

That constraint is exactly why [Sovrean](https://sovrean.aida.bj/) is built the way it is: cloud, on-premise, or entirely inside the client's own infrastructure, because for a whole class of institutions the third option is the only one on the table.

## What I would tell myself a year ago

- Spend the first month on ingestion and evaluation, not on the model. You will be tempted to do the opposite.
- Build the "I don't know" path before the answer path.
- Ask which existing process the tool joins. If the answer is "none", the tool will not be used.
- Measure with the institution's own documents, not with a public benchmark. The gap between the two is where projects die.

None of this is exotic. It is just what happens when a demo has to become something people rely on at work.
