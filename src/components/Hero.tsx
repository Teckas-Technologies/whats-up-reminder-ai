
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight tracking-tight">
              Never Forget
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent leading-tight tracking-tight">
              Again.
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your AI reminder agent lives in WhatsApp. Syncs with your calendar and reminds you naturally.
            </h2>
          </div>
          
          <div className="animate-fade-in max-w-lg mx-auto mb-16" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                Just text it like a friend:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-3">
                <p className="text-green-800 font-medium text-lg">
                  "Remind me to call dad tomorrow 8am"
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <p className="text-blue-800 font-medium text-lg">
                  "Check my calendar for tomorrow's meetings"
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-medium">
                → Auto-syncs with Google/Outlook Calendar
              </p>
            </div>
          </div>

          <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <p className="text-lg font-medium text-primary">
              Join the waitlist for early access
            </p>
            <Button size="lg" className="text-lg px-12 py-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0">
              Join the Waitlist 🚀
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modern background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
