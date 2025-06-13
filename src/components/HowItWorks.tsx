
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Talk Naturally",
      description: "Just send a message like:",
      examples: [
        '"I have a task at 10am tomorrow"',
        '"Pick up mom at 5pm"'
      ]
    },
    {
      number: "2", 
      title: "It Understands You",
      description: "No forms. No typing dates manually. Our AI parses your message and sets a reminder."
    },
    {
      number: "3",
      title: "Get Notified, Your Way", 
      description: "Choose WhatsApp message or voice call. You'll never miss the important stuff again."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to never forget anything again
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-green-600 text-white rounded-3xl flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {step.description}
              </p>
              {step.examples && (
                <div className="space-y-3">
                  {step.examples.map((example, i) => (
                    <div key={i} className="bg-gradient-to-r from-green-50 to-green-50/50 border border-green-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                      <p className="text-green-800 font-medium italic">
                        {example}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
