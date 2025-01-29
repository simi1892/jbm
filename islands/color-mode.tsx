import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { MoonIcon, SunIcon, SystemIcon } from "../components/icons.tsx";

const modes = ["os", "dark", "light"] as const;
const opacities = ["opacity-100", "opacity-0", "opacity-0"];
const icons = [SystemIcon, MoonIcon, SunIcon];

export default function ColorMode() {
  const state = useSignal<(typeof modes)[number]>("os");

  function applyMode(mode: (typeof modes)[number]) {
    const prefersDark =
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    const localStorage = globalThis.localStorage;

    const shouldBeDark = mode === "dark" ||
      (mode === "os" && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (mode === "os") {
      localStorage.removeItem("colorMode");
    } else {
      localStorage.colorMode = mode;
    }
  }

  function detectMode() {
    const localStorage = globalThis.localStorage;
    if ("colorMode" in localStorage) {
      state.value = localStorage.colorMode as (typeof modes)[number];
    } else {
      state.value = "os";
    }
    applyMode(state.value);
  }

  function toggle() {
    const newState = modes[(modes.indexOf(state.value) + 1) % modes.length];
    state.value = newState;
    applyMode(newState);
  }

  useEffect(() => {
    detectMode();

    const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (state.value === "os") {
        applyMode("os");
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      class="hover:(text-gray-700 dark:text-gray-100) relative h-6 w-6 cursor-pointer sm:w-7"
      onClick={toggle}
    >
      {icons.map((Icon, i) => {
        const pos = (modes.indexOf(state.value) - i + modes.length) %
          modes.length;
        return (
          <div
            key={i}
            class={`absolute top-0 origin-bottom pb-1 transition duration-300 ease-linear ${
              opacities[pos]
            }`}
          >
            {Icon}
          </div>
        );
      })}
    </div>
  );
}
