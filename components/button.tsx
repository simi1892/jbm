import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-2 py-1 border-2 rounded transition-colors bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 ${props.class || ""}`}
    />
  );
}