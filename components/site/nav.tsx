"use client"

import { AnimatePresence, m, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { EASE, Magnetic } from "./motion"
import { scrollToId, useLenis } from "./smooth-scroll"

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
]

export default function Nav() {
  const lenis = useLenis()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(v > prev && v > 400 && !open)
    setScrolled(v > 40)
  })

  const go = (id: string) => {
    setOpen(false)
    lenis?.start()
    scrollToId(lenis, id)
  }

  const toggle = () => {
    setOpen((o) => {
      if (!o) lenis?.stop()
      else lenis?.start()
      return !o
    })
  }

  return (
    <>
      <m.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div
          className={`container-x flex h-16 items-center justify-between transition-colors duration-500 sm:h-20 ${
            scrolled && !open ? "bg-ink/70 backdrop-blur-xl" : ""
          }`}
        >
          <button onClick={() => go("home")} className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-paper font-mono text-xs font-bold text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              AS
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              Animesh Singh<span className="text-muted"> / Full-stack</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l, i) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group relative overflow-hidden rounded-full px-3 py-2 text-sm xl:px-4 text-paper/70 transition-colors hover:text-paper"
              >
                <span className="mr-1 hidden font-mono text-[10px] text-muted xl:inline">0{i + 1}</span>
                <span className="relative inline-block overflow-hidden align-bottom">
                  <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">
                    {l.label}
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-y-full text-accent transition-transform duration-500 ease-expo group-hover:translate-y-0"
                  >
                    {l.label}
                  </span>
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden lg:inline-block">
              <button
                onClick={() => go("contact")}
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
                </span>
                Let&apos;s talk
              </button>
            </Magnetic>
            <button
              onClick={toggle}
              className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border hairline lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <m.span className="h-px w-4 bg-paper" animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} />
              <m.span className="h-px w-4 bg-paper" animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} />
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-5 pb-10 pt-24 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <m.button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="flex items-baseline justify-between border-b hairline py-4 text-left"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.7, ease: EASE }}
                >
                  <span className="display text-4xl">{l.label}</span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </m.button>
              ))}
            </nav>
            <p className="mt-8 eyebrow">askanimeshsingh@gmail.com</p>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
