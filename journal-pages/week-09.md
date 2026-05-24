---
layout: default
---

# Week 09

[← Back to Home](../index.md)

## Documentation 

# Week 9 — Making Journal

## Critical Engagement

Week nine opened with a conceptual development session focused on what it actually means for a project to be critical. The slides framed "critical" not as negative or combative but as something closer to urgent, discerning, and caring. A critical work is one that casts new light on something, re-examines assumptions, challenges or disrupts the way things are normally understood, and tries to course-correct.

The framing that stuck with me was that the critical dimension of a project statement should articulate what is already embodied in the final artefact. That is a high bar. It is not enough to write a statement that sounds critical if the actual piece does not carry that charge when someone encounters it. The statement and the work need to be saying the same thing.

We looked at two reference works to think through what this means in practice.

The first was Mimi Onuoha's *The Library of Missing Datasets* (2016), a filing cabinet containing empty folders each labelled with a dataset that does not exist - people excluded from public housing due to criminal records, white children adopted by people of colour, the demographics of all Bitcoin users. The work draws attention to what data collection systems choose not to record, and what those absences reveal about social priorities and biases. The critical argument is embedded in the form: an empty folder labelled with something that should exist but doesn't is more powerful than any written explanation.

The second was *Xeno Computer 0.1: Labor* by Tega Brain and Sam Lavigne (2025). Working in pairs, we used the visitor prompts from the class to respond to the work: what data sources it uses, what future scenario it addresses, what it argues about data and power, and whether those arguments are present in the statement. That exercise was useful preparation for evaluating our own statements, because it forced a different kind of reading than we normally do with our own work.


## Project Statement: First Draft

The class activity was to draft a project statement using NotebookLM, feeding in the reflective proposal, journal entries from weeks 7 and 8, and other relevant sources. The prompt asked for 300 words in first person, addressing what the visualisation is, the data source, the subject matter and future scenario, how the work engages critically with data representation, and the intended impact.

The draft that came out of that process is below.

![alt text](<../assets/week-09/Screenshot 2026-05-24 at 9.36.55 PM (2).png>)
![alt text](<../assets/week-09/Screenshot 2026-05-24 at 9.37.05 PM (2).png>)

*My project, Quantifying the Fragmented Mind, is an interactive digital visualisation and a physical data object that explores the invisible landscape of human attention. On a full-screen display, thirty-six sound events appear as organic ring forms that drift across a dark canvas using Perlin noise to create fluid, lifelike movement. This digital piece is paired with a 3D-printed circular relief disc that uses a phyllotaxis spiral pattern to translate these same moments of distraction into a permanent, tactile form you can hold.*

*The work is built from a combination of self-collected and simulated data. I recorded personal observations of sudden sounds and loud vehicles over one week, noting the frequency, intensity, and the specific "thought fragments" I experienced at the moment of interruption. To ground the work in a broader context, I extended this dataset through simulation to represent how such a tracking system might scale over time or across multiple users.*

*The subject matter focuses on how our environments constantly interrupt us, often without our conscious realisation. I have placed this data within a speculative future scenario where attention is continuously monitored and quantified for productivity tracking or behavioural optimisation. In this scenario, everyday distractions are no longer just noise — they are metrics used to evaluate an individual's efficiency and focus levels.*

*This work critically engages with data representation by embracing "data humanism," which views data as something shaped by personal perception rather than pure objectivity. I have intentionally avoided traditional charts or labels; instead, I treat the "messiness" of my subjective experience — including recording gaps where I was too distracted to capture a sound — as meaningful evidence of an interrupted mind rather than an error. By including voice recordings of my internal thoughts, the piece challenges the idea that complex human experiences can be reduced to clean, numerical values.*

*My intended impact is to provoke a public audience to question how much of our lives should be measured. Through interaction — moving a mouse to trigger tones or clicking a ring to hear a recorded voice say "I lost focus" — I want viewers to feel the difference between "raw experience" and "optimised data". Ultimately, I want the audience to reflect on how data-driven systems often overlook human complexity and to recognise that not everything meaningful can be easily quantified.*


### Evaluating the Draft

After reading back through the draft, I made notes on what was working and what needed to be addressed.

**What is working well**

The statement covers all five required elements. It names the data source, describes both outputs, places the work in a speculative future scenario, and ends with a clear statement of intended impact. The phrase "meaningful evidence of an interrupted mind rather than an error" is good and worth keeping. The connection to data humanism is present and reasonably specific.

**What is missing or underdeveloped**

The statement does not yet say enough about the visual experience. "Thirty-six sound events appear as organic ring forms" describes what is happening technically but not what it feels like to encounter the piece. A viewer reading this before the showcase needs a clearer sense of what they are walking into. The 3D print direction is mentioned briefly but its conceptual role, the fact that it is meant to look like something a system produced rather than something a person made, is not in the statement at all. That is arguably the most critical dimension of the physical object and it is currently absent.

**What feels AI-like or overly generalised**

There are too many em dashes. The phrase "invisible landscape of human attention" is a bit much. "Fluid, lifelike movement" is vague. The final paragraph tells the reader what to feel and think rather than trusting the experience to do that work. In exhibition wall text especially, the statement should avoid prescribing the viewer's response.

