import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = ["about", "resume", "portfolio", "certifications", "profiles", "contact"];

const label = (l: string) => (l === "profiles" ? "Profiles" : l);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-mono text-sm font-medium text-foreground">
          <span className="text-primary">~/</span>naidu
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="rounded-md px-2.5 py-1.5 text-[13px] capitalize text-muted-foreground transition hover:text-foreground">
                {label(l)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="glass mx-4 mb-3 grid grid-cols-2 gap-1 rounded-xl p-3 lg:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm capitalize text-muted-foreground hover:bg-secondary hover:text-foreground">
                {l === "profiles" ? "Coding Profiles" : l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
