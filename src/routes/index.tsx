import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Zap, MapPin, Phone } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { AnimatedSection } from "@/components/AnimatedSection";
import { services, projects } from "@/lib/data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gaspé Électro-Tech — Accueil" },
      { name: "description", content: "Conception, installation et maintenance de systèmes automatisés en Gaspésie." },
      { property: "og:title", content: "Gaspé Électro-Tech — Accueil" },
      { property: "og:description", content: "Conception, installation et maintenance de systèmes automatisés en Gaspésie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      {/* Bento Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
          {/* Main headline */}
          <div className="fade-in-up delay-100 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground lg:p-10">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
                  <Zap className="h-3.5 w-3.5" />
                  Automatisation & électrotechnique
                </span>
                <h1 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Des systèmes automatisés conçus pour la Gaspésie
                </h1>
                <p className="mt-4 max-w-lg text-primary-foreground/80">
                  Gaspé Électro-Tech conçoit, installe et maintient des solutions d'automatisation adaptées aux réalités des PME, agriculteurs, pêcheurs et manufacturiers locaux.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
                >
                  Découvrir nos services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-in-up delay-200 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1 overflow-hidden rounded-2xl">
            <img
              src={heroImg}
              alt="Armoire électrique et système automatisé moderne"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              width={1920}
              height={1080}
            />
          </div>

          {/* Local value */}
          <div className="fade-in-up delay-300 flex flex-col justify-between rounded-2xl border border-border bg-card p-6 text-card-foreground">
            <div>
              <MapPin className="h-6 w-6 text-accent" />
              <h2 className="mt-4 font-display text-xl font-semibold">Une expertise locale</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Basée à Gaspé, l'entreprise connaît les défis uniques des industries de la région.
              </p>
            </div>
            <Link
              to="/a-propos"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Notre histoire <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Quick contact */}
          <div className="fade-in-up delay-400 flex flex-col justify-between rounded-2xl bg-secondary p-6 text-secondary-foreground">
            <div>
              <Phone className="h-6 w-6 text-accent" />
              <h2 className="mt-4 font-display text-xl font-semibold">Un projet en tête ?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Parlons de vos besoins. Un appel suffit pour lancer la réflexion.
              </p>
            </div>
            <a
              href="tel:418-355-8298"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              418-355-8298
            </a>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">Nos services</h2>
              <p className="mt-2 text-muted-foreground">
                De la conception à la maintenance, une offre complète pour vos systèmes automatisés.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Voir tous les services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 100}>
              <Link
                to="/services"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">Projets récents</h2>
              <p className="mt-2 text-muted-foreground">
                Des réalisations concrètes pour des entreprises de la région.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Voir le portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 100}>
              <Link
                to="/portfolio"
                className="group block overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">
                    {project.sector}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.challenge}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 lg:py-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt à automatiser votre entreprise ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Que vous ayez un projet clair ou simplement une idée à explorer, nous vous accompagnons à chaque étape.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                <CheckCircle className="h-4 w-4" />
                Demander une consultation
              </Link>
              <a
                href="tel:418-355-8298"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                418-355-8298
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
