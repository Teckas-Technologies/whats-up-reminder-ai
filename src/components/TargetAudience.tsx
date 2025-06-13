
const TargetAudience = () => {
  const audience = [
    "You rely on memory and sticky notes",
    "You hate setting reminders manually", 
    "You want an assistant — without hiring one",
    'You miss WhatsApp messages that say "Did you forget?"'
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              This Is for You If…
            </h2>
          </div>
          
          <div className="grid gap-6">
            {audience.map((item, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
                <div className="group flex items-start gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 text-left hover:shadow-lg hover:border-green-200 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-green-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-xl text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
