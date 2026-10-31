import { Footer } from "./Footer";
import { Nav } from "./Nav";

type PageShellProps = {
  children: React.ReactNode;
  /** Extra top space when there is no full-screen hero (fixed nav clearance) */
  offsetNav?: boolean;
};

export function PageShell({ children, offsetNav = false }: PageShellProps) {
  return (
    <>
      <Nav />
      <main className={offsetNav ? "pt-[calc(env(safe-area-inset-top,0px)+88px)]" : undefined}>
        {children}
      </main>
      <Footer />
    </>
  );
}
