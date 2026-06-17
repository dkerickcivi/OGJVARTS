import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_URL } from "@/lib/links"

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-background pt-24 sm:pt-28 grain"
    >
      {/* ambient red glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/25 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[320px] w-[320px] rounded-full bg-primary/15 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-vibrant bg-red-vibrant-light px-4 py-1.5 sm:mb-6">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-vibrant" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-red-vibrant sm:text-xs">
              Comunidade privada
            </span>
          </div>

          <h1 className="heading text-balance text-[2.75rem] font-bold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            Pare de ser{" "}
            <span className="text-red-vibrant text-glow-red">invisível.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground sm:mt-6 lg:mx-0">
            Trabalhei com alguns dos maiores creators do Brasil sem ser famoso.
            Agora estou abrindo as portas do ambiente onde designers aprendem a
            construir autoridade, networking e relevância.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-9 sm:flex-row sm:items-center lg:items-start">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="heading group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground animate-pulse-glow sm:w-auto"
            >
              Entrar no Clout Club
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
              Vagas limitadas · Acesso por aprovação
            </p>
          </div>

          {/* mini stats */}
          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 sm:mt-12 sm:flex sm:max-w-none sm:gap-8 lg:mx-0">
            {[
              { n: "+50", l: "Creators atendidos" },
              { n: "+10M", l: "Views em capas" },
              { n: "100%", l: "Foco em autoridade" },
            ].map((s) => (
              <div key={s.l}>
                <p className="heading text-xl font-bold text-foreground sm:text-2xl">
                  {s.n}
                </p>
                <p className="text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual collage */}
        <div className="relative mx-auto mt-2 grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 lg:mt-0 lg:max-w-none">
          {/* IG profile: spans full width on top */}
          <div className="col-span-2 overflow-hidden rounded-2xl border border-primary/30 bg-card glow-red">
            <Image
              src="/clout/ig-profile.png"
              alt="Perfil do Instagram de João Vitor, joaovictor_arts, diretor visual que trabalhou com mais de 23 creators"
              width={589}
              height={253}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Live boxing */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-2xl">
            <Image
              src="/clout/live-boxing.png"
              alt="Overlay de live de boxe criado para um creator, com 710 curtidas e 32 comentários"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Live world cup */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/30 glow-red">
            <Image
              src="/clout/live-worldcup.png"
              alt="Overlay de live com creator segurando a taça da Copa do Mundo, com 1.023 curtidas e 12 comentários"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
