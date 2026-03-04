import type { ResumeBasics } from "@/lib/types";
import { FadeIn } from "@/components/FadeIn";

interface HeroProps {
  basics: ResumeBasics;
}

export function Hero({ basics }: HeroProps) {
  return (
    <section className="pt-8 pb-4">
      <FadeIn>
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight mb-2">{basics.name}</h1>
            <p className="text-accent-500 font-medium mb-5 print:mb-3">{basics.label}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted mb-6 print:mb-3">
              {basics.email && (
                <a href={`mailto:${basics.email}`} className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <span>✉️</span> {basics.email}
                </a>
              )}
              {basics.url && (
                <a href={basics.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <span>🌐</span> {basics.url.replace(/^https?:\/\//, "")}
                </a>
              )}
              {basics.location?.city && (
                <span className="flex items-center gap-1.5">
                  <span>📍</span> {basics.location.city}, {basics.location.region}
                </span>
              )}
            </div>
            {basics.profiles && basics.profiles.length > 0 && (
              <div className="flex gap-3 mb-8 print:mb-4">
                {basics.profiles.map((p) => (
                  <a
                    key={p.network}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full border border-base text-muted hover:border-accent-500 hover:text-accent-500 transition-colors"
                  >
                    {p.network}
                  </a>
                ))}
              </div>
            )}
          </div>
          {basics.picture && (
            <img
              src={basics.picture}
              alt={basics.name}
              width={80}
              height={80}
              className="rounded-full w-20 h-20 object-cover border-2 border-[rgb(var(--border))] flex-shrink-0"
            />
          )}
        </div>
      </FadeIn>
      {basics.summary && (
        <FadeIn delay={0.1}>
          <p className="text-[rgb(var(--fg))]/80 leading-relaxed max-w-2xl">
            {basics.summary}
          </p>
        </FadeIn>
      )}
    </section>
  );
}
