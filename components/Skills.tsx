import type { ResumeSkill } from "@/lib/types";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

interface SkillsProps {
  items: ResumeSkill[];
  title?: string;
}

export function Skills({ items, title = "Skills" }: SkillsProps) {
  return (
    <section id="skills">
      <SectionHeader title={title} />
      <div className="space-y-5">
        {items.map((group, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5 print:break-inside-avoid">
              <span className="text-sm font-medium w-48 flex-shrink-0 text-[rgb(var(--fg))]">
                {group.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.keywords?.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-base text-[rgb(var(--fg))]/80 hover:border-accent-500/50 hover:text-accent-500 transition-colors cursor-default"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
