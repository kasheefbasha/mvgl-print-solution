import { motion } from "motion/react";
import { Leaf, CheckCircle2, Users, Settings } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FoundationOfExcellence() {
  return (
    <section className="relative py-32 bg-gray-50 border-t border-gray-100 overflow-hidden select-text">
      {/* Background paper dot grid texture */}
      <div className="absolute inset-0 bg-paper-dots opacity-60 pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-12 opacity-15 pointer-events-none animate-float-slow hidden lg:block">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#0057B8" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-12 opacity-10 pointer-events-none animate-float-medium hidden lg:block">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#D4A437" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-24">
          <SectionHeader title="Our Foundation of Excellence" align="center" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
            Built on Responsibility, Quality, Talent & Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light font-sans">
            Every book we manufacture is backed by sustainable practices, rigorous quality systems, skilled professionals, and continuous technological advancement.
          </p>
        </AnimatedSection>

        {/* Pillars Layout Area */}
        <div className="relative">
          
          {/* Desktop Wavy Connector Line (Wavy sine wave connecting centers of the staggered cards) */}
          <svg viewBox="0 0 1000 200" className="absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 hidden lg:block pointer-events-none z-0">
            <motion.path 
              d="M 125 50 C 250 50, 250 150, 375 150 C 500 150, 500 50, 625 50 C 750 50, 750 150, 875 150"
              fill="none"
              stroke="url(#journey-grad)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            
            <defs>
              <linearGradient id="journey-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0057B8" opacity="0.3" />
                <stop offset="33%" stopColor="#0A2342" opacity="0.5" />
                <stop offset="66%" stopColor="#D4A437" opacity="0.5" />
                <stop offset="100%" stopColor="#0057B8" opacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Vertical Connector Line */}
          <div className="absolute left-10 top-16 bottom-16 w-[2px] border-l-2 border-dashed border-royal-blue/20 lg:hidden pointer-events-none z-0"></div>

          {/* Pillars Cards (Staggered Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-stretch relative z-10">
            
            {/* Pillar 1: Sustainability (Offset Up) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:-translate-y-8 hover:-translate-y-12 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 01
                  </span>
                  <span className="px-2.5 py-0.5 border border-emerald-600/30 text-emerald-600 text-[9px] font-semibold uppercase tracking-widest rounded-full bg-emerald-50">
                    Science-Based
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    Sustainability
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Science-Based Sustainability Commitments
                </h4>
                <p className="text-gray-500 font-sans text-xs leading-relaxed font-light">
                  Driving measurable environmental impact through responsible sourcing, carbon reduction, and internationally recognized sustainability initiatives.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[100px] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 160 100" className="w-full h-full text-emerald-600">
                  {/* Rotating eco loop */}
                  <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '80px 50px' }}>
                    <circle cx="80" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
                    <path d="M 106,35 A 30,30 0 0,1 95,76 L 91,71 M 95,76 L 99,80" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M 54,65 A 30,30 0 0,1 65,24 L 69,29 M 65,24 L 61,20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </g>
                  {/* Central pulsing leaf */}
                  <g className="animate-pulse">
                    <path d="M 80,38 C 90,48 90,60 80,62 C 70,60 70,48 80,38 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="80" y1="62" x2="80" y2="40" stroke="currentColor" strokeWidth="1" />
                  </g>
                  {/* Subtle carbon stats indicator lines */}
                  <line x1="15" y1="50" x2="40" y2="50" stroke="#CBD5E1" strokeWidth="0.75" />
                  <line x1="120" y1="50" x2="145" y2="50" stroke="#CBD5E1" strokeWidth="0.75" />
                  <circle cx="15" cy="50" r="1.5" fill="#CBD5E1" />
                  <circle cx="145" cy="50" r="1.5" fill="#CBD5E1" />
                </svg>
              </div>
            </motion.div>

            {/* Pillar 2: Quality (Offset Down) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:translate-y-8 hover:translate-y-4 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 02
                  </span>
                  <span className="px-2.5 py-0.5 border border-royal-blue/30 text-royal-blue text-[9px] font-semibold uppercase tracking-widest rounded-full bg-royal-blue/5">
                    End-to-End
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-royal-blue/5 text-royal-blue group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    Quality
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Integrated Quality Systems
                </h4>
                <p className="text-gray-500 font-sans text-xs leading-relaxed font-light">
                  From prepress to final dispatch, every stage is monitored to meet the highest global publishing standards for durability and color precision.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[100px] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 160 100" className="w-full h-full text-royal-blue">
                  {/* Caliper Measuring tool overlay wireframe */}
                  <g stroke="currentColor" strokeWidth="0.75" fill="none">
                    {/* Isometric book outline */}
                    <polygon points="50,60 110,35 110,65 50,90" opacity="0.3" />
                    <polygon points="50,60 110,35 110,40 50,65" opacity="0.4" />
                    {/* Measurement slide bar */}
                    <line x1="30" y1="35" x2="130" y2="35" strokeWidth="1.5" />
                    {/* Measurement lines */}
                    <line x1="40" y1="35" x2="40" y2="30" />
                    <line x1="50" y1="35" x2="50" y2="30" />
                    <line x1="60" y1="35" x2="60" y2="30" />
                    <line x1="70" y1="35" x2="70" y2="30" stroke="#D4A437" />
                    <line x1="80" y1="35" x2="80" y2="30" />
                    <line x1="90" y1="35" x2="90" y2="30" />
                    <line x1="100" y1="35" x2="100" y2="30" />
                    <line x1="110" y1="35" x2="110" y2="30" stroke="#D4A437" />
                    <line x1="120" y1="35" x2="120" y2="30" />
                    
                    {/* Moving Vernier jaw caliper scale slider */}
                    <g className="animate-[wiggle_6s_ease-in-out_infinite]">
                      <rect x="68" y="27" width="8" height="16" fill="white" stroke="currentColor" strokeWidth="0.75" />
                      <line x1="72" y1="27" x2="72" y2="43" stroke="#D4A437" />
                      {/* Downward caliper indicator wire */}
                      <path d="M 72,43 L 72,55" />
                    </g>
                  </g>
                  {/* Stamp detail */}
                  <circle cx="135" cy="70" r="8" fill="none" stroke="#D4A437" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 131,70 L 134,73 L 139,67" fill="none" stroke="#D4A437" strokeWidth="1" />
                  
                  <style>
                    {`
                      @keyframes wiggle {
                        0%, 100% { transform: translateX(0px); }
                        50% { transform: translateX(35px); }
                      }
                    `}
                  </style>
                </svg>
              </div>
            </motion.div>

            {/* Pillar 3: People (Offset Up) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:-translate-y-8 hover:-translate-y-12 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 03
                  </span>
                  <span className="px-2.5 py-0.5 border border-gold-accent/40 text-gold-accent text-[9px] font-semibold uppercase tracking-widest rounded-full bg-gold-accent/5">
                    200+ Experts
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gold-accent/5 text-gold-accent group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    People
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Skilled Professionals
                </h4>
                <p className="text-gray-500 font-sans text-xs leading-relaxed font-light">
                  Combining decades of industrial craftsmanship with advanced modern printing technologies to manage complex print orders.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[100px] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 160 100" className="w-full h-full text-gold-accent">
                  {/* Skill coordinate nodes network */}
                  <g stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.3">
                    <line x1="80" y1="50" x2="40" y2="30" />
                    <line x1="80" y1="50" x2="120" y2="30" />
                    <line x1="80" y1="50" x2="80" y2="80" />
                    <line x1="40" y1="30" x2="120" y2="30" />
                    <line x1="40" y1="30" x2="80" y2="80" />
                    <line x1="120" y1="30" x2="80" y2="80" />
                  </g>
                  
                  {/* Node points */}
                  <circle cx="80" cy="50" r="5" fill="#D4A437" />
                  <circle cx="80" cy="50" r="10" fill="none" stroke="#D4A437" strokeWidth="0.5" className="animate-ping" style={{ transformOrigin: '80px 50px' }} />
                  
                  <circle cx="40" cy="30" r="4.5" fill="#0A2342" stroke="white" strokeWidth="1.5" />
                  <circle cx="120" cy="30" r="4.5" fill="#0057B8" stroke="white" strokeWidth="1.5" />
                  <circle cx="80" cy="80" r="4.5" fill="#0057B8" stroke="white" strokeWidth="1.5" />
                  
                  {/* Text descriptors */}
                  <text x="40" y="20" textAnchor="middle" className="text-[6.5px] font-bold fill-deep-navy font-sans">Craft</text>
                  <text x="120" y="20" textAnchor="middle" className="text-[6.5px] font-bold fill-deep-navy font-sans">Tech</text>
                  <text x="80" y="91" textAnchor="middle" className="text-[6.5px] font-bold fill-deep-navy font-sans">Precision</text>
                  <text x="80" y="42" textAnchor="middle" className="text-[7px] font-bold fill-gold-accent font-sans">Expertise</text>
                </svg>
              </div>
            </motion.div>

            {/* Pillar 4: Technology (Offset Down) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:translate-y-8 hover:translate-y-4 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 04
                  </span>
                  <span className="px-2.5 py-0.5 border border-royal-blue/30 text-royal-blue text-[9px] font-semibold uppercase tracking-widest rounded-full bg-royal-blue/5">
                    Continuous Investment
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-royal-blue/5 text-royal-blue group-hover:scale-110 transition-transform">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    Technology
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Investment in Innovation
                </h4>
                <p className="text-gray-500 font-sans text-xs leading-relaxed font-light">
                  Continuous investments in world-class offset presses, digital binding, and automated workflows ensure consistency and scale.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[100px] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 160 100" className="w-full h-full text-royal-blue">
                  {/* Intersecting rotating cogs */}
                  {/* Gear 1 (Main Left) */}
                  <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: '55px 45px' }}>
                    <circle cx="55" cy="45" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="5 3" />
                    <circle cx="55" cy="45" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="55" cy="45" r="5" fill="currentColor" />
                  </g>
                  
                  {/* Gear 2 (Small Top Right - Reverse Spin) */}
                  <g className="animate-[spin_8s_linear_reverse_infinite]" style={{ transformOrigin: '87px 30px' }}>
                    <circle cx="87" cy="30" r="12" fill="none" stroke="#D4A437" strokeWidth="4.5" strokeDasharray="4 2.5" />
                    <circle cx="87" cy="30" r="8" fill="none" stroke="#D4A437" strokeWidth="1" />
                    <circle cx="87" cy="30" r="3" fill="#D4A437" />
                  </g>

                  {/* Gear 3 (Medium Bottom Right) */}
                  <g className="animate-[spin_14s_linear_infinite]" style={{ transformOrigin: '92px 65px' }}>
                    <circle cx="92" cy="65" r="16" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="4.5 3.5" opacity="0.6" />
                    <circle cx="92" cy="65" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <circle cx="92" cy="65" r="4" fill="currentColor" opacity="0.6" />
                  </g>
                  
                  {/* Automated dashboard signal overlay */}
                  <path d="M 20,70 L 40,70 L 48,55 L 56,80 L 64,65 L 72,70 L 140,70" stroke="#CBD5E1" strokeWidth="0.75" fill="none" strokeDasharray="3 3" />
                  <circle cx="140" cy="70" r="2" fill="#D4A437" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
