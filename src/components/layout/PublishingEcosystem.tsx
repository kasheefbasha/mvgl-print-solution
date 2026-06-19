import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, FileText, Activity, Sparkles, Book, Layers, Award, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Category {
  index: number;
  x: number; // percentage in viewBox
  y: number; // percentage in viewBox
  tag: string;
  title: string;
  description: string;
  icon: any;
  renderSVG: ReactNode;
}

export function PublishingEcosystem() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories: Category[] = [
    {
      index: 0,
      x: 50,
      y: 10,
      tag: "Research & Journals",
      title: "Academic & Scientific Publishing",
      description:
        "Peer-reviewed scientific journals, research manuals, monographs, and academic books printed with precise typesetting and crisp layout grids.",
      icon: FileText,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-royal-blue animate-pulse">
          <rect x="25" y="25" width="50" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="38" x2="65" y2="38" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="48" x2="65" y2="48" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="58" x2="55" y2="58" stroke="currentColor" strokeWidth="1.5" />
          {/* Scientific node outline */}
          <circle cx="65" cy="68" r="6" fill="#D4A437" />
          <line x1="55" y1="68" x2="59" y2="68" stroke="#D4A437" strokeWidth="1" />
        </svg>
      ),
    },
    {
      index: 1,
      x: 82,
      y: 25,
      tag: "Clinical Guides",
      title: "Medical Publications",
      description:
        "Specialized healthcare references, clinical documentations, and anatomy atlases manufactured with superior color reproduction and durable heavy-duty paper grades.",
      icon: Activity,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-red-600">
          <rect x="25" y="20" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Heartbeat pulse graphic */}
          <path d="M 32,50 L 42,50 L 46,38 L 50,62 L 54,46 L 58,50 L 68,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#D4A437" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        </svg>
      ),
    },
    {
      index: 2,
      x: 88,
      y: 60,
      tag: "Luxury Hardcover",
      title: "Premium Hardbound Editions",
      description:
        "Case-bound hardcovers, collector editions, and premium volumes featuring custom cloth wrappers, embossed foil lettering, headbands, and gold gilding.",
      icon: Layers,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-gold-accent">
          {/* Layered book stacks */}
          <polygon points="20,40 50,28 80,40 50,52" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="20,50 50,38 80,50 50,62" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 20,40 L 20,65 C 20,65 50,77 50,77 L 80,65 L 80,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="52" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="28" r="4" fill="#0057B8" />
        </svg>
      ),
    },
    {
      index: 3,
      x: 68,
      y: 88,
      tag: "Foil & Spot UV",
      title: "Special Finishes & Custom Solutions",
      description:
        "Premium print options including gloss/matte laminations, metallic foil stamping, spot UV textures, die-cuts, and custom-engineered binding solutions built to specifications.",
      icon: Award,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-royal-blue">
          {/* Foil shine rays */}
          <g stroke="#D4A437" strokeWidth="1" opacity="0.8">
            <line x1="50" y1="15" x2="50" y2="25" />
            <line x1="50" y1="75" x2="50" y2="85" />
            <line x1="15" y1="50" x2="25" y2="50" />
            <line x1="75" y1="50" x2="85" y2="50" />
          </g>
          {/* Custom stamp badge */}
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="50,38 53,45 61,45 55,49 57,56 50,52 43,56 45,49 39,45 47,45" fill="#D4A437" />
        </svg>
      ),
    },
    {
      index: 4,
      x: 32,
      y: 88,
      tag: "Retail & Fiction",
      title: "Trade Books & Commercial Paperbacks",
      description:
        "High-volume commercial softcovers, paperbacks, and retail fiction manufactured on high-speed perfect binding lines ensuring fast turnaround and competitive pricing.",
      icon: Book,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-deep-navy">
          {/* Overlapping trade books */}
          <rect x="20" y="30" width="35" height="50" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="45" y="20" width="35" height="50" rx="2" fill="none" stroke="#0057B8" strokeWidth="1.5" />
          <line x1="55" y1="30" x2="70" y2="30" stroke="#0057B8" strokeWidth="1.5" />
          <line x1="55" y1="40" x2="70" y2="40" stroke="#0057B8" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      index: 5,
      x: 12,
      y: 60,
      tag: "Board & Illustrated",
      title: "Children's Books Manufacturing",
      description:
        "Vibrant illustrated storybooks, heavy-grade board books, and pop-up novelty editions manufactured using strictly certified non-toxic, child-safe inks.",
      icon: Sparkles,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-600">
          <rect x="25" y="25" width="50" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Sparkles stars */}
          <path d="M 40,40 L 42,45 L 47,45 L 43,48 L 45,53 L 40,50 L 35,53 L 37,48 L 33,45 L 38,45 Z" fill="#D4A437" />
          <path d="M 60,55 L 61,58 L 64,58 L 62,60 L 63,63 L 60,61 L 57,63 L 58,60 L 56,58 L 59,58 Z" fill="#D4A437" />
        </svg>
      ),
    },
    {
      index: 6,
      x: 18,
      y: 25,
      tag: "Primary & Secondary",
      title: "Educational Publishing Solutions",
      description:
        "High-durability school textbooks, educational workbooks, map sheets, and curriculum materials printed on premium FSC-sourced stocks built for high usage.",
      icon: BookOpen,
      renderSVG: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-royal-blue">
          {/* Open book icon illustration */}
          <path d="M 15,70 C 30,65 50,70 50,70 C 50,70 70,65 85,70 L 85,30 C 70,25 50,30 50,30 C 50,30 30,25 15,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 22,40 H 42 M 22,48 H 42 M 22,56 H 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const active = activeCategory !== null ? categories[activeCategory] : null;

  return (
    <section className="relative py-32 bg-white select-text overflow-hidden">
      {/* Background printing marks overlay */}
      <div className="absolute inset-0 bg-print-grid opacity-50 pointer-events-none"></div>

      {/* Luxury radial gradient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeader title="Manufacturing Capabilities" align="center" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
            Manufacturing Excellence Across Every Format
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light font-sans">
            Our integrated capabilities support a wide range of publishing requirements. Every product is manufactured with the same commitment to quality, consistency, and precision.
          </p>
        </AnimatedSection>

        {/* Desktop Split Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Active Category Info Panel (40% / lg:col-span-5) */}
          <div className="lg:col-span-5 min-h-[360px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-[24px] border border-royal-blue/15 bg-gradient-to-br from-white to-light-gray/40 shadow-xl"
                >
                  <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full">
                    {active.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-deep-navy mt-6 mb-4 font-heading">
                    {active.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-sm font-light leading-relaxed mb-6">
                    {active.description}
                  </p>
                  
                  {/* Custom Graphic */}
                  <div className="h-[120px] bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-inner">
                    {active.renderSVG}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-[24px] border border-gray-100 bg-white/80 shadow-sm flex flex-col justify-center text-center lg:text-left"
                >
                  <ShieldCheck className="w-12 h-12 text-gold-accent mx-auto lg:mx-0 mb-4" />
                  <h3 className="text-xl font-bold text-deep-navy font-heading mb-3">
                    Integrated Production Platform
                  </h3>
                  <p className="text-gray-500 font-sans text-sm font-light leading-relaxed">
                    Hover over any of the publishing categories in the orbital map to explore our customized manufacturing solutions, paper standards, and specialized bindery systems.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Ecosystem Orbital Map (60% / lg:col-span-7) */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            
            {/* Desktop-only Orbital Structure */}
            <div className="relative w-full max-w-[500px] aspect-square hidden md:block">
              
              {/* SVG Spoke Connections & Tracks */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Outer Dashed Orbit Circle */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#F1F5F9" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
                
                {/* Radial connection spokes */}
                {categories.map((c) => {
                  const isHovered = activeCategory === c.index;
                  return (
                    <motion.line
                      key={c.index}
                      x1="50"
                      y1="50"
                      x2={c.x}
                      y2={c.y}
                      stroke={isHovered ? "#0057B8" : "#E2E8F0"}
                      strokeWidth={isHovered ? "1.5" : "0.75"}
                      strokeDasharray={isHovered ? "none" : "3 1.5"}
                      className="transition-colors duration-300"
                    />
                  );
                })}
              </svg>

              {/* Central Core Hub */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-deep-navy border-[3px] border-gold-accent flex flex-col justify-center items-center p-4 text-center shadow-lg z-20"
              >
                {/* Pulse Ring waves */}
                <div className="absolute inset-0 rounded-full border border-gold-accent/40 animate-ping opacity-75 pointer-events-none"></div>
                
                <span className="text-[7.5px] font-bold text-gold-accent tracking-widest uppercase mb-1.5 font-heading">
                  HQ Hub
                </span>
                <span className="text-[10.5px] font-bold text-white leading-tight font-heading">
                  Global Printing Excellence
                </span>
              </div>

              {/* Staggered Floating corner statistics badges */}
              <div className="absolute top-[2%] left-0 text-[9px] font-bold text-deep-navy bg-white border border-gray-100 shadow-sm px-2.5 py-1 rounded-md opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
                100,000+ Sq. Ft. Facility
              </div>
              <div className="absolute top-[2%] right-0 text-[9px] font-bold text-deep-navy bg-white border border-gray-100 shadow-sm px-2.5 py-1 rounded-md opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
                Export Focused
              </div>
              <div className="absolute bottom-[2%] left-0 text-[9px] font-bold text-deep-navy bg-white border border-gray-100 shadow-sm px-2.5 py-1 rounded-md opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
                15M+ Books Annually
              </div>
              <div className="absolute bottom-[2%] right-0 text-[9px] font-bold text-deep-navy bg-white border border-gray-100 shadow-sm px-2.5 py-1 rounded-md opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
                Global Distribution
              </div>

              {/* Interactive Category Nodes in circle */}
              {categories.map((c) => {
                const isHovered = activeCategory === c.index;
                return (
                  <div
                    key={c.index}
                    style={{ 
                      left: `${c.x}%`, 
                      top: `${c.y}%`,
                      transform: "translate(-50%, -50%)" 
                    }}
                    className="absolute z-30 flex flex-col items-center group/node"
                    onMouseEnter={() => setActiveCategory(c.index)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {/* Node Circle */}
                    <div 
                      className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ${
                        isHovered 
                          ? "bg-royal-blue text-white scale-110 border-none ring-4 ring-royal-blue/15" 
                          : "bg-white text-deep-navy border border-gray-200"
                      }`}
                    >
                      <c.icon className="w-4.5 h-4.5" />
                    </div>

                    {/* Node label text floating beside or above node */}
                    <span 
                      className={`absolute top-12 whitespace-nowrap text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded shadow-sm transition-all duration-300 pointer-events-none bg-white border border-gray-100 ${
                        isHovered 
                          ? "text-royal-blue border-royal-blue/20 scale-105" 
                          : "text-deep-navy opacity-70 group-hover/node:opacity-100"
                      }`}
                    >
                      {c.title.split(" ")[0]}
                    </span>
                  </div>
                );
              })}

            </div>

            {/* Mobile Fallback Grid (Visible on mobile/small viewports) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
              {categories.map((c) => (
                <div 
                  key={c.index} 
                  className="p-6 rounded-2xl border border-gray-100 bg-white/70 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-royal-blue/5 text-royal-blue">
                        <c.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-deep-navy font-heading text-base">{c.title}</h4>
                    </div>
                    <p className="text-gray-500 font-sans text-xs font-light leading-relaxed mb-4">
                      {c.description}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-royal-blue uppercase tracking-widest bg-royal-blue/5 border border-royal-blue/10 px-2 py-0.5 rounded-full self-start">
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
