
import { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Euro Asian University Certification Portal",
      description: "Developed a dynamic WordPress website for EURO ASIAN UNIVERSITY to showcase certification programs. Includes custom post types, responsive layouts, and optimized performance.",
      image: "https://euroasianuniversity.ee/wp-content/uploads/2025/04/Slider-1.png",
      category: "Web App",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript"],
      developer: "Nitin Agrawal",
      completionDate: "2024-05",
      liveUrl: "https://euroasianuniversity.ee"
    },
    {
      id: 2,
      title: "AIPU Membership Platform",
      description: "Built a custom WordPress ecosystem with Cashfree payment gateway, smart card & certificate generation, role-based user accounts, and dynamic content shortcodes.",
      image: "data:image/jpeg;base64,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",
      category: "Web App",
      technologies: ["WordPress", "Elementor", "PHP", "jsPDF"],
      developer: "Ritik Singh",
      completionDate: "2024-06",
      liveUrl: "https://aipu.in/"
    },
    {
      id: 3,
      title: "Airbnb Clone Website",
      description: "Built a fully functional Airbnb clone using ReactJS, NextJS, TypeScript, Tailwind CSS, and Prisma. Implemented dynamic routing, server-side rendering, and responsive design.",
      image: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440",
      category: "Web App",
      technologies: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Prisma"],
      developer: "Rahul Chanchlani",
      completionDate: "2025-02",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Lucky Traders Trading Portal",
      description: "Laravel-based trading portal with contractor management, gift redemption system, RESTful APIs, and business reporting dashboard.",
      image: "https://laxmayatechnologies.com/tradingportal/assets/images/logo-light.png",
      category: "Web App",
      technologies: ["Laravel", "PHP", "SQL", "JavaScript"],
      developer: "Nitin Agrawal",
      completionDate: "2024-06",
      liveUrl: "https://laxmayatechnologies.com/tradingportal"
    },
    {
      id: 5,
      title: "Indo Global Astra Med University Website",
      description: "Designed and developed a responsive university website using WordPress and Elementor with dynamic course lists, faculty profiles, and administrator-friendly content sections.",
      image: "https://indoglobaluniversity.com/wp-content/uploads/2025/05/hero_-area.jpg",
      category: "Web App",
      technologies: ["WordPress", "Elementor", "PHP"],
      developer: "Ritik Singh",
      completionDate: "2024-06",
      liveUrl: "https://indoglobaluniversity.com/"
    },
    {
      id: 6,
      title: "CRM Automation & Testing",
      description: "Performed manual and automated testing of CRM workflows, built automation test scripts using Selenium & Robot Framework, and implemented Salesforce lead tracking with custom dashboards.",
      image: "https://erepa7ohg8r.exactdn.com/wp-content/uploads/2022/08/What-is-CRM-testing.png",
      category: "QA & Automation",
      technologies: ["Python", "Selenium", "Robot Framework", "Salesforce"],
      developer: "Hardik Sharma",
      completionDate: "2024-07",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 7,
      title: "OOE Consultancy Educational Portal",
      description: "Created a WordPress portal for educational counseling with dynamic university listings, responsive pages, and clean layouts aligned with brand identity.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWB7I9AznalysA02i1vvQOhTjwCy_hUhAxA&s",
      category: "Web App",
      technologies: ["WordPress", "Elementor", "PHP"],
      developer: "Nitin Agrawal",
      completionDate: "2024-04",
      githubUrl: "#",
      liveUrl: "https://newone.ooeconsultancy.com"
    },
    {
      id: 8,
      title: "The Mythos Interior Design Website",
      description: "Built a visually striking WordPress website for a furniture and decor brand with custom templates, interactive galleries, and responsive design.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg",
      category: "Web App",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript"],
      developer: "Nitin Agrawal",
      completionDate: "2024-04",
      githubUrl: "#",
      liveUrl: "https://mythosweb.netlify.app/"
    }
  ];
  

  const categories = ['All', 'Web App', 'Mobile App', 'Data Science', 'Design'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Project Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore amazing projects built by our talented developer community
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'All' && <Filter className="w-4 h-4 mr-2" />}
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground">
              {filteredProjects.length} projects found
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Developer and Date */}
                    <div className="flex justify-between text-sm text-muted-foreground pt-2 border-t">
                      <span>By {project.developer}</span>
                      <span>{new Date(project.completionDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
