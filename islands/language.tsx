import { State } from "../routes/_middleware.tsx";

export default function Language({ lang }: { lang: State["lang"] }) {
  function toggleLanguage() {
    const newLang = lang === "en" ? "de" : "en";
    document.cookie = `lang=${newLang}; Path=/; Max-Age=31536000; SameSite=Lax`;
    globalThis.location.reload();
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
