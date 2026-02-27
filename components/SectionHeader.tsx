interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[rgb(var(--border))]" />
    </div>
  );
}
