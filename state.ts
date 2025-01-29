import { signal } from "@preact/signals";
import { Translation } from "./translation/types.ts";

export const T = signal<Translation | null>(null);
