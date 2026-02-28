import type { ResumeEducation, ResumeLanguage } from "@/lib/types";
import { formatDateRange } from "@/lib/resume";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

interface EducationProps {
  items: ResumeEducation[];
  languages?: ResumeLanguage[];
  title?: string;
  locale?: "en" | "zh";
}

export function Education({ items, languages, title = "Education", locale = "en" }: EducationProps) {
  return (
    <section id="education">
      <SectionHeader title={title} />
      <div className="space-y-6">
        {items.map((edu, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="font-semibold text-sm">
                  {edu.studyType}，{edu.area}
                </h3>
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent-500 transition-colors"
                  >
                    {edu.institution}
                  </a>
                ) : (
                  <p className="text-sm text-muted">{edu.institution}</p>
                )}
              </div>
              <span className="text-xs text-muted font-mono whitespace-nowrap">
                {formatDateRange(edu.startDate, edu.endDate, locale)}
              </span>
            </div>
          </FadeIn>
        ))}

        {languages && languages.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="pt-4 border-t border-base">
              <p className="text-xs text-muted uppercase tracking-wider mb-3 font-medium">Languages</p>
              <div className="flex flex-wrap gap-3">
                {languages.map((l) => (
                  <span key={l.language} className="text-sm">
                    <span className="font-medium">{l.language}</span>
                    {l.fluency && (
                      <span className="text-muted"> — {l.fluency}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
