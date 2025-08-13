import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Calendar, Github, Linkedin, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Consistent font and color variables for easy maintenance
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG = "bg-black";
const LIGHT_TEXT = "text-gray-200";
const MUTED_TEXT = "text-gray-400";

const DeveloperProfile = () => {
    const { id } = useParams();

    // Full developer data
    const developers = [
        {
            id: 1,
            name: "Nitin Agrawal",
            title: "Full Stack Developer",
            avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689918914024?e=1757548800&v=beta&t=IfTjVlwAfC7RTTlmafjfuBCU9oSZU287_Wcz4EFsQhs",
            location: "Jaipur, Rajasthan, India",
            joinDate: "2024-12-01",
            rating: 4.8,
            reviewCount: 45,
            hourlyRate: 25,
            availability: "Available",
            bio: "Detail-oriented Full Stack Developer specializing in Laravel, WordPress, and Elementor. Strong track record delivering responsive websites, trading portals, and membership systems for clients in education, consultancy, and interior design. Passionate about clean code, custom backend solutions, and building user-friendly experiences.",
            skills: [
                "Laravel", "WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript", "SQL"
            ],
            languages: ["English (Professional)", "Hindi (Native)"],
            experience: [
                {
                    role: "Full Stack Developer",
                    company: "Ambientech Software Pvt. Ltd.",
                    period: "Dec 2024 – Present",
                    description: "Developing custom WordPress websites with Elementor, solving backend issues, and implementing client feedback for various industries."
                },
                {
                    role: "Project Executive",
                    company: "Cognus Technology",
                    period: "Sep 2024 – Nov 2024",
                    description: "Managed project workflows, handled multi-platform content updates, and coordinated between technical and business teams."
                },
                {
                    role: "Full Stack Developer (Intern)",
                    company: "Laxmaya Technologies Pvt. Ltd.",
                    period: "Mar 2024 – Jun 2024",
                    description: "Built Laravel-based trading portal with secure contractor management, RESTful APIs, reward systems, and dynamic dashboards."
                }
            ],
            recentProjects: [
                {
                    title: "Euro Asian University Website",
                    description: "Developed a responsive WordPress site showcasing professional certification programs. Custom post types and optimized performance.",
                    tech: ["WordPress", "Elementor", "PHP"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=University+Project"
                },
                {
                    title: "Top Govt Jobs Portal",
                    description: "Implemented backend fixes, redesigned pages, and improved performance for a government job listing website.",
                    tech: ["WordPress", "PHP"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=Jobs+Portal+Visual"
                },
                {
                    title: "Lucky Traders Trading Portal",
                    description: "Built a full Laravel-based trading portal with secure contractor management, REST APIs, reward tracking, and detailed business analytics.",
                    tech: ["Laravel", "PHP", "SQL"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=Trading+Platform+Visual"
                }
            ],
            clientReviews: [
                { client: "Euro Asian University", rating: 5, comment: "Delivered a professional certification site ahead of schedule. Great communication." },
                { client: "Top Govt Jobs", rating: 4.8, comment: "Nitin improved our portal's speed and usability significantly. Highly reliable." },
                { client: "Laxmaya Technologies", rating: 5, comment: "Excellent Laravel development. Secure, scalable, and well-documented work." }
            ]
        },
        {
            id: 2,
            name: "Ritik Singh",
            title: "Frontend & WordPress Developer",
            avatar: "https://i.postimg.cc/wTXYPvhc/IMG-2865.avif",
            location: "Jaipur, Rajasthan, India",
            joinDate: "2024-12-01",
            rating: 4.8,
            reviewCount: 40,
            hourlyRate: 20,
            availability: "Available",
            bio: "Versatile developer with expertise in WordPress, Elementor, payment gateways, and dynamic membership systems. Also skilled in React.js, Node.js, and MongoDB for full-stack projects. Strong focus on practical, user-friendly solutions with modern tools and reusable components.",
            skills: [
                "WordPress", "Elementor", "PHP", "JavaScript", "React.js", "Node.js", "MongoDB", "HTML/CSS"
            ],
            languages: ["English (Professional)", "Hindi (Native)"],
            experience: [
                {
                    role: "Frontend & WordPress Developer",
                    company: "Ambientech Software Pvt. Ltd.",
                    period: "Dec 2024 – Present",
                    description: "Built university and membership sites with dynamic smart card systems, payment integrations, and reusable Elementor templates."
                },
                {
                    role: "Backend Developer Intern",
                    company: "APPNWEB Technologies",
                    period: "Jan 2024 – Mar 2024",
                    description: "Worked on React.js, Node.js, and MongoDB projects, creating REST APIs and dynamic e-commerce platforms."
                }
            ],
            recentProjects: [
                {
                    title: "AIPU Membership Platform",
                    description: "Built a dynamic WordPress membership system with Cashfree integration, smart card and certificate generation, and secure custom login.",
                    tech: ["WordPress", "Elementor", "PHP"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=Membership+Platform"
                },
                {
                    title: "Indo Global Astra Med University Website",
                    description: "Designed and developed a responsive university site using WordPress and Elementor with dynamic content and reusable sections.",
                    tech: ["WordPress", "Elementor"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=University+Website"
                },
                {
                    title: "E-commerce Website",
                    description: "Built an interactive e-commerce platform with React.js, Node.js, and MongoDB, featuring admin panels and product management.",
                    tech: ["React.js", "Node.js", "MongoDB"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=E-commerce+Visual"
                }
            ],
            clientReviews: [
                { client: "AIPU Membership Client", rating: 5, comment: "Delivered a powerful membership system with seamless payment and certificate features. Highly skilled and responsive." },
                { client: "Indo Global Astra Med University", rating: 5, comment: "Clean design and dynamic structure made content updates easy. Great work!" }
            ]
        },
        {
            id: 3,
            name: "Rahul Chanchlani",
            title: "Full Stack Developer (MERN)",
            avatar: "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
            location: "Jaipur, Rajasthan, India",
            joinDate: "2024-12-01",
            rating: 4.8,
            reviewCount: 25,
            hourlyRate: 22,
            availability: "Available",
            bio: "Full Stack MERN Developer with hands-on experience in modern web frameworks like Next.js and TypeScript. Strong background in responsive design using Tailwind CSS and building dynamic, SEO-friendly web apps. Passionate about delivering clean code and scalable solutions.",
            skills: [
                "HTML/CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"
            ],
            languages: ["English (Professional)", "Hindi (Native)"],
            experience: [
                {
                    role: "Full Stack Developer (MERN)",
                    company: "WDP Technologies Pvt. Ltd.",
                    period: "Dec 2024 – Feb 2025",
                    description: "Completed intensive training and built web applications using React.js, Node.js, Express, and MongoDB with modern UI frameworks."
                }
            ],
            recentProjects: [
                {
                    title: "Airbnb Clone",
                    description: "Built a fully functional Airbnb clone with React, Next.js, and TypeScript. Implemented dynamic routing, server-side rendering, and Prisma ORM with MongoDB.",
                    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=Airbnb+Clone"
                }
            ],
            clientReviews: [
                { client: "WDP Technologies", rating: 5, comment: "Rahul built a clean, scalable Airbnb clone. Strong grasp of modern web tech and detail-oriented delivery." }
            ]
        },
        {
            id: 4,
            name: "Hardik Sharma",
            title: "Automation QA Engineer",
            avatar: "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1757548800&v=beta&t=SRRo15iUbSejuq14aIO2aMa2fwXmk-DYYSRPTisEEMQ",
            location: "Jaipur, Rajasthan, India",
            joinDate: "2024-07-01",
            rating: 4.7,
            reviewCount: 30,
            hourlyRate: 20,
            availability: "Available",
            bio: "Detail-oriented QA Engineer skilled in manual and automation testing for web apps and CRM systems. Experienced with Python, Selenium, and Robot Framework, with hands-on CRM workflows and Salesforce admin tasks. Focused on delivering stable, bug-free products with clear documentation.",
            skills: [
                "Python", "Selenium", "Robot Framework", "SQL", "HTML/CSS", "Salesforce Admin"
            ],
            languages: ["English (Professional)", "Hindi (Native)"],
            experience: [
                {
                    role: "Automation QA Engineer",
                    company: "JustAddWater",
                    period: "Jul 2024 – Present",
                    description: "Manual and automation testing for web and CRM projects. Developed test scripts using Selenium and Robot Framework. Executed regression tests and defect tracking using JIRA."
                }
            ],
            recentProjects: [
                {
                    title: "KPIP CRM Testing",
                    description: "Tested CRM workflows with manual and automated scripts. Validated accounting modules for financial accuracy.",
                    tech: ["Python", "Selenium", "Robot Framework"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=CRM+Testing"
                },
                {
                    title: "Ketler & InstallCenter",
                    description: "Performed end-to-end testing for HVAC booking and installation platforms with automation scripts.",
                    tech: ["Python", "Selenium"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=Testing+Automation"
                },
                {
                    title: "Salesforce Lead Management",
                    description: "Configured fields, objects, and workflow rules for automated reminders and lead tracking.",
                    tech: ["Salesforce Admin"],
                    image: "https://via.placeholder.com/1200x800/262626/f5f5f5?text=Salesforce+Admin"
                }
            ],
            clientReviews: [
                { client: "InstallCenter Project Lead", rating: 4.8, comment: "Hardik’s test automation scripts caught key edge cases and made deployment smoother. Great QA delivery." },
                { client: "KPIP CRM Team", rating: 4.7, comment: "Efficient, clear bug reports and automation handled with care. Highly recommend." }
            ]
        }
    ];

    const developer = developers.find(dev => dev.id === parseInt(id)) || developers[0];

    return (
        <div className={`${DARK_BG} ${LIGHT_TEXT} font-sans tracking-tight relative`} style={FONT_STYLE}>

            {/* HEADER SECTION */}
            <section className="relative pt-12 pb-24 border-b-8 border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Button variant="ghost" asChild className={`mb-8 text-sm ${MUTED_TEXT} hover:text-white`}>
                        <Link to="/developers">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Directory
                        </Link>
                    </Button>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="relative lg:col-span-1 text-center lg:text-left">
                            <div className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-gray-700 p-2 mx-auto lg:mx-0">
                                <img
                                    src={developer.avatar}
                                    alt={developer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-2 text-center lg:text-left mt-8 lg:mt-0">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-none mb-2">{developer.name}</h1>
                            <h2 className={`text-lg sm:text-xl font-normal ${MUTED_TEXT} uppercase mb-4 tracking-wide`}>{developer.title}</h2>
                            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-x-6 ${MUTED_TEXT} text-sm mb-6`}>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                                    <span>{developer.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <Star className={`w-4 h-4 mr-1 ${PRIMARY_ACCENT} fill-current`} />
                                    <span>{developer.rating} ({developer.reviewCount})</span>
                                </div>
                            </div>
                            <p className={`text-base sm:text-lg leading-relaxed ${LIGHT_TEXT} max-w-3xl mx-auto lg:mx-0`}>{developer.bio}</p>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-8 w-full justify-center lg:justify-start">
                                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg uppercase bg-purple-600 text-white font-normal hover:bg-purple-700 transition-transform duration-200 hover:scale-[1.03]">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Engage Now
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto text-base sm:text-lg uppercase border-gray-500 bg-gray-900 text-white font-normal hover:bg-purple-700 hover:text-white transition-transform duration-200 hover:scale-[1.03]"
                                >
                                    View Full CV
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTIONS */}
            <main className="py-16 md:py-20 lg:py-24">
                {/* Projects Showcase */}
                <section className="mb-16 md:mb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className={`text-xl sm:text-2xl font-medium ${LIGHT_TEXT} mb-10 text-center uppercase tracking-wide`}>Recent Commissions</h3>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {developer.recentProjects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden bg-gray-900 border border-gray-800 p-2 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                                <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
                                <div className="p-6">
                                    <h4 className="text-lg sm:text-xl font-medium mb-2 uppercase">{project.title}</h4>
                                    <p className={`text-gray-400 mb-4 text-sm leading-snug`}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="bg-gray-800 text-gray-400 font-normal border border-gray-700">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills & Experience */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                        <div>
                            <h3 className={`text-xl sm:text-2xl font-medium ${LIGHT_TEXT} mb-6 uppercase tracking-wide text-center md:text-left`}>Skill Matrix</h3>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {developer.skills.map((skill, index) => (
                                    <Badge key={index} className="bg-gray-900 text-gray-400 text-sm py-1.5 px-4 font-normal uppercase border border-gray-700 hover:bg-gray-800 transition-colors">{skill}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <h3 className={`text-xl sm:text-2xl font-medium ${LIGHT_TEXT} mb-6 uppercase tracking-wide text-center md:text-left`}>Professional History</h3>
                            <div className="space-y-8 relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-gray-800">
                                {developer.experience.map((exp, index) => (
                                    <div key={index} className="pl-6 relative">
                                        <span className={`absolute -left-2 top-0.5 w-4 h-4 rounded-full ${PRIMARY_ACCENT.replace('text-', 'bg-')} border-2 border-black`}></span>
                                        <h4 className="text-lg font-medium">{exp.role}</h4>
                                        <p className={`${LIGHT_TEXT}`}>{exp.company} <span className={`text-sm ${MUTED_TEXT}`}>({exp.period})</span></p>
                                        <p className={`text-sm ${MUTED_TEXT} mt-2 leading-relaxed`}>{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Separator className="my-16 md:my-20 bg-gray-800" />

                {/* Client Testimonials */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className={`text-xl sm:text-2xl font-medium ${LIGHT_TEXT} mb-10 text-center uppercase tracking-wide`}>Client Verdict</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {developer.clientReviews.map((review, index) => (
                            <div key={index} className="bg-gray-900 border border-gray-800 p-6 md:p-8 flex flex-col justify-between shadow-lg">
                                <div>
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(review.rating) ? PRIMARY_ACCENT : 'text-gray-700'} fill-current`} />
                                        ))}
                                    </div>
                                    <p className={`text-base sm:text-lg italic ${MUTED_TEXT} mb-4 leading-relaxed`}>"{review.comment}"</p>
                                </div>
                                <div>
                                    <p className={`font-medium ${LIGHT_TEXT} uppercase`}>{review.client}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* FOOTER SECTION */}
            <footer className="bg-gray-950 text-gray-200 py-12 text-center border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h4 className={`text-xl sm:text-2xl font-normal mb-4 ${LIGHT_TEXT}`}>Let's Connect</h4>
                    <p className={`text-sm sm:text-base text-gray-400 mb-8 max-w-xl mx-auto`}>
                        Ready to translate your vision into a solid, functional reality.
                    </p>
                    <div className="flex justify-center space-x-6 text-gray-500">
                        <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
                        <a href="#" aria-label="Website" className="hover:text-white transition-colors"><Globe className="w-6 h-6" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DeveloperProfile;