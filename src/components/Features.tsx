
const Features = () => {
  const features = [
    "📅 Auto-sync with Google/Outlook Calendar events",
    "🔔 Smart reminders for meetings, calls, and tasks", 
    "📞 Voice call alerts for high-priority events",
    "⏰ Customizable timing (10 mins before, exact time, etc.)",
    "🌙 Works 24/7 — never miss another calendar event"
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            What It Can Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay on top of your calendar and tasks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
                <div className="flex items-start gap-6 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-green-200 hover:shadow-lg transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="text-xl text-foreground font-medium leading-relaxed">
                    {feature}
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

export default Features;
