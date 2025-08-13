import { useState, useEffect } from 'react';
import { ExternalLink, Github, Search, Calendar, User, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// Consistent font and color variables for easy maintenance
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG = "bg-black";
const LIGHT_TEXT = "text-gray-200";
const MUTED_TEXT = "text-gray-400";


// Re-used components from about.tsx
const CTASection = () => (
    <section
        className="relative py-12 sm:py-16 md:py-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582578598774-a377d4b32223?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            ...FONT_STYLE
        }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <p className="text-xs sm:text-sm md:text-base font-medium tracking-wider text-slate-300 uppercase">
                        Contact Us
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight">
                        Are we a{" "}
                        <span className="italic font-serif text-slate-300">match</span>?
                    </h2>
                    <div className="w-8 sm:w-10 md:w-12 lg:w-16 h-px bg-gradient-to-r from-white to-transparent mx-auto"></div>
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto`}>
                        We believe in working closely and collaboratively with the charities
                        and partners we help and always aim to ensure that we're a good fit
                        for you and you're a good fit for us. Book a quick call with us
                        today to see how we could work together.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button className="group px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                        <span className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
                            Contact us
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                    <button className="group px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                        <span className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
                            Book a Call
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
);

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mythos Interior Design",
      description: "Built a visually striking WordPress website for a furniture and decor brand with custom templates, interactive galleries, and responsive design.",
      image: "https://mythosweb.netlify.app/wp-content/uploads/2025/01/Texas-TrueHomesPhotography-56_sm.jpeg",
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript"],
      developer: "Nitin Agrawal",
      completionDate: "2024-04",
      liveUrl: "https://mythosweb.netlify.app/",
      year: "2024"
    },
    {
      id: 2,
      title: "Euro Asian University Certification Portal",
      description: "Developed a dynamic WordPress website for EURO ASIAN UNIVERSITY to showcase certification programs. Includes custom post types, responsive layouts, and optimized performance.",
      image: "https://euroasianuniversity.ee/wp-content/uploads/2025/04/Slider-1.png",
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript"],
      developer: "Nitin Agrawal",
      completionDate: "2024-05",
      liveUrl: "https://euroasianuniversity.ee",
      year: "2024"
    },
    {
      id: 3,
      title: "AIPU Membership Platform",
      description: "Built a custom WordPress ecosystem with Cashfree payment gateway, smart card & certificate generation, role-based user accounts, and dynamic content shortcodes.",
      image: "https://aipu.in/wp-content/uploads/2025/05/Hero_banner.jpg",
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "PHP", "jsPDF"],
      developer: "Ritik Singh",
      completionDate: "2024-06",
      liveUrl: "https://aipu.in/",
      year: "2024"
    },
    {
      id: 4,
      title: "Airbnb Clone Platform",
      description: "Built a fully functional Airbnb clone using ReactJS, NextJS, TypeScript, Tailwind CSS, and Prisma. Implemented dynamic routing, server-side rendering, and responsive design.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      category: "Full Stack",
      technologies: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Prisma"],
      developer: "Rahul Chanchlani",
      completionDate: "2025-02",
      githubUrl: "#",
      liveUrl: "#",
      year: "2025"
    },
    {
      id: 5,
      title: "Lucky Traders Portal",
      description: "Laravel-based trading portal with contractor management, gift redemption system, RESTful APIs, and comprehensive business reporting dashboard.",
      image: "https://laxmayatechnologies.com/tradingportal/assets/images/logo-light.png",
      category: "Web Development",
      technologies: ["Laravel", "PHP", "SQL", "JavaScript"],
      developer: "Nitin Agrawal",
      completionDate: "2024-06",
      liveUrl: "https://laxmayatechnologies.com/tradingportal",
      year: "2024"
    },
    {
      id: 6,
      title: "Indo Global University",
      description: "Designed and developed a responsive university website using WordPress and Elementor with dynamic course lists, faculty profiles, and administrator-friendly content sections.",
      image: "https://indoglobaluniversity.com/wp-content/uploads/2025/05/hero_-area.jpg",
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "PHP"],
      developer: "Ritik Singh",
      completionDate: "2024-06",
      liveUrl: "https://indoglobaluniversity.com/",
      year: "2024"
    },
    {
      id: 7,
      title: "CRM Automation & Testing",
      description: "Performed manual and automated testing of CRM workflows, built automation test scripts using Selenium & Robot Framework, and implemented Salesforce lead tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "QA & Automation",
      technologies: ["Python", "Selenium", "Robot Framework", "Salesforce"],
      developer: "Hardik Sharma",
      completionDate: "2024-07",
      githubUrl: "#",
      year: "2024"
    },
    {
      id: 8,
      title: "OOE Consultancy Portal",
      description: "Created a WordPress portal for educational counseling with dynamic university listings, responsive pages, and clean layouts aligned with brand identity.",
      image: "https://ooeconsultancy.com/wp-content/uploads/2025/05/OOEC-Distance.jpg",
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "PHP"],
      developer: "Nitin Agrawal",
      completionDate: "2024-04",
      liveUrl: "https://ooeconsultancy.com",
      year: "2024"
    }
  ];

  const categories = ['All', 'Web Development', 'Full Stack', 'QA & Automation'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const projectsByYear = filteredProjects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSolid(window.scrollY > 50);
      setShowScrollToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${DARK_BG} ${LIGHT_TEXT} font-sans antialiased`} style={FONT_STYLE}>
      {/* Hero Section */}
      <section className=" relative flex items-center justify-center py-20 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
              Selected
              <br />
              <span className={`italic text-gray-400`}>Works</span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${MUTED_TEXT} mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed`}>
              A curated collection of digital experiences, spanning web development,
              full-stack applications, and quality assurance projects.
            </p>
          </motion.div>

          {/* Search and Filter with motion and a more modern look */}
          <motion.div
            className="max-w-4xl mx-auto space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-800 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 text-sm rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg border border-purple-400'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline with Framer Motion for scroll-based animations */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatePresence>
            {years.map((year, yearIndex) => (
              <div key={year} className="mb-16 md:mb-24">
                <motion.div
                  className="mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 md:gap-8 mb-4">
                    <h3 className="text-4xl sm:text-5xl font-light text-gray-200">{year}</h3>
                    <div className="flex-1 h-px bg-gray-700"></div>
                    <span className="text-sm text-gray-500">
                      {projectsByYear[year].length} {projectsByYear[year].length === 1 ? 'project' : 'projects'}
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-12 md:space-y-24">
                  <AnimatePresence>
                    {projectsByYear[year].map((project, index) => (
                      <motion.article
                        key={project.id}
                        className={`flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 items-start ${
                          index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                        }`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        variants={projectVariants}
                      >
                        {/* Project Image - now with a more complex hover state */}
                        <div className={`lg:col-span-7 ${index % 2 === 0 ? '' : 'lg:col-start-6'}`}>
                          <motion.div
                            className="relative group overflow-hidden rounded-lg shadow-xl border border-gray-800"
                            onHoverStart={() => setActiveProject(project.id)}
                            onHoverEnd={() => setActiveProject(null)}
                          >
                            <div className="aspect-video w-full">
                              <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                                style={{
                                  transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)'
                                }}
                              />
                            </div>
                            {/* Overlay with more info and animated buttons */}
                            <AnimatePresence>
                              {activeProject === project.id && (
                                <motion.div
                                  className="absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center p-4 sm:p-8 text-white"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 20 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <h4 className="text-xl sm:text-2xl font-light mb-2">{project.title}</h4>
                                  <p className="text-xs sm:text-sm text-center max-w-xs mb-4">
                                    {project.description}
                                  </p>
                                  <div className="flex gap-4">
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                      <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full"
                                        whileHover={{ scale: 1.1, rotate: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <Github className="w-5 h-5 text-white" />
                                      </motion.a>
                                    )}
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                      <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full"
                                        whileHover={{ scale: 1.1, rotate: -15 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                      </motion.a>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Project Number */}
                            <div className="absolute top-4 left-4 bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-gray-200 rounded-full shadow-md border border-gray-700">
                              {String(yearIndex * projectsByYear[year].length + index + 1).padStart(2, '0')}
                            </div>
                          </motion.div>
                        </div>

                        {/* Project Info */}
                        <div className={`lg:col-span-5 space-y-4 md:space-y-6 mt-6 lg:mt-0 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                          <div>
                            <span className={`text-sm ${MUTED_TEXT} uppercase tracking-wider font-semibold`}>
                              {project.category}
                            </span>
                            <h4 className="text-2xl sm:text-3xl font-light mt-2 mb-2 leading-tight">
                              {project.title}
                            </h4>
                            <p className={`text-sm sm:text-base ${MUTED_TEXT} leading-relaxed mb-4`}>
                              {project.description}
                            </p>
                          </div>

                          {/* Technologies with a more distinct style */}
                          <div>
                            <span className={`text-sm ${MUTED_TEXT} uppercase tracking-wider font-semibold`}>
                              Technologies
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.technologies.map((tech, i) => (
                                <motion.span
                                  key={i}
                                  className="text-xs text-gray-200 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 * i }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Meta Info - visually separated */}
                          <div className="pt-4 border-t border-gray-700">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span className="font-medium">{project.developer}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{new Date(project.completionDate).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long'
                                })}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
         {/* CTA Section */}
            <CTASection />
    </div>
  );
};

export default Portfolio;