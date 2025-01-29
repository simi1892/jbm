import { FreshContext } from "$fresh/server.ts";

import de from "../translation/de.json" with { type: "json" };
import en from "../translation/en.json" with { type: "json" };
import { Translation } from "../translation/types.ts";

export type State = {
  lang: "en" | "de";
  t: Translation;
};

export async function handler(req: Request, ctx: FreshContext<State>) {
  let setLangCookie = true;

  // Default to English
  ctx.state.lang = "en";

  const cookieHeader = req.headers.get("cookie");
  if (cookieHeader) {
    const match = cookieHeader.match(/lang=(de|en)/);
    if (match) {
      ctx.state.lang = match[1] as "de" | "en";
      setLangCookie = false;
    }
  }

  // Set translation based on language
  ctx.state.t = ctx.state.lang === "de" ? de : en;

  const res = await ctx.next();

  // Set cookie if needed
  if (setLangCookie) {
    res.headers.set(
      "Set-Cookie",
      `lang=${ctx.state.lang}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`,
    );
  }

  return res;
}
