import { Users, Target, Award, Zap, Code2, Star, ArrowRight, Globe, Sparkles, ChevronDown, Play, Eye, Heart, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const values = [
    {
      icon: Code2,
      title: "Custom Web Solutions",
      description: "Delivering tailor-made WordPress, ReactJS, and full-stack projects for diverse business needs.",
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Users,
      title: "Collaborative Teamwork",
      description: "Projects built with a strong focus on teamwork, quality standards, and innovative solutions.",
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Zap,
      title: "Reliable & On-Time",
      description: "Timely project delivery with clean code, responsive design, and modern tech stacks.",
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "Dedicated to exceeding client expectations and building long-term partnerships.",
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const team = [
    {
      name: "Nitin Agrawal",
      role: "Full Stack Developer",
      bio: "Expert in Laravel, WordPress, and custom web solutions. Passionate about building scalable platforms.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689918914024?e=1757548800&v=beta&t=IfTjVlwAfC7RTTlmafjfuBCU9oSZU287_Wcz4EFsQhs",
      skills: ["Laravel", "WordPress", "PHP", "MySQL"],
      accent: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      name: "Ritik Singh",
      role: "Frontend & WordPress Developer",
      bio: "Specializes in React.js, Node.js, and WordPress. Delivers seamless user experiences and dynamic interfaces.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQHGegTdTo3h3w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1711741312481?e=1757548800&v=beta&t=9Odcf06qkH7t-RS4VTcGe4l5Op2Xh-a0sbpDKhAuE5E",
      skills: ["React.js", "Node.js", "WordPress", "JavaScript"],
      accent: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      name: "Rahul Chanchlani",
      role: "Full Stack Developer (MERN)",
      bio: "Experienced in React.js, Next.js, and TypeScript. Builds robust, scalable, and modern web applications.",
      avatar: "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
      skills: ["React.js", "Next.js", "TypeScript", "MongoDB"],
      accent: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      name: "Hardik Sharma",
      role: "QA Tester (Manual & Automation)",
      bio: "Expert in Python, Selenium, and automation frameworks. Ensures quality and reliability in every project.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1757548800&v=beta&t=SRRo15iUbSejuq14aIO2aMa2fwXmk-DYYSRPTisEEMQ",
      skills: ["Python", "Selenium", "Automation", "Testing"],
      accent: "bg-gradient-to-br from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden">
      {/* Floating gradient orb */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-700 ease-out opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)',
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

     {/* Hero Section - Asymmetrical Layout */}
     <section className="min-h-screen relative flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left side - Main content */}
            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-8">
                <div className="relative">
                  <div className="text-sm font-mono text-gray-500 mb-4">
                    → About DevCommunity
                  </div>
                  <h1 className="text-7xl lg:text-8xl font-light leading-none tracking-tight">
                    We are
                    <span className="block font-bold">digital</span>
                    <span className="block font-light text-gray-400">craftsmen</span>
                  </h1>
                </div>
                
                <div className="w-24 h-[1px] bg-gray-900"></div>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  We're on a mission to connect the world's most talented freelance developers 
                  with businesses that need exceptional digital solutions.
                </p>
              </div>
            </div>

            {/* Right side - Floating elements */}
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 relative">
                  <div 
                    className="absolute w-20 h-20 bg-gray-100 rounded-full"
                    style={{
                      transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
                      top: '10%',
                      left: '20%'
                    }}
                  />
                  <div 
                    className="absolute w-16 h-16 bg-gray-900 rounded-full"
                    style={{
                      transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.03}px)`,
                      top: '60%',
                      right: '10%'
                    }}
                  />
                  <div 
                    className="absolute w-12 h-12 bg-gray-300 rounded-full"
                    style={{
                      transform: `translate(${scrollY * 0.12}px, ${scrollY * -0.04}px)`,
                      bottom: '20%',
                      left: '30%'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <div className="text-xs font-mono text-gray-500">SCROLL</div>
          <ChevronDown className="w-4 h-4 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-16">
            {/* Left side - Image */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full border border-gray-200 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="relative w-full h-96 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-12">
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-4">
                    → Our Story
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                    Building the future,
                    <span className="block font-bold">one project at a time</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-l-2 border-gray-900 pl-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We build reliable, tailored web solutions that help businesses and institutions launch and grow with confidence.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-gray-300 pl-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our expertise covers custom WordPress platforms, membership and certification systems, full-stack React and Next.js applications, secure Laravel backends, and thorough manual and automated QA testing.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-gray-200 pl-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      From dynamic portals to high-performance web apps and clones, we deliver clean builds, smooth integrations, and proper testing — so every launch is stable and future-ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Rotating Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group relative h-80 perspective-1000">
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden">
                      <img 
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                          <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">{value.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
                      <div className="text-center text-white">
                        <Icon className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Hexagonal Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600">The brilliant minds driving innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className={`absolute -inset-1 ${member.accent} rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <img 
                        src={member.avatar}
                        alt={member.name}
                        className="relative w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Split Design */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Ready to build something extraordinary?
                </h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  Let's collaborate on your next project and bring your vision to life with cutting-edge technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Story
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ready to build"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .rotate-y-180 {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
};

export default About;