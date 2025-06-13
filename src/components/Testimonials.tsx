
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            💬 Why People Love It
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-primary font-medium">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
