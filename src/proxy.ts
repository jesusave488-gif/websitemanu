import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";

/** Choisit la langue du visiteur à partir de son navigateur (FR par défaut). */
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find((item) => hasLocale(item.lang));
  return (preferred?.lang as Locale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  // Déjà préfixé par /fr ou /en : rien à faire.
  if (hasLocale(first)) return NextResponse.next();

  // Sinon on redirige : "/" → "/fr", "/projets/x" → "/fr/projets/x".
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Ignore les fichiers internes de Next, les images et les fichiers avec extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
