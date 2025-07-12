
import { useState } from 'react';
import { Search, MapPin, Star, Code, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const developers = [
    {
      id: 1,
      name: "Nitin Agrawal",
      title: "Full Stack Developer",
      location: "Jaipur, Rajasthan, India",
      rating: 4.8,
      reviews: 25,
      hourlyRate: 30,
      skills: ["Laravel", "WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript","Figma"],
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG3GXEND63zAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689918914024?e=1757548800&v=beta&t=IfTjVlwAfC7RTTlmafjfuBCU9oSZU287_Wcz4EFsQhs",
      completedProjects: 12,
      responseTime: "2 hours"
    },
    {
      id: 2,
      name: "Ritik Singh",
      title: "Frontend & WordPress Developer",
      location: "Jaipur, Rajasthan, India",
      rating: 4.7,
      reviews: 18,
      hourlyRate: 28,
      skills: ["React.js", "Node.js", "WordPress", "Elementor", "PHP", "JavaScript", "MongoDB"],
      avatar: "https://i.postimg.cc/wTXYPvhc/IMG-2865.avif",
      completedProjects: 10,
      responseTime: "1 hour"
    },
    {
      id: 3,
      name: "Rahul Chanchlani",
      title: "Full Stack Developer (MERN)",
      location: "Jaipur, Rajasthan, India",
      rating: 4.8,
      reviews: 20,
      hourlyRate: 32,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB","React Native"],
      avatar: "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
      completedProjects: 8,
      responseTime: "1 hour"
    },
    {
      id: 4,
      name: "Hardik Sharma",
      title: "QA Tester (Manual & Automation)",
      location: "Jaipur, Rajasthan, India",
      rating: 4.6,
      reviews: 15,
      hourlyRate: 25,
      skills: ["Python", "Selenium", "Robot Framework", "SQL", "Salesforce Admin"],
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQG-g6233ejXNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712720861281?e=1757548800&v=beta&t=SRRo15iUbSejuq14aIO2aMa2fwXmk-DYYSRPTisEEMQ",
      completedProjects: 6,
      responseTime: "2 hours"
    }
  ];
  

  const filteredDevelopers = developers.filter(dev => {
    const matchesSearch =
      dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    const filterMap = {
      All: () => true,
      Frontend: () => dev.skills.some(skill => /react|frontend|html|css|javascript|elementor/i.test(skill)),
      Backend: () => dev.skills.some(skill => /node|php|laravel|backend|sql|mongodb/i.test(skill)),
      Mobile: () => dev.skills.some(skill => /mobile|react native|flutter|android|ios/i.test(skill)),
      Design: () => dev.skills.some(skill => /design|ui|ux|figma|adobe/i.test(skill)),
      Tester: () => dev.skills.some(skill => /testing|qa|manual|automation|selenium|robot framework/i.test(skill)),
    };

    return matchesSearch && filterMap[selectedFilter]();
  });

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find Your Perfect Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with talented freelance developers ready to bring your ideas to life
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, skills, or expertise..."
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
              <Button
                variant={selectedFilter === 'All' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('All')}
              >
                <Filter className="w-4 h-4 mr-2" />
                All Skills
              </Button>
              <Button
                variant={selectedFilter === 'Frontend' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('Frontend')}
              >
                Frontend
              </Button>
              <Button
                variant={selectedFilter === 'Backend' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('Backend')}
              >
                Backend
              </Button>
              <Button
                variant={selectedFilter === 'Mobile' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('Mobile')}
              >
                Mobile
              </Button>
              <Button
                variant={selectedFilter === 'Design' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('Design')}
              >
                Design
              </Button>
              <Button
  variant={selectedFilter === 'Tester' ? 'default' : 'outline'}
  size="sm"
  onClick={() => setSelectedFilter('Tester')}
>
  Tester
</Button>
            </div>
            <p className="text-muted-foreground">
              {filteredDevelopers.length} developers found
            </p>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevelopers.map((developer) => (
              <Card key={developer.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={developer.avatar}
                      alt={developer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{developer.name}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-2">{developer.title}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {developer.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Rating and Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="font-medium">{developer.rating}</span>
                        <span className="text-muted-foreground ml-1">({developer.reviews})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${developer.hourlyRate}/hr</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {developer.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Code className="w-4 h-4 mr-1" />
                        {developer.completedProjects} projects
                      </div>
                      <div>Responds in {developer.responseTime}</div>
                    </div>

                    <Button asChild className="w-full">
                      <Link to={`/developer/${developer.id}`}>
                        View Profile
                      </Link>
                    </Button>
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

export default Developers;
