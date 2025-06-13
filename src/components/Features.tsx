
const Features = () => {
  const features = [
    "Remind you of tasks, meetings, calls, anything",
    "Sync with your Google/Outlook Calendar", 
    "Voice call for high-priority reminders",
    "Customize reminder time (10 mins before, exact time, etc.)",
    "Works 24/7 — even when your calendar forgets"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            🔄 What It Can Do
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✔
                </div>
                <p className="text-lg text-foreground font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
