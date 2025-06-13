import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";

const Bonus = () => {
  const bonuses = [
    "FREE lifetime Pro features",
    "Priority access to new integrations (Telegram, iMessage)",
    "Invite credits for friends"
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Bonus for Early Access
            </h2>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-12 rounded-3xl border-2 border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold mb-8">
                <span className="text-2xl">🎁</span>
                Be among the first 100 and get:
              </div>
              
              <div className="space-y-4 mb-10">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}>
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                    <p className="text-lg text-foreground font-medium">
                      {bonus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <WaitlistForm>
                  <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0">
                    Join the Waitlist Now
                  </Button>
                </WaitlistForm>
                <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                  <span className="text-green-600">🔒</span>
                  No spam. Just smart reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
