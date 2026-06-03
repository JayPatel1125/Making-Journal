---
layout: default
---

# Week 11

[← Back to Home](../index.md)

## Documentation 

# Week 11 - Making Journal

## Overview

Week eleven was focused on finalising the p5.js sketch. The core visual and interaction system was already in place from the previous weeks, so this week was about completing the sound layer, integrating real recordings, and resolving the remaining issues that had come out of testing and the week ten critique.


## Adding Voice Recordings

The most significant addition this week was integrating actual voice recordings for each of the 22 thought fragments. Rather than relying on the text-only display of thoughts drifting across the canvas, each entity now carries a real recorded voice. When a viewer clicks on a shape, the matching voice recording plays after the distraction sound finishes.

The recordings are my own voice, captured on my phone and saved as .m4a files. Each one corresponds directly to a thought in the THOUGHTS array, indexed 0 through 21:

- voice_0.m4a → "what was that?"
- voice_1.m4a → "where did that come from?"
- voice_2.m4a → "should I check?"
- voice_3.m4a → "was that inside?"
- voice_4.m4a → "did someone arrive?"
- voice_5.m4a → "that sound..."
- voice_6.m4a → "someone outside?"
- voice_7.m4a → "should I look?"
- voice_8.m4a → "I lost focus"
- voice_9.m4a → "I lost my train of thought"
- voice_10.m4a → "I can't focus"
- voice_11.m4a → "hard to concentrate"
- voice_12.m4a → "so distracting"
- voice_13.m4a → "again?"
- voice_14.m4a → "that was loud"
- voice_15.m4a → "noise again"
- voice_16.m4a → "back to work"
- voice_17.m4a → "probably nothing"
- voice_18.m4a → "just a car"
- voice_19.m4a → "it's gone now"
- voice_20.m4a → "OK, refocus"
- voice_21.m4a → "probably outside"

Using my own voice was important for the concept. The whole project is built on the idea that this data is personal and irreducibly mine. Having a machine-generated voice or text read those thoughts out would have undermined that. Hearing the actual voice of the person who was distracted changes how the piece communicates. It makes the internal experience of distraction feel present and immediate rather than abstracted.

The files were loaded using p5.sound's `loadSound()` function in `preload()`. One issue that came up early in the process was that the sketch was getting stuck on a loading screen. The cause was that `preload()` waits for every file to finish loading before the sketch starts, and if any file is missing or has the wrong path, it hangs indefinitely. The fix was to add error callbacks to each `loadSound()` call so that missing files are skipped gracefully rather than blocking everything:

```javascript
voiceSounds[i] = loadSound(
  `assets/voice_${i}.m4a`,
  () => {},
  () => console.log(`voice_${i} not found, skipping`)
);
```

![alt text](<../assets/week-11/Screenshot 2026-06-03 at 5.06.44 PM (2).png>)



## Distraction Sounds from Freesound.org

The second layer of sound added this week was the distraction sounds themselves. The concept is that when a viewer clicks an entity, they first hear the actual sound that caused the distraction, and then after it finishes they hear the thought that followed. The distraction sound comes first, the internal response comes second. That sequence mirrors the actual experience of being interrupted.

Recording these sounds myself was not feasible. The problem is one of reaction time. When a sound happens in real life, a car driving past, a knock at the door, footsteps outside, the moment it occurs and the moment you reach for a recording device are too far apart. By the time you could have recorded it, it is already gone. The nature of the data is that these sounds were unexpected interruptions, which is exactly what makes them impossible to pre-record.

Instead, I sourced the 22 distraction sounds from Freesound.org, a library of over 400,000 free sounds available under Creative Commons licences. The sounds were chosen to match each specific thought as closely as possible. Each file is named to match its corresponding thought index, so the car sound is paired with "just a car", the outdoor footsteps with "someone outside?", and so on.

Using found sounds for the distraction layer and personal recordings for the thought layer creates an interesting distinction within the piece. The distraction sounds are generic and external; they could belong to anyone's environment. The voice recordings are specific and internal; they belong to one person. That contrast reflects something true about how distraction works. The sounds that interrupt you are environmental and shared. The thoughts they trigger are yours alone.

The distraction sounds were capped at a maximum of 7 seconds of playback. Some of the files sourced from Freesound.org were much longer than needed, and letting them play in full before the voice played made the interaction feel slow and disconnected. The 7-second cap keeps the sequence tight while still giving enough of the sound for it to be recognisable:

```javascript
function playDistractionThenVoice(e) {
  const dSound = distractionSounds[e.thIndex];
  const vSound = voiceSounds[e.thIndex];

  if (dSound && dSound.isLoaded()) {
    dSound.play();

    const delay = min(dSound.duration() * 1000, 7000);

    setTimeout(() => { dSound.stop(); }, delay);

    setTimeout(() => {
      if (vSound && vSound.isLoaded()) {
        vSound.play();
      }
    }, delay + 300);

  } else if (vSound && vSound.isLoaded()) {
    vSound.play();
  }
}
```


## Other Fixes and Refinements

A few other issues were resolved during the finalisation process.

The hover oscillator was producing a persistent buzzing sound, particularly from the sawtooth waveform used for loud events. Sawtooth waves are inherently harsh and rich in harmonics, which is what caused the buzz. Changing all three waveforms to sine waves resolved it completely. Sine waves are the smoothest waveform and the hover tones now feel much more ambient and subtle, which suits the tone of the piece better anyway.

The `distractionSounds` variable was initially throwing a scope error because it had been declared inside a function rather than at the top of the sketch as a global variable. Declaring it at the top alongside `voiceSounds` fixed that immediately.

The m4a format for the voice recordings needed to be specified explicitly in the `loadSound` calls. The code had originally been written with `.mp3` in the file paths, but the recordings were saved as `.m4a` from the phone. Updating the extension in the path resolved the issue and all voice files loaded correctly. m4a is supported by all major browsers except Firefox, which is acceptable for a showcase setting where the browser can be controlled.


## Reflection

Adding real sound to the piece changed how it feels to interact with it significantly. Before the recordings were in place, clicking an entity produced text and a synthetic tone. Now it produces a real sound followed by a real voice, and the sequence of distraction then thought is much more direct and affecting. A viewer who clicks the car-shaped entity hears a car passing and then hears someone say "just a car" in the same moment of recognition and dismissal.

The piece is now doing something the earlier versions were not: it is recreating the actual experience of a moment rather than representing it abstractly. That is much closer to the argument the project is making, that this kind of lived, personal, temporal experience cannot be reduced to a data point without losing what matters about it.


## References

Anthropic. (2026). *Claude* (Sonnet 4.6) [Large language model]. https://claude.ai

Freesound. (n.d.). *Freesound* [Sound effects library]. https://freesound.org
