import { State } from "../routes/_middleware.tsx";

export default function Language({ lang }: { lang: State["lang"] }) {
  function toggleLanguage() {
    document.cookie = `lang=${lang === "en" ? "de" : "en"}; Path=/;`;
    location.reload();
  }

  return (
    <button
      class="hover:(text-gray-900 dark:text-gray-100) font-bold focus:outline-none"
      onClick={toggleLanguage}
    >
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
}
