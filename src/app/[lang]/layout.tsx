import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";
import Header from "@/src/components/header/Header";
import { getDictionary } from "@/src/lib/i18n";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header nav={dict.nav} lang={lang} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
