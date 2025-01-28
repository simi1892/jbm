import { ComponentChildren } from "preact";
import { T } from "../state.ts";
import {
  PDFFileIcon
} from "./icons.tsx";
import { Translation } from "../translation/types.ts";
import { Button } from "./Button.tsx";

type EduxProps = {
  title: string;
  date: string;
  text?: string | string[];
};
function Edux(props: EduxProps) {
  return (
    <div>
      <div class="flex flex-col text-lg md:flex-row md:justify-between">
        <p class="text-gray-600 dark:text-gray-400 md:order-2 md:text-right">
          {props.date}
        </p>
        <h3 class="font-medium md:order-1">
          {props.title}
        </h3>
      </div>
      {props.text && (
        <p class="whitespace-pre-wrap text-gray-600 dark:text-gray-400">
          {typeof props.text === "string" ? props.text : props.text.join("\n")}
        </p>
      )}
    </div>
  );
}

type SkillProps = {
  icon: ComponentChildren;
  title: string;
  level: number;
};
function Skill(props: SkillProps) {
  return (
    <div class="flex items-center justify-between gap-1 text-lg font-medium">
      {props.icon}
      <span class="flex-1">{props.title}</span>
      <span class="text-gray-600 dark:text-gray-400">{props.level}</span>
    </div>
  );
}

function GetResume() {
  const t = T.value!;
  return (
    <Button>
      <a class="flex gap-1" href="/Resume_Guillaume_Comte.pdf" target="_blank">
        {PDFFileIcon}
        {t.me.get}
      </a>
    </Button>
  );
}

export default function Me() {
  const t = T.value!;
  return (
    <section id="about-me" class="scroll-mt-16">
      <div class="hidden lg:flex justify-end mb-2">
        <GetResume />
      </div>
      <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
        <div class="flex justify-between gap-2 flex-wrap">
          <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.titles.aboutme}
          </h1>
          <div class="block lg:hidden">
            <GetResume />
          </div>
        </div>
        <div class="space-y-2">
          {t.me.intro.map((p) => (
            <p class="text-justify">{p}</p>
          ))}
        </div>
        <Experience {...t.me.experience} />
        <Education {...t.me.education} />
      </div>
    </section>
  );
}

function Experience(props: Translation["me"]["experience"]) {
  return (
    <>
      <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
        {props.title}
      </h2>
      <ul class="space-y-2">
        {props.edux.map(({ title, date, text }) => (
          <li>
            <Edux {...{ title, date, text }} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Education(props: Translation["me"]["education"]) {
  return (
    <>
      <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
        {props.title}
      </h2>
      <ul class="space-y-2">
        {props.edux.map(({ title, date, text }) => (
          <li>
            <Edux {...{ title, date, text }} />
          </li>
        ))}
      </ul>
    </>
  );
}
