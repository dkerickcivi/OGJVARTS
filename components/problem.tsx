const items = [
  "Posicionamento",
  "Autoridade",
  "Conteúdo",
  "Networking",
  "Percepção",
]

export function Problem() {
  return (
    <section className="relative border-y border-border bg-card/40 py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          O problema
        </p>
        <h2 className="heading text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          A maioria dos designers não precisa de{" "}
          <span className="text-muted-foreground line-through decoration-primary/60">
            mais técnica
          </span>
          .
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          O mercado está cheio de gente boa de Photoshop e travada na
          obscuridade. O que falta não é habilidade, é o que ninguém te ensina:
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="heading rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-bold uppercase text-foreground transition-all hover:glow-red"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
