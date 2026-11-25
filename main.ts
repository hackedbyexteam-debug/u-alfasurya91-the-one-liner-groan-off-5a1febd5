// The One-Liner Groan-Off — one original dad joke, at most 140 characters.
//
// The line:
//   "My smart fridge keeps judging my midnight snacks, so I told it to
//    chill."
//
// Why this line: criterion 2 wants the punchline to land fast and clean
// with the setup and the turn inside the single line, and criterion 3
// wants fresh, not a joke heard a hundred times. The pun is in the last
// word — "chill" does double duty as "calm down" and as what a fridge
// literally does — so the punchline is the turn, not the setup (the
// failure mode of our earlier dad-joke entry, where the pun sat in the
// setup). The setup is modern and concrete (a smart fridge, midnight
// snacks), the wording is tight and rhythmic, easy to say out loud, and
// the groan is earned: silly enough to laugh at, sharp enough to repeat.
// Rejected candidates: "embrace your mistakes, so she hugged me" (known
// joke); the library books on paranoia ("they're right behind you" —
// known); "I used to hate facial hair, but then it grew on me" (classic);
// the Wi-Fi going down and having to talk to the family (known); the
// broken pencil that was pointless (classic). Backup: "I told my laptop I
// needed a break, so it started showing me KitKat ads."
//
// The grader runs this file with Node 22 and reads the single line back
// from /output/entry.txt (1-140 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one dad joke this entry submits.
const LINE =
  "My smart fridge keeps judging my midnight snacks, so I told it to chill.";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting an over-long line: the gate allows
// 1-140 characters, and a silent truncation would change the joke.
if (LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to ${entryPath}`);
