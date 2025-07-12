
import { Users, Target, Award, Zap, Code2, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Custom Web Solutions",
      description: "Delivering tailor-made WordPress, ReactJS, and full-stack projects for diverse business needs."
    },
    {
      icon: Users,
      title: "Collaborative Teamwork",
      description: "Projects built with a strong focus on teamwork, quality standards, and innovative solutions."
    },
    {
      icon: Zap,
      title: "Reliable & On-Time",
      description: "Timely project delivery with clean code, responsive design, and modern tech stacks."
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "Dedicated to exceeding client expectations and building long-term partnerships."
    }
  ];

  const team = [
    {
      name: "Nitin Agrawal",
      role: "Full Stack Developer",
      bio: "Expert in Laravel, WordPress, and custom web solutions. Passionate about building scalable platforms.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689918914024?e=1757548800&v=beta&t=IfTjVlwAfC7RTTlmafjfuBCU9oSZU287_Wcz4EFsQhs"
    },
    {
      name: "Ritik Singh",
      role: "Frontend & WordPress Developer",
      bio: "Specializes in React.js, Node.js, and WordPress. Delivers seamless user experiences and dynamic interfaces.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQHGegTdTo3h3w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1711741312481?e=1757548800&v=beta&t=9Odcf06qkH7t-RS4VTcGe4l5Op2Xh-a0sbpDKhAuE5E"
    },
    {
      name: "Rahul Chanchlani",
      role: "Full Stack Developer (MERN)",
      bio: "Experienced in React.js, Next.js, and TypeScript. Builds robust, scalable, and modern web applications.",
      avatar: "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png"
    },
    {
      name: "Hardik Sharma",
      role: "QA Tester (Manual & Automation)",
      bio: "Expert in Python, Selenium, and automation frameworks. Ensures quality and reliability in every project.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1757548800&v=beta&t=SRRo15iUbSejuq14aIO2aMa2fwXmk-DYYSRPTisEEMQ"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About DevCommunity
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to connect the world's most talented freelance developers 
            with businesses that need exceptional digital solutions.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
              <p>
  We build reliable, tailored web solutions that help businesses and institutions launch and grow with confidence.
</p>
<p>
  Our expertise covers custom WordPress platforms, membership and certification systems, full-stack React and Next.js applications, secure Laravel backends, and thorough manual and automated QA testing.
</p>
<p>
  From dynamic portals to high-performance web apps and clones, we deliver clean builds, smooth integrations, and proper testing — so every launch is stable and future-ready.
</p>
    
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The people behind the platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img 
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-90">Active Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,000+</div>
              <div className="opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Countries Represented</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
