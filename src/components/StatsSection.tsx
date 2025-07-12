
import { TrendingUp, Award, Clock, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "10+",
      label: "Projects Shipped",
      description: "Real work. Real impact. And counting."
    },
    {
      icon: Clock,
      value: "Flexible",
      label: "Work Hours",
      description: "We work when the work needs us — not 9-5."
    },
    {
      icon: Heart,
      value: "100%",
      label: "Client Trust",
      description: "Long-term relationships. Zero corporate nonsense."
    }
  ];
  

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">By the Numbers</h2>
          <p className="text-xl text-muted-foreground">
            Our community's impact speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
