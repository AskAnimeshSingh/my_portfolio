import About from "@/components/site/about"
import Contact from "@/components/site/contact"
import Cursor from "@/components/site/cursor"
import Experience from "@/components/site/experience"
import Footer from "@/components/site/footer"
import Hero from "@/components/site/hero"
import Nav from "@/components/site/nav"
import SmoothScroll from "@/components/site/smooth-scroll"
import Stack from "@/components/site/stack"
import Work from "@/components/site/work"

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
