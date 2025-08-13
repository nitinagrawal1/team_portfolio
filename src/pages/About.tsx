import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Zap, Code2, Star, ArrowRight, Globe, Sparkles, ChevronDown, Play, Eye, Heart, Lightbulb, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

// Reusing consistent styles from other components
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG = "bg-black";
const LIGHT_TEXT = "text-gray-200";
const MUTED_TEXT = "text-gray-400";

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
                            <p className={`text-gray-300 text-sm leading-relaxed mb-4 italic font-light text-left`}>
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
                    {member.role}
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
            role: "Laravel and Wordpress Developer",
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
            role: "Python and QA Engineer",
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
            role: "MERN Stack Developer",
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
            role: "Node JS Developer",
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
                            <p className={`text-base sm:text-lg ${LIGHT_TEXT} leading-relaxed text-left sm:text-center`}>
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
                    <p className={`text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto text-left sm:text-center`}>
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


const About = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

    const processSteps = [
        {
            title: "Learn",
            description: "We want to learn all about you and the people that you help. The history and the people of your charity and what makes your cause special.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Challenge",
            description: "By learning about your cause we’re here to challenge assumptions and ensure we’re all moving in the same direction for the future.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Plan",
            description: "We outline your goals by having an understanding of your challenges and your sector and work together to plan how we overcome them.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Apply",
            description: "The culmination of our work together is how we apply genuine change to make your project and your cause better than it was before we met.",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Nurture",
            description: "Once a project is complete, the work doesn’t stop. We help to Nurture the project as you learn and grow to use it, with new improvements and features.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className={`${DARK_BG} ${LIGHT_TEXT} overflow-hidden`} style={FONT_STYLE}>
            {/* Floating gradient orb */}
            <div
                className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-700 ease-out opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
                    left: mousePos.x - 192,
                    top: mousePos.y - 192,
                }}
            />

            {/* Hero Section */}
            <section className=" relative flex flex-col justify-center items-center py-20 md:py-24">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Abstract shapes section - Now visible on mobile with a fixed height */}
                        <div className="col-span-1 md:col-span-5 relative h-64 md:h-96">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full relative">
                                    <div
                                        className="absolute w-20 h-20 bg-gray-700 rounded-full hidden md:block"
                                        style={{
                                            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
                                            top: '10%',
                                            left: '20%'
                                        }}
                                    />
                                    <div
                                        className="absolute w-16 h-16 bg-purple-500 rounded-full"
                                        style={{
                                            transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.03}px)`,
                                            top: '60%',
                                            right: '10%'
                                        }}
                                    />
                                    <div
                                        className="absolute w-12 h-12 bg-gray-500 rounded-full"
                                        style={{
                                            transform: `translate(${scrollY * 0.12}px, ${scrollY * -0.04}px)`,
                                            bottom: '20%',
                                            left: '30%'
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text content section */}
                        <div className="col-span-1 md:col-span-7">
                            <div className="space-y-8">
                                <div className="relative text-center md:text-left">
                                    <div className={`text-sm font-mono ${MUTED_TEXT} mb-4`}>
                                        → About DevCommunity
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light leading-none tracking-tight">
                                        We are
                                        <span className="block font-bold">digital</span>
                                        <span className={`block font-light ${MUTED_TEXT}`}>craftsmen</span>
                                    </h1>
                                </div>

                                <div className="w-24 h-[1px] bg-gray-600 mx-auto md:mx-0"></div>

                                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl text-center md:text-left">
                                    We're on a mission to connect the world's most talented freelance developers
                                    with businesses that need exceptional digital solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="col-span-1 lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-700 rounded-lg hidden md:block"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Team collaboration"
                                    className="relative w-full h-80 md:h-96 object-cover rounded-lg transition-all duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-7 mt-12 lg:mt-0">
                            <div className="space-y-8">
                                <div className="text-center">
                                    <div className={`text-sm font-mono ${MUTED_TEXT} mb-4`}>
                                        → Our Story
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                                        Building the future,
                                        <span className="block font-bold">one project at a time</span>
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="border-l-2 border-gray-700 pl-4 md:pl-8">
                                        <p className={`text-lg ${MUTED_TEXT} leading-relaxed`}>
                                            We build reliable, tailored web solutions that help businesses and institutions launch and grow with confidence.
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-gray-700 pl-4 md:pl-8">
                                        <p className={`text-lg ${MUTED_TEXT} leading-relaxed`}>
                                            Our expertise covers custom WordPress platforms, membership and certification systems, full-stack React and Next.js applications, secure Laravel backends, and thorough manual and automated QA testing.
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-gray-700 pl-4 md:pl-8">
                                        <p className={`text-lg ${MUTED_TEXT} leading-relaxed`}>
                                            From dynamic portals to high-performance web apps and clones, we deliver clean builds, smooth integrations, and proper testing — so every launch is stable and future-ready.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 md:py-24 bg-gray-900 relative" style={{ ...FONT_STYLE }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 md:mb-20 text-center">
                        <div className="w-full mx-auto">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white">
                                <span className="relative">
                                    <span className="inline-block">Our</span>
                                    <em className="italic font-normal">
                                        <span className="inline-block"> process</span>
                                    </em>
                                </span>
                            </h1>
                        </div>
                        <div className="text-lg md:text-xl max-w-2xl mt-4 md:mt-6 mx-auto">
                            <p className={MUTED_TEXT}>
                                We find that great things happen when we partner together and become co-collaborators on your charity journey. This is the process that has worked time and again for us and the charities we help.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* New curved and animated dotted pattern */}
                        <div className="absolute top-10 md:top-16 left-0 w-full z-0 pointer-events-none">
                            <svg className="overflow-visible" viewBox="0 0 1600 80" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M 0 40 Q 400 0 800 40 T 1600 40"
                                    fill="none"
                                    stroke="#4b5563"
                                    strokeWidth="2"
                                    strokeDasharray="4 8"
                                    className="animate-curvy-line"
                                />
                            </svg>
                        </div>

                        <div className="overflow-x-scroll no-scrollbar relative flex gap-4 md:gap-10 xl:gap-16 pb-6">
                            {/* Process Steps */}
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex-shrink-0 w-80 md:w-96 p-6 grid grid-cols-3 gap-x-4 md:gap-x-6 relative z-10 rounded-lg">
                                    <div className="relative row-span-3">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="app-image rounded-md absolute h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="col-start-2 col-span-2 mb-2 md:mb-4 text-4xl sm:text-5xl font-extralight text-gray-500 opacity-70">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </div>
                                    <h3 className="col-start-2 col-span-2 mb-2 text-2xl font-bold text-white max-w-md">
                                        {step.title}
                                    </h3>
                                    <p className="col-start-2 col-span-2 text-base text-gray-400 max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                            {/* Final CTA Card */}
                            <div className="flex-shrink-0 w-80 md:w-96 rounded-lg bg-gray-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center text-center relative z-10">
                                <h3 className="text-xl font-bold mb-2">Want to know more?</h3>
                                <p className={`text-gray-300 text-sm mb-4 leading-relaxed`}>
                                    Learn more about our process and how it can benefit your charity project by booking a call with our team.
                                </p>
                                <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                                    <span className="flex items-center justify-center gap-2 text-lg md:text-xl">
                                        Book a Call
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <FeaturedDevelopers />

            {/* CTA Section */}
            <CTASection />

            <style>{`
                /* Hide scrollbar but allow scrolling for the horizontal list */
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .app-image {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    position: absolute;
                }
                
                @keyframes dash-scroll {
                    0% {
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dashoffset: 1000; /* Adjust this value for speed */
                    }
                }
                
                .animate-curvy-line {
                    stroke-dashoffset: 0;
                    stroke-dasharray: 4 8; /* Example dashed pattern */
                    animation: dash-scroll 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default About;