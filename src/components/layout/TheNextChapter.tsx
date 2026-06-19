import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, CheckCircle2, Globe, Sparkles, Award, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface JourneyNode {
  id: string;
  name: string;
  detail: string;
  x: number; // percentage left
  y: number; // percentage top
  icon: any;
  color: string;
  bgLight: string;
}

export function TheNextChapter() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: JourneyNode[] = [
    {
      id: "sustainability",
      name: "Sustainability",
      detail: "FSC-Certified Sourcing & Eco-Inks",
      x: 20,
      y: 15,
      icon: Leaf,
      color: "text-emerald-600 border-emerald-200 hover:border-emerald-500",
      bgLight: "bg-emerald-50",
    },
    {
      id: "quality",
      name: "Quality",
      detail: "Precision Checks & Standardized Grids",
      x: 45,
      y: 38,
      icon: CheckCircle2,
      color: "text-royal-blue border-royal-blue/20 hover:border-royal-blue",
      bgLight: "bg-blue-50",
    },
    {
      id: "global",
      name: "Global Reach",
      detail: "Distribution Networks Across 30+ Countries",
      x: 70,
      y: 22,
      icon: Globe,
      color: "text-gold-accent border-gold-accent/30 hover:border-gold-accent",
      bgLight: "bg-amber-50",
    },
    {
      id: "innovation",
      name: "Innovation",
      detail: "Automated Pre-Press & Custom Bindings",
      x: 30,
      y: 62,
      icon: Sparkles,
      color: "text-purple-600 border-purple-200 hover:border-purple-500",
      bgLight: "bg-purple-50",
    },
    {
      id: "excellence",
      name: "Excellence",
      detail: "15M+ Annual Production Capacity",
      x: 65,
      y: 75,
      icon: Award,
      color: "text-deep-navy border-deep-navy/20 hover:border-deep-navy",
      bgLight: "bg-slate-100",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-light-gray/40 to-white select-text overflow-hidden border-t border-gray-100">
      {/* Editorial Watermark / Background Texture */}
      <div className="absolute inset-0 bg-print-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-paper-dots opacity-40 pointer-events-none"></div>

      {/* Cinematic radial gradient glows */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gold-accent/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-royal-blue/5 blur-3xl pointer-events-none"></div>

      {/* Swaying decorative paper transitions in background */}
      <div className="absolute right-[5%] top-[10%] w-24 h-32 bg-white/40 border border-gray-200/50 rounded-lg shadow-sm -rotate-12 animate-float-slow pointer-events-none hidden lg:block"></div>
      <div className="absolute right-[22%] bottom-[12%] w-20 h-28 bg-white/30 border border-gray-200/40 rounded-lg shadow-inner rotate-6 animate-float-medium pointer-events-none hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Call to Action (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <AnimatedSection direction="right" className="space-y-8">
              <div>
                <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full inline-block">
                  Partner with Multivista
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold tracking-tight text-deep-navy mt-6 mb-4 leading-tight font-heading max-w-md">
                  Let's Build the Next Chapter Together.
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-sans font-light leading-relaxed max-w-lg">
                  Whether you're seeking a reliable manufacturing partner, a sustainability-focused supply chain, or uncompromising print quality, Multivista is ready to help bring your publications to the world.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full sm:w-auto relative rounded-full shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 group inline-flex items-center justify-center gap-2 px-8 py-4 h-14"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <Button
                  href="/products"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-deep-navy text-deep-navy hover:bg-deep-navy/5 font-semibold font-heading transition-all duration-300 px-8 py-4 h-14"
                >
                  Explore Our Capabilities
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN: Book Journey Interactive SVG Map (lg:col-span-7) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <AnimatedSection direction="left" className="w-full max-w-[620px]">
              
              {/* Outer relative container preserving aspect ratio */}
              <div className="relative w-full aspect-[4/3] bg-white/70 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl p-8 overflow-visible">
                
                {/* SVG Spoke/Journey Line Overlay */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none">
                  {/* Faint journey background track */}
                  <path
                    d="M 85,50 C 85,30 75,22 70,22 C 55,22 55,38 45,38 C 30,38 25,15 20,15 C 8,15 15,62 30,62 C 45,62 55,75 65,75 C 80,75 40,88 5,85"
                    fill="none"
                    stroke="#0057B8"
                    strokeOpacity="0.06"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  
                  {/* Dynamic drawing journey line */}
                  <motion.path
                    d="M 85,50 C 85,30 75,22 70,22 C 55,22 55,38 45,38 C 30,38 25,15 20,15 C 8,15 15,62 30,62 C 45,62 55,75 65,75 C 80,75 40,88 5,85"
                    fill="none"
                    stroke="url(#ctaJourneyGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.2, ease: "easeInOut", delay: 0.3 }}
                  />

                  {/* Pulsing indicator at the end pointing to CTA */}
                  <motion.circle
                    cx="5"
                    cy="85"
                    r="2.5"
                    fill="#D4A437"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: [0.8, 1.4, 0.8] }}
                    viewport={{ once: true }}
                    transition={{ repeat: Infinity, duration: 2, delay: 3.5 }}
                  />

                  <defs>
                    <linearGradient id="ctaJourneyGrad" x1="1" y1="0.5" x2="0" y2="0.5">
                      <stop offset="0%" stopColor="#0057B8" />
                      <stop offset="40%" stopColor="#D4A437" />
                      <stop offset="80%" stopColor="#0A2342" />
                      <stop offset="100%" stopColor="#D4A437" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Open Book illustration positioned at top-right (Start of journey) */}
                <div 
                  style={{ left: "85%", top: "50%", transform: "translate(-50%, -50%)" }}
                  className="absolute z-10 w-24 h-24 flex items-center justify-center pointer-events-none"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Glowing light behind the book */}
                    <div className="absolute inset-0 bg-gold-accent/15 rounded-full blur-xl animate-pulse"></div>
                    
                    {/* Simplified Isometric Book SVG */}
                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-deep-navy drop-shadow-md overflow-visible">
                      {/* Cover spine */}
                      <path d="M 50,75 L 50,30 L 15,15 L 15,60 Z" fill="#0A2342" opacity="0.9" />
                      <path d="M 50,75 L 50,30 L 85,15 L 85,60 Z" fill="#0A2342" />
                      {/* Left fanned page */}
                      <motion.path 
                        d="M 50,71 L 50,26 L 20,13 L 20,58 Z" 
                        fill="#FAFAFA" 
                        stroke="#E2E8F0" 
                        strokeWidth="0.5" 
                        animate={{ 
                          skewY: [-1, 2, -1],
                          y: [-0.5, 0.5, -0.5]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Right fanned page */}
                      <motion.path 
                        d="M 50,71 L 50,26 L 80,13 L 80,58 Z" 
                        fill="#FFFFFF" 
                        stroke="#E2E8F0" 
                        strokeWidth="0.5" 
                        animate={{ 
                          skewY: [1, -2, 1],
                          y: [0.5, -0.5, 0.5]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                      {/* Center active floating page leaf */}
                      <motion.path
                        d="M 50,71 C 50,71 65,60 75,55 L 75,10 C 65,15 50,26 50,26 Z"
                        fill="#FAFAFA"
                        stroke="#CBD5E1"
                        strokeWidth="0.5"
                        opacity="0.85"
                        animate={{ 
                          d: [
                            "M 50,71 C 50,71 65,60 75,55 L 75,10 C 65,15 50,26 50,26 Z",
                            "M 50,71 C 50,71 60,45 70,42 L 70,0 C 60,3 50,26 50,26 Z",
                            "M 50,71 C 50,71 65,60 75,55 L 75,10 C 65,15 50,26 50,26 Z"
                          ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>

                    {/* Book icon center label */}
                    <span className="absolute bottom-[-15px] whitespace-nowrap text-[8px] font-bold text-gray-400 tracking-widest uppercase">
                      Journey Origin
                    </span>
                  </div>
                </div>

                {/* Floating particle sparks emerging from book pages */}
                <div className="absolute right-[5%] top-[30%] pointer-events-none">
                  <motion.div 
                    className="w-1 h-1 rounded-full bg-gold-accent"
                    animate={{ y: [-10, -50], x: [0, -15], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                  />
                </div>
                <div className="absolute right-[12%] top-[35%] pointer-events-none">
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-royal-blue"
                    animate={{ y: [-15, -60], x: [0, -8], opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                  />
                </div>
                <div className="absolute right-[8%] top-[40%] pointer-events-none">
                  <motion.div 
                    className="w-1 h-1 rounded-full bg-gold-accent"
                    animate={{ y: [-5, -35], x: [0, -20], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 2 }}
                  />
                </div>

                {/* Interactive Checkpoint Nodes */}
                {nodes.map((n) => {
                  const Icon = n.icon;
                  const isHovered = hoveredNode === n.id;
                  
                  return (
                    <div
                      key={n.id}
                      style={{ 
                        left: `${n.x}%`, 
                        top: `${n.y}%`,
                        transform: "translate(-50%, -50%)" 
                      }}
                      className="absolute z-20 group"
                      onMouseEnter={() => setHoveredNode(n.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {/* Node Trigger Area */}
                      <div className="relative flex flex-col items-center">
                        
                        {/* Tooltip Overlay */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: -45, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-30 bottom-12 whitespace-nowrap bg-deep-navy text-white text-[10px] font-medium font-sans px-3.5 py-1.5 rounded-lg shadow-xl border border-white/10 pointer-events-none"
                            >
                              {n.detail}
                              {/* Small tool-tip chevron pointer */}
                              <div className="absolute left-1/2 bottom-[-4px] -translate-x-1/2 w-2 h-2 bg-deep-navy rotate-45 border-r border-b border-white/10" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Interactive Node Button */}
                        <div
                          className={`w-11 h-11 rounded-full bg-white border flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ${n.color} ${
                            isHovered ? "scale-115 shadow-lg ring-4 ring-gold-accent/10" : ""
                          }`}
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                        </div>

                        {/* Label beneath node */}
                        <span 
                          className={`mt-2.5 whitespace-nowrap text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded transition-all duration-300 pointer-events-none bg-white border border-gray-100 shadow-sm ${
                            isHovered 
                              ? "text-deep-navy scale-105 border-gray-200" 
                              : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        >
                          {n.name}
                        </span>

                      </div>
                    </div>
                  );
                })}

              </div>

            </AnimatedSection>
          </div>

        </div>

        {/* Premium Closing Statement bottom overlay */}
        <AnimatedSection className="border-t border-gray-200 mt-28 pt-10 text-center max-w-4xl mx-auto">
          <p className="font-serif italic text-gray-500 text-base md:text-lg leading-relaxed px-6 font-medium selection:bg-gold-accent/20">
            "For nearly five decades, publishers worldwide have trusted Multivista to transform ideas into beautifully crafted publications."
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
