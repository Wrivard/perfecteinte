interface SectionTaglineProps {
  text: string;
  light?: boolean;
  center?: boolean;
}

export function SectionTagline({ text, light = false, center = true }: SectionTaglineProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
      <span className={`block w-8 h-[2px] ${light ? "bg-accent" : "bg-accent"}`} />
      <span className={`text-xs uppercase tracking-[0.2em] font-semibold ${light ? "text-accent" : "text-accent"}`}>
        {text}
      </span>
    </div>
  );
}
