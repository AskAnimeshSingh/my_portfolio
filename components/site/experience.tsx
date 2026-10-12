"use client"

import { m, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { experience } from "@/lib/data"
import { FadeUp, RevealWords, SectionLabel } from "./motion"

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="relative py-28 sm:py-40">
      <div className="container-x">
        <SectionLabel index="03">Experience</SectionLabel>
        <h2 className="display mt-8 max-w-[16ch] text-4xl sm:text-5xl lg:text-6xl">
          <RevealWords text="Where I've" /> <RevealWords text="shipped." className="serif-i text-muted" delay={0.15} />
        </h2>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line/10 md:left-[calc(25%+7px)]" />
          <m.div style={{ height }} className="absolute left-[7px] top-2 w-px origin-top bg-accent md:left-[calc(25%+7px)]" />

          <div className="space-y-20">
            {experience.map((job) => (
              <div key={job.company} className="relative grid gap-6 md:grid-cols-4">
                <FadeUp className="pl-10 md:pl-0">
                  <p className="font-mono text-sm text-accent">{job.period}</p>
                  <p className="mt-1 text-sm text-muted">
                    {job.location} · {job.type}
                  </p>
                </FadeUp>

                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-ink md:left-[25%]" />

                <FadeUp delay={0.1} className="pl-10 md:col-span-3 md:pl-16">
                  <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{job.role}</h3>
                  <p className="serif-i mt-1 text-xl text-paper/60">{job.company}</p>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{job.summary}</p>
                  <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-paper/70">
                        <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span key={s} className="rounded-full border hairline px-3 py-1 font-mono text-xs text-paper/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
