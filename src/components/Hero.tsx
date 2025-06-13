
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
            Never Forget Again.
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
            Your WhatsApp Reminder Agent is Here.
          </h2>
          
          <div className="bg-card/50 backdrop-blur border rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Just text it like a friend:
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-green-800 font-medium italic">
                "Remind me to call dad tomorrow 8am"
              </p>
            </div>
            <p className="text-lg text-muted-foreground">
              And it will ping you — via WhatsApp or even a call.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-primary">
              👉 Join the waitlist for early access
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join the Waitlist 🚀
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
