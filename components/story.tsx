import Image from "next/image"

export function Story() {
  return (
    <section id="historia" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/12 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="relative order-2 h-[560px] overflow-hidden rounded-2xl border border-primary/30 glow-red lg:order-1">
          <Image
            src="/jv/founder-collage.png"
            alt="João Vitor, fundador do Clout Club e criador da JV Arts"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
            <p className="text-xs uppercase tracking-widest text-primary">
              João Vitor · JV Arts
            </p>
            <p className="heading mt-1 text-lg font-bold text-foreground">
              Capas para os maiores do Brasil
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Minha história
          </p>
          <h2 className="heading text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Eu comecei do zero. Literalmente.
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Sem seguidores. Sem networking. Sem autoridade. Eu era só mais um
              designer mandando portfólio no direct e sendo ignorado todos os
              dias.
            </p>
            <p>
              Tudo mudou quando comecei a trabalhar com grandes streamers. Não
              porque minha técnica explodiu da noite para o dia, mas porque
              aprendi a estar perto das pessoas certas e a ser percebido.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-primary pl-6">
            <p className="heading text-balance text-xl font-bold leading-snug text-foreground sm:text-2xl">
              &ldquo;Eu não cresci porque era o melhor designer. Cresci porque
              aprendi a ser{" "}
              <span className="text-primary text-glow-red">
                impossível de ignorar.
              </span>
              &rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
