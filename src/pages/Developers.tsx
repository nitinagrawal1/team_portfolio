import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Sparkles, Code2 } from 'lucide-react';

// Consistent font and color variables for easy maintenance
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG = "bg-black";
const LIGHT_TEXT = "text-gray-200";
const MUTED_TEXT = "text-gray-400";

// Re-used CTASection component with responsive enhancements
const CTASection = () => (
  <section
    className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1582578598774-a377d4b32223?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      ...FONT_STYLE
    }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wider text-slate-300 uppercase">
            Contact Us
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight">
            Are we a{" "}
            <span className="italic font-serif text-slate-300">match</span>?
          </h2>
          <div className="w-8 sm:w-10 md:w-12 lg:w-16 h-px bg-gradient-to-r from-white to-transparent mx-auto"></div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto">
            We believe in working closely and collaboratively with the charities
            and partners we help and always aim to ensure that we're a good fit
            for you and you're a good fit for us. Book a quick call with us
            today to see how we could work together.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
          <button className="group px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg">
            <span className="flex items-center justify-center gap-2">
              Contact us
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="group px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg">
            <span className="flex items-center justify-center gap-2">
              Book a Call
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Developers = () => {
  const [imageIndices, setImageIndices] = useState([0, 0, 0, 0]);

  const developers = [
    {
      id: 1,
      name: "Nitin Agrawal",
      title: "Full Stack Developer",
      images: [
        "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689918914024?e=1757548800&v=beta&t=IfTjVlwAfC7RTTlmafjfuBCU9oSZU287_Wcz4EFsQhs",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      ],
      badge: "good vibes",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 2,
      name: "Ritik Singh",
      title: "Frontend & WordPress Developer",
      images: [
        "https://i.postimg.cc/wTXYPvhc/IMG-2865.avif",
        "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=400&h=500&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      ],
      badge: "hi",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 3,
      name: "Rahul Chanchlani",
      title: "Full Stack Developer (MERN)",
      images: [
        "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
      ],
      badge: "camp crew",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      id: 4,
      name: "Hardik Sharma",
      title: "QA Tester (Manual & Automation)",
      images: [
        "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1757548800&v=beta&t=SRRo15iUbSejuq14aIO2aMa2fwXmk-DYYSRPTisEEMQ",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face",
      ],
      badge: "let's go!",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((index, i) => (index + 1) % developers[i].images.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [developers]);

  const handleCardClick = (developerId) => {
    window.location.href = `/developer/${developerId}`;
  };

  return (
    <div className={`${DARK_BG} ${LIGHT_TEXT} overflow-hidden`} style={FONT_STYLE}>
      {/* Hero Section */}
      <section className="relative flex items-center py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="w-full md:w-7/12 text-center md:text-left">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                <div className="relative">
                  <div className={`text-xs sm:text-sm md:text-base font-mono ${MUTED_TEXT} mb-2 sm:mb-3 md:mb-4`}>
                    → Meet the Developers
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-none tracking-tight">
                    The team
                    <span className="block font-bold">behind</span>
                    <span className={`block font-light ${PRIMARY_ACCENT}`}>the code</span>
                  </h1>
                </div>
                <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-[1px] bg-gray-600 mx-auto md:mx-0"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto md:mx-0">
                  A collective of experienced freelance developers and engineers who believe in building the future of web technologies with precision, creativity, and purpose.
                </p>
              </div>
            </div>

            {/* Card Grid Section */}
            <div className="w-full md:w-5/12 flex items-center justify-center">
              <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%]">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative">
                  {developers.map((developer, index) => (
                    <div key={developer.id} className="relative flex justify-center z-10">
                      <div
                        className={`cursor-pointer transform hover:scale-105 transition-all duration-300 relative z-20 ${
                          index % 2 === 0 ? "rotate-1 sm:rotate-2" : "-rotate-1 sm:-rotate-2"
                        }`}
                        onClick={() => handleCardClick(developer.id)}
                        style={{ pointerEvents: 'auto' }}
                      >
                        <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] h-[130px] sm:h-[160px] md:h-[180px] lg:h-[210px] xl:h-[240px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative">
                          <img
                            src={developer.images[imageIndices[index]]}
                            alt={developer.name}
                            className="w-full h-full object-cover transition-all duration-1000 pointer-events-none"
                            loading="lazy"
                          />
                        </div>
                        <div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-medium px-1 sm:px-1.5 md:px-2 lg:px-3 py-0.5 sm:py-0.5 md:py-1 lg:py-1.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap pointer-events-none"
                        >
                          {developer.badge}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Developers;