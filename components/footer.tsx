import { asset } from "$fresh/runtime.ts";

export default function Footer() {
  return (
    <footer class="absolute bottom-0 h-96 w-full bg-gray-100 dark:bg-gray-700 md:h-48">
      <div class="mx-auto flex max-w-screen-md flex-col gap-8 px-2 py-8 text-sm md:flex-row md:gap-16">
        <div class="flex-1">
          <div class="flex items-center">
            <a
              class="text-2xl font-bold text-gray-700 dark:text-gray-300"
              href="/"
            >
              Jana Bachl
            </a>
          </div>
        </div>

        <div class="space-y-2 text-gray-600 dark:text-gray-400 md:text-right">
          <div class="text-sm">
            Copyright © {new Date().getFullYear()} Simon Egli
            <br />
          </div>

          <a
            href="https://fresh.deno.dev"
            target="_blank"
            class="mt-3 flex items-center gap-1 md:justify-end"
          >
            <img
              src={asset("/fresh-logo.svg")}
              alt="Fresh logo"
              class="h-6 w-6"
            />
            Made with <span class="font-bold">Fresh</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
