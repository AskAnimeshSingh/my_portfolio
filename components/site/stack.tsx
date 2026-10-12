"use client"

import { m } from "framer-motion"
import { useState } from "react"
import { stack } from "@/lib/data"
import { EASE, FadeUp, RevealWords, SectionLabel } from "./motion"

function Marquee({ items, reverse, duration = 45 }: { items: string[]; reverse?: boolean; duration?: number }) {
  const row = [...items, ...items]
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="marquee-track flex shrink-0 items-center gap-6 pr-6"
        style={{ ["--marquee-duration" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="display text-4xl text-paper/90 sm:text-5xl lg:text-6xl">{t}</span>
            <span className="serif-i text-3xl text-accent sm:text-4xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Stack() {
  const [active, setActive] = useState(0)
  const group = stack[active]

  return (
    <section id="stack" className="relative overflow-hidden py-28 sm:py-40">
      <div className="space-y-4">
        <Marquee items={["Laravel", "React", "Next.js", "MySQL", "Tailwind", "PHP", "REST APIs"]} />
        <Marquee items={["Payments", "Auth & Roles", "Admin Panels", "Booking Engines", "Motion"]} reverse duration={55} />
      </div>

      <div className="container-x mt-28">
        <SectionLabel index="04">Toolkit</SectionLabel>
        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-4xl sm:text-5xl">
              <RevealWords text="The tools" /> <RevealWords text="I reach for." className="serif-i text-muted" delay={0.1} />
            </h2>
            <FadeUp className="mt-10 flex flex-col">
              {stack.map((g, i) => (
                <button
                  key={g.title}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group flex items-center justify-between border-b hairline py-5 text-left"
                >
                  <span className={`text-2xl tracking-tight transition-colors duration-300 ${active === i ? "text-paper" : "text-paper/40 group-hover:text-paper/70"}`}>
                    {g.title}
                  </span>
                  <span className={`font-mono text-xs transition-colors ${active === i ? "text-accent" : "text-muted"}`}>
                    {String(g.items.length).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </FadeUp>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <m.p key={`d${active}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg leading-relaxed text-paper/60">
              {group.blurb}
            </m.p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item, i) => (
                <m.div
                  key={`${active}-${item.name}`}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-2xl border hairline bg-ink-2 p-5 transition-colors hover:border-accent/40"
                >
                  <p className="font-medium tracking-tight">{item.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted">{item.note}</p>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-expo group-hover:scale-x-100" />
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
