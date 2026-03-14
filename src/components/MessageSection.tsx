import directorImg from "@/assets/director.jpg";
import principalImg from "@/assets/principal.jpg";
import heroStudentsImg from "@/assets/hero-students.jpg";

const MessageSection = () => (
  <section id="leadership" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      {/* Leadership cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Director Card */}
        <div className="bg-school-olive rounded-[2rem] p-8 md:p-10 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-6 right-6 w-16 h-16 bg-primary-foreground/10 rounded-full" />
          <h3 className="font-heading text-2xl md:text-3xl mb-2 leading-tight">
            Confidence that builds a brighter future.
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
            At Happy Public Secondary School, our goal is to provide a strong educational foundation while developing discipline, creativity, and confidence in every student.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-foreground/30">
              <img src={directorImg} alt="Mr. Gopal Menariya" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">Mr. Gopal Menariya</div>
              <div className="text-xs text-primary-foreground/60">Director</div>
            </div>
          </div>
        </div>

        {/* Principal Card */}
        <div className="bg-secondary rounded-[2rem] p-8 md:p-10 text-secondary-foreground relative overflow-hidden">
          <div className="absolute top-6 right-6">
            <span className="text-4xl">⭐</span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl mb-2 leading-tight">
            Helping kids to shoot their dreams.
          </h3>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
            Education is not just about books; it is about shaping character and preparing students for life. We focus on critical thinking, creativity, and leadership skills.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary-foreground/30">
              <img src={principalImg} alt="Mr. Satyanarayan Menariya" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">Mr. Satyanarayan Menariya</div>
              <div className="text-xs text-secondary-foreground/60">Principal</div>
            </div>
          </div>
        </div>

        {/* HOD Card */}
        <div className="bg-primary rounded-[2rem] p-8 md:p-10 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
            <img src={heroStudentsImg} alt="Science department" className="w-full h-full object-cover" />
          </div>
          <div className="relative">
            <div className="absolute top-6 right-6 w-14 h-14 bg-primary-foreground/15 rounded-full" />
            <h3 className="font-heading text-2xl md:text-3xl mb-2 leading-tight">
              Nurturing curiosity through science.
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
              Hands-on experiments and inquiry-led learning help our students connect theory to real-world impact and spark a lifelong love for discovery.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-foreground/30">
                <img src={heroStudentsImg} alt="Mr. Durga Shankar Menariya" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">Mr. Durga Shankar Menariya</div>
                <div className="text-xs text-primary-foreground/60">HOD, Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MessageSection;
