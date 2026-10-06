import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { GfgIcon, GithubIcon, LeetcodeIcon, LinkedinIcon } from "./icons";
import { btnGhost, btnPrimary } from "./ui";

export const socialList = [
  { label: "GitHub", href: socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedinIcon },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetcodeIcon },
  { label: "GeeksforGeeks", href: socials.gfg, Icon: GfgIcon },
];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState<string>(words[0] ?? "");
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const w = words[i] ?? "";
    const t = setTimeout(
      () => {
        if (!del && text === w) return setDel(true);
        if (del && text === "") { setDel(false); setI((i + 1) % words.length); return; }
        setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1));
      },
      !del && text === w ? 1800 : del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const role = useTyping(profile.roles);
  return (
    <section id="home" className="relative mx-auto grid md:min-h-[100svh] content-center w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[1.25fr_1fr]">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to software development opportunities
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          Hi, I'm <span className="text-gradient">Ravada Sanyasi Naidu</span>
        </h1>
        <p className="mt-5 h-8 font-mono text-base text-primary sm:text-lg" aria-live="polite">
          <span className="text-muted-foreground">&gt; </span>{role}<span className="caret">_</span>
        </p>
        <p className="mt-4 max-w-xl text-muted-foreground">
          B.Tech AI & ML student building secure, scalable backends with Java, Spring Boot, REST APIs and microservices.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className={btnPrimary}>View Projects <ArrowRight className="h-4 w-4" /></a>
          <a href={profile.resume} download="Ravada-Sanyasi-Naidu-Resume.pdf" className={btnGhost}><Download className="h-4 w-4" /> Download Resume</a>
        </div>
        <ul className="mt-8 flex gap-2">
          {socialList.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-lg border border-border glass text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-in fade-in zoom-in-95 duration-1000 mx-auto w-full max-w-sm">
        <div className="glass relative rounded-2xl p-3 shadow-2xl">
          <div className="flex items-center gap-1.5 px-2 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">profile.java</span>
          </div>
          <div className="grid place-items-center rounded-xl bg-secondary/60 p-6">
            <img src={profile.photo} alt="Portrait of Ravada Sanyasi Naidu" className="aspect-square w-full rounded-full object-cover ring-1 ring-border" width={600} height={600} />
          </div>
          <div className="space-y-1 px-2 pt-4 pb-1 font-mono text-xs">
            <p><span className="text-primary">role</span> <span className="text-muted-foreground">=</span> "Java Backend Developer";</p>
            <p><span className="text-primary">stack</span> <span className="text-muted-foreground">=</span> ["Spring Boot", "MySQL", "Kafka"];</p>
            <p className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3 w-3" /> {profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
