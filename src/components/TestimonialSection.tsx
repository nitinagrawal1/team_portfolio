
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Nayan Patel",
      role: "Client, Remote Task",
      content: "Always quick to respond and handles tasks perfectly — even creating Google Sheets from scratch with dummy data when needed. Reliable and efficient.",
      rating: 5,
      avatar: "https://dannywins.com/wp-content/uploads/2025/05/DannyWins_Logo-1.png"
    },
    {
      name: "Top Govt Jobs Client",
      role: "Client",
      content: "Solved our error quickly and checked everything properly. Very helpful, thank you so much for the fast solution!",
      rating: 5,
      avatar: "data:image/png;base64,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"
    },
    {
      name: "Euroasian Client",
      role: "Client Side Coordinator",
      content: "We got exactly what we needed from the client side. Unique and properly generated results every time — really appreciate the proactive work.",
      rating: 5,
      avatar: "https://euroasianuniversity.ee/wp-content/uploads/2025/04/eau_logo-240x240-1-2.png"
    }
  ];
  

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
