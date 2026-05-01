import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehul Japanese Language Education Center",
  description:
    "Japan Career Pipeline Platform: Language, Visa, Job, and Life in Japan support.",
  keywords: [
    "Study in Japan from Bangladesh",
    "JLPT course Bangladesh",
    "SSW visa Japan",
  ],
  openGraph: {
    title: "Mehul Japanese Language Education Center",
    description:
      "Trusted gateway for study visa, job visa, and Japanese language mastery.",
    url: "https://mehul.com.bd",
    siteName: "Mehul Japanese Language Education Center",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
