import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  GraduationCap, 
  Database, 
  Sparkles, 
  Book, 
  Compass, 
  Building2, 
  PenTool, 
  ChevronRight,
  Cpu,
  Printer,
  Layers,
  Globe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Sector {
  index: number;
  id: string;
  name: string;
  tag: string;
  x: number; // orbital coordinates %
  y: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  capabilities: string[];
  image: string;
  visualTheme: string;
}

const sectors: Sector[] = [
  {
    index: 0,
    id: "educational",
    name: "Educational Publishing",
    tag: "Primary & K-12",
    x: 50,
    y: 10,
    description: "Manufacturing high-volume textbooks and curriculum materials with consistent quality, durable binding, and reliable delivery schedules.",
    icon: BookOpen,
    accentColor: "text-royal-blue",
    capabilities: ["High-Volume Offset runs", "FSC-Sourced Papers", "Reinforced Softcover Bindings", "State-Aligned Specifications"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "blueprint-bg"
  },
  {
    index: 1,
    id: "academic",
    name: "Academic Publishing",
    tag: "Scholarly Research",
    x: 77,
    y: 23,
    description: "Precision manufacturing for university presses, peer-reviewed journals, and dense academic references requiring meticulous page layout fidelity.",
    icon: GraduationCap,
    accentColor: "text-[#0A2342]",
    capabilities: ["Monograph Case Binding", "Short-run Digital Proofing", "High-density Text Grids", "Acid-Free Paper Stocks"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "elegant-editorial"
  },
  {
    index: 2,
    id: "stm",
    name: "Scientific, Technical & Medical (STM)",
    tag: "Color Critical",
    x: 88,
    y: 50,
    description: "High-detail print production and medical diagram color matching. Engineered for precise visual representations in professional scientific journals.",
    icon: Database,
    accentColor: "text-brand-blue",
    capabilities: ["Extended Gamut CMYK", "Anatomy Atlas Formats", "Gloss & Matte Coated Stocks", "Coated Paper Calibration"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "scientific-grid"
  },
  {
    index: 3,
    id: "childrens",
    name: "Children's Publishing",
    tag: "Durability & Safety",
    x: 77,
    y: 77,
    description: "Heavy-grade board books and vibrant children's storybooks. Finished with child-safe, non-toxic soy inks and protective rounded corners.",
    icon: Sparkles,
    accentColor: "text-emerald-600",
    capabilities: ["Board Mounting & Glueing", "Die-Cut Board Folds", "Round-Corner Safety Cuts", "Soy-Based Ink Coating"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "playful-gradient"
  },
  {
    index: 4,
    id: "trade",
    name: "Trade Publishing",
    tag: "Retail Distribution",
    x: 50,
    y: 88,
    description: "Retail-ready fiction and non-fiction commercial books. Featuring case-wrapped covers and perfect-bound block layouts for commercial bookstores.",
    icon: Book,
    accentColor: "text-deep-navy",
    capabilities: ["Mass-Market Softcovers", "French Fold Gatecovers", "Thread Sewn Binding", "Premium Cover Laminations"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "retail-modern"
  },
  {
    index: 5,
    id: "religious",
    name: "Religious Publishing",
    tag: "Timeless Quality",
    x: 23,
    y: 77,
    description: "Specialized production for spiritual texts. Printed on lightweight papers with custom gilding, leatherette casings, and custom ribbons.",
    icon: Compass,
    accentColor: "text-gold-accent",
    capabilities: ["Ultra-Thin Bible Papers", "Gold/Silver Edge Gilding", "Silk Ribbon Inserts", "Debossed Leather Casings"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "religious-texture"
  },
  {
    index: 6,
    id: "corporate",
    name: "Professional & Corporate Publishing",
    tag: "Enterprise Standards",
    x: 12,
    y: 50,
    description: "Corporate annual reviews, marketing guides, training handbooks, and directories designed to communicate enterprise values with professional precision.",
    icon: Building2,
    accentColor: "text-teal-600",
    capabilities: ["Double-Loop Wire-O Binding", "Custom Tab Index Dividers", "Corporate Color Profiles", "Spot Gloss Cover Marks"],
    image: "https://images.unsplash.com/photo-1512418491527-5735d749964a?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "corporate-aesthetic"
  },
  {
    index: 7,
    id: "custom",
    name: "Custom Publishing",
    tag: "Specialty Curation",
    x: 23,
    y: 23,
    description: "Unique publishing designs, customized portfolio books, high-end artist collections, and complex binding solutions tailored to artistic briefs.",
    icon: PenTool,
    accentColor: "text-purple-600",
    capabilities: ["Custom Slipcase Sets", "Foil Stamping & Debossing", "Panoramic Lay-Flat Spreads", "Mixed Media Material Wraps"],
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=1200",
    visualTheme: "custom-experimental"
  }
];

const journeySteps = ["Concept", "Design", "Printing", "Binding", "Finishing", "Distribution"];

const zones = {
  prepress: {
    title: "Prepress Excellence",
    theme: "Precision begins before printing.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    description: "Before paper meets ink, our prepress suite ensures absolute layout fidelity, color proofing, and plating accuracy. We combine advanced calibration workflows with computerized Computer-to-Plate (CTP) engines.",
    capabilities: [
      "Color Management (ISO Standards)",
      "Digital Inkjet Contract Proofing",
      "Thermal CTP technology",
      "High-resolution artwork optimization",
      "Imposition & pagination checks",
      "PDF-VT variable print preflighting"
    ]
  },
  printing: {
    title: "Precision Printing",
    theme: "Manufacturing at scale.",
    image: "https://images.unsplash.com/photo-1616077168712-fc6c788bc4ee?auto=format&fit=crop&q=80&w=600",
    description: "At the heart of our facility are high-speed multi-color offset presses. Optimized for long production runs, our sheet-fed and web-offset systems maintain absolute color consistency and print sharpness sheet after sheet.",
    capabilities: [
      "High-speed multi-color offset printing",
      "Closed-loop spectrophotometer scans",
      "Large-scale educational textbook runs",
      "Short-run digital print production",
      "Consistent ink density monitors",
      "Environmentally friendly soy-based inks"
    ]
  },
  binding: {
    title: "Advanced Binding",
    theme: "Engineering durability.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    description: "A book's spine is its foundation of durability. Our bindery lines execute high-precision folding, section sewing, thread binding, and thermal gluing, transforming print blocks into premium hardbacks and paperbacks.",
    capabilities: [
      "Automated case-making & case-binding",
      "Section sewing & thread stitching",
      "Perfect binding with EVA adhesives",
      "High-durability PUR glue bindings",
      "Tactile flexi-board bindings",
      "Double-loop corporate wire-o & spiral"
    ]
  }
};

export function Industries() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("educational");
  const [activeZone, setActiveZone] = useState<"prepress" | "printing" | "binding">("prepress");

  const isJourneyScrollingRef = useRef(false);
  const journeyScrollTimeoutRef = useRef<number | null>(null);

  // Track scroll position to update journey steps
  useEffect(() => {
    const handleScroll = () => {
      if (!isJourneyScrollingRef.current) {
        const targetOffset = window.innerHeight * 0.35; // 35% from top
        let closestId = "educational";
        let minDistance = Infinity;

        sectors.forEach((sec) => {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - targetOffset);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = sec.id;
            }
          }
        });
        setActiveSection(closestId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getJourneyStep = (secId: string) => {
    switch (secId) {
      case "educational":
      case "academic":
        return "Concept";
      case "stm":
        return "Design";
      case "childrens":
        return "Printing";
      case "trade":
        return "Binding";
      case "religious":
      case "corporate":
        return "Finishing";
      case "custom":
        return "Distribution";
      default:
        return "Concept";
    }
  };

  const stepToId = (step: string) => {
    switch (step) {
      case "Concept": return "educational";
      case "Design": return "stm";
      case "Printing": return "childrens";
      case "Binding": return "trade";
      case "Finishing": return "religious";
      case "Distribution": return "custom";
      default: return "educational";
    }
  };

  const scrollToStep = (step: string) => {
    isJourneyScrollingRef.current = true;
    const targetId = stepToId(step);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (journeyScrollTimeoutRef.current) {
      window.clearTimeout(journeyScrollTimeoutRef.current);
    }

    journeyScrollTimeoutRef.current = window.setTimeout(() => {
      isJourneyScrollingRef.current = false;
    }, 800);
  };

  const currentJourney = getJourneyStep(activeSection);
  const activeSector = activeCategory !== null ? sectors[activeCategory] : sectors[0];

  return (
    <div className="bg-white relative select-text overflow-x-clip">
      
      {/* Inline styles for animated flow lines */}
      <style>
        {`
          @keyframes flow-pattern {
            to {
              stroke-dashoffset: -28;
            }
          }
          .animate-flow-line {
            animation: flow-pattern 5s linear infinite;
          }
          @keyframes float-dust {
            0%, 100% { transform: translateY(0px) opacity: 0.2; }
            50% { transform: translateY(-10px) opacity: 0.4; }
          }
          .dust-particle {
            animation: float-dust 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* SECTION 01: PAGE INTRODUCTION (Orbital Sectors Hub) */}
      <section className="relative min-h-[95vh] flex items-center bg-blueprint-grid bg-white py-24 md:py-32 border-b border-gray-200/50">
        
        {/* Radial graphic lights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-royal-blue/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-accent/[0.02] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3.5 py-1.5 rounded-full inline-block">
              MARKETS WE SERVE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-6">
              Publishing Expertise Across Every Sector
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-sans font-light leading-relaxed">
              Every publishing segment has unique production requirements. Our expertise enables us to deliver tailored manufacturing solutions that meet the quality, durability, and scalability expected by publishers around the world.
            </p>
          </div>

          {/* Core Interactive Orbital Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Orbiter Detail Panel (Card) */}
            <div className="lg:col-span-5 min-h-[380px] flex flex-col justify-center order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSector.index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="p-8 rounded-[24px] border border-royal-blue/10 bg-white shadow-xl relative overflow-hidden"
                >
                  {/* Decorative background mark */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-royal-blue/[0.02] to-transparent rounded-bl-full pointer-events-none" />
                  
                  <span className={cn(
                    "text-[10px] font-bold tracking-widest font-heading uppercase px-3 py-1 rounded-full bg-slate-100",
                    activeSector.accentColor,
                    "bg-opacity-10 border border-current border-opacity-10"
                  )}>
                    {activeSector.tag}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-deep-navy mt-6 mb-4 font-heading leading-tight">
                    {activeSector.name}
                  </h3>
                  
                  <p className="text-gray-600 font-sans text-sm font-light leading-relaxed mb-6">
                    {activeSector.description}
                  </p>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-[10px] font-bold text-deep-navy font-heading uppercase tracking-widest mb-3">
                      Key Capabilities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {activeSector.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs text-gray-500 font-sans font-light">
                          <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", activeSector.accentColor.replace("text-", "bg-"))} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-start">
                    <a
                      href={`#${activeSector.id}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider group",
                        activeSector.accentColor
                      )}
                    >
                      <span>Showcase Story</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: SVG Orbital Visualization */}
            <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-[480px] aspect-square">
                
                {/* SVG Spoke Connections & Circles */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Outer Orbit Circle */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="24" fill="none" stroke="#F1F5F9" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                  
                  {/* Connection Spokes */}
                  {sectors.map((s) => {
                    const isHovered = activeCategory === s.index;
                    return (
                      <motion.line
                        key={s.id}
                        x1="50"
                        y1="50"
                        x2={s.x}
                        y2={s.y}
                        stroke={isHovered ? "#0057B8" : "#E2E8F0"}
                        strokeWidth={isHovered ? "1.5" : "0.75"}
                        strokeDasharray={isHovered ? "none" : "2 2"}
                        className="transition-colors duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Central Core Hub */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-deep-navy border-2 border-gold-accent flex flex-col justify-center items-center p-3 text-center shadow-2xl z-20"
                >
                  <div className="absolute inset-0 rounded-full border border-gold-accent/40 animate-ping opacity-60 pointer-events-none" />
                  <span className="text-[7px] font-bold text-gold-accent tracking-widest uppercase mb-1 font-heading">
                    MULTIVISTA
                  </span>
                  <span className="text-[10px] font-bold text-white leading-snug font-heading px-1">
                    Manufacturing Excellence
                  </span>
                </div>

                {/* Floating Industry Nodes */}
                {sectors.map((s) => {
                  const isHovered = activeCategory === s.index;
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.id}
                      style={{ 
                        left: `${s.x}%`, 
                        top: `${s.y}%`,
                        transform: "translate(-50%, -50%)" 
                      }}
                      className="absolute z-30 flex flex-col items-center group/node"
                      onMouseEnter={() => setActiveCategory(s.index)}
                    >
                      {/* Interactive Button */}
                      <button
                        type="button"
                        className={cn(
                          "w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                          isHovered 
                            ? "bg-royal-blue text-white scale-110 ring-4 ring-royal-blue/10 border-none" 
                            : "bg-white text-deep-navy border border-gray-150 hover:border-royal-blue/30"
                        )}
                        onClick={() => setActiveCategory(s.index)}
                        aria-label={`Show ${s.name} capabilities`}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </button>

                      {/* Micro floating text labels */}
                      <span 
                        className={cn(
                          "absolute top-12 whitespace-nowrap text-[8.5px] font-bold tracking-wide uppercase px-2 py-0.5 rounded shadow-sm pointer-events-none bg-white border transition-all duration-300",
                          isHovered 
                            ? "text-royal-blue border-royal-blue/20 scale-105" 
                            : "text-deep-navy opacity-60 border-gray-100 group-hover/node:opacity-100"
                        )}
                      >
                        {s.name.split(" ")[0]}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: INTERACTIVE MARKET JOURNEY (Scroll Showcase) */}
      <section className="relative bg-white py-16 md:py-24">
        
        {/* Core Layout container: Left Journey Timeline, Right Showcase Cards */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* STICKY TIMELINE (Visible on desktop) */}
            <div className="hidden lg:block lg:col-span-3 sticky top-36 select-none pl-4 pr-6">
              <div className="space-y-1 text-left mb-6">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  PUBLISHING CYCLE
                </span>
                <h3 className="text-sm font-bold text-deep-navy font-heading">
                  Manufacturing Path
                </h3>
              </div>
              
              {/* Timeline Flow */}
              <div className="relative mt-8">
                {/* Vertical Progress Line */}
                <div className="absolute left-[18px] top-[14px] bottom-[14px] w-[2px] pointer-events-none">
                  <div className="absolute inset-0 bg-slate-100 rounded-full" />
                  <div 
                    className="absolute top-0 left-0 w-full bg-royal-blue rounded-full transition-all duration-500 ease-out"
                    style={{
                      height: `${(journeySteps.indexOf(currentJourney) / (journeySteps.length - 1)) * 100}%`
                    }}
                  />
                </div>

                <div className="space-y-6">
                  {journeySteps.map((step) => {
                    const isActive = currentJourney === step;
                    return (
                      <div key={step} className="relative flex items-center min-h-[40px]">
                        {/* Timeline dot */}
                        <button
                          type="button"
                          onClick={() => scrollToStep(step)}
                          className={cn(
                            "absolute left-[18px] -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white cursor-pointer transition-all duration-300 flex items-center justify-center z-20 outline-none",
                            isActive 
                              ? "border-royal-blue bg-royal-blue scale-110 ring-4 ring-royal-blue/15 shadow-sm" 
                              : "border-slate-200 hover:border-slate-400"
                          )}
                          aria-label={`Go to ${step}`}
                        >
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                        </button>

                        {/* Button label */}
                        <button
                          type="button"
                          onClick={() => scrollToStep(step)}
                          className={cn(
                            "w-full text-left ml-9 py-1 text-xs font-semibold tracking-wider uppercase font-heading transition-all duration-300 cursor-pointer outline-none hover:text-royal-blue",
                            isActive ? "text-royal-blue translate-x-1" : "text-gray-400"
                          )}
                        >
                          {step}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SHOWCASE CARDS (8 Viewports) */}
            <div className="lg:col-span-9 space-y-32 lg:pb-[20vh]">
              {sectors.map((sec, idx) => {
                const isEven = idx % 2 === 0;
                const isActive = activeSection === sec.id;
                
                return (
                  <div 
                    key={sec.id} 
                    id={sec.id}
                    className={cn(
                      "scroll-mt-36 transition-all duration-700 ease-out origin-center",
                      isActive ? "opacity-100 scale-100 filter-none" : "opacity-45 scale-98 blur-[0.5px]"
                    )}
                  >
                    
                    {/* Editorial Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                      
                      {/* Text Column */}
                      <div className={cn(
                        "md:col-span-6 space-y-6 text-left",
                        isEven ? "md:order-1" : "md:order-2"
                      )}>
                        <span className={cn(
                          "text-[9px] font-bold tracking-widest font-heading uppercase px-2.5 py-1 rounded-full inline-block transition-colors duration-500 border",
                          isActive 
                            ? "text-gold-accent bg-gold-accent/5 border-gold-accent/20" 
                            : "text-gray-400 bg-gray-50 border-gray-150"
                        )}>
                          Market {String(idx + 1).padStart(2, '0')} — {getJourneyStep(sec.id)}
                        </span>
                        
                        <h2 className={cn(
                          "text-3xl md:text-4xl font-bold tracking-tight font-heading leading-tight transition-colors duration-500",
                          isActive ? "text-deep-navy" : "text-gray-705"
                        )}>
                          {sec.name}
                        </h2>
                        
                        <p className={cn(
                          "text-sm md:text-base font-sans font-light leading-relaxed transition-colors duration-500",
                          isActive ? "text-gray-650" : "text-gray-400"
                        )}>
                          {sec.description}
                        </p>

                        <div className="border-t border-gray-100 pt-6">
                          <h4 className="text-[10px] font-bold text-deep-navy font-heading uppercase tracking-widest mb-3">
                            Production Specifications
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                            {sec.capabilities.map((cap) => (
                              <li key={cap} className="flex items-center gap-2 text-xs font-sans font-light">
                                <ChevronRight className={cn(
                                  "w-3.5 h-3.5 shrink-0 transition-colors duration-500",
                                  isActive ? "text-royal-blue" : "text-gray-300"
                                )} />
                                <span className={cn(
                                  "transition-colors duration-500",
                                  isActive ? "text-gray-600" : "text-gray-450"
                                )}>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button 
                            href="/contact" 
                            variant={isActive ? "primary" : "outline"} 
                            className={cn(
                              "rounded-full px-5 py-3 text-xs shadow-sm transition-all duration-300",
                              isActive ? "bg-royal-blue text-white" : "border-gray-250 text-gray-450 hover:bg-slate-50"
                            )}
                          >
                            Inquire Sector Capabilities
                          </Button>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className={cn(
                        "md:col-span-6",
                        isEven ? "md:order-2" : "md:order-1"
                      )}>
                        <div className={cn(
                          "relative group rounded-[20px] overflow-hidden shadow-xl aspect-[4/3] border bg-slate-50 transition-all duration-700",
                          isActive ? "border-royal-blue/30 shadow-royal-blue/5 shadow-2xl" : "border-gray-200/60 shadow-md"
                        )}>
                          
                          {/* Image Grid markings */}
                          <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none z-10" />
                          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 pointer-events-none z-10" />
                          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 pointer-events-none z-10" />

                          <img 
                            src={sec.image} 
                            alt={sec.name} 
                            className={cn(
                              "w-full h-full object-cover transition-transform duration-1000 ease-out",
                              isActive ? "scale-105" : "scale-100"
                            )} 
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 03: BEYOND FORMATS - MANUFACTURING CAPABILITIES (Triangle Ecosystem Hub) */}
      <section className="relative py-28 bg-[#F8FAFC] border-y border-gray-200/40">
        
        {/* Subtle dot markers */}
        <div className="absolute inset-0 bg-paper-dots opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3.5 py-1.5 rounded-full inline-block">
              BEYOND FORMATS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-4 leading-tight">
              Manufacturing Capabilities Architecture
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed">
              We operate an interconnected modular hub where information, materials, and processes flow dynamically. Click on the prepress, printing, and binding nodes to map the production architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Capability Node Detail */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeZone}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block">
                    {zones[activeZone].theme}
                  </span>

                  <h3 className="text-3xl font-bold text-deep-navy font-heading">
                    {zones[activeZone].title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed">
                    {zones[activeZone].description}
                  </p>

                  <div className="border-t border-slate-200/60 pt-6">
                    <h4 className="text-[10px] font-bold text-deep-navy font-heading uppercase tracking-widest mb-4">
                      Core Operations
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {zones[activeZone].capabilities.map((cap) => (
                        <div 
                          key={cap} 
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-xs font-semibold text-slate-700 font-sans"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-accent shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: SVG Interconnection Triangle Hub */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[340px] aspect-square">
                
                {/* SVG Connections & Particle flows */}
                <svg viewBox="0 0 300 280" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0057B8" />
                      <stop offset="50%" stopColor="#D4A437" />
                      <stop offset="100%" stopColor="#0A2342" />
                    </linearGradient>
                  </defs>

                  {/* Triangular Static path */}
                  <path d="M 150,55 L 60,195 L 240,195 Z" fill="none" stroke="#E2E8F0" strokeWidth="2" />
                  
                  {/* Flowing animated lines */}
                  <path 
                    d="M 150,55 L 60,195 L 240,195 Z" 
                    fill="none" 
                    stroke="url(#flow-gradient)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    strokeDasharray="8 6" 
                    className="animate-flow-line" 
                  />
                  
                  {/* Flow Direction Indicators */}
                  <polygon points="105,127 101,120 109,122" fill="#0057B8" />
                  <polygon points="150,195 158,191 158,199" fill="#D4A437" />
                  <polygon points="195,127 199,120 191,122" fill="#0A2342" />
                </svg>

                {/* Prepress Node (Top Center) */}
                <div 
                  style={{ left: "50%", top: "20%" }} 
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={() => setActiveZone("prepress")}
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                      activeZone === "prepress"
                        ? "bg-royal-blue text-white scale-110 ring-4 ring-royal-blue/10 border-none"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-royal-blue/40"
                    )}
                    aria-label="Select Prepress Zone"
                  >
                    <Cpu className="w-6 h-6" />
                  </button>
                  <span className="mt-2 text-[9px] font-bold text-deep-navy font-heading uppercase tracking-wide bg-white border px-2 py-0.5 rounded shadow-sm">
                    Prepress
                  </span>
                </div>

                {/* Precision Printing Node (Bottom Left) */}
                <div 
                  style={{ left: "20%", top: "70%" }} 
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={() => setActiveZone("printing")}
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                      activeZone === "printing"
                        ? "bg-royal-blue text-white scale-110 ring-4 ring-royal-blue/10 border-none"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-royal-blue/40"
                    )}
                    aria-label="Select Printing Zone"
                  >
                    <Printer className="w-6 h-6" />
                  </button>
                  <span className="mt-2 text-[9px] font-bold text-deep-navy font-heading uppercase tracking-wide bg-white border px-2 py-0.5 rounded shadow-sm">
                    Printing
                  </span>
                </div>

                {/* Advanced Binding Node (Bottom Right) */}
                <div 
                  style={{ left: "80%", top: "70%" }} 
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={() => setActiveZone("binding")}
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                      activeZone === "binding"
                        ? "bg-royal-blue text-white scale-110 ring-4 ring-royal-blue/10 border-none"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-royal-blue/40"
                    )}
                    aria-label="Select Binding Zone"
                  >
                    <Layers className="w-6 h-6" />
                  </button>
                  <span className="mt-2 text-[9px] font-bold text-deep-navy font-heading uppercase tracking-wide bg-white border px-2 py-0.5 rounded shadow-sm">
                    Binding
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL SECTION: GLOBAL PUBLISHING PARTNERSHIP (Cinematic CTA) */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-deep-navy via-navy-900 to-[#07172B] text-white overflow-hidden">
        
        {/* Animated abstract stars / dust background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-gold-accent dust-particle" />
          <div className="absolute top-2/3 left-1/5 w-2 h-2 rounded-full bg-royal-blue dust-particle" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white dust-particle" style={{ animationDelay: "-5s" }} />
          <div className="absolute bottom-1/5 right-1/3 w-2.5 h-2.5 rounded-full bg-gold-accent dust-particle" style={{ animationDelay: "-2s" }} />
          
          {/* Subtle global routing vector graph */}
          <svg className="w-full h-full opacity-[0.06] select-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5%" y1="90%" x2="45%" y2="25%" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="45%" y1="25%" x2="85%" y2="85%" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="45%" cy="25%" r="6" fill="none" stroke="#D4A437" strokeWidth="1" />
            <circle cx="85%" cy="85%" r="4" fill="none" stroke="#0057B8" strokeWidth="1" />
            <circle cx="5%" cy="90%" r="4" fill="none" stroke="#0057B8" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[9px] font-bold text-gold-accent tracking-widest font-heading uppercase bg-gold-accent/10 border border-gold-accent/20 px-3.5 py-1.5 rounded-full inline-block">
              GLOBAL PUBLISHING PARTNERSHIP
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-heading max-w-4xl mx-auto">
              Your Publishing Vision.<br />Manufactured with Precision.
            </h2>

            <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              From educational publishing and academic research to premium trade books and specialized projects, Multivista delivers manufacturing solutions trusted by publishers around the world.
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-royal-blue via-gold-accent to-royal-blue mx-auto"></div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href="/contact" variant="secondary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto shadow-lg hover:bg-gold-accent hover:text-navy-900 transition-colors">
                Start a Conversation
              </Button>
              <Button href="/products" variant="outline" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto border-white text-white hover:bg-white/10 transition-colors">
                Explore Our Capabilities
              </Button>
            </div>
          </motion.div>
        </div>

      </section>

    </div>
  );
}
