import { State } from "../routes/_middleware.tsx";

export default function Language({ lang }: { lang: State["lang"] }) {
  return (
    <button
      class="hover:(text-gray-900 dark:text-gray-100) font-bold focus:outline-none"
      onClick={() => {
        document.cookie = `lang=${lang === "en" ? "de" : "en"}`;
        location.reload();
      }}
    >
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
}
