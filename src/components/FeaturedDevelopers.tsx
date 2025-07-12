
import { Link } from 'react-router-dom';
import { Star, MapPin, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const FeaturedDevelopers = () => {
  const developers = [
    {
      id: 1,
      name: "Nitin Agrawal",
      title: "Full Stack Developer",
      location: "Jaipur, Rajasthan, India",
      rating: 4.8,
      reviews: 25,
      hourlyRate: 30,
      skills: ["Laravel", "WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript"],
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
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQHGegTdTo3h3w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1711741312481?e=1757548800&v=beta&t=9Odcf06qkH7t-RS4VTcGe4l5Op2Xh-a0sbpDKhAuE5E",
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
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      avatar: "https://i.postimg.cc/PqDrGx3t/Chat-GPT-Image-Jul-10-2025-07-10-14-PM.png",
      completedProjects: 8,
      responseTime: "1 hour"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Developers</h2>
          <p className="text-xl text-muted-foreground">
            Meet some of our top-rated professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((developer) => (
            <Card key={developer.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={developer.avatar}
                    alt={developer.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{developer.name}</h3>
                <p className="text-primary font-medium">{developer.title}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{developer.location}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{developer.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({developer.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  {developer.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {developer.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                  {developer.skills.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{developer.skills.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {developer.hourlyRate}/hour
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <Link to={`/developer/${developer.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/developers">View All Developers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopers;
