
const Testimonials = () => {
  const testimonials = [
    {
      quote: "I literally just text it like I would text a friend. Boom, reminder done.",
      author: "Early Beta User"
    },
    {
      quote: "The call feature saved me on a flight booking. It called me 15 mins before!",
      author: "Freelancer, Mumbai"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Why People Love It
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our early users
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] h-full">
                <div className="text-6xl text-green-500/20 mb-4">"</div>
                <p className="text-xl text-foreground mb-8 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-primary font-semibold text-lg">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
