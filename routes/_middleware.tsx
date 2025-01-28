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
  if (
    req.headers.has("cookie") && req.headers.get("cookie")!.includes("lang")
  ) {
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=de")
      ? "de"
      : "en";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("de")) {
    ctx.state.lang = "de";
  } else {
    ctx.state.lang = "en";
  }
  ctx.state.t = ctx.state.lang === "de" ? de : en;
  const res = await ctx.next();
  if (setLangCookie) {
    res.headers.set(
      "Set-Cookie",
      `lang=${ctx.state.lang}; Path=/; HttpOnly; SameSite=Lax`,
    );
  }
  return res;
}
