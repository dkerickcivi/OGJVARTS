const members = [
  { name: "Lucas R.", role: "Editor de vídeo · 1.2M subs", initials: "LR" },
  { name: "Bia M.", role: "Designer de capas", initials: "BM" },
  { name: "Théo A.", role: "Videomaker · streamers", initials: "TA" },
  { name: "Rafa S.", role: "Motion designer", initials: "RS" },
]

const feedbacks = [
  {
    text: "Entrei pra aprender design. Saí da primeira call com 2 reuniões marcadas com creators.",
    name: "Membro do Clout Club",
  },
  {
    text: "Em 3 semanas fechei o maior projeto da minha vida. O networking aqui é absurdo.",
    name: "Membro do Clout Club",
  },
  {
    text: "Parei de mandar portfólio no vácuo. Hoje os clientes vêm até mim.",
    name: "Membro do Clout Club",
  },
]

export function Networking() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/12 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Networking
          </p>
          <h2 className="heading text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Sua próxima oportunidade está a{" "}
            <span className="text-primary text-glow-red">
              uma conversa de distância.
            </span>
          </h2>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="text-center">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              A comunidade está cheio de pessoas já dentro do mercado. Seu
              próximo cliente, sua próxima oportunidade, seu próximo projeto
              está aqui.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
