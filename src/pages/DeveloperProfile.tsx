import { useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Calendar, Award, Github, Linkedin, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

const DeveloperProfile = () => {
  const { id } = useParams();

  // Developer data shared with Developers component
  const developers = [
    {
      id: 1,
      name: "Nitin Agrawal",
      title: "Full Stack Developer",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689918914024?e=1757548800&v=beta&t=IfTjVlwAfC7RTTlmafjfuBCU9oSZU287_Wcz4EFsQhs",
      location: "Jaipur, Rajasthan, India",
      timezone: "IST (UTC+5:30)",
      joinDate: "2024-12-01",
      rating: 4.8,
      reviewCount: 45,
      completedProjects: 30,
      responseTime: "4 hours",
      hourlyRate: 25,
      availability: "Available",
      bio: "Detail-oriented Full Stack Developer specializing in Laravel, WordPress, and Elementor. Strong track record delivering responsive websites, trading portals, and membership systems for clients in education, consultancy, and interior design. Passionate about clean code, custom backend solutions, and building user-friendly experiences.",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "WordPress", level: 95 },
        { name: "Elementor", level: 92 },
        { name: "PHP", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 75 }
      ],
      languages: ["English (Professional)", "Hindi (Native)"],
      certifications: [
        "Certified WordPress Developer (Online Certification)",
        "PHP for Web Development (Coursera Specialization)"
      ],
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
          tech: ["WordPress", "Elementor", "PHP", "HTML", "CSS"],
          completedDate: "2024-06",
          rating: 5
        },
        {
          title: "Top Govt Jobs Portal",
          description: "Implemented backend fixes, redesigned pages, and improved performance for a government job listing website.",
          tech: ["WordPress", "PHP", "HTML", "CSS"],
          completedDate: "2024-05",
          rating: 4.8
        },
        {
          title: "Lucky Traders Trading Portal",
          description: "Built a full Laravel-based trading portal with secure user roles, REST APIs, reward tracking, and detailed business analytics.",
          tech: ["Laravel", "PHP", "SQL", "HTML", "CSS"],
          completedDate: "2024-04",
          rating: 5
        }
      ],
      clientReviews: [
        {
          client: "Euro Asian University",
          rating: 5,
          date: "2024-06-20",
          comment: "Delivered a highly professional certification site ahead of schedule. Great attention to detail and smooth communication."
        },
        {
          client: "Top Govt Jobs",
          rating: 4.8,
          date: "2024-05-10",
          comment: "Nitin improved our portal's speed and usability significantly. Highly reliable and responsive."
        },
        {
          client: "Laxmaya Technologies",
          rating: 5,
          date: "2024-04-05",
          comment: "Excellent Laravel development. Secure, scalable, and well-documented work on our trading platform."
        }
      ]
    },
    {
      id: 2,
      name: "Ritik Singh",
      title: "Frontend & WordPress Developer",
      avatar: "https://i.postimg.cc/wTXYPvhc/IMG-2865.avif",
      location: "Jaipur, Rajasthan, India",
      timezone: "IST (UTC+5:30)",
      joinDate: "2024-12-01",
      rating: 4.8,
      reviewCount: 40,
      completedProjects: 25,
      responseTime: "4 hours",
      hourlyRate: 20,
      availability: "Available",
      bio: "Versatile developer with expertise in WordPress, Elementor, payment gateways, and dynamic membership systems. Also skilled in React.js, Node.js, and MongoDB for full-stack projects. Strong focus on practical, user-friendly solutions with modern tools and reusable components.",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "Elementor", level: 90 },
        { name: "PHP", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "HTML/CSS", level: 90 }
      ],
      languages: ["English (Professional)", "Hindi (Native)"],
      certifications: [
        "Java Intermediate – Great Learning, Sololearn",
        "JavaScript Intermediate – Sololearn",
        "4-star Java – HackerRank"
      ],
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
          completedDate: "2024-06",
          rating: 5
        },
        {
          title: "Indo Global Astra Med University Website",
          description: "Designed and developed a responsive university site using WordPress and Elementor with dynamic content and reusable sections.",
          tech: ["WordPress", "Elementor"],
          completedDate: "2024-05",
          rating: 5
        },
        {
          title: "E-commerce Website",
          description: "Built an interactive e-commerce platform with React.js, Node.js, and MongoDB, featuring admin panels and product management.",
          tech: ["React.js", "Node.js", "MongoDB"],
          completedDate: "2024-03",
          rating: 4.8
        }
      ],
      clientReviews: [
        {
          client: "AIPU Membership Client",
          rating: 5,
          date: "2024-06-25",
          comment: "Delivered a powerful membership system with seamless payment and certificate features. Highly skilled and responsive."
        },
        {
          client: "Indo Global Astra Med University",
          rating: 5,
          date: "2024-05-10",
          comment: "Clean design and dynamic structure made content updates easy. Great work!"
        }
      ]
    },
   
    {
      id: 3,
      name: "Rahul Chanchlani",
      title: "Full Stack Developer (MERN)",
      avatar: "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
      location: "Jaipur, Rajasthan, India",
      timezonelab: "IST (UTC+5:30)",
      joinDate: "2024-12-01",
      rating: 4.8,
      reviewCount: 25,
      completedProjects: 10,
      responseTime: "5 hours",
      hourlyRate: 22,
      availability: "Available",
      bio: "Full Stack MERN Developer with hands-on experience in modern web frameworks like Next.js and TypeScript. Strong background in responsive design using Tailwind CSS and building dynamic, SEO-friendly web apps. Passionate about delivering clean code and scalable solutions.",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Node.js", level: 75 }
      ],
      languages: ["English (Professional)", "Hindi (Native)"],
      certifications: [
        "Salesforce Administrator Certification",
        "Introduction to C++ – SoloLearn",
        "Front End Development – Great Learning Academy"
      ],
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
          completedDate: "2025-02",
          rating: 5
        }
      ],
      clientReviews: [
        {
          client: "WDP Technologies",
          rating: 5,
          date: "2025-02-20",
          comment: "Rahul built a clean, scalable Airbnb clone. Strong grasp of modern web tech and detail-oriented delivery."
        }
      ]
    },
    {
      id: 4,
      name: "Hardik Sharma",
      title: "Automation QA Engineer",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1757548800&v=beta&t=SRRo15iUbSejuq14aIO2aMa2fwXmk-DYYSRPTisEEMQ",
      location: "Jaipur, Rajasthan, India",
      timezone: "IST (UTC+5:30)",
      joinDate: "2024-07-01",
      rating: 4.7,
      reviewCount: 30,
      completedProjects: 20,
      responseTime: "6 hours",
      hourlyRate: 20,
      availability: "Available",
      bio: "Detail-oriented QA Engineer skilled in manual and automation testing for web apps and CRM systems. Experienced with Python, Selenium, and Robot Framework, with hands-on CRM workflows and Salesforce admin tasks. Focused on delivering stable, bug-free products with clear documentation.",
      skills: [
        { name: "Python", level: 90 },
        { name: "Selenium", level: 85 },
        { name: "Robot Framework", level: 80 },
        { name: "SQL", level: 75 },
        { name: "HTML/CSS", level: 70 },
        { name: "Salesforce Admin", level: 65 }
      ],
      languages: ["English (Professional)", "Hindi (Native)"],
      certifications: [
        "Crash Course on Python – Google (Coursera)"
      ],
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
          completedDate: "2024-08",
          rating: 4.7
        },
        {
          title: "Ketler & InstallCenter",
          description: "Performed end-to-end testing for HVAC booking and installation platforms with automation scripts.",
          tech: ["Python", "Selenium"],
          completedDate: "2024-08",
          rating: 4.8
        },
        {
          title: "Salesforce Lead Management",
          description: "Configured fields, objects, and workflow rules for automated reminders and lead tracking.",
          tech: ["Salesforce Admin"],
          completedDate: "2024-07",
          rating: 4.6
        }
      ],
      clientReviews: [
        {
          client: "InstallCenter Project Lead",
          rating: 4.8,
          date: "2024-08-15",
          comment: "Hardik’s test automation scripts caught key edge cases and made deployment smoother. Great QA delivery."
        },
        {
          client: "KPIP CRM Team",
          rating: 4.7,
          date: "2024-08-01",
          comment: "Efficient, clear bug reports and automation handled with care. Highly recommend."
        }
      ]
    }
  
  ];

  // Find the developer by ID
  const developer = developers.find(dev => dev.id === parseInt(id)) || developers[0];

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/developers">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Developers
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Overview */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={developer.avatar}
                  alt={developer.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-3xl font-bold text-foreground">{developer.name}</h1>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {developer.availability}
                    </Badge>
                  </div>
                  <h2 className="text-xl text-muted-foreground mb-4">{developer.title}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      {developer.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      Joined {new Date(developer.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr- немного text-yellow-500" />
                      {developer.rating} ({developer.reviewCount} reviews)
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-muted-foreground" />
                      {developer.completedProjects} projects completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold">${developer.hourlyRate}/hour</div>
                  <div className="text-sm text-muted-foreground">Responds in {developer.responseTime}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact {developer.name.split(' ')[0]}
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Call
                </Button>
                <div className="flex justify-center space-x-4 pt-4">
                  <Button variant="ghost" size="sm">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Globe className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{developer.bio}</p>
                </CardContent>
              </Card>

              {/* Recent Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {developer.recentProjects.map((project, index) => (
                      <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{project.title}</h4>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span className="text-sm">{project.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Completed {new Date(project.completedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Client Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {developer.clientReviews.map((review, index) => (
                      <div key={index} className="border-b last border-b-0 pb-6 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{review.client}</h4>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm ml-2">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{review.comment}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(review.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {developer.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {developer.languages.map((language, index) => (
                      <div key={index} className="text-sm">
                        {language}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {developer.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {developer.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold text-sm">{exp.role}</h4>
                        <p className="text-primary text-sm">{exp.company}</p>
                        <p className="text-xs text-muted-erunner-foreground">{exp.period}</p>
                        <p className="text-xs text-muted-foreground">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperProfile;