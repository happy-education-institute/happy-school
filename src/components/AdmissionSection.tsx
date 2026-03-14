import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const AdmissionSection = () => (
  <section id="admission" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-secondary/15 text-secondary font-bold text-xs px-4 py-1.5 rounded-full mb-4">
            Admission on going
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Empower your kids to think be{" "}
            <span className="text-secondary italic">smarter and sharper</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Admissions are now open for Nursery to Class 12. Give your child the opportunity to learn, grow, and succeed
            in a nurturing environment.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 font-bold shadow-lg"
          >
            <a href="tel:9602805710">
              Get Educated <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="bg-card rounded-[2rem] p-6 shadow-md flex items-center gap-4">
            <div className="w-10 h-10 bg-school-green rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-heading text-2xl text-foreground">300+</div>
              <div className="text-xs text-muted-foreground font-semibold">Students enrolled</div>
            </div>
          </div>
          <div className="bg-card rounded-[2rem] p-6 shadow-md flex items-center gap-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-lg">⭐</div>
            <div>
              <div className="font-heading text-2xl text-foreground">15+</div>
              <div className="text-xs text-muted-foreground font-semibold">Years of teaching</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AdmissionSection;
