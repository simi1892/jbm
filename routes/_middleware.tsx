import { FreshContext } from "$fresh/server.ts";

import de from "../translation/de.json" with { type: "json" };
import en from "../translation/en.json" with { type: "json" };
import { Translation } from "../translation/types.ts";

export type State = {
  lang: "en" | "de";
  t: Translation;
};

export async function handler(req: Request, ctx: FreshContext<State>) {
  ctx.state.lang = "en";

  const cookieHeader = req.headers.get("cookie");
  if (cookieHeader) {
    if (cookieHeader.includes("lang=de")) {
      ctx.state.lang = "de";
    }
  }

  ctx.state.t = ctx.state.lang === "de" ? de : en;

  const res = await ctx.next();

  // Always set the cookie to ensure it's present
  res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);

  return res;
}