**What still needs research**

The voice recordings are mentioned as a feature but are not yet implemented. I need to either record actual clips and build them into the sketch before the showcase, or remove that specific reference from the statement. Promising something that is not in the finished piece is worse than not mentioning it at all.

**One sentence committing to the direction**

This project uses 36 personal data events to question what is lost when lived experience becomes a legible, categorised, optimised record.


## Peer Share

After evaluating the drafts individually, we found partners and spent ten minutes sharing drafts and evaluation notes. The prompts were: what is clear and compelling, and what still needs to be developed or resolved.

The feedback I received was that the statement was coherent and the subject matter came through clearly. The provocation around surveillance and datafication landed. The main thing my partner flagged was the same thing I had noticed myself: the ending of the statement over-explains. Telling the audience to "reflect on how data-driven systems often overlook human complexity" is doing work that the piece should be doing on its own. A better ending would leave something open rather than delivering a conclusion.

They also asked whether the title *Quantifying the Fragmented Mind* was something I was committed to, because it sounds more academic than the rest of the work. That is worth thinking about before week 12.


## Making Sprint: Researching Sound for p5.js

For the making sprint I focused on the question that felt most unresolved after looking at the project statement: the voice recordings. The statement mentions clicking a ring to hear a recorded voice, but at this point the sketch only has synthesised tones and thought text. If the voice recordings are going to be in the final piece, I needed to understand how they would actually work in p5.js.

I spent the sprint time researching how p5.sound handles audio file loading and playback. The key function is `loadSound()`, which loads an audio file in preload() and returns a sound object that can be played, paused, or looped. The sound object also has an `isLoaded()` method that returns true once the file is ready, which is important because trying to play a file before it has loaded will throw an error.

The structure I was working toward:

```javascript
let voiceSounds = [];

function preload() {
  for (let i = 0; i < THOUGHTS.length; i++) {
    voiceSounds[i] = loadSound(`assets/voice_${i}.mp3`);
  }
}
```

Each sound file corresponds to one thought string in the THOUGHTS array. When an entity is clicked, the sketch looks up the entity's thought index and plays the matching voice file. The synthesised oscillator tones would play on hover, while the actual voice recording would fire on click alongside the visual thought trail.

The main challenge is that I have not yet recorded the voice clips. Knowing the architecture of how they would integrate was useful, but the actual recordings need to happen before the feature is live. I documented this as a clear next step rather than a resolved one.

## Independent Study

### Preparing the Week 10 Progress Report

The week nine independent study had two tasks: project development and preparing the five-minute progress report. I started with the progress report, which meant thinking carefully about what had changed since the previouse report and how to frame the current state of the project clearly and concisely.

The five minutes needed to cover: the updated p5.js sketch with the new shape language and behaviour changes from week eight, the project statement draft and where it stands, what the making sprint revealed about voice recording integration, and what is still unresolved heading into week ten.

I focused on being honest about what is not finished yet. The voice recordings are not implemented. The 3D print has not been produced. The statement needs revising. Naming those things clearly in a progress report is better than presenting the work as more complete than it is, especially going into a critique week.

### Adding Sound with Claude

The other main development task this week was implementing the sound additions to the p5.js sketch. I had researched the p5.sound architecture during the making sprint, so I had a clear enough picture of what needed to happen. I worked with Claude to build out the synthesised hover tones and the click envelope, using vibe coding in the same way I had for the week eight shape changes.

The sound system added three synthesised oscillators, one per interruption type, that play when the cursor is near an entity. The frequency and waveform differ by type: a low sine wave for minor events, a warmer triangle wave for noticeable events, and a harsher sawtooth wave for loud events. Volume scales with proximity so the tone grows as the cursor approaches. On click, a separate oscillator fires a short sharp envelope to mark the moment of interruption.

The implementation also includes a placeholder structure for the voice recordings. The `preload()` function and `playVoice()` function are in the code but commented out, ready to be activated once the actual audio files are recorded. That way the architecture is already in place and adding the recordings later is just a matter of creating the files and uncommenting the relevant lines.

```javascript
// Voice recording structure — ready to activate when files are recorded
// let voiceSounds = [];
//
// function preload() {
//   for (let i = 0; i < THOUGHTS.length; i++) {
//     voiceSounds[i] = loadSound(`assets/voice_${i}.mp3`);
//   }
// }
```

Working with Claude on this was similar to the week eight process. I described what I wanted clearly, Claude generated a working implementation, and I read through the output to make sure it was behaving the way I intended. The main thing I adjusted was the fade behaviour on the hover tones. The initial version cut the sound abruptly when the cursor moved away from an entity, which sounded jarring. I changed the amplitude to decay with a short fade time of 0.15 seconds rather than dropping instantly, which made the transition between sounds feel much smoother (Anthropic, 2026).

![alt text](<../assets/week-09/Screenshot 2026-05-24 at 9.34.55 PM.png>)

## Reference

Anthropic. (2026). *Claude* (Sonnet 4.6) [Large language model]. https://claude.ai
