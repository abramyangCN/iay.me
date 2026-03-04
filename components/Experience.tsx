import type { ResumeWork } from "@/lib/types";
import { formatDateRange } from "@/lib/resume";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

interface ExperienceProps {
  items: ResumeWork[];
  title?: string;
  locale?: "en" | "zh";
}

export function Experience({ items, title = "Experience", locale = "en" }: ExperienceProps) {
  return (
    <section id="experience">
      <SectionHeader title={title} />
      <div className="space-y-10">
        {items.map((job, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="group relative pl-5 border-l-2 border-[rgb(var(--border))] hover:border-accent-500 transition-colors print:break-inside-avoid print:border-l print:pl-3 print:mb-3">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[rgb(var(--border))] group-hover:bg-accent-500 transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-semibold text-base">
                    {job.position}
                    <span className="text-muted font-normal"> · </span>
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
                        {job.name}
                      </a>
                    ) : (
                      <span>{job.name}</span>
                    )}
                  </h3>
                  {job.location && (
                    <p className="text-xs text-muted mt-0.5">{job.location}</p>
                  )}
                </div>
                <span className="text-xs text-muted whitespace-nowrap font-mono mt-0.5">
                  {formatDateRange(job.startDate, job.endDate, locale)}
                </span>
              </div>
              {job.summary && (
                <p className="text-sm text-muted mb-3">{job.summary}</p>
              )}
              {job.highlights && (
                <ul className="space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="text-sm flex gap-2">
                      <span className="text-accent-500 mt-1 flex-shrink-0">›</span>
                      <span className="text-[rgb(var(--fg))]/85">{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
