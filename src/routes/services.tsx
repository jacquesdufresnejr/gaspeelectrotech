import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — Gaspé Électro-Tech" },
      { name: "description", content: "Découvrez les services de conception, installation, programmation et maintenance de systèmes automatisés de Gaspé Électro-Tech." },
      { property: "og:title", content: "Nos services — Gaspé Électro-Tech" },
      { property: "og:description", content: "Découvrez les services de conception, installation, programmation et maintenance de systèmes automatisés de Gaspé Électro-Tech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight">Nos services</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              De l'analyse à la maintenance, nous accompagnons vos projets d'automatisation du début à la fin.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 100}>
              <article className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
