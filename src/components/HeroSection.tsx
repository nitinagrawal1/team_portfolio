import { ArrowRight, Sparkles, Code, Users, Award, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const textArray = ['build crew', 'design team', 'dev squad', 'digital agency'];

  useEffect(() => {
    setIsVisible(true);
    
    // Text morphing animation
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black animate-pulse"></div>
      
      {/* Dynamic grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"
      ></div>



      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-center min-h-screen">
        <div className="text-center w-full">
          
          {/* Main heading with staggered reveal */}
          <div className="space-y-6 mb-16 mt-8 sm:mt-12 md:mt-16">
            <div className={`transition-all duration-1000 delay-300 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight mx-auto">
                <span className="block text-white overflow-hidden text-center">
                  <span className="inline-block animate-slide-up">We're not a company.</span>
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight mx-auto">
                <span className="text-zinc-500">We're your </span>
                <span className="text-white relative inline-block">
                  <span 
                    key={currentText}
                    className="inline-block animate-text-reveal"
                  >
                    {textArray[currentText]}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white via-zinc-400 to-white animate-expand"></div>
                </span>
              </h2>
            </div>
          </div>

          {/* Subtitle with proper spacing */}
          <div className={`transition-all duration-1000 delay-700 mb-16 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed text-center">
              No corporate fluff. Just clean code, thoughtful design, and projects we're genuinely proud of.
            </p>
          </div>

          {/* Interactive CTA buttons with better spacing */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-900 mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              className="group relative bg-white text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Code className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                Explore Our Work
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="group relative border border-zinc-700 text-zinc-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:border-zinc-500 overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Watch Our Process
              </span>
              <div className="absolute inset-0 bg-zinc-900/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Animated stats with better spacing and alignment */}
          <div className={`transition-all duration-1000 delay-1100 pb-16 sm:pb-20 md:pb-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 md:gap-20 max-w-5xl mx-auto">
              {[
                { icon: Code, number: '50+', label: 'Projects Delivered' },
                { icon: Users, number: '5+', label: 'Industries Served' },
                { icon: Award, number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900/50 border border-zinc-800 mb-6 group-hover:border-zinc-600 group-hover:bg-zinc-800/50 transition-all duration-300 group-hover:scale-110 mx-auto">
                    <stat.icon className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-400 group-hover:text-zinc-200 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                  <div className="text-sm sm:text-base text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }
        
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        
        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out forwards;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;