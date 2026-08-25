import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Shield, Lightbulb, HeartHandshake, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Gaspé Électro-Tech" },
      { name: "description", content: "Découvrez l'histoire et les valeurs de Gaspé Électro-Tech, entreprise d'automatisation en Gaspésie." },
      { property: "og:title", content: "À propos — Gaspé Électro-Tech" },
      { property: "og:description", content: "Découvrez l'histoire et les valeurs de Gaspé Électro-Tech, entreprise d'automatisation en Gaspésie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: MapPin,
    title: "Ancré localement",
    description:
      "Nous sommes fiers d'être basés à Gaspé et de contribuer au dynamisme des entreprises de la région.",
  },
  {
    icon: Shield,
    title: "Fiabilité avant tout",
    description:
      "Nos installations sont conçues pour durer, avec des solutions éprouvées et un support réactif.",
  },
  {
    icon: Lightbulb,
    title: "Innovation pragmatique",
    description:
      "Nous adoptons les technologies adaptées à vos besoins réels, sans ajouter de complexité inutile.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement humain",
    description:
      "Nous croyons au transfert de connaissances pour que vos équipes soient autonomes et confiantes.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight">À propos</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Gaspé Électro-Tech est née d'une conviction : les entreprises de la Gaspésie méritent un accès local à une expertise moderne en automatisation et électrotechnique.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-2xl font-semibold">Notre mission</h2>
              <p className="mt-4 text-muted-foreground">
                Simplifier l'automatisation pour les PME de la région. Nous concevons des systèmes sur mesure qui améliorent la productivité, la qualité et la fiabilité des opérations, tout en respectant les réalités budgétaires et humaines des entreprises locales.
              </p>
              <p className="mt-4 text-muted-foreground">
                Que ce soit pour moderniser une ligne de production, automatiser une serre ou centraliser les données d'un navire de pêche, nous mettons la technologie au service de vos objectifs concrets.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
              <h2 className="font-display text-2xl font-semibold">Le fondateur</h2>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">Jacques Dufresne</p>
                  <p className="text-sm text-primary-foreground/70">Fondateur & intégrateur automatisé</p>
                </div>
              </div>
              <p className="mt-4 text-primary-foreground/80">
                Diplômé en technique du génie électrique, automatisation et programmation, Jacques a fondé Gaspé Électro-Tech pour offrir aux entreprises de la Gaspésie une alternative locale, compétente et accessible à l'intégration de systèmes automatisés.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <section className="mt-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold tracking-tight">Nos valeurs</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <value.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
