import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, className, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("inline-flex items-center space-x-2 text-brand-blue font-semibold tracking-wider uppercase mb-4 text-sm", className)}>
      {align === "center" && <span className="w-8 md:w-12 h-[2px] bg-brand-blue"></span>}
      <span className={align !== "center" ? "w-12 h-[2px] bg-brand-blue" : ""}></span>
      <span>{title}</span>
      {align === "center" && <span className="w-8 md:w-12 h-[2px] bg-brand-blue"></span>}
    </div>
  );
}
