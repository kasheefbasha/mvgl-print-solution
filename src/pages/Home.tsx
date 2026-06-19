import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Leaf, BookOpen, Layers, MonitorPlay, Printer } from "lucide-react";
import { MarketsCarousel } from "@/components/ui/MarketsCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ManufacturingImpact } from "@/components/layout/ManufacturingImpact";
import { FoundationOfExcellence } from "@/components/layout/FoundationOfExcellence";
import { GlobalRecognition } from "@/components/layout/GlobalRecognition";
import { FoundationPrinciples } from "@/components/layout/FoundationPrinciples";
import { SustainabilityCommitment } from "@/components/layout/SustainabilityCommitment";
import { PublishingEcosystem } from "@/components/layout/PublishingEcosystem";
import { TheNextChapter } from "@/components/layout/TheNextChapter";
import { SplashCursor } from "@/components/ui/SplashCursor";

export function Home() {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const px = (e.clientX - centerX) * -0.015;
      const py = (e.clientY - centerY) * -0.015;
      setParallaxOffset({ x: px, y: py });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[80vh] lg:min-h-[100dvh] flex items-center justify-center bg-blueprint-grid bg-white py-20 px-4 md:py-32 selection:bg-brand-blue selection:text-white border-b border-gray-200/50 overflow-hidden">
        {/* Radial graphic lights */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-royal-blue/[0.03] blur-3xl pointer-events-none transition-transform duration-300 ease-out z-0" 
          style={{ transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-accent/[0.02] blur-3xl pointer-events-none transition-transform duration-300 ease-out z-0" 
          style={{ transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)` }}
        />
        <SplashCursor />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-12 md:mt-20">
          <AnimatedSection direction="up" className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-deep-navy mb-6">
              Print Manufacturing Built Around Quality & Consistency
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
              From children's books and educational publishing to premium print production 
              and sustainable manufacturing, Multivista Printers combines production expertise, 
              responsible sourcing, and modern print capabilities to deliver dependable publishing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/products" size="lg" className="w-full sm:w-auto rounded-full">
                Explore Our Categories
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION - MANUFACTURING IMPACT STATISTICS */}
      <ManufacturingImpact />

      {/* SECTION - FOUNDATION OF EXCELLENCE */}
      <FoundationOfExcellence />

      {/* SECTION - GLOBAL RECOGNITION */}
      <GlobalRecognition />

      {/* SECTION - FOUNDATION PRINCIPLES */}
      <FoundationPrinciples />

      {/* SECTION - SUSTAINABILITY COMMITMENT */}
      <SustainabilityCommitment />

      {/* SECTION - PUBLISHING ECOSYSTEM */}
      <PublishingEcosystem />







      {/* SECTION 7 - PREMIUM CLOSING CTA */}
      <TheNextChapter />
    </div>
  );
}
