import { motion } from "motion/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CountUp } from "@/components/ui/CountUp";

export function ManufacturingImpact() {
  return (
    <section className="relative py-28 bg-white overflow-hidden select-text">
      {/* Subtle printing marks/grid paper background */}
      <div className="absolute inset-0 bg-print-grid opacity-70 pointer-events-none"></div>

      {/* Floating Paper Sheets - Parallax Background Elements */}
      <div className="absolute top-12 left-8 md:left-24 opacity-20 pointer-events-none animate-float-slow select-none hidden sm:block">
        <svg width="50" height="65" viewBox="0 0 50 65" fill="none" stroke="#0057B8" strokeWidth="1">
          <rect x="2" y="2" width="46" height="61" rx="3" fill="white" />
          <line x1="8" y1="12" x2="42" y2="12" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="8" y1="20" x2="42" y2="20" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="8" y1="28" x2="42" y2="28" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="8" y1="36" x2="30" y2="36" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-8 md:right-28 opacity-15 pointer-events-none animate-float-medium select-none hidden sm:block">
        <svg width="60" height="78" viewBox="0 0 60 78" fill="none" stroke="#D4A437" strokeWidth="1">
          <rect x="2" y="2" width="56" height="74" rx="4" fill="white" />
          <line x1="10" y1="15" x2="50" y2="15" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="10" y1="25" x2="50" y2="25" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="10" y1="35" x2="50" y2="35" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="10" y1="45" x2="35" y2="45" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-4 opacity-10 pointer-events-none animate-float-fast select-none">
        <svg width="40" height="52" viewBox="0 0 40 52" fill="none" stroke="#0A2342" strokeWidth="1">
          <rect x="2" y="2" width="36" height="48" rx="2" fill="white" />
          <line x1="6" y1="10" x2="34" y2="10" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="6" y1="18" x2="34" y2="18" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="6" y1="26" x2="24" y2="26" stroke="#F1F5F9" strokeWidth="1" />
        </svg>
      </div>

      {/* Grid Alignment Guides / Corner Marks (High-End Publishing Look) */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gray-200 pointer-events-none hidden md:block"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gray-200 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gray-200 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gray-200 pointer-events-none hidden md:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeader title="Global Printing Excellence" align="center" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
            Five Decades of Manufacturing Scale, Precision & Trust
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light font-sans">
            From educational publishing to global distribution, our integrated manufacturing ecosystem delivers quality, consistency, and scale trusted by publishers worldwide.
          </p>
        </AnimatedSection>

        {/* Staggered Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Large Featured Card (50+ Years) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 md:row-span-2 group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 p-8 shadow-sm hover:shadow-2xl hover:border-gold-accent/40 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            {/* Top Area */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 border border-gold-accent/40 text-gold-accent text-[10px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5">
                  Since 1976
                </span>
              </div>
              <div className="text-7xl md:text-8xl font-bold tracking-tight text-deep-navy font-heading mb-4">
                <CountUp to={50} suffix="+" />
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-2 font-heading">
                Years of Manufacturing Excellence
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed font-light max-w-sm">
                Delivering trusted print manufacturing solutions since 1976.
              </p>
            </div>

            {/* Bottom Visual Element (Vintage Timeline Accent) */}
            <div className="mt-8 pt-4 border-t border-gray-100/80 h-[140px] flex items-center justify-center">
              <svg viewBox="0 0 400 130" className="w-full h-full text-gray-300">
                <line x1="10" y1="65" x2="390" y2="65" stroke="#E2E8F0" strokeDasharray="4 4" strokeWidth="1" />
                
                {/* Wavy Connection Line */}
                <path 
                  d="M 30,65 C 100,10 150,120 220,65 C 290,10 330,65 370,65" 
                  fill="none" 
                  stroke="url(#timeline-grad)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                
                {/* Founding Node */}
                <circle cx="30" cy="65" r="5" fill="#D4A437" />
                <circle cx="30" cy="65" r="10" fill="none" stroke="#D4A437" strokeWidth="1" opacity="0.4" />
                <text x="30" y="95" textAnchor="middle" className="text-[9px] font-semibold fill-gray-400 font-heading">1976</text>
                <text x="30" y="45" textAnchor="middle" className="text-[9px] font-bold fill-gold-accent font-sans">Founding</text>

                {/* Growth Node */}
                <circle cx="220" cy="65" r="5" fill="#0057B8" />
                <circle cx="220" cy="65" r="10" fill="none" stroke="#0057B8" strokeWidth="1" opacity="0.4" />
                <text x="220" y="95" textAnchor="middle" className="text-[9px] font-semibold fill-gray-400 font-heading">2000s</text>
                <text x="220" y="45" textAnchor="middle" className="text-[9px] font-bold fill-royal-blue font-sans">Expansion</text>

                {/* Present Node */}
                <circle cx="370" cy="65" r="5" fill="#0A2342" />
                <circle cx="370" cy="65" r="10" fill="none" stroke="#0A2342" strokeWidth="1" className="animate-pulse" style={{ transformOrigin: '370px 65px' }} />
                <text x="370" y="95" textAnchor="middle" className="text-[9px] font-semibold fill-gray-400 font-heading">Present</text>
                <text x="370" y="45" textAnchor="middle" className="text-[9px] font-bold fill-deep-navy font-sans">Global</text>
                
                <defs>
                  <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4A437" />
                    <stop offset="50%" stopColor="#0057B8" />
                    <stop offset="100%" stopColor="#0A2342" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Card 2: Export-Focused Manufacturing (100%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 group relative flex flex-col md:flex-row justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 shadow-sm hover:shadow-2xl hover:border-royal-blue/30 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            {/* Content block */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 border border-royal-blue/20 text-royal-blue text-[10px] font-bold uppercase tracking-widest rounded-full bg-royal-blue/5">
                  Global Reach
                </span>
                <div className="text-7xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-4">
                  <CountUp to={100} suffix="%" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-2 font-heading">
                  Export-Focused
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed font-light">
                  Serving leading publishers across North America, Europe, Australia, Africa and international markets.
                </p>
              </div>
            </div>

            {/* Visual block: World map outline & Animated Route lines */}
            <div className="w-full md:w-1/2 relative min-h-[220px] bg-light-gray/30 border-t md:border-t-0 md:border-l border-gray-100/80 flex items-center justify-center p-6 overflow-hidden">
              <svg viewBox="0 0 300 200" className="w-full h-full text-royal-blue/10">
                {/* Latitude/longitude circular grid lines */}
                <circle cx="150" cy="100" r="80" fill="none" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="150" cy="100" r="50" fill="none" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="150" cy="100" r="20" fill="none" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="50" y1="100" x2="250" y2="100" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="150" y1="20" x2="150" y2="180" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                
                {/* Chennai India Headquarters Hub */}
                <circle cx="150" cy="105" r="4.5" fill="#0057B8" />
                <circle cx="150" cy="105" r="10" fill="none" stroke="#0057B8" strokeWidth="1" opacity="0.6" className="animate-ping" style={{ transformOrigin: '150px 105px' }} />
                <text x="150" y="123" textAnchor="middle" className="text-[8px] font-bold fill-deep-navy tracking-widest font-heading">HQ HUB</text>
                
                {/* Destination Hubs & Paths */}
                {/* North America */}
                <circle cx="60" cy="65" r="3.5" fill="#0A2342" />
                <path d="M 150,105 Q 105,55 60,65" fill="none" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-[dash_12s_linear_infinite]" />
                <text x="60" y="54" textAnchor="middle" className="text-[8px] font-semibold fill-gray-500 font-sans">North America</text>

                {/* Europe */}
                <circle cx="115" cy="50" r="3.5" fill="#0A2342" />
                <path d="M 150,105 Q 130,65 115,50" fill="none" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-[dash_12s_linear_infinite]" />
                <text x="115" y="40" textAnchor="middle" className="text-[8px] font-semibold fill-gray-500 font-sans">Europe & UK</text>

                {/* Australia */}
                <circle cx="240" cy="145" r="3.5" fill="#0A2342" />
                <path d="M 150,105 Q 195,125 240,145" fill="none" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-[dash_12s_linear_infinite]" />
                <text x="240" y="157" textAnchor="middle" className="text-[8px] font-semibold fill-gray-500 font-sans">Australia</text>

                {/* Africa */}
                <circle cx="110" cy="135" r="3.5" fill="#0A2342" />
                <path d="M 150,105 Q 130,120 110,135" fill="none" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-[dash_12s_linear_infinite]" />
                <text x="110" y="147" textAnchor="middle" className="text-[8px] font-semibold fill-gray-500 font-sans">Africa</text>

                <style>
                  {`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: -40;
                      }
                    }
                  `}
                </style>
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Integrated Manufacturing Facility (100,000+ Sq. Ft.) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 group relative flex flex-col md:flex-row-reverse justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 shadow-sm hover:shadow-2xl hover:border-royal-blue/30 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            {/* Content block */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 border border-royal-blue/20 text-royal-blue text-[10px] font-bold uppercase tracking-widest rounded-full bg-royal-blue/5">
                  Infrastructure
                </span>
                <div className="text-6xl lg:text-7xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-4">
                  <CountUp to={100000} suffix="+" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-2 font-heading">
                  Sq. Ft. Integrated Facility
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed font-light">
                  An end-to-end production ecosystem designed for efficiency, precision and scalability.
                </p>
              </div>
            </div>

            {/* Visual block: Isometric blueprints */}
            <div className="w-full md:w-1/2 relative min-h-[220px] bg-blueprint-grid flex items-center justify-center p-6 overflow-hidden">
              <div className="absolute inset-0 bg-royal-blue/5 pointer-events-none"></div>
              <svg viewBox="0 0 300 200" className="w-full h-full text-royal-blue">
                {/* Isometric projection grid lines */}
                <g stroke="#0057B8" strokeWidth="0.5" opacity="0.12">
                  <line x1="0" y1="100" x2="300" y2="0" />
                  <line x1="0" y1="100" x2="300" y2="200" />
                  <line x1="150" y1="0" x2="150" y2="200" />
                  <line x1="0" y1="50" x2="300" y2="150" />
                  <line x1="0" y1="150" x2="300" y2="50" />
                </g>
                
                {/* Isometric Factory structures */}
                {/* Block 1: Warehouse / dispatch (Back Left) */}
                <g transform="translate(75, 75)">
                  <polygon points="0,-12 25,-25 50,-12 25,0" fill="#F8FAFC" stroke="#0057B8" strokeWidth="0.75" />
                  <polygon points="0,-12 25,0 25,20 0,8" fill="#F1F5F9" stroke="#0057B8" strokeWidth="0.75" />
                  <polygon points="25,0 50,-12 50,8 25,20" fill="#E2E8F0" stroke="#0057B8" strokeWidth="0.75" />
                  <text x="25" y="-7" textAnchor="middle" className="text-[6.5px] font-bold fill-deep-navy font-heading">Dispatch</text>
                </g>

                {/* Block 2: Pressroom (Center Front) */}
                <g transform="translate(105, 110)">
                  <polygon points="0,-18 35,-35 70,-18 35,0" fill="#0057B8" fillOpacity="0.08" stroke="#0057B8" strokeWidth="1.25" />
                  <polygon points="0,-18 35,0 35,25 0,7" fill="#0057B8" fillOpacity="0.15" stroke="#0057B8" strokeWidth="1.25" />
                  <polygon points="35,0 70,-18 70,7 35,25" fill="#0057B8" fillOpacity="0.22" stroke="#0057B8" strokeWidth="1.25" />
                  <text x="35" y="-8" textAnchor="middle" className="text-[7.5px] font-bold fill-royal-blue font-heading">Press Room</text>
                  
                  {/* Printing roller outline (conceptual CAD blueprints) */}
                  <ellipse cx="26" cy="-4" rx="5" ry="2.5" fill="none" stroke="#D4A437" strokeWidth="0.75" />
                  <ellipse cx="44" cy="-13" rx="5" ry="2.5" fill="none" stroke="#D4A437" strokeWidth="0.75" />
                </g>

                {/* Block 3: Pre-Press & Bindery (Back Right) */}
                <g transform="translate(155, 70)">
                  <polygon points="0,-12 25,-25 50,-12 25,0" fill="#F8FAFC" stroke="#0057B8" strokeWidth="0.75" />
                  <polygon points="0,-12 25,0 25,20 0,8" fill="#F1F5F9" stroke="#0057B8" strokeWidth="0.75" />
                  <polygon points="25,0 50,-12 50,8 25,20" fill="#E2E8F0" stroke="#0057B8" strokeWidth="0.75" />
                  <text x="25" y="-7" textAnchor="middle" className="text-[6.5px] font-bold fill-deep-navy font-heading">Bindery</text>
                </g>
                
                {/* Dimensions markings */}
                <line x1="50" y1="130" x2="105" y2="160" stroke="#D4A437" strokeWidth="0.75" strokeDasharray="2 2" />
                <circle cx="50" cy="130" r="1.5" fill="#D4A437" />
                <circle cx="105" cy="160" r="1.5" fill="#D4A437" />
                <text x="73" y="151" className="text-[6.5px] font-bold fill-gold-accent font-heading rotate-[26deg]">100,000 SQ. FT.</text>
              </svg>
            </div>
          </motion.div>

          {/* Card 4: Wide Highlight Card (15 Million+ Books) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-12 group relative flex flex-col lg:flex-row justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 shadow-sm hover:shadow-2xl hover:border-gold-accent/40 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            {/* Left Area (Text Content) */}
            <div className="w-full lg:w-5/12 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 border border-gold-accent/40 text-gold-accent text-[10px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5">
                  Production Capacity
                </span>
                <div className="text-7xl lg:text-8xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-4">
                  <CountUp to={15} suffix=" Million+" />
                </div>
                <h3 className="text-2xl font-bold text-deep-navy mb-3 font-heading">
                  Books Manufactured Every Year
                </h3>
                <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed font-light max-w-lg">
                  Supporting publishers with consistent quality and dependable production at scale. Our high-capacity production lines operate around the clock to deliver educational content, trade fiction, and premium hardcovers globally.
                </p>
              </div>
            </div>

            {/* Right Area (Animated Book conveyor belt line graphic) */}
            <div className="w-full lg:w-7/12 relative min-h-[260px] bg-paper-dots border-t lg:border-t-0 lg:border-l border-gray-100/80 flex items-center justify-center p-8 overflow-hidden">
              <svg viewBox="0 0 500 200" className="w-full h-full text-royal-blue max-w-lg md:max-w-none">
                {/* Conveyor belt wheels */}
                <g stroke="#E2E8F0" strokeWidth="2.5" fill="none">
                  <circle cx="80" cy="120" r="16" />
                  <circle cx="80" cy="120" r="5" fill="#E2E8F0" />
                  <circle cx="200" cy="120" r="16" />
                  <circle cx="200" cy="120" r="5" fill="#E2E8F0" />
                  <circle cx="320" cy="120" r="16" />
                  <circle cx="320" cy="120" r="5" fill="#E2E8F0" />
                  <circle cx="440" cy="120" r="16" />
                  <circle cx="440" cy="120" r="5" fill="#E2E8F0" />
                </g>
                
                {/* Conveyer Tracks */}
                <line x1="60" y1="104" x2="460" y2="104" stroke="#CBD5E1" strokeWidth="3" />
                <line x1="60" y1="136" x2="460" y2="136" stroke="#CBD5E1" strokeWidth="3" />
                <path d="M 60,104 A 16,16 0 0,0 60,136" fill="none" stroke="#CBD5E1" strokeWidth="3" />
                <path d="M 460,104 A 16,16 0 0,1 460,136" fill="none" stroke="#CBD5E1" strokeWidth="3" />
                
                {/* Printing Ink nozzle columns */}
                <g transform="translate(130, 25)">
                  <rect x="0" y="0" width="28" height="35" fill="#0A2342" rx="3" />
                  <rect x="9" y="35" width="10" height="12" fill="#D4A437" />
                  {/* Laser alignment laser beam */}
                  <line x1="14" y1="47" x2="14" y2="104" stroke="#D4A437" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
                  <circle cx="11" cy="65" r="1" fill="#D4A437" opacity="0.7" />
                  <circle cx="17" cy="80" r="1" fill="#D4A437" opacity="0.7" />
                </g>
                
                <g transform="translate(250, 25)">
                  <rect x="0" y="0" width="28" height="35" fill="#0057B8" rx="3" />
                  <rect x="9" y="35" width="10" height="12" fill="#0057B8" />
                  <line x1="14" y1="47" x2="14" y2="104" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
                  <circle cx="11" cy="70" r="1" fill="#0057B8" opacity="0.7" />
                  <circle cx="17" cy="85" r="1" fill="#0057B8" opacity="0.7" />
                </g>

                {/* Stacked books at destination */}
                <g transform="translate(400, 60)">
                  {/* Bottom Book */}
                  <path d="M 0,40 L 40,30 L 70,37 L 30,47 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.75" />
                  <path d="M 30,47 L 70,37 L 70,41 L 30,51 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.75" />
                  <path d="M 0,40 L 30,47 L 30,51 L 0,44 Z" fill="#0A2342" stroke="#94A3B8" strokeWidth="0.75" />

                  {/* Middle Book */}
                  <path d="M -4,30 L 36,20 L 66,27 L 26,37 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.75" />
                  <path d="M 26,37 L 66,27 L 66,31 L 26,41 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.75" />
                  <path d="M -4,30 L 26,37 L 26,41 L -4,34 Z" fill="#0057B8" stroke="#94A3B8" strokeWidth="0.75" />

                  {/* Top Book */}
                  <path d="M 3,20 L 43,10 L 73,17 L 33,27 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.75" />
                  <path d="M 33,27 L 73,17 L 73,21 L 33,31 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.75" />
                  <path d="M 3,20 L 33,27 L 33,31 L 3,24 Z" fill="#D4A437" stroke="#94A3B8" strokeWidth="0.75" />
                </g>

                {/* Sliding Books Along Conveyer */}
                <style>
                  {`
                    @keyframes conveyor-book-flow {
                      0% { transform: translate(30px, 62px) scale(0.75); opacity: 0; }
                      8% { opacity: 1; }
                      85% { opacity: 1; }
                      93% { transform: translate(350px, 62px) scale(0.75); opacity: 0; }
                      100% { transform: translate(350px, 62px) scale(0.75); opacity: 0; }
                    }
                    .conveyor-b-1 {
                      animation: conveyor-book-flow 7s linear infinite;
                    }
                    .conveyor-b-2 {
                      animation: conveyor-book-flow 7s linear infinite;
                      animation-delay: -2.33s;
                    }
                    .conveyor-b-3 {
                      animation: conveyor-book-flow 7s linear infinite;
                      animation-delay: -4.66s;
                    }
                  `}
                </style>

                <g className="conveyor-b-1">
                  <path d="M 0,25 L 30,15 L 50,22 L 20,32 Z" fill="#F8FAFC" stroke="#0057B8" strokeWidth="0.75" />
                  <path d="M 20,32 L 50,22 L 50,26 L 20,36 Z" fill="#E2E8F0" stroke="#0057B8" strokeWidth="0.75" />
                  <path d="M 0,25 L 20,32 L 20,36 L 0,29 Z" fill="#0057B8" stroke="#0057B8" strokeWidth="0.75" />
                  <line x1="22" y1="33" x2="48" y2="24" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="22" y1="35" x2="48" y2="26" stroke="#94A3B8" strokeWidth="0.5" />
                </g>

                <g className="conveyor-b-2">
                  <path d="M 0,25 L 30,15 L 50,22 L 20,32 Z" fill="#F8FAFC" stroke="#0A2342" strokeWidth="0.75" />
                  <path d="M 20,32 L 50,22 L 50,26 L 20,36 Z" fill="#E2E8F0" stroke="#0A2342" strokeWidth="0.75" />
                  <path d="M 0,25 L 20,32 L 20,36 L 0,29 Z" fill="#0A2342" stroke="#0A2342" strokeWidth="0.75" />
                  <line x1="22" y1="33" x2="48" y2="24" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="22" y1="35" x2="48" y2="26" stroke="#94A3B8" strokeWidth="0.5" />
                </g>

                <g className="conveyor-b-3">
                  <path d="M 0,25 L 30,15 L 50,22 L 20,32 Z" fill="#F8FAFC" stroke="#D4A437" strokeWidth="0.75" />
                  <path d="M 20,32 L 50,22 L 50,26 L 20,36 Z" fill="#E2E8F0" stroke="#D4A437" strokeWidth="0.75" />
                  <path d="M 0,25 L 20,32 L 20,36 L 0,29 Z" fill="#D4A437" stroke="#D4A437" strokeWidth="0.75" />
                  <line x1="22" y1="33" x2="48" y2="24" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="22" y1="35" x2="48" y2="26" stroke="#94A3B8" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
