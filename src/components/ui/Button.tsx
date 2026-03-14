import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  icon = false,
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-3 whitespace-nowrap text-small font-medium tracking-wide transition-all duration-300",
    variant === "primary" &&
      "bg-accent text-offwhite hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20",
    variant === "secondary" &&
      "border border-charcoal/20 text-charcoal hover:border-accent hover:bg-accent hover:text-offwhite",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
