import { ArrowRight } from "lucide-react"
import { CHECKOUT_URL } from "@/lib/links"

export function FinalCta() {
  return (
    <section
      id="entrar"
      className="relative overflow-hidden py-28 lg:py-36 grain"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[160px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="heading text-balance text-5xl font-bold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
          Você pode continuar tentando crescer{" "}
          <span className="text-muted-foreground">sozinho.</span>
        </h2>
        <p className="heading mt-4 text-balance text-3xl font-bold text-primary text-glow-red sm:text-4xl">
          Ou entrar onde as oportunidades circulam.
        </p>

        <p className="mx-auto mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Entre para ficar perto das pessoas certas. O resto, autoridade,
          clientes, relevância, é consequência.
        </p>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="heading group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-base font-bold text-primary-foreground animate-pulse-glow"
        >
          Entrar no Clout Club
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
          Acesso por aprovação · Vagas limitadas
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[11px] font-bold text-primary-foreground">
            CC
          </span>
          <span className="heading text-sm font-bold text-foreground">
            Clout<span className="text-primary">Club</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Liderado por João Vitor · JV Arts © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
