import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Gaspé Électro-Tech" },
      { name: "description", content: "Retrouvez nos projets d'automatisation pour la pêche, l'agriculture et la manufacture en Gaspésie." },
      { property: "og:title", content: "Portfolio — Gaspé Électro-Tech" },
      { property: "og:description", content: "Retrouvez nos projets d'automatisation pour la pêche, l'agriculture et la manufacture en Gaspésie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight">Portfolio</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Des réalisations concrètes pour des entreprises typiques de notre région.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 100}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={1024}
                      height={1024}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 lg:p-10">
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {project.sector}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">Client : {project.client}</p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Le défi
                        </h3>
                        <p className="mt-1 text-muted-foreground">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          La solution
                        </h3>
                        <p className="mt-1 text-muted-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Le résultat
                        </h3>
                        <p className="mt-1 text-muted-foreground">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
