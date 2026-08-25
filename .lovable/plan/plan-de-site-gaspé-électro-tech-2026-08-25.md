# Plan de site — Gaspé Électro-Tech

## Objectif
Site vitrine professionnel pour l'entreprise de rêve **Gaspé Électro-Tech**, spécialisée en conception, installation, programmation et maintenance de systèmes automatisés dans la région de la Gaspésie.

## Public cible
PME, manufacturiers, agriculteurs, armateurs de pêche et entreprises locales de la Gaspésie qui cherchent un intégrateur local fiable et accessible.

## Pages et structure

### 1. Accueil (`/`)
- Hero en **bento grid** : grand bloc titre/accroche, blocs secondaires (valeurs, CTA, chiffre clé)
- Section "Services" : 6 cartes liées aux services
- Section "Projets récents" : 3 projets en vedette
- CTA contact
- Footer

### 2. Services (`/services`)
- Page dédiée avec les 6 services :
  1. Conception et installation de systèmes automatisés
  2. Entretien préventif et dépannage
  3. Gestion et surveillance à distance
  4. Modernisation d'équipements existants
  5. Programmation et intégration de systèmes
  6. Accompagnement et transfert de connaissances
- Chaque service : titre, description, bénéfices, image d'ambiance

### 3. À propos (`/a-propos`)
- Histoire et mission de l'entreprise
- Valeurs : local, fiable, innovant, accessible
- Profil du fondateur / équipe
- Ancrage Gaspésie

### 4. Portfolio (`/portfolio`)
- 3 projets fictifs dans une petite région :
  1. Modernisation des systèmes de navires de pêche
  2. Gestion de procédés agricoles
  3. Automatisation d'un procédé de fabrication
- Chaque projet : client type, défi, solution, résultat, image

### 5. Contact (`/contact`)
- Formulaire de contact : nom, entreprise, courriel, téléphone, type de projet, message
- Coordonnées : Gaspé, QC, Canada — jacquesjrdufresne@gmail.com — 418-355-8298
- Icône Facebook 64×64

## Design system
- **Fond** : clair (presque blanc)
- **Texte** : noir / anthracite
- **Typographie** : Space Grotesk (titres), DM Sans (corps)
- **Layout** : bento grid sur la page d'accueil
- **Couleurs** : portées par les images d'ambiance (industriel, électronique, côtier)
- **Animations** : légères (apparition au scroll, hover subtils)
- **Pas de mode sombre**

## Assets à générer
- Logo 64×64 : Gaspé Électro-Tech (épuré, industriel, circuit + vague côtière)
- Hero image : panneau électrique/automatisation moderne avec touche côtière
- Image service : navire de pêche modernisé
- Image service : serre/agriculture automatisée
- Image service : manufacture/usine automatisée
- 3 images portfolio correspondant aux projets

## Contenu
- L'utilisateur fournira ses textes exacts plus tard. Pour l'instant, on insère des placeholders clairs et bien structurés par section pour qu'il puisse remplacer facilement.
- Les 6 titres de services sont déjà intégrés.

## Fonctionnalités
- Navigation simple et responsive
- Formulaire de contact (sans backend, confirmation côté client)
- Portfolio avec hover et affichage détaillé
- Animations au scroll légères

## Livrables
- Site web complet en TanStack Start + Tailwind v4
- Routes multi-pages : `/`, `/services`, `/a-propos`, `/portfolio`, `/contact`
- Responsive
- Prêt à recevoir les textes finaux
