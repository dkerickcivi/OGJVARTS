import Image from "next/image"

const works = [
  {
    img: "/portfolio/terrifier.png",
    title: "TOTA · Terrifier",
    tag: "Capa cinematográfica",
    span: "lg:row-span-2",
  },
  {
    img: "/portfolio/boxing.png",
    title: "Fight Night",
    tag: "Overlay de live",
    span: "",
  },
  {
    img: "/portfolio/golf.png",
    title: "Fontinnele x MD Chefe",
    tag: "Pôster colab",
    span: "lg:row-span-2",
  },
  {
    img: "/portfolio/daredevil.png",
    title: "JV Arts · Retrato",
    tag: "Edição premium",
    span: "",
  },
  {
    img: "/portfolio/worldcup.png",
    title: "Kosky · World Cup",
    tag: "Conceito de stream",
    span: "",
  },
  {
    img: "/portfolio/bdj-chile.png",
    title: "BDJ Tour Chile",
    tag: "Pôster de evento",
    span: "",
  },
]

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative border-y border-border bg-card/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Provas sociais · Portfólio
          </p>
          <h2 className="heading text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Os trabalhos que me tornaram{" "}
            <span className="text-primary text-glow-red">
              impossível de ignorar.
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Capas, pôsteres e identidades para creators e streamers reais. Esse
            é o nível que circula dentro do Clout Club.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-3">
          {works.map((w) => (
            <article
              key={w.title}
              className={`group relative overflow-hidden rounded-2xl border border-border ${w.span}`}
            >
              <Image
                src={w.img || "/placeholder.svg"}
                alt={`${w.title}, ${w.tag}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-wider text-primary">
                  {w.tag}
                </p>
                <h3 className="heading text-lg font-bold text-foreground">
                  {w.title}
                </h3>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent transition-all group-hover:ring-primary/60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
