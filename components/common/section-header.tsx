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
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <div className="inline-block mb-6">
          <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              {eyebrow}
            </span>
          </div>
        </div>
      )}
      <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
