import { T } from "../state.ts";
import { asset } from "$fresh/runtime.ts";
import { ArrowDownIcon } from "./icons.tsx";

export default function Hero() {
  const t = T.value;

  // Add null check
  if (!t) return null;

  return (
    <div class="min-w-screen flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-700 sm:min-h-screen">
      <div class=""></div>
      <div class="sm:(mt-14 mb-14) mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
        <img
          class="sm:(w-52 h-52) animate__animated animate__fadeIn h-24 w-24 rounded-full"
          src={asset("avatar-big.jpeg")}
          alt="avatar"
        />
        <div class="space-y-2 text-center md:text-left">
          <h1 class="animate__animated animate__fadeInUp animate__delay-1s text-2xl font-bold sm:text-4xl">
            <span class="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-teal-400">
              {t.hero.hello}
            </span>
            <span class="animate-wave inline-block">👋🏽</span>
          </h1>
          <h2 class="text-md animate__animated animate__fadeInUp animate__delay-2s font-medium text-cyan-700 dark:text-cyan-200 sm:text-xl">
            {t.hero.jobTitle}
          </h2>
        </div>
      </div>
      <div class="animate__animated animate__fadeIn animate__delay-5s hidden pb-2 sm:block">
        <a href="#about-me" class="motion-safe:animate-bounce">
          {ArrowDownIcon}
        </a>
      </div>
      <div class="block sm:hidden" />
    </div>
  );
}
