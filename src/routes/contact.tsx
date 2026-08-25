import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gaspé Électro-Tech" },
      { name: "description", content: "Contactez Gaspé Électro-Tech pour discuter de votre projet d'automatisation en Gaspésie." },
      { property: "og:title", content: "Contact — Gaspé Électro-Tech" },
      { property: "og:description", content: "Contactez Gaspé Électro-Tech pour discuter de votre projet d'automatisation en Gaspésie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight">Contact</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Une question, un projet ou une idée ? Parlons-en.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <h2 className="font-display text-2xl font-semibold">Envoyez-nous un message</h2>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center justify-center rounded-xl bg-secondary p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-display text-xl font-semibold">Message envoyé</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Merci pour votre message. Nous vous recontacterons sous peu.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Entreprise
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Courriel
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="418-000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium">
                      Type de projet
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="conception">Conception et installation</option>
                      <option value="maintenance">Entretien ou dépannage</option>
                      <option value="modernisation">Modernisation</option>
                      <option value="programmation">Programmation et intégration</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-display text-2xl font-semibold">Coordonnées</h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    Gaspé, Qc, Canada
                  </li>
                  <li>
                    <a
                      href="mailto:get@get.ca"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-accent" />
                      get@get.ca
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:000-000-0000"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-accent" />
                      000-000-0000
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Facebook className="h-5 w-5 shrink-0 text-accent" />
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground lg:p-8">
                <h2 className="font-display text-xl font-semibold">Zone de service</h2>
                <p className="mt-3 text-primary-foreground/80">
                  Nous desservons principalement la Gaspésie et les régions avoisinantes : Gaspé, Percé, Chandler, New Richmond, Carleton, Matapédia et alentours.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
