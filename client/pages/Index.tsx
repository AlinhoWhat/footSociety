import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Trophy,
  Target,
  Star,
  ChevronRight,
  Play,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '/assets/images/lfs.jpg';

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-100">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {/* Logo à la place du Trophy */}
        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Texte en rouge */}
        <span className="text-2xl font-bold text-red-600">FOOTSOCIETY</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#home"
          className="text-gray-700 hover:text-red-600 transition-colors">
            Accueil
          </a>
          <Link
            to="/about"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            À propos
          </Link>
          <a
            href="#partners"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Partenaires
          </a>
          <a
            href="#ambassadors"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Ambassadeurs
          </a>
          <a
            href="#events"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Événements
          </a>
          <a
            href="#news"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Actualités
          </a>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          Contact
        </Button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700"></div>
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full animate-pulse delay-500"></div>
    </div>

    <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
      <div className="animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          MARKETING
          <span className="block text-4xl md:text-6xl bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            SPORTIF
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
          Plateforme digitale dédiée au marketing sportif et à la gestion
          d'événements footballistiques
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg"
          >
            Découvrir nos services
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
          >
            <Play className="mr-2 w-5 h-5" />
            Voir la vidéo
          </Button>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
);

const StatsSection = () => {
  const stats = [
    { number: "150+", label: "Partenaires", icon: Users },
    { number: "500+", label: "Événements", icon: Calendar },
    { number: "50+", label: "Ambassadeurs", icon: Star },
    { number: "25+", label: "Fédérations", icon: Trophy },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const partners = [
    { name: "FIFA", type: "Fédération Internationale", featured: true },
    { name: "UEFA", type: "Fédération Européenne", featured: true },
    { name: "Nike", type: "Équipementier", featured: false },
    { name: "Adidas", type: "Équipementier", featured: false },
    { name: "Puma", type: "Équipementier", featured: false },
    { name: "FFF", type: "Fédération Française", featured: true },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les plus grandes institutions et marques du
            football mondial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">{partner.type}</p>
                {partner.featured && (
                  <Badge className="bg-red-100 text-red-600 hover:bg-red-200">
                    Partenaire Premium
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AmbassadorsSection = () => {
  const ambassadors = [
    { name: "Kylian Mbappé", position: "Attaquant", club: "PSG", image: "🇫🇷" },
    {
      name: "Didier Deschamps",
      position: "Sélectionneur",
      club: "Équipe de France",
      image: "🏆",
    },
    {
      name: "Wendie Renard",
      position: "Défenseure",
      club: "OL Féminin",
      image: "👑",
    },
    {
      name: "Thierry Henry",
      position: "Légende",
      club: "Ambassadeur",
      image: "⭐",
    },
  ];

  return (
    <section id="ambassadors" className="py-20 bg-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Ambassadeurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des légendes et stars actuelles du football qui portent nos valeurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ambassadors.map((ambassador, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
                  {ambassador.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {ambassador.name}
                </h3>
                <p className="text-red-600 font-semibold mb-1">
                  {ambassador.position}
                </p>
                <p className="text-gray-600 text-sm">{ambassador.club}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const events = [
    {
      title: "Coupe du Monde 2024",
      date: "15 Juin 2024",
      location: "Paris, France",
      type: "Tournoi International",
      status: "upcoming",
    },
    {
      title: "Challenge FOOTSOCIETY",
      date: "8 Mai 2024",
      location: "Lyon, France",
      type: "Événement Corporate",
      status: "upcoming",
    },
    {
      title: "Gala des Ambassadeurs",
      date: "22 Mars 2024",
      location: "Monaco",
      type: "Gala de Prestige",
      status: "completed",
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Événements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos événements footballistiques d'exception
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge
                    className={
                      event.status === "upcoming"
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  >
                    {event.status === "upcoming" ? "À venir" : "Terminé"}
                  </Badge>
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="text-red-600 font-semibold mb-4">{event.type}</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  const newsItems = [
    {
      title: "Nouveau partenariat avec la FIFA pour 2024",
      excerpt:
        "FOOTSOCIETY annonce un partenariat stratégique majeur avec la FIFA pour les événements de l'année 2024.",
      date: "12 Mars 2024",
      category: "Partenariat",
    },
    {
      title: "Lancement de notre application mobile",
      excerpt:
        "Découvrez notre nouvelle application mobile pour suivre tous nos événements en temps réel.",
      date: "8 Mars 2024",
      category: "Innovation",
    },
    {
      title: "Retour sur le Gala des Ambassadeurs",
      excerpt:
        "Revivez les moments forts de notre gala annuel qui a réuni les plus grandes stars du football.",
      date: "5 Mars 2024",
      category: "Événement",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé de toutes nos actualités et nouveautés
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge className="bg-red-100 text-red-600 hover:bg-red-200">
                    {news.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pierre Martin",
      role: "Directeur Général",
      expertise: "Marketing Sportif",
    },
    {
      name: "Sophie Dubois",
      role: "Directrice Creative",
      expertise: "Brand & Design",
    },
    {
      name: "Marc Laurent",
      role: "Directeur Événements",
      expertise: "Event Management",
    },
    {
      name: "Julie Moreau",
      role: "Responsable Partenariats",
      expertise: "Business Development",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée et experte au service de vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">FOOTSOCIETY</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Plateforme digitale dédiée au marketing sportif et à la gestion
            d'événements footballistiques.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Services</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Marketing Sportif
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Gestion d'Événements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Partenariats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Consulting
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Liens Rapides</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                to="/about"
                className="hover:text-red-400 transition-colors"
              >
                À Propos
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Actualités
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Carrières
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Contact</h4>
          <div className="space-y-3 text-gray-400">
            <p>📍 Paris, France</p>
            <p>📞 +33 1 23 45 67 89</p>
            <p>✉️ contact@footsociety.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2024 FOOTSOCIETY. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Navigation />
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <AmbassadorsSection />
      <EventsSection />
      <NewsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
