
import { Button } from "@/components/ui/button";

const Bonus = () => {
  const bonuses = [
    "FREE lifetime Pro features",
    "Priority access to new integrations (Telegram, iMessage)",
    "Invite credits for friends"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            🎁 Bonus for Early Access
          </h2>
          
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 p-8 rounded-2xl border-2 border-primary/20 mb-8">
            <p className="text-xl font-semibold mb-6 text-foreground">
              ✅ Be among the first 100 and get:
            </p>
            
            <div className="space-y-4 mb-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <p className="text-lg text-foreground font-medium">
                    {bonus}
                  </p>
                </div>
              ))}
            </div>

            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join the Waitlist Now
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              🔒 No spam. Just smart reminders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
