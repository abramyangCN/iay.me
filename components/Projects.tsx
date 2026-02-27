import type { ResumeProject } from "@/lib/types";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

interface ProjectsProps {
  items: ResumeProject[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects">
      <SectionHeader title="Projects" />
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((project, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div className="group h-full rounded-xl border border-base hover:border-accent-500/50 bg-surface hover:shadow-md hover:shadow-accent-500/5 transition-all duration-200 p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">{project.name}</h3>
                  {project.entity && (
                    <p className="text-xs text-muted">{project.entity}</p>
                  )}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-500 transition-colors flex-shrink-0"
                    aria-label="View project"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  </a>
                )}
              </div>
              {project.description && (
                <p className="text-xs text-muted leading-relaxed flex-1">{project.description}</p>
              )}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-xs flex gap-1.5 text-[rgb(var(--fg))]/75">
                      <span className="text-accent-500 flex-shrink-0">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {project.keywords && project.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-base">
                  {project.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
