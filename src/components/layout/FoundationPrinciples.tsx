import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Leaf, CheckCircle2, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FoundationPrinciples() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Target the middle-upper part of the viewport for active state highlighting
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveCard(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      cardRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const principles = [
    {
      index: 0,
      tag: "Integrity First",
      title: "Ethical Manufacturing",
      description:
        "Integrity shapes every decision we make from responsible sourcing and transparent operations to long-term partnerships built on trust.",
      icon: Shield,
      renderSVG: (
        <svg viewBox="0 0 120 120" className="w-16 h-16 text-deep-navy transition-all duration-300">
          <path d="M 60,20 C 80,20 95,28 95,45 C 95,75 60,95 60,95 C 60,95 25,75 25,45 C 25,28 40,20 60,20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 45,55 L 55,65 L 75,45" fill="none" stroke="#D4A437" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="55" r="30" fill="none" stroke="#0057B8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        </svg>
      ),
    },
    {
      index: 1,
      tag: "Future Focused",
      title: "Sustainability Leadership",
      description:
        "Environmental responsibility isn't an initiative; it's embedded into the way we manufacture. Every process is continuously refined to reduce impact while creating lasting value for customers and communities.",
      icon: Leaf,
      renderSVG: (
        <svg viewBox="0 0 120 120" className="w-16 h-16 text-emerald-600 transition-all duration-300">
          <circle cx="60" cy="60" r="35" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="220" strokeDashoffset="55" strokeLinecap="round" />
          <path d="M 60,35 C 75,50 75,70 60,75 C 45,70 45,50 60,35 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="75" x2="60" y2="45" stroke="currentColor" strokeWidth="1" />
          <circle cx="95" cy="60" r="4.5" fill="#D4A437" className="animate-pulse" />
        </svg>
      ),
    },
    {
      index: 2,
      tag: "Precision Driven",
      title: "Uncompromising Quality",
      description:
        "With advanced technology, integrated manufacturing and rigorous quality systems, every book leaving our facility reflects the precision our global partners expect.",
      icon: CheckCircle2,
      renderSVG: (
        <svg viewBox="0 0 120 120" className="w-16 h-16 text-royal-blue transition-all duration-300">
          <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
          <path d="M 60,15 L 63,22 L 70,22 L 65,26 L 67,33 L 60,29 L 53,33 L 55,26 L 50,22 L 57,22 Z" fill="#D4A437" />
          <line x1="20" y1="60" x2="100" y2="60" stroke="#CBD5E1" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="52" y="52" width="16" height="16" fill="white" stroke="currentColor" strokeWidth="1" />
          <text x="60" y="63" textAnchor="middle" className="text-[8px] font-bold fill-deep-navy font-heading">QA</text>
        </svg>
      ),
    },
    {
      index: 3,
      tag: "Worldwide Reach",
      title: "Global Export Excellence",
      description:
        "Our focus has always been international. We manufacture exclusively for export, serving publishers across the world with dependable production, efficient logistics and consistent delivery.",
      icon: Globe,
      renderSVG: (
        <svg viewBox="0 0 120 120" className="w-16 h-16 text-deep-navy transition-all duration-300">
          <circle cx="60" cy="60" r="35" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
          <ellipse cx="60" cy="60" rx="15" ry="35" fill="none" stroke="#0057B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <line x1="25" y1="60" x2="95" y2="60" stroke="#0057B8" strokeWidth="1" opacity="0.6" />
          <path d="M 30,80 Q 60,30 90,40" fill="none" stroke="#D4A437" strokeWidth="1.5" strokeDasharray="5 4" className="animate-[dash_8s_linear_infinite]" />
          <circle cx="90" cy="40" r="3" fill="#D4A437" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-32 bg-white select-text">
      {/* Background printing marks overlay */}
      <div className="absolute inset-0 bg-print-grid opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* LEFT CONTENT COLUMN: Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit flex flex-col justify-between py-6">
            {/* Soft blue gradient glow behind left content */}
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-royal-blue/5 blur-3xl pointer-events-none z-0"></div>

            <div className="relative z-10">
              <SectionHeader title="Our Foundation" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
                Built on Four Enduring Principles
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light font-sans max-w-md">
                For nearly five decades, our growth has been guided by a clear set of values that shape how we manufacture, innovate and serve publishing partners around the world.
              </p>
              
              <a 
                href="/about" 
                className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:text-deep-navy transition-colors mt-8 group font-sans text-base"
              >
                Discover Our Approach 
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT COLUMN: Vertically stacked interactive panels */}
          <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32 lg:py-6 lg:pb-[20vh]">
            {principles.map((p) => {
              const isActive = activeCard === p.index;
              return (
                <div
                  key={p.index}
                  ref={cardRefs[p.index]}
                  data-index={p.index}
                  className={`scroll-mt-48 transition-all duration-500 rounded-[24px] border p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center min-h-[180px] lg:min-h-[200px] ${
                    isActive
                      ? "bg-white/95 border-royal-blue/30 shadow-xl opacity-100 scale-100"
                      : "bg-white/50 border-gray-100/80 opacity-60 scale-[0.97] hover:opacity-80"
                  }`}
                >
                  {/* Left part of card */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                        Principle 0{p.index + 1}
                      </span>
                      <span className={`px-2.5 py-0.5 border text-[9px] font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${
                        isActive
                          ? "border-royal-blue/30 text-royal-blue bg-royal-blue/5"
                          : "border-gray-200 text-gray-400 bg-gray-50"
                      }`}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-deep-navy font-heading mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 font-sans text-sm font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Right part of card: Icon visual indicator */}
                  <div className="shrink-0 flex items-center justify-center p-3 rounded-2xl bg-light-gray/40 border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                    {p.renderSVG}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
