import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-students.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = ["Smart Classrooms", "Experienced Faculty", "Digital Learning", "Bus & Hostel"];

const HeroSection = () => (
  <section id="home" className="relative pt-24 pb-8 overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-32 left-8 w-16 h-16 bg-school-yellow blob-shape opacity-60 animate-float" />
    <div className="absolute top-48 right-12 w-12 h-12 bg-school-green blob-shape-2 opacity-40 animate-wiggle" />
    <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-school-peach rounded-full opacity-50 animate-float" style={{ animationDelay: "1s" }} />

    <div className="container mx-auto px-4">
      {/* Top hero text - centered like reference */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
          Putting your child's{" "}
          <span className="text-secondary italic">Future</span>
          <br />in great motion
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-school-green" />
              <span className="font-semibold">{h}</span>
            </div>
          ))}
        </div>
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 text-base font-bold shadow-lg"
        >
          <a href="#contact">
            Enquire Now <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-4 font-medium">
          We just don't give our students only lectures but real life experiences.
        </p>
      </div>

      {/* Hero image with decorative elements */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative">
          {/* Green accent card left */}
          <div className="absolute -left-4 top-1/4 z-10 hidden md:block">
            <div className="bg-school-sage rounded-3xl p-4 shadow-lg rotate-[-5deg]">
              <span className="text-3xl">📚</span>
            </div>
          </div>

          {/* Main image */}
          <div className="rounded-[2rem] overflow-hidden shadow-2xl mx-8">
            <img
              src={heroImg}
              alt="Happy students at Happy Public Secondary School"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>

          {/* Orange accent card right */}
          <div className="absolute -right-4 top-1/3 z-10 hidden md:block">
            <div className="bg-school-peach rounded-3xl p-4 shadow-lg rotate-[5deg]">
              <span className="text-3xl">🎓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
