import { useState, type FormEvent } from "react";
import { Award, Braces, Briefcase, Code2, Download, ExternalLink, GraduationCap, Mail, MapPin, Phone, Send, Server, Sparkles, Target, Trophy, X, type LucideIcon } from "lucide-react";
import { achievements, certifications, education, experience, profile, projects, services, skills, socials, type Project } from "@/data/portfolio";
import { GfgIcon, GithubIcon, LeetcodeIcon } from "./icons";
import { socialList } from "./Hero";
import { Reveal, Section, Tag, btnGhost, btnPrimary } from "./ui";

function SubHead({ id, Icon, title }: { id: string; Icon: LucideIcon; title: string }) {
  return (
    <Reveal>
      <h3 id={id} className="mt-14 flex scroll-mt-24 items-center gap-2.5 text-xl font-semibold first:mt-0">
        <Icon className="h-5 w-5 text-primary" /> {title}
      </h3>
      <div className="mt-2 h-px w-12 bg-primary/50" />
    </Reveal>
  );
}

const serviceIcons: Record<string, LucideIcon> = {
  "Backend Development": Server,
  "REST API Development": Braces,
  "AI Applications": Sparkles,
  "DSA & Problem Solving": Target,
};

export function About() {
  const facts = [
    ["Degree", "B.Tech, AI & ML"],
    ["University", "Mohan Babu University"],
    ["CGPA", "8.6 / 10.0"],
    ["DSA", "350+ problems solved"],
  ];
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <Reveal><p className="text-lg leading-relaxed text-muted-foreground">{profile.summary}</p></Reveal>
        <Reveal delay={100}>
          <dl className="glass grid grid-cols-2 gap-px overflow-hidden rounded-xl">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-card p-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <SubHead id="what-im-doing" Icon={Server} title="What I'm Doing" />
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.title] ?? Sparkles;
          return (
            <Reveal key={s.title} delay={i * 60}>
              <div className="glass card-hover flex h-full gap-4 rounded-xl p-5">
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume" index="02" title="Resume">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="glow-orb pointer-events-none absolute -right-20 -top-20 h-56 w-56" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Get the full picture</h3>
              <p className="mt-1 max-w-lg text-sm text-muted-foreground">Education, experience, projects, skills and certifications — in a single PDF.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.resume} download="Ravada-Sanyasi-Naidu-Resume.pdf" className={btnPrimary}><Download className="h-4 w-4" /> Download Resume</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className={btnGhost}><ExternalLink className="h-4 w-4" /> Open in new tab</a>
            </div>
          </div>
        </div>
      </Reveal>

      <SubHead id="education" Icon={GraduationCap} title="Education" />
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80}>
            <div className="glass card-hover h-full rounded-xl p-5">
              <h4 className="font-semibold">{e.degree}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <div className="mt-4 flex justify-between font-mono text-xs"><span className="text-muted-foreground">{e.years}</span><span className="text-primary">{e.score}</span></div>
            </div>
          </Reveal>
        ))}
      </div>

      <SubHead id="experience" Icon={Briefcase} title="Experience" />
      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={e.company}>
            <Reveal>
              <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full border border-primary bg-background"><span className="h-1.5 w-1.5 rounded-full bg-primary" /></span>
              <div className="glass rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-semibold">{e.role}</h4>
                    <p className="flex items-center gap-1.5 text-sm text-primary"><Briefcase className="h-3.5 w-3.5" /> {e.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{e.duration}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">▹</span>{p}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <SubHead id="skills" Icon={Code2} title="Technical Skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 50}>
            <div className="glass card-hover h-full rounded-xl p-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-primary">{s.group}</h4>
              <div className="mt-4 flex flex-wrap gap-1.5">{s.items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Portfolio() {
  const cats = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categories)))];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);
  const list = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
  return (
    <Section id="portfolio" index="03" title="Portfolio">
      <div role="tablist" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {list.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
              <p className="font-mono text-[11px] text-primary">project_0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.short}</p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {p.features.slice(0, 4).map((f) => <li key={f}><span className="text-primary">✓</span> {f}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <button onClick={() => setActive(p)} className={btnPrimary}>Details</button>
                <a href={p.github} target="_blank" rel="noreferrer" className={btnGhost}><GithubIcon className="h-4 w-4" /> GitHub</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={btnGhost}><ExternalLink className="h-4 w-4" /> Live Demo</a>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}

function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="pm-title" onClick={onClose} onKeyDown={(e) => e.key === "Escape" && onClose()}
      className="animate-in fade-in fixed inset-0 z-[60] grid place-items-center bg-background/70 p-4 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="animate-in zoom-in-95 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-popover p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 id="pm-title" className="text-2xl font-semibold">{p.name}</h3>
          <button autoFocus onClick={onClose} aria-label="Close" className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">{p.description.map((d) => <p key={d}>{d}</p>)}</div>
        <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-primary">Features</h4>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">{p.features.map((f) => <li key={f}><span className="text-primary">✓</span> {f}</li>)}</ul>
        <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-primary">Tech stack</h4>
        <div className="mt-3 flex flex-wrap gap-1.5">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-8 flex flex-wrap gap-2">
          <a href={p.github} target="_blank" rel="noreferrer" className={btnPrimary}><GithubIcon className="h-4 w-4" /> View on GitHub</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={btnGhost}><ExternalLink className="h-4 w-4" /> Live Demo</a>}
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" index="04" title="Certifications & Achievements">
      <SubHead id="certs" Icon={Award} title="Certifications" />
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <div className="glass card-hover flex h-full flex-col rounded-xl p-5">
              <h4 className="font-semibold">{c.name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              {c.url && (
                <a href={c.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1 pt-4 font-mono text-xs text-primary hover:underline">
                  View certificate <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <SubHead id="achievements" Icon={Trophy} title="Achievements" />
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a} delay={i * 80}>
            <div className="glass flex h-full gap-4 rounded-xl p-5">
              <Trophy className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Profiles() {
  const items = [
    { name: "GitHub", handle: "NaiduRavada07676", href: socials.github, Icon: GithubIcon, note: "Source code for my projects" },
    { name: "LeetCode", handle: "Naidu2972", href: socials.leetcode, Icon: LeetcodeIcon, note: "DSA problem solving" },
    { name: "GeeksforGeeks", handle: "rsanyasisum9", href: socials.gfg, Icon: GfgIcon, note: "DSA practice & courses" },
  ];
  return (
    <Section id="profiles" index="05" title="Coding Profiles">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ name, handle, href, Icon, note }, i) => (
          <Reveal key={name} delay={i * 80}>
            <a href={href} target="_blank" rel="noreferrer" className="glass card-hover group flex h-full flex-col rounded-xl p-5">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" />
                <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{name}</h3>
              <p className="font-mono text-xs text-muted-foreground">@{handle}</p>
              <p className="mt-3 text-sm text-muted-foreground">{note}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formEl = e.currentTarget;
    const d = new FormData(formEl);
    if (d.get("_honey")) { setStatus("sent"); return; }
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: d.get("name"),
          email: d.get("email"),
          message: d.get("message"),
          _replyto: d.get("email"),
          _subject: "New message from your portfolio website",
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === "false") throw new Error();
      setStatus("sent");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  };
  const input = "w-full rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  return (
    <Section id="contact" index="06" title="Contact">
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-muted-foreground">Have an opportunity or want to talk backend engineering? My inbox is open.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-4 w-4 text-primary" /> {profile.email}</a></li>
            <li><a href="tel:+919392428385" className="flex items-center gap-3 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> {profile.phone}</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</li>
          </ul>
          <ul className="mt-6 flex gap-2">
            {socialList.map(({ label, href, Icon }) => (
              <li key={label}><a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-lg border border-border glass text-muted-foreground transition hover:text-primary"><Icon className="h-4 w-4" /></a></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div><label htmlFor="name" className="mb-1.5 block text-xs font-medium">Name</label><input id="name" name="name" required maxLength={100} className={input} /></div>
            <div><label htmlFor="email" className="mb-1.5 block text-xs font-medium">Email</label><input id="email" name="email" type="email" required maxLength={255} className={input} /></div>
            <div><label htmlFor="message" className="mb-1.5 block text-xs font-medium">Message</label><textarea id="message" name="message" required rows={5} maxLength={2000} className={input} /></div>
            <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full disabled:opacity-60`}><Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send message"}</button>
            <p role="status" className="text-center text-xs text-muted-foreground">
              {status === "sent" && "Thank you! Your message was sent successfully. I will get back to you soon."}
              {status === "error" && <>Couldn't send right now — email me at <a className="text-primary" href={`mailto:${profile.email}`}>{profile.email}</a>.</>}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Ravada Sanyasi Naidu</p>
        <p className="font-mono">Java · Spring Boot · AI/ML</p>
      </div>
    </footer>
  );
}
