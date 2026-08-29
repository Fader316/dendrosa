import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dendrosa - Monitor. Detect. Keep Online.",
  description: "Dendrosa monitors your servers, ports and services and helps you understand what may be causing an outage.",
};
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
    <html lang="en" className="dark">
      <Script
        defer
        data-domain="portscope-five.vercel.app"
        src="https://plausible.io/js/script.js"
      />
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}