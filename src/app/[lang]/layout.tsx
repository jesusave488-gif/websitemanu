import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site, siteUrl } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects, { EffectsInit } from "@/components/Effects";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s — ${site.name}` },
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    // suppressHydrationWarning : la classe "js" est posée par EffectsInit avant React.
    <html lang={lang} className={`${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body id="top">
        <EffectsInit />
        <a href="#main" className="skip-link">
          {dict.nav.skip}
        </a>
        <Header locale={lang} dict={dict.nav} />
        <main id="main">{children}</main>
        <Footer dict={dict} />
        <Effects />
      </body>
    </html>
  );
}
