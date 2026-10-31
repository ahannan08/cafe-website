import Link from "next/link";
import { Button } from "./Button";

export function Nav() {
  return (
    <header className="nav-pill fixed top-[calc(env(safe-area-inset-top,0px)+14px)] left-1/2 z-20 flex w-[min(1100px,calc(100%-28px))] -translate-x-1/2 items-center justify-between rounded-full border border-cream/16 bg-ink/35 py-2 pr-2.5 pl-6 text-cream backdrop-blur-[14px]">
      <Link
        href="#home"
        className="font-serif text-[22px] tracking-[-0.02em] no-underline"
      >
        Brew<em>&amp;</em>Bean
      </Link>
      <nav className="hidden items-center gap-[30px] text-sm md:flex">
        <Link href="#home" className="opacity-80 transition-opacity hover:opacity-100">
          Home
        </Link>
        <Link href="#offer" className="opacity-80 transition-opacity hover:opacity-100">
          Why us
        </Link>
        <Link href="#reviews" className="opacity-80 transition-opacity hover:opacity-100">
          Reviews
        </Link>
        <Link href="#visit" className="opacity-80 transition-opacity hover:opacity-100">
          Visit
        </Link>
      </nav>
      <Button href="#visit" size="sm">
        Reserve a table
      </Button>
    </header>
  );
}
