import type { Metadata } from "next";
import { Inter, Poppins, Russo_One } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nos Ludere Ut",
  description: "A gaming clan in CODM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${russo.variable} ${poppins.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-poppins)]">{children}</body>
    </html>
  );
}
