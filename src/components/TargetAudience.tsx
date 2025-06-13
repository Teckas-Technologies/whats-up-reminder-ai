
const TargetAudience = () => {
  const audience = [
    "You rely on memory and sticky notes",
    "You hate setting reminders manually", 
    "You want an assistant — without hiring one",
    'You miss WhatsApp messages that say "Did you forget?"'
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            💡 This Is for You If…
          </h2>
          
          <div className="grid gap-6">
            {audience.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-xl border text-left hover:shadow-lg transition-shadow duration-300">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-lg text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
