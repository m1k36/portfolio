import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piot Mike",
  description: "My personal portfolio",
  icons: {
    icon: "/logo.svg",
  },
};

// html/body are rendered in [lang]/layout.tsx so the lang attribute is dynamic
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children as React.ReactElement;
}
