
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-green-500/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            🔔 Don't Let Life Slip Through the Cracks.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Join the waitlist and be the first to get your own AI reminder agent.
          </p>

          <Button size="lg" className="text-xl px-12 py-8 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            👉 Yes, Remind Me First
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
