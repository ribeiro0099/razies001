import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raizesdobemloja.com"),
  title: "Raizes do Bem — 128 Receitas de Vó | E-book Digital",
  description:
    "128 receitas tradicionais de família: bolos fofinhos, almoços inesquecíveis e doces caseiros. E-book digital com acesso imediato por apenas R$ 17,99.",
  openGraph: {
    title: "Raizes do Bem — 128 Receitas de Vó",
    description:
      "Receitas tradicionais de família reunidas em um e-book digital simples e prático. Acesso imediato após a compra.",
    url: "https://www.raizesdobemloja.com",
    siteName: "Raizes do Bem",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/dona-rosa-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Raizes do Bem — 128 Receitas de Vó",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raizes do Bem — 128 Receitas de Vó",
    description:
      "128 receitas tradicionais de família em um e-book digital. Acesso imediato.",
    images: ["/dona-rosa-photo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
