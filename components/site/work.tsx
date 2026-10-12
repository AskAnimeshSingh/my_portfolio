"use client"

import { AnimatePresence, m, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ArrowUpRight, Database, Layers, Palette, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { otherProjects, projects, type Project } from "@/lib/data"
import { EASE, FadeUp, RevealWords, SectionLabel } from "./motion"
import { useLenis } from "./smooth-scroll"

function Pipeline({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[18px] h-px bg-line/10" />
      <m.div
        className="absolute top-[15px] h-[7px] w-[7px] rounded-full"
        style={{ background: accent, boxShadow: `0 0 14px 3px ${accent}` }}
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative grid gap-2" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0,1fr))` }}>
        {steps.map((s, i) => (
          <div key={s} className="flex flex-col items-center text-center">
            <span className="grid h-9 w-9 place-items-center rounded-full border hairline bg-ink font-mono text-[10px] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[11px] leading-tight text-paper/70 sm:text-xs">{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Mockup({ p }: { p: Project }) {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl border hairline sm:min-h-[260px]" style={{ background: `linear-gradient(140deg, ${p.accent}26, transparent 60%)` }}>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl border border-b-0 hairline bg-ink-2 shadow-2xl transition-transform duration-700 ease-expo group-hover:-translate-y-2">
        <div className="flex items-center gap-2 border-b hairline px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line/15" />
          <span className="h-2 w-2 rounded-full bg-line/15" />
          <span className="h-2 w-2 rounded-full bg-line/15" />
          <span className="ml-3 truncate rounded bg-line/5 px-2 py-0.5 font-mono text-[10px] text-muted">{p.url?.replace(/^https?:\/\//, "") ?? `${p.slug}.local`}</span>
        </div>
        <div className="grid grid-cols-[72px_1fr] gap-3 p-3">
          <div className="space-y-2">
            {p.backend.modules.slice(0, 6).map((m, i) => (
              <div key={m} className="h-2 rounded-full" style={{ background: i === 0 ? p.accent : "rgb(255 255 255 / 0.08)", width: `${90 - i * 8}%` }} />
            ))}
          </div>
          <div className="space-y-3">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{p.category}</p>
                <p className="text-sm font-medium tracking-tight">{p.title}</p>
              </div>
              <span className="rounded-full px-2 py-0.5 text-[9px] font-medium text-ink" style={{ background: p.accent }}>
                live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(p.metrics ?? []).slice(0, 3).map((m) => (
                <div key={m.label} className="rounded-lg border hairline p-2">
                  <p className="text-sm font-semibold">{m.value}</p>
                  <p className="truncate text-[9px] text-muted">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1">
              {Array.from({ length: 18 }).map((_, i) => (
                <m.span
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ background: i % 5 === 0 ? p.accent : "rgb(255 255 255 / 0.1)" }}
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${25 + ((i * 37) % 70)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: EASE, delay: i * 0.03 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({
  p,
  i,
  total,
  progress,
  stacked,
  onOpen,
}: {
  p: Project
  i: number
  total: number
  progress: MotionValue<number>
  stacked: boolean
  onOpen: () => void
}) {
  const start = i / total
  const scale = useTransform(progress, [start, 1], [1, stacked ? 1 - (total - i) * 0.03 : 1])
  const dim = useTransform(progress, [start, Math.min(start + 1 / total, 1)], [0, stacked && i !== total - 1 ? 0.5 : 0])

  return (
    <div className={stacked ? "sticky top-24" : ""} style={stacked ? { paddingTop: i * 14 } : undefined}>
      <m.article
        style={{ scale, transformOrigin: "top center" }}
        onClick={onOpen}
        data-cursor="Open"
        className="group relative cursor-pointer overflow-hidden rounded-[28px] border hairline bg-ink-2 p-5 sm:p-8"
      >
        <m.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-10 bg-ink" />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-6">
            <div className="flex items-center justify-between eyebrow">
              <span>
                <span style={{ color: p.accent }}>{String(i + 1).padStart(2, "0")}</span> / {p.category}
              </span>
              <span>{p.year}</span>
            </div>
            <h3 className="display mt-5 text-3xl sm:text-4xl xl:text-5xl">{p.title}</h3>
            <p className="serif-i mt-2 text-lg text-paper/50">{p.client}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper/70">{p.summary}</p>

            <div className="mt-6 rounded-2xl border hairline bg-ink/60 p-4 sm:p-5">
              <p className="eyebrow mb-5 flex items-center gap-2">
                <Database className="h-3.5 w-3.5" /> Request lifecycle
              </p>
              <Pipeline steps={p.backend.flow} accent={p.accent} />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
              {p.stack.slice(0, 6).map((s) => (
                <span key={s} className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-paper/60">
                  {s}
                </span>
              ))}
              <span className="ml-auto flex items-center gap-1 text-sm text-paper/80 transition-colors group-hover:text-accent">
                Case study <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </div>
          </div>
          <div className="hidden sm:block lg:col-span-6">
            <Mockup p={p} />
          </div>
        </div>
      </m.article>
    </div>
  )
}

function CaseStudy({ p, onClose }: { p: Project; onClose: () => void }) {
  const lenis = useLenis()
  useEffect(() => {
    lenis?.stop()
    document.body.style.overflow = "hidden"
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", esc)
    return () => {
      lenis?.start()
      document.body.style.overflow = ""
      window.removeEventListener("keydown", esc)
    }
  }, [lenis, onClose])

  return (
    <m.div className="fixed inset-0 z-[65]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />
      <m.div
        role="dialog"
        aria-modal
        aria-label={p.title}
        data-lenis-prevent
        className="absolute inset-y-0 right-0 w-full max-w-3xl overflow-y-auto border-l hairline bg-ink-2"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b hairline bg-ink-2/90 px-6 py-4 backdrop-blur sm:px-10">
          <span className="eyebrow">Case study · {p.year}</span>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border hairline hover:border-accent hover:text-accent" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-14 px-6 py-10 sm:px-10">
          <div>
            <p className="eyebrow" style={{ color: p.accent }}>
              {p.category}
            </p>
            <h3 className="display mt-4 text-4xl sm:text-5xl">{p.title}</h3>
            <p className="serif-i mt-2 text-2xl text-paper/50">{p.client}</p>
            <p className="mt-6 text-lg leading-relaxed text-paper/75">{p.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border hairline px-3 py-1 text-paper/70">Role: {p.role}</span>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-full px-3 py-1 font-medium text-ink" style={{ background: p.accent }}>
                  Visit live <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {p.metrics && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border hairline p-4">
                  <p className="display text-3xl">{m.value}</p>
                  <p className="mt-1 text-xs text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <section>
            <p className="eyebrow mb-6 flex items-center gap-2">
              <Database className="h-3.5 w-3.5" /> Under the hood
            </p>
            <div className="rounded-2xl border hairline bg-ink p-5">
              <Pipeline steps={p.backend.flow} accent={p.accent} />
            </div>
            <ul className="mt-6 space-y-4">
              {p.backend.highlights.map((h) => (
                <li key={h.title} className="grid gap-1 border-b hairline pb-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <span className="font-medium">{h.title}</span>
                  <span className="leading-relaxed text-paper/65">{h.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="eyebrow mb-6 flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Modules
            </p>
            <div className="flex flex-wrap gap-2">
              {p.backend.modules.map((m) => (
                <span key={m} className="rounded-lg border hairline bg-ink px-3 py-2 text-sm text-paper/80">
                  {m}
                </span>
              ))}
            </div>
            {p.backend.tables.length > 0 && (
              <div className="mt-6 overflow-hidden rounded-2xl border hairline bg-ink font-mono text-xs">
                <div className="border-b hairline px-4 py-2 text-muted">schema.sql — core tables</div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 p-4 sm:grid-cols-3">
                  {p.backend.tables.map((t) => (
                    <span key={t} className="text-paper/70">
                      <span style={{ color: p.accent }}>▸</span> {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section>
            <p className="eyebrow mb-6 flex items-center gap-2">
              <Palette className="h-3.5 w-3.5" /> Interface & design
            </p>
            <ul className="space-y-3">
              {p.design.map((d) => (
                <li key={d} className="flex gap-3 text-paper/70">
                  <span className="mt-2.5 h-1 w-3 shrink-0" style={{ background: p.accent }} />
                  {d}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="eyebrow mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border hairline px-3 py-1 font-mono text-xs text-paper/70">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>
      </m.div>
    </m.div>
  )
}

function OtherWork() {
  const [hover, setHover] = useState<number | null>(null)
  return (
    <div className="mt-32">
      <FadeUp className="flex items-end justify-between border-b hairline pb-6">
        <h3 className="display text-3xl sm:text-4xl">More <span className="serif-i text-muted">builds</span>
        </h3>
        <span className="eyebrow">{otherProjects.length} projects</span>
      </FadeUp>
      <ul onMouseLeave={() => setHover(null)}>
        {otherProjects.map((p, i) => (
          <FadeUp key={p.title} delay={i * 0.03}>
            <li
              onMouseEnter={() => setHover(i)}
              className={`group grid grid-cols-12 items-center gap-4 border-b hairline py-6 transition-opacity duration-300 ${hover !== null && hover !== i ? "opacity-40" : ""}`}
            >
              <span className="col-span-1 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div className="col-span-11 sm:col-span-5">
                <p className="text-xl tracking-tight transition-transform duration-500 ease-expo group-hover:translate-x-3 sm:text-2xl">{p.title}</p>
                <p className="mt-1 text-sm text-muted sm:hidden">{p.kind}</p>
              </div>
              <p className="col-span-12 text-sm leading-relaxed text-paper/60 sm:col-span-4 sm:col-start-7">{p.note}</p>
              <div className="col-span-12 flex flex-wrap gap-1.5 sm:col-span-2 sm:justify-end">
                {p.stack.slice(0, 2).map((s) => (
                  <span key={s} className="rounded-full border hairline px-2 py-0.5 font-mono text-[10px] text-paper/60">
                    {s}
                  </span>
                ))}
              </div>
            </li>
          </FadeUp>
        ))}
      </ul>
    </div>
  )
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [open, setOpen] = useState<Project | null>(null)
  const [stacked, setStacked] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 720px)")
    const sync = () => setStacked(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])
  const close = useCallback(() => setOpen(null), [])

  return (
    <section id="work" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel index="02">Selected work</SectionLabel>
            <h2 className="display mt-8 max-w-[14ch] text-4xl sm:text-5xl lg:text-6xl">
              <RevealWords text="Products in" /> <RevealWords text="production." className="serif-i text-muted" delay={0.15} />
            </h2>
          </div>
          <FadeUp className="max-w-sm text-paper/60">
            Real client systems — each one shown with the request lifecycle, modules and schema that power it. Click any
            card for the full case study.
          </FadeUp>
        </div>

        <div ref={ref} className="relative mt-14 space-y-6 sm:mt-20 lg:space-y-[8vh] lg:pb-[6vh]">
          {projects.map((p, i) => (
            <Card key={p.slug} p={p} i={i} total={projects.length} progress={scrollYProgress} stacked={stacked} onOpen={() => setOpen(p)} />
          ))}
        </div>

        <OtherWork />
      </div>

      <AnimatePresence>{open && <CaseStudy key={open.slug} p={open} onClose={close} />}</AnimatePresence>
    </section>
  )
}
