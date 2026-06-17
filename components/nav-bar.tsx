"use client"

import { useEffect, useState } from "react"
import { CHECKOUT_URL } from "@/lib/links"

const links = [
  { label: "História", href: "#historia" },
  { label: "O Clube", href: "#clube" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Portfólio", href: "#portfolio" },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground glow-red">
            CC
          </span>
          <span className="heading text-lg font-bold tracking-tight text-foreground">
            Clout<span className="text-primary">Club</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="heading rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-all hover:glow-red"
        >
          Entrar
        </a>
      </nav>
    </header>
  )
}
