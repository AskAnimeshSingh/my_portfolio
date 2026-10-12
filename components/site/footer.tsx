"use client"

import { ArrowUp } from "lucide-react"
import { profile } from "@/lib/data"
import { Magnetic } from "./motion"
import { scrollToId, useLenis } from "./smooth-scroll"

export default function Footer() {
  const lenis = useLenis()
  return (
    <footer className="border-t hairline">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Designed & built by me in Next.js, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-6">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-paper/70 hover:text-accent">
              {s.label}
            </a>
          ))}
          <Magnetic>
            <button
              onClick={() => scrollToId(lenis, "home")}
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center rounded-full border hairline transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}
