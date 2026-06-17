const brands = [
  "TOTA",
  "FONTINNELE",
  "MD CHEFE",
  "JON VLOGS",
  "JHOW RJ",
  "KOSKY",
  "BDJ TOUR",
  "MARCO",
]

export function LogoMarquee() {
  return (
    <section className="relative border-y border-border bg-card/40 py-6">
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="shrink-0 pl-5 text-xs font-semibold uppercase tracking-widest text-primary sm:pl-8">
          Já trabalhei com
        </span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="heading whitespace-nowrap text-xl font-bold text-muted-foreground/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
