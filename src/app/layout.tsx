import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blessings Heart Foundation",
    template: "%s | Blessings Heart Foundation",
  },
  description:
    "Blessings Heart Foundation empowers children, families, and communities through healthcare, education, food assistance, and compassionate community support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#11455A] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}