import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "Abraham Yang",
  description: "Senior Frontend Engineer — personal resume and portfolio.",
  metadataBase: new URL("https://iay.me"),
  openGraph: {
    title: "Abraham Yang",
    description: "Senior Frontend Engineer.",
    url: "https://iay.me",
    siteName: "iay.me",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen">
        <Nav />
        <main className="max-w-3xl mx-auto px-5 pb-24 pt-8">
          {children}
        </main>
        <footer className="text-center text-muted text-sm py-8 border-t border-base">
          Built with Next.js · Data from{" "}
          <a
            href="https://github.com/abramyang/Resume"
            className="text-accent-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume.json
          </a>
        </footer>
      </body>
    </html>
  );
}
