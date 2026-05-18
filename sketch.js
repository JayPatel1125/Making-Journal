//  Interruption Field
//  36 sound events as drifting organic rings
//  Data: sudden sounds & loud vehicles across one week
//
//  Interactions:
//    Hover  → ring resonates and pulses
//    Click  → releases a thought fragment
//    R key  → rescatter all events
//    C key  → clear thought trails

const THOUGHTS = [
  "what was that?", "should I check?", "I lost focus",
  "someone outside?", "hard to concentrate", "that was loud",
  "noise again", "where did that come from?", "so distracting",
  "back to work", "lost my train of thought", "again?",
  "I can't focus", "just a car", "probably nothing",
  "that sound...", "OK — refocus", "what?", "should I look?",
  "it's gone now", "was that inside?", "did someone arrive?"
];

// 36 events: 14 minor, 12 noticeable, 10 loud
const TYPE_POOL = [
  ...Array(14).fill(0),
  ...Array(12).fill(1),
  ...Array(10).fill(2)
];

let entities = [];
let trails   = [];

// Setup

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia");
  cursor(CROSS);
  buildEntities();
}

// Draw

function draw() {
  // Semi-transparent background creates motion trail effect
  background(13, 10, 8, 42);

  for (const e of entities) {
    driftEntity(e);
    const prox = constrain(1 - dist(mouseX, mouseY, e.x, e.y) / 130, 0, 1);
    drawEntity(e, prox);
  }

  drawTrails();
  drawUI();
}

// Build

function buildEntities() {
  trails = [];
  const types = shuffle([...TYPE_POOL]);

  entities = types.map((t, i) => ({
    t,
    x:   random(width),
    y:   random(height),
    nx:  random(100),
    ny:  random(100),
    spd: [0.35, 0.55, 0.75][t],
    th:  THOUGHTS[i % THOUGHTS.length],
    off: random(TWO_PI),
    pulse: 0,
    rings: buildRings(t)
  }));
}

function buildRings(t) {
  const count = [1, 2, 3][t];
  return Array.from({ length: count }, (_, ri) => ({
    r:        [13, 20, 28][t] + ri * 9,
    wFreq:    [0,  4,  8][t],
    wAmp:     [0,  1.0, 3.2][t],
    wPhase:   random(TWO_PI),
    rotOff:   random(TWO_PI),
    rotSpd:   (random() - 0.5) * 0.0025
  }));
}

// Entity movement

function driftEntity(e) {
  // Perlin noise steers direction smoothly
  const angle = noise(e.nx, e.ny) * TWO_PI * 2;
  e.x += cos(angle) * e.spd;
  e.y += sin(angle) * e.spd;
  e.nx += 0.0022;
  e.ny += 0.0022;

  // Wrap around canvas edges
  if (e.x < -40)          e.x = width  + 40;
  if (e.x > width  + 40)  e.x = -40;
  if (e.y < -40)          e.y = height + 40;
  if (e.y > height + 40)  e.y = -40;

  // Decay pulse
  if (e.pulse > 0) e.pulse *= 0.91;
}

// Draw entity

function drawEntity(e, prox) {
  // Colour per type: cream / amber / coral
  const COLS    = [[210, 202, 182], [196, 146, 28], [184, 54, 34]];
  const BASE_A  = [105, 148, 182];
  const WEIGHTS = [0.7, 1.35, 1.95];

  const c  = COLS[e.t];
  const al = BASE_A[e.t] + prox * 85 + e.pulse * 60;

  // Draw rings outermost first
  for (let ri = e.rings.length - 1; ri >= 0; ri--) {
    const rg = e.rings[ri];

    const breath = 1 + sin(frameCount * 0.016 + e.off + ri * 0.6) * 0.028;
    const R      = rg.r * breath * (1 + prox * 0.14) * (1 + e.pulse * 0.28);
    const rot    = frameCount * rg.rotSpd + rg.rotOff;

    stroke(c[0], c[1], c[2], constrain(al, 0, 255));
    strokeWeight(WEIGHTS[e.t]);
    noFill();

    if (rg.wAmp === 0) {
      // Minor: clean circle
      circle(e.x, e.y, R * 2);
    } else {
      // Noticeable / loud: organic wavy ring
      push();
      translate(e.x, e.y);
      rotate(rot);
      const steps = e.t === 2 ? 88 : 56;
      beginShape();
      for (let a = 0; a <= TWO_PI + 0.05; a += TWO_PI / steps) {
        const r = R + rg.wAmp * sin(a * rg.wFreq + rg.wPhase + frameCount * 0.011);
        vertex(cos(a) * r, sin(a) * r);
      }
      endShape(CLOSE);
      pop();
    }
  }

  // Core dot
  noStroke();
  fill(c[0], c[1], c[2], 115 + prox * 110);
  circle(e.x, e.y, 2.8 + prox * 2.5);
}

// Thought trails

function drawTrails() {
  for (let i = trails.length - 1; i >= 0; i--) {
    const t = trails[i];
    t.age++;

    const prog = constrain(t.age / 85, 0, 1);
    const al   = constrain(map(t.age, 0, 190, 215, 0), 0, 215);
    const cx   = lerp(t.x, t.ex, prog);
    const cy   = lerp(t.y, t.ey, prog);

    // Bezier drift line
    noFill();
    stroke(180, 172, 155, al * 0.5);
    strokeWeight(0.8);
    bezier(t.x, t.y, t.x + 55, t.y - 65, cx - 45, cy + 45, cx, cy);

    // Thought text
    noStroke();
    fill(205, 198, 180, al);
    textAlign(LEFT);
    textSize(12);
    textStyle(ITALIC);
    text('"' + t.th + '"', cx + 7, cy);
    textStyle(NORMAL);

    if (t.age > 190) trails.splice(i, 1);
  }
}

// UI overlay

function drawUI() {
  // Solid strip at bottom so hint text stays crisp
  noStroke();
  fill(13, 10, 8);
  rect(0, height - 28, width, 28);

  fill(120, 114, 104, 140);
  textAlign(LEFT);
  textSize(10);
  textStyle(ITALIC);
  text(
    "36 interruptions - hover to resonate · click to release thought · R reset · C clear",
    18, height - 11
  );
  textStyle(NORMAL);

  // Solid strip at top
  fill(13, 10, 8);
  rect(0, 0, width, 26);

  fill(162, 155, 140, 145);
  textAlign(CENTER);
  textSize(10);
  textStyle(ITALIC);
  text(
    "sudden sounds & loud - one week of interrupted attention",
    width / 2, 16
  );
  textStyle(NORMAL);
}

// Interactions 

function mousePressed() {
  for (const e of entities) {
    if (dist(mouseX, mouseY, e.x, e.y) < 32) {
      trails.push({
        x: e.x, y: e.y,
        th: e.th,
        age: 0,
        ex: e.x + random(-195, 195),
        ey: e.y + random(-115, 95)
      });
      e.pulse = 1;
      break;
    }
  }
}

function keyPressed() {
  if (key === "r" || key === "R") buildEntities();
  if (key === "c" || key === "C") trails = [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}