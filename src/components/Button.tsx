import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "sm";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block rounded-full border font-medium transition-[transform,background] duration-250 hover:-translate-y-0.5",
        size === "default" && "px-[26px] py-3.5 text-[15px]",
        size === "sm" && "px-[18px] py-2 text-[13px]",
        variant === "primary" &&
          "border-caramel bg-caramel text-ink hover:bg-[#d99a58]",
        variant === "ghost" &&
          "border-cream/40 bg-transparent text-cream hover:bg-cream/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
