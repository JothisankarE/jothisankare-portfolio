import { Button } from "@/components/ui/button";
import { Download, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & UI/UX Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <div className="hero-glow rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center floating">
            <span className="text-4xl font-bold text-primary">JE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            JOTHISANKAR E
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-2 h-8">
            <span className="typing">{typedText}</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for a challenging role in a reputable organization to utilize my technical, 
            database, and management skills for organizational growth while enhancing my knowledge 
            about new and emerging trends in the IT sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a 
    href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" 
    target="_blank" 
    rel="noopener noreferrer"
  >
            <Button size="lg" className="glow-hover">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="glow-hover">
                <Mail className="mr-2 h-4 w-4" />
                jothisankar979@gmail.com
              </Button>
              <Button variant="outline" size="lg" className="glow-hover">
                <Phone className="mr-2 h-4 w-4" />
                +91 9994634216
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
