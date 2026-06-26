import { HTMLAttributes, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

export function Section({ children, id, className, size = "md", ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full px-4 md:px-6 lg:px-8", sizeStyles[size], className)}
      {...props}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("max-w-6xl mx-auto px-4 md:px-6 lg:px-8", className)}>{children}</div>;
}