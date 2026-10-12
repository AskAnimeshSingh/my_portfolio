"use client"

import { m, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 })
  const [label, setLabel] = useState<string | null>(null)
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    setEnabled(true)

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button")
      setHovering(Boolean(el))
      setLabel(el?.dataset.cursor ?? null)
    }
    const reset = () => setLabel(null)
    window.addEventListener("pointermove", move)
    window.addEventListener("pointerdown", reset)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerdown", reset)
    }
  }, [x, y])

  if (!enabled) return null

  const size = label ? 88 : hovering ? 44 : 10

  return (
    <m.div
      aria-hidden
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: size, height: size, backgroundColor: label ? "rgb(212,255,58)" : "rgb(255,255,255)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink mix-blend-normal">{label}</span>
      )}
    </m.div>
  )
}
