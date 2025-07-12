
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Users, Zap, Star, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturedDevelopers from '@/components/FeaturedDevelopers';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  const features = [
    {
      icon: Code2,
      title: "Custom Web Solutions",
      description: "Delivering tailor-made WordPress and ReactJS projects, from certification portals to dynamic membership platforms."
    },
    {
      icon: Users,
      title: "Collaborative Teamwork",
      description: "Projects built with a strong focus on teamwork, quality standards, and innovative solutions for diverse industries."
    },
    {
      icon: Zap,
      title: "Reliable & On-Time",
      description: "Focused on timely project delivery with clean code, responsive design, and modern tech stacks."
    }
  ];
  

  const recentProjects = [
    {
      title: "Euro Asian University Certification Portal",
      description: "Developed a dynamic WordPress website for EURO ASIAN UNIVERSITY to showcase certification programs. Includes custom post types, responsive layouts, and optimized performance.",
      tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
      image: "https://euroasianuniversity.ee/wp-content/uploads/2025/04/Slider-1.png",
      link: "https://euroasianuniversity.ee"
    },
    {
      title: "AIPU Membership Platform",
      description: "Built a custom WordPress ecosystem with Cashfree payment gateway, smart card & certificate generation, role-based user accounts, and dynamic content shortcodes.",
      tech: ["WordPress", "Elementor", "PHP", "jsPDF"],
      image: "data:image/jpeg;base64,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",
      link: "https://aipu.in/"
    },
    {
      title: "Airbnb Clone Website",
      description: "Built a fully functional Airbnb clone using ReactJS, NextJS, TypeScript, Tailwind CSS, and Prisma. Implemented dynamic routing, server-side rendering, and responsive design.",
      tech: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Prisma"],
      image: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440",
      link: "#"
    }
  ];
 

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose DevCommunity?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We connect businesses with top-tier freelance developers who deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />
      <FeaturedDevelopers />

      {/* Recent Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing projects built by our talented developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who have found their perfect developer match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/developers">Find Developers</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
