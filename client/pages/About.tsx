import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Target,
  Users,
  Zap,
  Heart,
  Globe,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../public/assets/images/lfs.jpg';

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-100">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white">
          <img src={logo} alt="Logo FootSociety" className="w-full h-full object-contain" />
        </div>
        <span className="text-2xl font-bold text-red-600">FOOTSOCIETY</span>
      </Link>

      <Link to="/">
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Retour à l'accueil
        </Button>
      </Link>
    </div>
  </div>
</nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-red-100"></div>

    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <div className="animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
          À PROPOS DE
          <span className="block text-4xl md:text-6xl gradient-text">
            FOOTSOCIETY
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Nous sommes une agence de marketing sportif spécialisée dans le
          football, dédiée à créer des expériences exceptionnelles et à
          valoriser les talents du sport.
        </p>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            FOOTSOCIETY révolutionne le marketing sportif et evenementiel en créant des ponts
            entre les marques, les talents et les fans. Nous transformons chaque
            événement en une expérience mémorable qui transcende le sport.
          </p>

          <div className="space-y-4">
            {[
              "Valoriser les talents du football mondial",
              "Créer des partenariats durables et authentiques",
              "Innover dans l'expérience fan et spectateur",
              "Développer l'écosystème footballistique français",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center">
            <Trophy className="w-32 h-32 text-white opacity-80" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
            <Heart className="w-12 h-12 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque projet, chaque événement, chaque partenariat.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Notre passion pour le football guide chacune de nos actions et décisions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Nous croyons en la force des partenariats et du travail d'équipe.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Nous innovons constamment pour créer des expériences uniques et mémorables.",
    },
    {
      icon: Globe,
      title: "Impact Global",
      description:
        "Notre vision s'étend au-delà des frontières pour un impact mondial.",
    },
    {
      icon: Trophy,
      title: "Réussite",
      description:
        "Nous mesurons notre succès par celui de nos partenaires et ambassadeurs.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident notre action et définissent notre identité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const HistorySection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Notre Histoire
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une aventure commencée par la passion du football et l'ambition de
          révolutionner le marketing sportif
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {[
            {
              year: "2018",
              title: "Fondation de FOOTSOCIETY",
              description:
                "Création de l'agence avec une vision claire : révolutionner le marketing sportif dans le football.",
            },
            {
              year: "2019",
              title: "Premiers partenariats majeurs",
              description:
                "Signature des premiers contrats avec des fédérations nationales et des équipementiers de renom.",
            },
            {
              year: "2020",
              title: "Expansion digitale",
              description:
                "Lancement de notre plateforme digitale et développement de notre présence en ligne.",
            },
            {
              year: "2021",
              title: "100 ambassadeurs",
              description:
                "Franchissement du cap des 100 ambassadeurs, incluant des légendes et des stars actuelles.",
            },
            {
              year: "2022",
              title: "Partenariat FIFA",
              description:
                "Signature d'un partenariat stratégique avec la FIFA pour les événements internationaux.",
            },
            {
              year: "2023",
              title: "500 événements",
              description:
                "Organisation de notre 500ème événement, marquant notre expertise reconnue dans le secteur.",
            },
            {
              year: "2024",
              title: "Vision 2030",
              description:
                "Lancement de notre stratégie de développement international avec des objectifs ambitieux.",
            },
          ].map((milestone, index) => (
            <div key={index} className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year.slice(-2)}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-red-500 to-red-600">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Rejoignez l'Aventure FOOTSOCIETY
      </h2>
      <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
        Que vous soyez une marque, un talent ou une fédération, découvrez
        comment nous pouvons créer ensemble des projets exceptionnels.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg"
        >
          Devenir Partenaire
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
        >
          Nous Contacter
        </Button>
      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <HistorySection />
      <CTASection />
    </div>
  );
}
