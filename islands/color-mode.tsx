import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { MoonIcon, SunIcon, SystemIcon } from "../components/icons.tsx";

const modes = ["os", "dark", "light"] as const;
const opacities = ["opacity-100", "opacity-0", "opacity-0"];
const icons = [SystemIcon, MoonIcon, SunIcon];

export default function ColorMode() {
  const state = useSignal<(typeof modes)[number]>("os");

  function detectMode() {
    const localStorage = globalThis.localStorage; // Use globalThis instead of window
    const prefersDark =
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) && prefersDark)
    ) {
      document.documentElement.classList.add("dark");
      state.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      state.value = "light";
    }

    if (!("colorMode" in localStorage)) {
      state.value = "os";
    }
  }

  function toggle() {
    state.value = modes[(modes.indexOf(state.value) + 1) % modes.length];

    const localStorage = globalThis.localStorage;
    if (state.value === "os") {
      localStorage.removeItem("colorMode");
    } else {
      localStorage.colorMode = state.value;
    }

    const prefersDark =
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) && prefersDark)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(detectMode, []);

  return (
    <div
      class="hover:(text-gray-700 dark:text-gray-100) relative h-6 w-6 cursor-pointer sm:w-7"
      onClick={toggle}
    >
      {icons.map((Icon, i) => {
        /*
          Compute pos in opacities/angles that way:
              state		icon		i		indexOf		idx-i		(idx-i+L)mod L
              os		os			0		0			0			0
              os		dark		1		0			-1			2
              os		light		2		0			-2			1
              dark		os			0		1			1			1
              dark		dark		1		1			0			0
              dark		light		2		1			-1			2
              light		os			0		2			2			2
              light		dark		1		2			1			1
              light		light		2		2			0			0
        */
        const pos = (modes.indexOf(state.value) - i + modes.length) %
          modes.length;
        return (
          <div
            class={"absolute top-0 origin-bottom pb-1 transition duration-300 ease-linear " +
              `${opacities[pos]}`}
          >
            {Icon}
          </div>
        );
      })}
    </div>
  );
}
