
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            🧭 How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {step.description}
              </p>
              {step.examples && (
                <div className="space-y-2">
                  {step.examples.map((example, i) => (
                    <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 font-medium italic text-sm">
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
