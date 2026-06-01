interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} space-y-5 sm:space-y-6`}>
      {eyebrow && (
        <div className="inline-block">
          <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              {eyebrow}
            </span>
          </div>
        </div>
      )}
      <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
