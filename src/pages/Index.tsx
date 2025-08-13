import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  Users,
  Zap,
  Star,
  Github,
  TrendingUp,
  Award,
  Clock,
  Heart,
  MapPin,
  Badge,
  Quote,
  Linkedin,
  Twitter,
  Instagram,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Consistent font and color variables for easy maintenance
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_COLOR = "#6366f1";
const ACCENT_TEXT_COLOR = "text-purple-400";
const DARK_BG = "bg-[#111]"; // A dark gray/black background
const LIGHT_TEXT = "text-gray-200";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const titles = [
    {
      lines: ["DESIGN FOR", "COMPANIES", "READY TO", "GROW"],
      highlight: "GROW",
    },
    {
      lines: ["WE ARE NOT", "A COMPANY", "WE ARE", "YOURS"],
      highlight: "YOURS",
    },
    {
      lines: ["CRAFTING", "DIGITAL", "EXPERIENCES", "THAT MATTER"],
      highlight: "MATTER",
    },
    {
      lines: ["BUILDING", "BRANDS", "THAT", "INSPIRE"],
      highlight: "INSPIRE",
    },
    {
      lines: ["YOUR VISION", "OUR", "CREATIVE", "PASSION"],
      highlight: "PASSION",
    },
  ];

  const imageSlides = [
    [
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
        alt: "Recipe app interface",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
        alt: "Brand storytelling tag",
      },
      {
        src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
        alt: "Premium shopping bag",
      },
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
        alt: "Coffee advertisement",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop",
        alt: "Magazine design layout",
      },
      {
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
        alt: "Real estate app",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        alt: "Analytics dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop",
        alt: "E-commerce platform",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        alt: "Brand identity design",
      },
      {
        src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=600&auto=format&fit=crop",
        alt: "Digital marketing",
      },
      {
        src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
        alt: "UI components",
      },
      {
        src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop",
        alt: "Web development",
      },
    ],
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  const currentTitle = titles[currentTitleIndex];

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col md:flex-row"
      style={FONT_STYLE}
    >
      {/* Text and buttons section: Stacks below images on mobile, left on desktop */}
      <div
        className={`flex flex-col justify-center w-full md:w-1/2 md:order-1 transition-all duration-1000 px-4 sm:px-8 lg:px-16 py-16 md:py-24 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        } text-center md:text-left flex-1`}
      >
        <main className="flex-1 flex items-center justify-center md:justify-start">
          <div className="w-full">
            <h1
              className={`font-extralight text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] leading-tight tracking-tight text-white transition-all duration-500 mb-6 ${
                isAnimating
                  ? "opacity-0 transform translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              {currentTitle.lines.slice(0, -1).map((line, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {line}
                  <br />
                </div>
              ))}
              <span className={`font-light bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent`}>
                {currentTitle.highlight}
              </span>
            </h1>
          </div>
        </main>
        <footer className="mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm font-bold">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg md:text-xl">View Projects</span>
            </a>
            <span className="hidden sm:block text-gray-400 font-extrabold tracking-wide uppercase">
              OR
            </span>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-full border border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg md:text-xl">Explore Services</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </footer>
      </div>

      {/* Image sliders section: Stacks on top on mobile, right on desktop */}
      <div
        className={`w-full md:w-1/2 flex-shrink-0 md:order-2 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <div className="relative h-screen overflow-hidden grid grid-cols-2 gap-4 md:gap-6 pr-4 sm:pr-8 lg:pr-16">
          <div className="relative h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full animate-scroll-down">
              {[...imageSlides.flat(), ...imageSlides.flat()].map(
                (image, idx) => (
                  <div
                    key={`down-${idx}`}
                    className="w-full aspect-[4/3] mb-4 md:mb-6 overflow-hidden rounded-xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full animate-scroll-up">
              {[...imageSlides.flat(), ...imageSlides.flat()].map(
                (image, idx) => (
                  <div
                    key={`up-${idx}`}
                    className="w-full aspect-[4/3] mb-4 md:mb-6 overflow-hidden rounded-xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-down { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes scroll-up { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
        .animate-scroll-down { animation: scroll-down 50s linear infinite; }
        .animate-scroll-up { animation: scroll-up 50s linear infinite; }
      `}</style>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "1500+", label: "Projects", subtitle: "Done", color: "border-l-purple-500" },
    { value: "2000+", label: "Happy", subtitle: "Customers", color: "border-l-purple-500" },
    { value: "3000+", label: "Cup of", subtitle: "Coffee", color: "border-l-purple-500" },
    { value: "1890", label: "Projects in", subtitle: "Queue", color: "border-l-purple-500" },
  ];

  return (
    <section
      className={`py-16 md:py-20 lg:py-24 ${DARK_BG} text-white`}
      style={FONT_STYLE}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-gray-100 mb-4 md:mb-6 leading-tight">
            We Make your Business Bright
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-4 md:mb-6"></div>
          <p className={`text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed`}>
            Offering belonging promotion provision an be oh consulted ourselves
            it. Blessing welcomed ladyship she met humoured sir breeding her.
            Six curiosity day assurance bed necessary.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div
                  className={`bg-gray-900 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 ${stat.color}`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-2">
                    {stat.value}
                  </div>
                  <div className={`text-sm md:text-lg text-gray-400 font-medium`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm md:text-lg text-gray-400 font-medium`}>
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1543269664-02e941c052f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Happy customer"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-gray-900/80 backdrop-blur-sm text-white rounded-xl p-3 md:p-4 shadow-lg max-w-xs md:max-w-sm">
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                      alt="Linda, Project Manager"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-gray-300 mb-1 md:mb-2 text-left">
                        Blessing welcomed ladyship she met humoured sir breeding
                        her.
                      </p>
                      <div className="flex text-blue-400 text-xs mb-1">
                        {"★".repeat(5)}
                      </div>
                      <p className="text-[10px] md:text-xs text-gray-400 font-medium">
                        Linda, Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecondHeroSection = () => {
  return (
    <section className="bg-black text-white" style={FONT_STYLE}>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-normal leading-tight max-w-xl mb-6 md:mb-8 mx-auto md:mx-0">
            From idea to reality
            <br />
            in <span className="font-bold text-purple-400">4 weeks</span>
          </h1>
          <p className="max-w-md text-base sm:text-lg font-normal text-white mb-4 md:mb-6 leading-relaxed mx-auto md:mx-0">
            Get a tailored design solution in weeks, not months.
          </p>
          <p className="max-w-md text-sm md:text-base text-gray-400 font-light leading-relaxed mx-auto md:mx-0">
            Make your clients see the true value of your offer.
          </p>
        </div>
        <div className="bg-purple-700 p-8 sm:p-12 md:p-16 w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center">
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Look x times bigger
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Secure funding
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Scale up
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Stand out
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Launch fast
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Attract investors
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Elevate your brand
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Pitch ideas
            </div>
            <div className="bg-black text-purple-300 text-sm sm:text-lg md:text-xl font-bold px-4 py-2 sm:px-6 sm:py-2 rounded-full text-center hover:bg-gray-800 transition-colors duration-300">
              Build trust
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <button
              className="bg-white text-black font-semibold text-lg md:text-xl rounded-full px-6 py-3 flex items-center space-x-2 w-max hover:bg-gray-100 transition-colors duration-200"
              type="button"
            >
              <span>Book a 30-min intro call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExternalLink = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Euro Asian University Portal",
    category: "Educational Platform",
    description:
      "A sophisticated certification platform with custom architecture, dynamic content management, and performance optimization.",
    image: "https://euroasianuniversity.ee/wp-content/uploads/2025/04/Slider-1.png",
    tools: ["WordPress", "Elementor", "PHP", "JavaScript"],
    duration: "8 weeks",
    link: "https://euroasianuniversity.ee",
    year: "2024",
  },
  {
    id: 2,
    title: "AIPU Membership Platform",
    category: "Platform Architecture",
    description:
      "Enterprise-grade membership ecosystem with payment integration, automated certification, and role-based access control.",
    image: "https://aipu.in/wp-content/uploads/2025/05/Hero_banner.jpg",
    tools: ["WordPress", "Elementor", "PHP", "jsPDF"],
    duration: "12 weeks",
    link: "https://aipu.in/",
    year: "2024",
  },
  {
    id: 3,
    title: "Airbnb Clone Application",
    category: "Application Architecture",
    description:
      "Full-stack accommodation platform with server-side rendering, dynamic routing, and seamless user experience.",
    image: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440",
    tools: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS"],
    duration: "10 weeks",
    link: "#",
    year: "2024",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "Modern retail solution with advanced analytics, inventory management, and integrated payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit-crop",
    tools: ["React", "Node.js", "MongoDB", "Stripe"],
    duration: "14 weeks",
    link: "#",
    year: "2023",
  },
  {
    id: 5,
    title: "Healthcare Management",
    category: "Digital Health Platform",
    description:
      "Comprehensive healthcare ecosystem connecting patients and providers with telemedicine capabilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit-crop",
    tools: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    duration: "16 weeks",
    link: "#",
    year: "2023",
  },
  {
    id: 6,
    title: "FinTech Dashboard",
    category: "Financial Technology",
    description:
      "Advanced financial analytics platform with real-time data visualization and portfolio management.",
    image: "https://images.unsplash.com/photo-1551288049-bebdae38f71?w=800&h=600&fit-crop",
    tools: ["React", "D3.js", "Python", "PostgreSQL"],
    duration: "12 weeks",
    link: "#",
    year: "2023",
  },
];

const RecentProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Euro Asian University Portal",
      category: "Educational Platform",
      description:
        "A sophisticated certification platform with custom architecture, dynamic content management, and performance optimization.",
      image: "https://euroasianuniversity.ee/wp-content/uploads/2025/04/Slider-1.png",
      tools: ["WordPress", "Elementor", "PHP", "JavaScript"],
      duration: "8 weeks",
      link: "https://euroasianuniversity.ee",
      year: "2024",
    },
    {
      id: 2,
      title: "AIPU Membership Platform",
      category: "Platform Architecture",
      description:
        "Enterprise-grade membership ecosystem with payment integration, automated certification, and role-based access control.",
      image: "https://aipu.in/wp-content/uploads/2025/05/Hero_banner.jpg",
      tools: ["WordPress", "Elementor", "PHP", "jsPDF"],
      duration: "12 weeks",
      link: "https://aipu.in/",
      year: "2024",
    },
    {
      id: 3,
      title: "Airbnb Clone Application",
      category: "Application Architecture",
      description:
        "Full-stack accommodation platform with server-side rendering, dynamic routing, and seamless user experience.",
      image: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440",
      tools: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS"],
      duration: "10 weeks",
      link: "#",
      year: "2024",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "Modern retail solution with advanced analytics, inventory management, and integrated payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit-crop",
      tools: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "14 weeks",
      link: "#",
      year: "2023",
    },
    {
      id: 5,
      title: "Healthcare Management",
      category: "Digital Health Platform",
      description:
        "Comprehensive healthcare ecosystem connecting patients and providers with telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit-crop",
      tools: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      duration: "16 weeks",
      link: "#",
      year: "2023",
    },
    {
      id: 6,
      title: "FinTech Dashboard",
      category: "Financial Technology",
      description:
        "Advanced financial analytics platform with real-time data visualization and portfolio management.",
      image: "https://images.unsplash.com/photo-1551288049-bebdae38f71?w=800&h=600&fit-crop",
      tools: ["React", "D3.js", "Python", "PostgreSQL"],
      duration: "12 weeks",
      link: "#",
      year: "2023",
    },
  ];

  return (
    <div className={`min-h-screen ${DARK_BG} text-white py-16 md:py-20 lg:py-24`} style={FONT_STYLE}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-24">
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start">
            <div className="sticky top-24 md:top-32 text-center lg:text-left">
              <div className="mb-6 md:mb-12">
                <span className="text-xs font-medium tracking-[0.3em] text-gray-400 uppercase">
                  Selected Works
                </span>
              </div>
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-light leading-tight mb-8 md:mb-12">
                Crafting
                <br />
                <span className="text-gray-400">Digital</span>
                <br />
                Experiences
              </h1>
              <p className={`text-base md:text-lg ${LIGHT_TEXT} leading-relaxed max-w-lg mx-auto lg:mx-0`}>
                A curated selection of projects that showcase technical
                excellence and thoughtful design solutions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="space-y-px bg-gray-800">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-gray-900 cursor-pointer transition-all duration-500 hover:bg-gray-800"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="p-6 md:p-8 lg:p-12 xl:p-16">
                    <div className="flex items-start justify-between mb-6 md:mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 md:gap-6 mb-2 md:mb-3">
                          <span className="text-sm font-medium text-gray-400 tracking-wider">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-medium text-gray-400 tracking-wider">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 md:mb-3 group-hover:text-gray-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        <p className={`text-sm md:text-base text-gray-400 tracking-wide`}>
                          {project.category}
                        </p>
                      </div>
                      <div className="ml-8 md:ml-12">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300">
                          <ExternalLink className="text-gray-400 group-hover:text-black transition-colors duration-300 w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeProject === project.id ? "max-h-full opacity-100" : "max-h-0 opacity-0 lg:group-hover:max-h-full lg:group-hover:opacity-100"
                      }`}
                    >
                      <div className="pt-6 md:pt-8 border-t border-gray-700">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                          <div>
                            <p className={`text-base md:text-lg text-gray-400 leading-relaxed mb-6 md:mb-8 text-left`}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {project.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-800 rounded-full"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="relative">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-800">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                              <span className="text-sm md:text-base text-gray-400 font-medium">
                                {project.duration}
                              </span>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-base font-medium text-gray-200 hover:text-gray-400 transition-colors duration-200 flex items-center gap-2"
                              >
                                View Project
                                <ExternalLink />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`transition-all duration-300 pt-6 md:pt-8 ${
                        activeProject === project.id ? "opacity-0 hidden" : "opacity-100 lg:hidden"
                      }`}
                    >
                      <p className={`text-base text-gray-400 leading-relaxed line-clamp-2 max-w-4xl text-left`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = ({ links, isVisible }) => (
  <div
    className={`flex space-x-3 transition-all duration-300 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    }`}
  >
    {links.linkedin && (
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
      >
        <Linkedin size={14} />
      </a>
    )}
    {links.twitter && (
      <a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
      >
        <Twitter size={14} />
      </a>
    )}
    {links.github && (
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
      >
        <Github size={14} />
      </a>
    )}
    {links.instagram && (
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
      >
        <Instagram size={14} />
      </a>
    )}
  </div>
);

const TeamMemberCard = ({ member, isActive, onHover, onLeave }) => {
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={onLeave}
    >
      <div className="relative mb-6 overflow-hidden rounded-md">
        <div className="aspect-[3/4] relative">
          <img
            src={member.avatar}
            alt={member.name}
            className={`w-full h-full object-cover transition-all duration-500 rounded-md ${
              isActive ? "scale-105" : ""
            }`}
          />
          <div
            className={`absolute inset-0 bg-black/80 flex items-center justify-center p-6 transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center">
              <p className={`text-gray-300 text-sm leading-relaxed mb-4 italic font-light text-center`}>
                "{member.quote}"
              </p>
              <SocialLinks links={member.socialLinks} isVisible={isActive} />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-medium text-white tracking-tight">
          {member.name}
        </h3>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
          {member.title}
        </p>
        <div
          className={`transition-all duration-300 mx-auto ${
            isActive ? "w-8 bg-white" : "w-4 bg-gray-600"
          } h-px mt-3`}
        />
      </div>
    </div>
  );
};

const FeaturedDevelopers = () => {
  const [activeId, setActiveId] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Nitin Agrawal",
      title: "Laravel and Wordpress Developer",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689918914024?e=1756944000&v=beta&t=KbqCdf5EXd-93Rd8JDM67LwYVVVnve1RqrQdRAKMNxs",
      quote:
        "Innovation happens when passion meets purpose in the blockchain space.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/chrisbruce",
        twitter: "https://twitter.com/chrisbruce",
        github: "https://github.com/chrisbruce",
      },
    },
    {
      id: 2,
      name: "Hardik Sharma",
      title: "Python and QA Engineer",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1756944000&v=beta&t=P6b-Ct7xNoEFn7snl7sZRuDVvDNRduKrWukJ6SNAtPI",
      quote: "Code is poetry written in logic, executed with precision.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/seancarey",
        twitter: "https://twitter.com/seancarey",
        github: "https://github.com/seancarey",
        instagram: "https://instagram.com/seancarey",
      },
    },
    {
      id: 3,
      name: "Rahul Chanchlani",
      title: "MERN Stack Developer",
      avatar:
        "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
      quote:
        "Great teams are built on trust, communication, and shared vision.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/aileengomes",
        twitter: "https://twitter.com/aileengomes",
      },
    },
    {
      id: 4,
      name: "Ritik Singh",
      title: "Node JS Developer",
      avatar: "https://i.postimg.cc/wTXYPvhc/IMG-2865.avif",
      quote: "Scalable systems are the backbone of tomorrow's digital world.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/thomasstaetter",
        github: "https://github.com/thomasstaetter",
      },
    },
  ];

  return (
    <section className={`py-12 md:py-16 lg:py-20 ${DARK_BG} text-white`} style={FONT_STYLE}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16 text-center">
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <div className="w-12 h-px bg-gray-700"></div>
            <span>Team</span>
            <div className="w-12 h-px bg-gray-700"></div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-light text-gray-100 leading-tight tracking-tight">
              Meet the people
              <br />
              <span className="font-medium">behind the vision</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className={`text-base sm:text-lg ${LIGHT_TEXT} leading-relaxed`}>
                A collective of experienced developers and engineers who believe
                in building the future of web technologies with precision,
                creativity, and purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              isActive={activeId === member.id}
              onHover={setActiveId}
              onLeave={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Nayan Patel",
      role: "Client, Remote Task",
      content:
        "Always quick to respond and handles tasks perfectly — even creating Google Sheets from scratch with dummy data when needed. Reliable and efficient.",
      rating: 5,
      bgColor: "bg-purple-300",
      textColor: "text-purple-900",
      rotation: "-rotate-6",
      position: "mt-4 md:mt-12",
    },
    {
      name: "Top Govt Jobs Client",
      role: "Client",
      content:
        "Solved our error quickly and checked everything properly. Very helpful, thank you so much for the fast solution!",
      rating: 5,
      bgColor: "bg-blue-300",
      textColor: "text-blue-900",
      rotation: "rotate-3",
      position: "mt-0",
    },
    {
      name: "Euroasian Client",
      role: "Client Side Coordinator",
      content:
        "We got exactly what we needed from the client side. Unique and properly generated results every time — really appreciate the proactive work.",
      rating: 5,
      bgColor: "bg-gray-300",
      textColor: "text-gray-900",
      rotation: "-rotate-3",
      position: "mt-4 md:mt-8",
    },
  ];

  return (
    <section
      className={`py-12 md:py-16 lg:py-20 ${DARK_BG} overflow-hidden`}
      style={FONT_STYLE}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-base uppercase tracking-wider text-gray-400 mb-2 md:mb-4 font-medium">
            OUR CUSTOMERS
          </p>
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-gray-100 mb-4 md:mb-6 leading-tight">
            Hear from our clients.
          </h2>
          <p className={`text-base sm:text-lg text-gray-400 max-w-2xl mx-auto`}>
            Real stories of what it means to work with our team.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative md:${testimonial.position} transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-10`}
              >
                <div
                  className={`
                    ${testimonial.bgColor} ${testimonial.textColor} md:${testimonial.rotation}
                    p-6 md:p-8 rounded-2xl shadow-xl transform transition-all duration-300
                    relative min-h-[250px] md:min-h-[320px] flex flex-col justify-between
                    hover:shadow-2xl cursor-pointer
                  `}
                  style={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6 font-medium text-left">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="relative z-10">
                    <div className="font-bold text-base mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-xs md:text-sm opacity-80 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                  <div
                    className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 transform rotate-45 translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6"
                    style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.05) 100%)` }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0),
                        linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                      `,
                      backgroundSize: "20px 20px, 100% 100%",
                    }}
                  ></div>
                </div>
                <div
                  className={`
                    absolute inset-0 bg-black opacity-10 rounded-2xl transform transition-all duration-300
                    md:${testimonial.rotation} translate-x-1 translate-y-1 -z-10
                  `}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        .hover\\:float:hover { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

const CTASection = () => (
  <section
    className="relative py-16 md:py-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1582578598774-a377d4b32223?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      ...FONT_STYLE
    }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <p className="text-base font-medium tracking-wider text-slate-300 uppercase">
            Contact Us
          </p>
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-light leading-tight">
            Are we a{" "}
            <span className="italic text-slate-300">match</span>?
          </h2>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-white to-transparent mx-auto"></div>
          <p className={`text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto`}>
            We believe in working closely and collaboratively with the charities
            and partners we help and always aim to ensure that we're a good fit
            for you and you're a good fit for us. Book a quick call with us
            today to see how we could work together.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-all duration-300 hover:scale-105">
            <span className="flex items-center justify-center gap-2 text-lg md:text-xl">
              Contact us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="group px-6 py-3 md:px-8 md:py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
            <span className="flex items-center justify-center gap-2 text-lg md:text-xl">
              Book a Call
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="relative z-0" style={FONT_STYLE}>
      <HeroSection />
      <StatsSection />
      <SecondHeroSection />
      <RecentProjects />
      <FeaturedDevelopers />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Index;