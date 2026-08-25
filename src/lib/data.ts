import type { ReactNode } from "react";
import {
  Cog,
  Wrench,
  Wifi,
  RefreshCw,
  Cpu,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

import shipImg from "@/assets/service-ship.jpg";
import agricultureImg from "@/assets/service-agriculture.jpg";
import manufacturingImg from "@/assets/service-manufacturing.jpg";
import portfolioShip from "@/assets/portfolio-ship.jpg";
import portfolioAgriculture from "@/assets/portfolio-agriculture.jpg";
import portfolioManufacturing from "@/assets/portfolio-manufacturing.jpg";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "conception-installation",
    title: "Conception et installation de systèmes automatisés",
    description:
      "Nous concevons des solutions d'automatisation sur mesure, depuis l'analyse des besoins jusqu'à l'installation complète sur le terrain.",
    icon: Cog,
    image: manufacturingImg,
    benefits: [
      "Étude personnalisée du processus",
      "Sélection d'équipements adaptés",
      "Installation et mise en service",
    ],
  },
  {
    id: "entretien-depannage",
    title: "Entretien préventif et dépannage",
    description:
      "Un service rapide et fiable pour minimiser les arrêts de production et prolonger la durée de vie de vos équipements.",
    icon: Wrench,
    image: shipImg,
    benefits: [
      "Contrats d'entretien préventif",
      "Intervention d'urgence locale",
      "Inventaire de pièces courantes",
    ],
  },
  {
    id: "surveillance-distance",
    title: "Gestion et surveillance à distance",
    description:
      "Accédez à vos données et contrôlez vos équipements de n'importe où grâce à des interfaces sécurisées et accessibles.",
    icon: Wifi,
    image: agricultureImg,
    benefits: [
      "Tableaux de bord en temps réel",
      "Alertes automatisées",
      "Sécurité et chiffrement des données",
    ],
  },
  {
    id: "modernisation",
    title: "Modernisation d'équipements existants",
    description:
      "Donnez une seconde vie à vos machines en intégrant de nouvelles technologies sans remplacer l'ensemble de l'installation.",
    icon: RefreshCw,
    image: manufacturingImg,
    benefits: [
      "Analyse des équipements existants",
      "Mise à niveau des automates",
      "Réduction des coûts de remplacement",
    ],
  },
  {
    id: "programmation-integration",
    title: "Programmation et intégration de systèmes",
    description:
      "Programmation de PLC, HMI, variateurs et robots pour faire dialoguer tous vos équipements de manière fluide.",
    icon: Cpu,
    image: shipImg,
    benefits: [
      "Programmation PLC et HMI",
      "Intégration de capteurs et actionneurs",
      "Tests et validation en usine",
    ],
  },
  {
    id: "transfert-connaissances",
    title: "Accompagnement et transfert de connaissances",
    description:
      "Nous formons vos équipes pour qu'elles puissent exploiter, surveiller et dépanner vos systèmes en toute autonomie.",
    icon: GraduationCap,
    image: agricultureImg,
    benefits: [
      "Formation sur mesure",
      "Documentation technique claire",
      "Support post-mise en service",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  sector: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "navires-peche",
    title: "Modernisation des systèmes de navires de pêche",
    sector: "Maritime / Pêche",
    client: "Coopérative de pêcheurs de la Gaspésie",
    challenge:
      "Les navires disposaient d'équipements de contrôle disparates, difficiles à maintenir et sans supervision centralisée.",
    solution:
      "Installation d'un système unifié de surveillance des moteurs, du froid et du carburant, accessible depuis le poste de commande.",
    result:
      "Réduction des pannes en mer, amélioration de la sécurité de l'équipage et optimisation de la consommation de carburant.",
    image: portfolioShip,
  },
  {
    id: "procedes-agricoles",
    title: "Gestion de procédés agricoles",
    sector: "Agriculture",
    client: "Ferme maraîchère de la Baie-des-Chaleurs",
    challenge:
      "La serre manquait de précision pour l'irrigation, la température et l'humidité, ce qui affectait les rendements.",
    solution:
      "Déploiement de capteurs et d'une régulation automatique gérée à distance via une interface web simple.",
    result:
      "Meilleur contrôle du climat, réduction de la consommation d'eau et hausse de la qualité des récoltes.",
    image: portfolioAgriculture,
  },
  {
    id: "fabrication",
    title: "Automatisation de procédé de fabrication",
    sector: "Manufacture",
    client: "Atelier de transformation alimentaire régional",
    challenge:
      "La production reposait sur des réglages manuels, source d'erreurs et de pertes de temps.",
    solution:
      "Mise en place d'un automate programmable gérant le remplissage, le convoyage et la traçabilité des lots.",
    result:
      "Gain de régularité, baisse du rebut et traçabilité complète des produits pour la conformité.",
    image: portfolioManufacturing,
  },
];
