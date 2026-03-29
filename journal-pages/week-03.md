---
layout: default
---

# Week 03

[← Back to Home](../index.md)

## Documentation 


## Overview

This week focused on working with **live data** using the command line and APIs. The goal was to explore how data can be retrieved in real-time and used as a material for design.

I experimented with `curl` to access live data streams such as weather information, ASCII animations, and dictionary definitions. This helped me understand how raw data can be accessed without using a browser interface.


## Experiment 3: Live Data

### 1. ASCII Live Data

I used the following command in the terminal:

```
curl ascii.live/earth
```

This produced a live ASCII animation of the Earth. The data was streamed in real time from a remote server.

**Reflection:**
This was interesting because it showed how data can be visualised in a very minimal way using just text. It also helped me understand that live data is constantly updating rather than static.


### 2. Weather Data

I retrieved weather data using:

```
curl wttr.in/Auckland
```


I also experimented with formatting:

```
curl "wttr.in/Auckland?format=%l:+%t+%c"
```

This returned a simplified output showing location, temperature, and condition.

**Reflection:**
This was more useful compared to ASCII because it provides real-world data. I found it interesting how parameters can filter the output, making it more readable and usable for design.


### 3. Dictionary API (JSON Data)

I used:

```
curl https://api.dictionaryapi.dev/api/v2/entries/en/design
```

This returned structured JSON data.

**Reflection:**
The JSON format was harder to read, but I understand that it is designed for machines rather than humans. This made me realise how important it is to process and visualise data when designing.


## Extending to p5.js (Live Data Visualisation)

To build on the terminal experiments, I connected live weather data to a p5.js sketch using an API. This allowed me to translate real-time data into visual elements.

In the sketch:

* Temperature controls the sky colour and sun size.
* Wind speed controls the movement of particles.
* Live data updates dynamically over time.


**Reflection:**
This shifted my understanding from simply retrieving data to designing with it. By mapping data to visual variables, the information became more engaging and easier to interpret. It demonstrated how live data can drive generative and interactive design outcomes.

## Use of AI / Vibe Coding

To extend what was covered in class, I used ChatGPT as part of a “vibe coding” approach to further develop my p5.js sketch.

In class, I learned how to retrieve live data using curl, but I needed support in translating that data into a more refined visual system. ChatGPT helped me explore how to connect APIs to p5.js and expand the sketch with animation and interaction.

Rather than copying code directly, I used it iteratively to:

- Understand how loadJSON() works.
- Connect live data to visual elements.
- Refine animation and behaviour.
- Troubleshoot and improve functionality.

**Reflection:**
Using AI as a support tool helped bridge the gap between technical knowledge and creative application. I still needed to interpret and adapt the code myself, which reinforced my understanding. This showed that AI is most effective when used as a collaborative design tool rather than a shortcut.

## Key Learnings

* Live data is dynamic and constantly updating
* APIs allow access to raw data instead of full web pages
* `curl` is a simple tool to retrieve data from the internet
* JSON is a structured format used widely for data exchange
* Data can be filtered and customised using parameters


## Application to Design

I extended my experiment by connecting live weather data to a p5.js sketch. Instead of displaying data as text, I translated it into visual elements. Temperature influenced the sky colour and sun size, while wind speed controlled the movement of particles across the screen.

This made the data more engaging and easier to interpret visually. It also shifted my approach from simply retrieving data to designing with it. The outcome demonstrates how live data can drive generative visuals and create dynamic user experiences.


## What I Would Improve

If I had more time, I would:

* Add user interaction (e.g. changing location)
* Explore more APIs beyond weather data
* Improve the visual design and layout of the sketch
* Integrate the sketch more seamlessly into my journal site


## Conclusion

This experiment helped me understand how to access and work with live data. It shifted my thinking from just viewing data to actually using it in design. I now see APIs as a powerful tool for creating interactive and meaningful design outcomes.


## Images & Media

![alt text](<../assets/week-03/Screenshot 2026-03-30 at 10.46.32 AM.png>)
![alt text](<../assets/week-03/Screenshot 2026-03-30 at 10.44.24 AM.png>)
![alt text](<../assets/week-03/Screenshot 1.png>)
![alt text](<../assets/week-03/Screenshot 2.png>)
![alt text](<../assets/week-03/Weather GIf.gif>)
