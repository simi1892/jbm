import { signal } from "@preact/signals";
import translation from "./translation/en.json" with { type: "json" };

export const T = signal(translation);