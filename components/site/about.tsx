"use client"

import { animate, m, useInView } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { profile, stats } from "@/lib/data"
import { FadeUp, RevealWords, SectionLabel } from "./motion"

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  )
}

const principles = [
  { k: "Schema first", v: "I sketch the tables, relations and states before a single screen — UI follows data." },
  { k: "Roles are product", v: "Who can see and do what is designed up-front, enforced in middleware, not hidden buttons." },
  { k: "Motion with intent", v: "Animation explains state changes. If it doesn't help the user, it doesn't ship." },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="container-x">
        <SectionLabel index="01">About</SectionLabel>

        <h2 className="display mt-8 max-w-[18ch] text-4xl sm:text-5xl lg:text-6xl">
          <RevealWords text="I design the pixels" />{" "}
          <RevealWords text="and the plumbing." className="serif-i text-muted" delay={0.2} />
        </h2>

        <div className="mt-20 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12">
          <FadeUp className="flex flex-col justify-between rounded-3xl border hairline bg-ink-2 p-8 md:col-span-6 lg:col-span-7 lg:row-span-2">
            <p className="eyebrow">Who I am</p>
            <div className="space-y-5 text-base leading-relaxed text-paper/75 sm:text-lg">
              <p>
                I&apos;m <span className="text-paper">Animesh</span>, a full-stack developer based in {profile.location}. I work across the whole stack — from MySQL schemas and Laravel
                middleware to React interfaces and the micro-interactions that make them feel finished.
              </p>
              <p>
                Over the last couple of years I&apos;ve shipped booking engines, multi-panel approval systems,
                e-commerce stores and content platforms for real businesses — mostly as the one person responsible for
                both how it looks and how it works.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4 md:col-span-6 lg:col-span-5 lg:row-span-2">
            {stats.map((s, i) => (
              <FadeUp
                key={s.label}
                delay={0.06 * i}
                className="flex min-h-[170px] flex-col justify-between rounded-3xl border hairline bg-ink-2 p-6"
              >
                <span className="display text-5xl text-paper sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-4 text-sm text-muted">{s.label}</span>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="relative overflow-hidden rounded-3xl bg-accent p-8 text-ink md:col-span-6 lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">How I work</p>
            <ul className="mt-6 space-y-5">
              {principles.map((p, i) => (
                <li key={p.k} className="grid grid-cols-[2rem_1fr] gap-2">
                  <span className="font-mono text-xs text-ink/50">0{i + 1}</span>
                  <div>
                    <p className="text-lg font-semibold tracking-tight">{p.k}</p>
                    <p className="text-sm leading-relaxed text-ink/70">{p.v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="flex flex-col justify-between gap-6 rounded-3xl border hairline bg-ink-2 p-8 md:col-span-6 lg:col-span-7">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Education</p>
              <GraduationCap className="h-5 w-5 text-muted" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xl font-medium tracking-tight sm:text-2xl">{profile.education.degree}</p>
                <p className="mt-1 text-paper/60">{profile.education.school}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-sm text-muted">{profile.education.years}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.education.courses.map((c) => (
                <span key={c} className="rounded-full border hairline px-3 py-1 text-xs text-paper/60">
                  {c}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border hairline bg-ink-2 p-8 md:col-span-6 lg:col-span-5">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <m.div
              className="absolute right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-accent/40"
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="absolute right-[4.6rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_4px] shadow-accent/50" />
            <p className="eyebrow relative">Based in</p>
            <div className="relative">
              <p className="flex items-center gap-2 text-3xl font-medium tracking-tight">
                <MapPin className="h-6 w-6 text-accent" /> {profile.location}, India
              </p>
              <p className="mt-1 text-paper/60">Open to remote & relocation</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
