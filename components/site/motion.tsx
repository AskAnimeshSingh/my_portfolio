"use client"

import { m, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export const EASE = [0.16, 1, 0.3, 1] as const

export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = "span",
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: "span" | "h1" | "h2" | "h3" | "p"
}) {
  const words = text.split(" ")
  const MotionTag = m[Tag]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden>
          <m.span
            className="inline-block will-change-transform"
            variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.9, ease: EASE } } }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </m.span>
        </span>
      ))}
    </MotionTag>
  )
}

export function FadeUp({
  children,
  delay = 0,
  className,
  y = 24,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </m.div>
  )
}

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })

  return (
    <m.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </m.div>
  )
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 eyebrow">
      <span className="text-accent">{index}</span>
      <span className="h-px w-10 bg-line/20" />
      <span>{children}</span>
    </div>
  )
}
