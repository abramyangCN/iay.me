"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const enLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Interests",  href: "#interests" },
];

const zhLinks = [
  { label: "经历", href: "#experience" },
  { label: "项目", href: "#projects" },
  { label: "技能", href: "#skills" },
  { label: "教育", href: "#education" },
  { label: "爱好", href: "#interests" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const links = isZh ? zhLinks : enLinks;

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[rgb(var(--bg))]/80 backdrop-blur border-b border-base shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href={isZh ? "/zh" : "/"} className="font-semibold text-sm tracking-tight hover:text-accent-500 transition-colors">
          iay.me
        </Link>
        <div className="flex items-center gap-5">
          <ul className="hidden sm:flex items-center gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted hover:text-[rgb(var(--fg))] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Language switcher */}
          <Link
            href={isZh ? "/" : "/zh"}
            className="text-sm text-muted hover:text-[rgb(var(--fg))] transition-colors px-1"
            aria-label={isZh ? "Switch to English" : "切换为中文"}
          >
            {isZh ? "EN" : "中文"}
          </Link>
          {/* Print / Save PDF */}
          <button
            onClick={() => window.print()}
            aria-label={isZh ? "保存为 PDF" : "Save as PDF"}
            title={isZh ? "保存为 PDF (A4)" : "Save as PDF (A4)"}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-surface transition-colors text-muted hover:text-[rgb(var(--fg))] print:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-surface transition-colors text-muted hover:text-[rgb(var(--fg))]"
          >
            {dark ? (
              // Sun
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              // Moon
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

