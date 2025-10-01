import { useEffect, useState } from "react";
import { Confetti } from "@/components/Confetti";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import birthdayImage from "@/assets/birthday-celebration.jpg";
import { Cake, Gift, Heart, Sparkles } from "lucide-react";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Confetti />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-celebration)" }}
      />

      {/* Floating Sparkles */}
      <div className="absolute top-20 left-20 animate-sparkle">
        <Sparkles className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute top-40 right-32 animate-sparkle" style={{ animationDelay: "0.5s" }}>
        <Sparkles className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute bottom-32 left-40 animate-sparkle" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-7 h-7 text-secondary" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="animate-scale-in">
            <h1 className="text-7xl md:text-9xl font-bold mb-4 animate-float">
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: "var(--gradient-celebration)",
                }}
              >
                Happy Birthday
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-float-slow">
              JOY! 🎉
            </h2>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="animate-float">
              <Cake className="w-12 h-12 text-primary" />
            </div>
            <div className="animate-float" style={{ animationDelay: "0.3s" }}>
              <Gift className="w-12 h-12 text-accent" />
            </div>
            <div className="animate-float" style={{ animationDelay: "0.6s" }}>
              <Heart className="w-12 h-12 text-secondary" />
            </div>
          </div>
        </div>

        {/* Birthday Image */}
        <div className="animate-scale-in mb-12" style={{ animationDelay: "0.9s" }}>
          <div 
            className="rounded-3xl overflow-hidden shadow-2xl max-w-3xl"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img 
              src={birthdayImage} 
              alt="Birthday celebration with cake and balloons" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Message Card */}
        {showMessage && (
          <Card 
            className="max-w-2xl p-8 md:p-12 text-center animate-fade-in-up bg-card/80 backdrop-blur-sm border-primary/20"
            style={{ 
              animationDelay: "1.2s",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed text-foreground">
                May your special day be filled with endless joy, laughter, and unforgettable moments! 
                You deserve all the happiness in the world! 🎂✨
              </p>
              
              <div className="pt-6 border-t border-primary/30">
                <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
                  With love and best wishes,
                </p>
                <p 
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: "var(--gradient-celebration)",
                  }}
                >
                  RAHAT 💝
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Decorative Balloons */}
        <div className="fixed bottom-10 left-10 text-6xl animate-float-slow opacity-80">
          🎈
        </div>
        <div className="fixed bottom-16 right-16 text-7xl animate-float opacity-80" style={{ animationDelay: "0.5s" }}>
          🎈
        </div>
        <div className="fixed bottom-20 left-1/3 text-5xl animate-float-slow opacity-80" style={{ animationDelay: "1s" }}>
          🎈
        </div>
      </div>
    </div>
  );
};

export default Index;
