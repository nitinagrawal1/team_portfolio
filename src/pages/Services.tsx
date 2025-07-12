
import { Code, Smartphone, Palette, Database, Cloud, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "Robust web portals and platforms with clean, scalable architecture.",
      features: [
        "Laravel & PHP Solutions",
        "Custom WordPress Development",
        "Elementor & Theme Customization",
        "API Development & Integration"
      ],
      startingPrice: "From $50/hour",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Frontend & React Development",
      description: "Modern, responsive UIs with React.js, Next.js, and Tailwind CSS.",
      features: [
        "React.js SPA & Next.js SSR",
        "TypeScript Development",
        "Tailwind & Styled Components",
        "Cross-browser Optimization"
      ],
      startingPrice: "From $50/hour",
      popular: false
    },
    {
      icon: Palette,
      title: "WordPress & Elementor Design",
      description: "Custom WordPress sites with Elementor, dynamic content, and smart integrations.",
      features: [
        "Custom Themes & Templates",
        "Payment Gateway Integration",
        "Smart Cards & Certificate Systems",
        "Role-based Membership Portals"
      ],
      startingPrice: "From $45/hour",
      popular: true
    },
    {
      icon: Database,
      title: "Backend & Database Solutions",
      description: "Secure, scalable backend logic and database systems.",
      features: [
        "Node.js & Express APIs",
        "MongoDB & SQL Design",
        "RESTful API Development",
        "CRUD & Admin Panels"
      ],
      startingPrice: "From $50/hour",
      popular: false
    },
    {
      icon: Zap,
      title: "QA Testing & Automation",
      description: "Thorough manual and automation testing for web and CRM systems.",
      features: [
        "Selenium & Robot Framework",
        "CRM Workflow Testing",
        "Regression & Bug Tracking",
        "Salesforce Admin Tasks"
      ],
      startingPrice: "From $40/hour",
      popular: false
    },
    {
      icon: Cloud,
      title: "Technical Consulting",
      description: "Expert consulting to plan and improve your digital projects.",
      features: [
        "Technical Architecture & Planning",
        "Performance & Security Audits",
        "Code Review & Best Practices",
        "Tech Stack Guidance"
      ],
      startingPrice: "From $40/hour",
      popular: false
    }
  ];
  

  const packages = [
    {
      name: "Starter Website",
      price: "$1,500+",
      duration: "1-2 weeks",
      description: "Perfect for individuals or small businesses",
      features: [
        "Custom WordPress Website",
        "Elementor-based Design",
        "Responsive Layout",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Professional Portal",
      price: "$3,500+",
      duration: "4-5 weeks",
      description: "Ideal for growing businesses and institutions",
      features: [
        "Dynamic Membership or University Website",
        "Custom Post Types & Advanced Templates",
        "Payment Gateway Integration",
        "Role-based User Management",
        "Admin Dashboard & Reporting",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Full-Stack Solution",
      price: "$7,500+",
      duration: "6-10 weeks",
      description: "For complex, scalable web applications",
      features: [
        "Laravel or MERN-based Custom Platform",
        "API Development & Database Design",
        "Smart Cards & Certificate Generation",
        "Secure Authentication & User Roles",
        "Performance Optimization & QA Automation",
        "6 Months Priority Support"
      ],
      popular: false
    }
  ];
  

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We discuss your goals, project scope, and technical requirements."
    },
    {
      step: "2",
      title: "Planning",
      description: "We design the architecture, timeline, and user flows for your project."
    },
    {
      step: "3",
      title: "Development",
      description: "Our team builds your custom solution with regular progress updates."
    },
    {
      step: "4",
      title: "Testing & QA",
      description: "Rigorous manual and automated testing to ensure a bug-free experience."
    },
    {
      step: "5",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support and maintenance."
    }
  ];
  

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive development services to bring your digital ideas to life
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">
              Expert development services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-center">{service.title}</CardTitle>
                    <p className="text-center text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t">
                        <p className="text-lg font-semibold text-center">{service.startingPrice}</p>
                        <Button className="w-full mt-3" asChild>
                          <Link to="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Project Packages</h2>
            <p className="text-xl text-muted-foreground">
              Fixed-price packages for common project types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.duration}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              How we work to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
