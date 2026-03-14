import { Monitor, Laptop, BookOpen, Bus, Building2, Wifi } from "lucide-react";

const facilities = [
  { icon: Monitor, title: "Smart Classrooms", desc: "Digital boards and interactive teaching methods.", emoji: "📺" },
  { icon: Laptop, title: "Computer Lab", desc: "Modern computers and digital literacy training.", emoji: "💻" },
  { icon: BookOpen, title: "Library", desc: "Wide collection of books for all subjects.", emoji: "📖" },
  { icon: Bus, title: "Bus Facility", desc: "Safe and reliable student transportation.", emoji: "🚌" },
  { icon: Building2, title: "Hostel (Boys)", desc: "Comfortable accommodation for students.", emoji: "🏠" },
  { icon: Wifi, title: "Digital Learning", desc: "Technology-enhanced modern education.", emoji: "🌐" },
];

const FacilitiesSection = () => (
  <section id="facilities" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm text-muted-foreground font-semibold mb-2">Everything your child needs</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">
          Our <span className="text-secondary italic">Facilities</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {facilities.map((f) => (
          <div
            key={f.title}
            className="bg-background rounded-[1.5rem] p-6 hover:shadow-lg transition-all group hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-school-peach flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
              {f.emoji}
            </div>
            <h3 className="font-heading text-lg text-foreground mb-1">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
