"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { LazyMotion, domAnimation } from "framer-motion"
import Lenis from "lenis"

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

export function scrollToId(lenis: Lenis | null, id: string) {
  const target = document.getElementById(id)
  if (!target) return
  if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 })
  else target.scrollIntoView({ behavior: "smooth" })
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true })
    setLenis(instance)

    let frame = requestAnimationFrame(function raf(time) {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
    </LazyMotion>
  )
}
