import Image from "next/image"

export function WhatIs() {
  return (
    <section id="clube" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            O que é o Clout Club
          </p>
          <h2 className="heading text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">
            Não é um curso.
            <br />
            É o{" "}
            <span className="text-primary text-glow-red">
              lobby da Creator Economy.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Um ambiente fechado para todo mundo que trabalha com audiovisual:
            designers, editores, motion, thumb makers e criadores de conteúdo.
            Aqui você se conecta, aprende com quem já está dentro do mercado e
            fica a uma conversa de distância das oportunidades reais.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              img: "/portfolio/golf.png",
              alt: "Capa Fontinnele e MD Chefe jogando golfe",
              title: "Proximidade real",
              text: "Conviva com quem já entrega para creators de milhões.",
            },
            {
              img: "/portfolio/boxing.png",
              alt: "Arte de luta de boxe entre creators",
              title: "Cultura de elite",
              text: "A energia, os bastidores e os códigos do topo da indústria.",
            },
            {
              img: "/portfolio/worldcup.png",
              alt: "Arte com creator e a taça da Copa",
              title: "Oportunidades",
              text: "O lugar onde os projetos grandes nascem e circulam.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-border glass"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.img || "/placeholder.svg"}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="heading text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
