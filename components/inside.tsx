import Image from "next/image"
import {
  Users,
  Video,
  MessagesSquare,
  FolderDown,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Networking",
    text: "Conexões diretas com quem já está dentro do mercado audiovisual.",
  },
  {
    icon: Video,
    title: "Calls com João Vitor",
    text: "Sessões ao vivo para destravar seu posicionamento.",
  },
  {
    icon: FolderDown,
    title: "Packs e arquivos PSD",
    text: "Assets, elementos e PSDs de trabalhos reais já feitos pelo João Vitor.",
  },
  {
    icon: MessagesSquare,
    title: "Comunidade no Discord",
    text: "O lobby sempre aberto. Feedback, trocas e oportunidades.",
  },
]

export function Inside() {
  return (
    <section id="conteudo" className="relative border-y border-border bg-card/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            O que tem lá dentro
          </p>
          <h2 className="heading text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Tudo que ninguém te ensina sobre{" "}
            <span className="text-primary text-glow-red">ser percebido.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Não é só para designers. É para todo mundo que vive de audiovisual.
            Dentro do Discord você ainda recebe packs com assets, elementos e
            arquivos PSD de projetos reais já feitos pelo João Vitor.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-all group-hover:glow-red">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="heading text-base font-bold leading-snug text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        {/* Packs / PSD banner */}
        <div className="mt-12 grid items-stretch gap-6 overflow-hidden rounded-2xl border border-primary/30 glass lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[280px] overflow-hidden">
            <Image
              src="/jv/banner-hood.png"
              alt="João Vitor em arte cinematográfica da JV Arts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:to-card" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5">
              <FolderDown className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Acervo exclusivo
              </span>
            </div>
            <h3 className="heading text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Os bastidores e os arquivos da{" "}
              <span className="text-primary text-glow-red">JV Arts.</span>
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Dentro do Discord você tem acesso a packs com assets, elementos,
              texturas e arquivos PSD de trabalhos reais já entregues pelo João
              Vitor para grandes creators. Material pronto pra estudar, abrir as
              camadas e acelerar o seu próprio nível.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
