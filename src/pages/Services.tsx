import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const LIGHT_BG = "bg-black";
const LIGHT_TEXT = "text-gray-200";
const MUTED_TEXT = "text-gray-400";
const ACCENT_COLOR = "text-purple-400";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Brand Identity",
      shortDesc: "Strategic brand development and visual identity systems",
      fullDesc:
        "We develop comprehensive brand strategies that define your unique position in the market. From conceptual foundations to complete visual identity systems, we create brands that communicate clearly and resonate authentically with your target audience.",
      number: "01",
      price: "$2,500 - $10,000",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      deliverables: ["Logo Design", "Brand Guidelines", "Typography", "Color Systems"],
    },
    {
      title: "Web Development",
      shortDesc: "Custom websites and web applications built to perform",
      fullDesc:
        "We build fast, scalable websites using modern technologies and best practices. Every project is crafted with clean code, optimal performance, and seamless user experiences across all devices and platforms.",
      number: "02",
      price: "$5,000 - $25,000+",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      deliverables: [
        "Frontend Development",
        "Backend Systems",
        "CMS Integration",
        "Performance Optimization",
      ],
    },
    {
      title: "UI/UX Design",
      shortDesc: "User-centered design that prioritizes clarity and function",
      fullDesc:
        "We design digital experiences that are intuitive, accessible, and purposeful. Through research, testing, and iterative design, we create interfaces that users understand immediately and enjoy using.",
      number: "03",
      price: "$2,000 - $8,000",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      deliverables: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      title: "Digital Strategy",
      shortDesc: "Data-driven strategies for digital growth and optimization",
      fullDesc:
        "We develop comprehensive digital strategies based on market research and analytics. Our approach focuses on sustainable growth through SEO, content strategy, and conversion optimization.",
      number: "04",
      price: "$1,500 - $6,000",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0",
      deliverables: ["SEO Strategy", "Content Planning", "Analytics Setup", "Growth Optimization"],
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${LIGHT_BG} ${LIGHT_TEXT} overflow-hidden`} style={FONT_STYLE}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8 md:space-y-12"
            >
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className={`text-xs md:text-sm font-medium tracking-widest ${MUTED_TEXT} uppercase`}
                >
                  Our Services
                </motion.div>
                <div className="space-y-2 md:space-y-4">
                  <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight ${LIGHT_TEXT}`}>
                    Building
                    <span className={`block font-bold ${ACCENT_COLOR}`}>Digital Futures</span>
                    <span className={`block font-light ${MUTED_TEXT}`}>together</span>
                  </h1>
                  <div className="w-12 md:w-16 h-px bg-gray-600" />
                </div>
                <p className={`text-base md:text-xl ${MUTED_TEXT} leading-relaxed max-w-lg font-light`}>
                  We design and develop purposeful digital experiences that solve real-world problems and drive measurable results.
                </p>
              </div>
            </motion.div>
            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden mt-8 lg:mt-0"
            >
              <motion.div
                style={{ y: scrollY * 0.1 }}
                className="absolute inset-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700"
              >
                <div className={`text-sm md:text-base font-medium ${LIGHT_TEXT} mb-1`}>Excellence</div>
                <div className={`text-xs ${MUTED_TEXT} uppercase tracking-wide`}>Since 2019</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className={`text-xs md:text-sm font-medium tracking-widest ${MUTED_TEXT} uppercase mb-4 md:mb-6`}>
                Our Expertise
              </div>
              <h2 className={`text-3xl md:text-5xl lg:text-6xl font-light leading-snug md:leading-tight ${LIGHT_TEXT}`}>
                Solutions crafted for your success, from
                <span className={`font-bold ${ACCENT_COLOR}`}> concept to launch</span>.
              </h2>
            </div>
          </motion.div>
          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="group border-b border-gray-700 last:border-b-0"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Main Service Row */}
                <motion.div
                  className="py-8 md:py-12 cursor-pointer"
                  onClick={() => toggleExpanded(index)}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex justify-between items-center px-4 lg:px-0">
                    {/* Number and Title with Short Desc */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start space-x-4 md:space-x-6 mb-1 md:mb-2">
                        <motion.div
                          animate={{
                            scale: hoveredService === index || expandedService === index ? 1.1 : 1,
                            color: hoveredService === index || expandedService === index ? '#E5E7EB' : '#4B5563'
                          }}
                          transition={{ duration: 0.3 }}
                          className={`text-2xl md:text-3xl lg:text-4xl font-light ${MUTED_TEXT}`}
                        >
                          {service.number}
                        </motion.div>
                        <div className="flex flex-col">
                          <motion.h3
                            animate={{
                              color: hoveredService === index || expandedService === index ? '#FFFFFF' : '#E5E7EB'
                            }}
                            transition={{ duration: 0.3 }}
                            className={`text-xl md:text-2xl lg:text-4xl font-light`}
                          >
                            {service.title}
                          </motion.h3>
                          <p className={`text-sm md:text-lg ${MUTED_TEXT} font-light leading-relaxed max-w-2xl mt-1 md:mt-2`}>
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Price and Expand Button */}
                    <div className="flex-shrink-0 ml-auto flex items-center space-x-4 md:space-x-8">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === index || expandedService === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm md:text-lg font-light hidden lg:block"
                      >
                        {service.price}
                      </motion.div>
                      <motion.div
                        animate={{
                          rotate: expandedService === index ? 45 : 0,
                          scale: hoveredService === index || expandedService === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700"
                      >
                        <Plus className={`w-4 h-4 md:w-5 md:h-5 ${MUTED_TEXT}`} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-12 px-4 lg:px-12">
                        <motion.div
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="grid lg:grid-cols-2 gap-8 md:gap-12 mt-4"
                        >
                          {/* Description & Deliverables */}
                          <div className="space-y-6 md:space-y-8">
                            <p className={`text-sm md:text-lg ${MUTED_TEXT} leading-relaxed font-light`}>
                              {service.fullDesc}
                            </p>
                            <div>
                              <div className={`text-xs md:text-sm font-medium ${LIGHT_TEXT} mb-3 md:mb-4 uppercase tracking-wide`}>
                                What's Included
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {service.deliverables.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                                    className={`text-gray-400 text-xs md:text-sm font-light flex items-center gap-2`}
                                  >
                                    <span className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                                    {item}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                            <motion.button
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                              whileHover={{ x: 4 }}
                              className={`group inline-flex items-center gap-2 md:gap-3 ${LIGHT_TEXT} font-medium border-b border-gray-700 pb-1 hover:border-gray-500 transition-colors text-sm`}
                            >
                              View {service.title} Work
                              <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1 ${LIGHT_TEXT}`} />
                            </motion.button>
                          </div>
                          {/* Small Service Image */}
                          <div className="flex justify-end">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                              className="aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg mt-8 lg:mt-0"
                            >
                              <img
                                src={service.image}
                                alt={`${service.title} showcase`}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;