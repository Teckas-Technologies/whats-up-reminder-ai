
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-green-500/5">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
              Don't Let Life Slip Through the Cracks.
            </h2>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              Join the waitlist and be the first to get your own AI reminder agent.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <WaitlistForm>
              <Button size="lg" className="text-2xl px-16 py-10 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0">
                👉 Yes, Remind Me First
              </Button>
            </WaitlistForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
