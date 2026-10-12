"use client"

import { m, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import { profile } from "@/lib/data"
import { EASE, Magnetic } from "./motion"
import { scrollToId, useLenis } from "./smooth-scroll"

const LOG_LINES = [
  { m: "POST", p: "/api/trip-request", s: 201, t: "38ms", note: "nearest driver offered" },
  { m: "GET", p: "/admin/dispatch", s: 200, t: "22ms", note: "role: super_admin" },
  { m: "POST", p: "/api/stripe/confirm", s: 200, t: "41ms", note: "payment intent verified" },
  { m: "POST", p: "/webhooks/hitpay", s: 200, t: "29ms", note: "donation receipted" },
  { m: "POST", p: "/login", s: 302, t: "64ms", note: "redirect by role" },
  { m: "GET", p: "/api/fare?zone=3", s: 200, t: "9ms", note: "fare engine" },
  { m: "POST", p: "/forms/generate", s: 202, t: "6ms", note: "AI job queued" },
  { m: "PATCH", p: "/api/cars/918/boost", s: 200, t: "17ms", note: "featured until +7d" },
  { m: "DELETE", p: "/cron/expired-offers", s: 204, t: "12ms", note: "re-dispatched" },
]

const methodColor: Record<string, string> = {
  GET: "text-sky-300",
  POST: "text-accent",
  PATCH: "text-amber-300",
  DELETE: "text-rose-300",
}

function RequestLog() {
  const [rows, setRows] = useState(() => LOG_LINES.slice(0, 5).map((l, i) => ({ ...l, id: i })))

  useEffect(() => {
    let n = 5
    const id = setInterval(() => {
      setRows((r) => [...r.slice(-4), { ...LOG_LINES[n % LOG_LINES.length], id: n++ }])
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full overflow-hidden rounded-2xl border hairline bg-ink-2/80 font-mono text-[11px] shadow-2xl backdrop-blur sm:text-xs">
      <div className="flex items-center justify-between border-b hairline px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/15" />
        </div>
        <span className="hidden text-muted sm:inline">tail -f storage/logs/requests.log</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> live
        </span>
      </div>
      <div className="relative h-[168px] px-4 py-3">
        {rows.map((r) => (
          <m.div
            key={r.id}
            initial={r.id < 5 ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center gap-3 whitespace-nowrap py-[5px]"
          >
            <span className={`w-12 ${methodColor[r.m]}`}>{r.m}</span>
            <span className="flex-1 truncate text-paper/80">{r.p}</span>
            <span className={r.s < 300 ? "text-emerald-300" : "text-amber-300"}>{r.s}</span>
            <span className="hidden w-12 text-right text-muted sm:inline">{r.t}</span>
            <span className="hidden w-40 truncate text-right text-muted xl:inline">{`// ${r.note}`}</span>
          </m.div>
        ))}
      </div>
    </div>
  )
}

function LocalTime() {
  const [time, setTime] = useState("")
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular-nums">{time || "--:--:--"}</span>
}

export default function Hero() {
  const lenis = useLenis()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const first = "Animesh".split("")
  const last = "Singh".split("")
  const delay = (i: number) => ({ "--d": `${i * 0.035}s` }) as CSSProperties

  return (
    <section id="home" ref={ref} className="relative flex flex-col overflow-hidden pt-24 sm:pt-28 lg:min-h-[100svh]">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <m.div style={{ opacity: fade }} className="container-x relative flex flex-1 flex-col">
        <div className="fade-up flex flex-wrap items-center justify-between gap-4 eyebrow" style={{ "--d": "0.1s" } as CSSProperties}>
          <span className="flex items-center gap-2 rounded-full border hairline px-3 py-1.5 normal-case tracking-normal text-paper/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px] shadow-emerald-400/60" />
            Available for full-time & freelance
          </span>
          <span>
            {profile.location}
            <span className="hidden sm:inline">
              {" "}
              — <LocalTime /> IST
            </span>
          </span>
        </div>

        <div className="mt-10 grid flex-1 items-end gap-10 pb-12 sm:mt-16 lg:mt-6 lg:grid-cols-12 lg:pb-14">
          <div className="lg:col-span-7">
            <p className="mb-6 max-w-md text-base leading-snug text-paper/70 sm:text-lg">
              Full-stack developer crafting{" "}
              <span className="serif-i text-xl text-paper sm:text-2xl">interfaces that feel alive</span> and
              backends that quietly do the hard work.
            </p>

            <div className="fade-up flex flex-wrap items-center gap-3" style={{ "--d": "0.25s" } as CSSProperties}>
              <Magnetic>
                <button
                  onClick={() => scrollToId(lenis, "work")}
                  className="group flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink"
                >
                  See selected work
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-45deg]" />
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.resume}
                  download="Animesh_Singh_Resume.pdf"
                  className="flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm text-paper/90 transition-colors hover:border-paper/40"
                >
                  <Download className="h-4 w-4" /> Résumé
                </a>
              </Magnetic>
              <div className="flex items-center gap-1 pl-1">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-paper"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-up lg:col-span-5" style={{ "--d": "0.35s" } as CSSProperties}>
            <RequestLog />
          </div>
        </div>
      </m.div>

      <m.h1
        style={{ y: nameY }}
        className="display relative select-none overflow-hidden whitespace-nowrap px-3 pb-[3vw] text-center text-[12vw] leading-[0.95] lg:text-[9vw]"
        aria-label="Animesh Singh"
      >
        {first.map((c, i) => (
          <span key={`f${i}`} className="inline-block overflow-hidden align-bottom" aria-hidden>
            <span className="rise" style={delay(i)}>
              {c}
            </span>
          </span>
        ))}
        <span className="inline-block w-[3vw]" />
        {last.map((c, i) => (
          <span key={`l${i}`} className="inline-block overflow-hidden align-bottom" aria-hidden>
            <span className="rise serif-i text-accent" style={delay(first.length + i)}>
              {c}
            </span>
          </span>
        ))}
      </m.h1>
    </section>
  )
}
