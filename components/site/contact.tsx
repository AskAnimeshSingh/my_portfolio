"use client"

import { AnimatePresence, m } from "framer-motion"
import { ArrowUpRight, Check, Copy, Loader2 } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { profile } from "@/lib/data"
import { EASE, FadeUp, Magnetic, RevealWords, SectionLabel } from "./motion"

const EMAILJS_SERVICE_ID = "service_7yoncp8"
const EMAILJS_TEMPLATE_ID = "template_1j905ys"
const EMAILJS_PUBLIC_KEY = "4ZhM2W6YXLs9n1aDS"

const topics = ["Full-time role", "Freelance project", "Collaboration", "Just saying hi"]

type Status = "idle" | "sending" | "sent" | "error"

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  textarea,
  placeholder,
}: {
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  textarea?: boolean
  placeholder?: string
}) {
  const cls =
    "peer w-full bg-transparent pb-3 pt-1 text-lg text-paper placeholder:text-muted/50 focus:outline-none sm:text-xl"
  return (
    <label className="group relative block border-b hairline">
      <span className="eyebrow">{label}</span>
      {textarea ? (
        <textarea name={name} value={value} onChange={onChange} required rows={4} placeholder={placeholder} className={`${cls} resize-none`} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} required placeholder={placeholder} className={cls} />
      )}
      <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-700 ease-expo peer-focus:w-full" />
    </label>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: topics[1], message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [copied, setCopied] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const emailjs = (await import("@emailjs/browser")).default
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setStatus("sent")
      setForm({ name: "", email: "", subject: topics[1], message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (err) {
      console.error("EmailJS send failed:", err)
      setStatus("error")
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
      <div className="container-x relative">
        <SectionLabel index="05">Contact</SectionLabel>

        <h2 className="display mt-8 text-5xl sm:text-7xl lg:text-8xl">
          <RevealWords text="Let's build" />
          <br />
          <RevealWords text="something real." className="serif-i text-accent" delay={0.15} />
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <FadeUp className="space-y-10 lg:col-span-4">
            <p className="max-w-sm text-lg leading-relaxed text-paper/70">
              Hiring for a full-stack role, or need a Laravel + React product shipped end-to-end? Tell me about it. I
              usually reply within a day.
            </p>

            <div>
              <p className="eyebrow mb-3">Email</p>
              <button onClick={copyEmail} data-cursor="Copy" className="group flex items-center gap-3 text-xl sm:text-2xl">
                <span className="border-b border-transparent transition-colors group-hover:border-accent">{profile.email}</span>
                {copied ? <Check className="h-5 w-5 text-accent" /> : <Copy className="h-4 w-4 text-muted" />}
              </button>
            </div>
            <div>
              <p className="eyebrow mb-3">Phone</p>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-xl sm:text-2xl hover:text-accent">
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <div className="flex flex-wrap gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 rounded-full border hairline px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={onSubmit} className="space-y-10">
              <div>
                <p className="eyebrow mb-4">I&apos;m reaching out about</p>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm((f) => ({ ...f, subject: t }))}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                        form.subject === t ? "border-accent bg-accent text-ink" : "hairline text-paper/70 hover:border-paper/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-10 sm:grid-cols-2">
                <Field label="Your name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" />
                <Field label="Your email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" />
              </div>
              <Field label="Message" name="message" value={form.message} onChange={onChange} textarea placeholder="A few lines about the project, role or idea…" />

              <div className="flex flex-wrap items-center gap-6">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center gap-3 rounded-full bg-accent py-4 pl-7 pr-5 font-medium text-ink transition-opacity disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending" : "Send message"}
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-accent">
                      {status === "sending" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                      )}
                    </span>
                  </button>
                </Magnetic>
                <AnimatePresence mode="wait">
                  {status === "sent" && (
                    <m.p key="ok" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ ease: EASE }} className="text-sm text-accent">
                      Message delivered — talk soon.
                    </m.p>
                  )}
                  {status === "error" && (
                    <m.p key="err" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-sm text-rose-300">
                      Couldn&apos;t send. Please email me directly.
                    </m.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
