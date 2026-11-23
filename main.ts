// Entry for make.fun's "One-Line Laugh Sprint" bounty.
// The program writes one original funny line about everyday life
// to /output/entry.txt.
//
// The winning line ("Fern Oversharing"): the setup is someone talking
// to their plants because the internet said it helps; the punchline is
// the fern leaning away from them like it's avoiding an oversharer.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I talk to my plants because the internet said it helps, and now the fern leans away from me like I've been oversharing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
