---
layout: default
---

# Week 12

[← Back to Home](../index.md)

## Documentation 

# Week 12 - Making Journal

## Overview

Week twelve was the final week of the project. The two main tasks were finalising the project statement for public display and presenting the work at the class showcase. After several weeks of developing the concept, building the sketch, integrating sound, and responding to critique feedback, this was the week everything had to come together into a form ready for a public audience.


## Finalising the Project Statement

The project statement went through two distinct drafting processes this week before arriving at a final version.

### Drafting with NotebookLM

Following the class activity from week nine, I returned to NotebookLM to generate a fresh draft using the updated project journals as source material. The prompt used was structured around five required elements: what the visualisation is, the data sources used, the subject matter and future scenario, how the work engages critically with ideas about data representation, and the intended impact on a public audience. The format instruction asked for first person, clear direct language appropriate for exhibition wall text, and approximately 300 words in continuous prose.

The draft NotebookLM produced was significantly stronger than the first attempt from week nine. By this point the journals contained much more developed thinking, including the week ten critique feedback about critical clarity, the decision to remove the 3D print and focus entirely on the p5.js piece, and the sound integration work from week eleven. The model had more to work with and the output reflected that.

The draft covered all five elements and the core argument was present: mind-wandering is not a failure to be optimised, and the richness of human attention cannot be captured by a monitoring system. The interaction description was also more specific than earlier versions, naming both the hover tones and the distraction-then-voice click sequence.

### Refining with Claude

After reviewing the NotebookLM draft, a few issues needed addressing before the statement was ready for submission. These were worked through using Claude.

The first issue was three em dashes that had appeared in the draft. Em dashes are common in AI-generated writing and they were replaced throughout. The second issue was American spelling. The draft used "behavioral", "recognize", and "realization" where British and New Zealand English require "behavioural", "recognise", and "realisation". These were corrected.

The third issue was the opening phrase "the invisible landscape of human attention", which read as generic and AI-generated rather than considered. It was replaced with "the fragmented, unpredictable nature of human attention", which is more specific to what the piece actually communicates.

One factual correction was also made: the draft said "over several weeks" when the data was collected over one week. That small inaccuracy would have been noticeable to anyone familiar with the project and was changed to "over one week".

The content of the statement was otherwise kept intact because it was well constructed. The process of refining with Claude was less about rewriting and more about editing, catching the specific issues that AI-generated drafts tend to introduce and fixing them so the statement sounds like a considered piece of writing rather than an automatically generated one.

The final project statement reads as follows:


*Quantifying the Fragmented Mind is an interactive digital visualisation that explores the fragmented, unpredictable nature of human attention. On a full-screen display, thirty-six sound events appear as organic, spiky entities that drift across a dark canvas using Perlin noise to create fluid, unpredictable movement. This work is built entirely from self-collected data. Over one week, I recorded personal observations of sudden sounds, noting their intensity and the specific internal thought fragments I experienced at the moment of interruption.*

*The project focuses on how our environments constantly interrupt us, often without our conscious realisation. I have placed this data within a speculative future scenario where attention is continuously monitored and quantified for productivity tracking or behavioural optimisation. In this scenario, everyday distractions are no longer just noise. They are metrics used to evaluate an individual's efficiency and focus levels.*

*The work critically engages with data representation by embracing data humanism, which views data as something shaped by personal perception rather than objective measurement. I have intentionally avoided traditional charts, labels, or axes. Instead, I treat the messiness of my subjective experience, including recording gaps where I was too distracted to capture a sound, as meaningful evidence of an interrupted mind rather than an error. By using my own voice for the recorded thought fragments, the piece challenges the idea that complex human experiences can be reduced to clean, numerical values.*

*My intended impact is to provoke you to question how much of our lives should be measured. Through interaction, moving your mouse to trigger ambient tones or clicking a shape to hear the original distraction followed by my internal thoughts, I want you to feel the richness of human experience that surveillance cannot touch. Ultimately, I want the audience to recognise that mind-wandering is not a failure to be optimised, and that not everything meaningful can be easily quantified.*


## Preparing for the Showcase

The showcase has not yet taken place. The remainder of this week is focused on making sure everything is ready to present.

The piece will run on a full-screen display. The project statement will be printed and displayed alongside it so visitors can read the context before or after interacting. The interaction requires no instruction: moving the mouse changes the sound, and clicking a shape triggers the distraction audio followed by the voice recording. The aim is for the piece to be self-explanatory enough that someone encountering it cold can engage with it without needing to ask what to do.

The main preparation tasks are confirming that all 22 voice recordings and 22 distraction sounds are loading correctly, that the sketch runs smoothly on the display machine, and that the volume levels are balanced so the sounds are audible without being overwhelming in a room with other people and other projects running simultaneously.

The project statement has been finalised and is ready to print. The GitHub repository is updated with the final sketch, all journal entries, and supporting documentation.


## Final Reflection

Looking back across the full project from week six to week twelve, the most significant shift was in how clearly the critical argument came to be stated. The early proposal and journal entries described the work in terms of what it does: recording sounds, encoding them visually, making them interactive. The later weeks pushed toward what the work argues: that the experience of distraction is too personal and too complex to be captured meaningfully by a monitoring system, and that a piece of data about someone's attention cannot substitute for the attention itself.

That shift happened gradually through the critique sessions, the project statement drafting process, and the week ten question about whether the project was arguing that distraction is bad or that mind-wandering deserves space. Committing to the second position changed how the visual language, the sound design, and the framing all needed to work together.

The sound layer, added in weeks nine and eleven, was the most significant technical development of the second half of the project. The decision to use my own voice for the thought recordings and sourced sounds from Freesound.org for the distractions was both practical and conceptually right. Practical because recording real interruptions as they happen is not possible. Conceptually right because the distinction between generic environmental sounds and specific personal responses mirrors the argument the piece is making: the sound that interrupts you could belong to anyone, but the thought it triggers is entirely yours.

The vibe coding approach used throughout, working with Claude to implement features, diagnose errors, and refine behaviour, was a significant part of how the technical work got done. It required a clear understanding of what each change was meant to achieve before prompting for it, and it required reading and testing the output rather than accepting it blindly. Used that way it accelerated development without removing the need for design judgment.

The project is not finished in the sense that a longer period would allow for more data collection, voice recording refinement, and testing with a wider range of users. But it is resolved in the sense that it is saying something specific and doing so coherently. That feels like the right place to end.


## References

Anthropic. (2026). *Claude* (Sonnet 4.6) [Large language model]. https://claude.ai

Google. (2025). *NotebookLM* [AI research and writing assistant]. https://notebooklm.google.com
