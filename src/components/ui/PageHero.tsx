import { AnimatedSection } from "./AnimatedSection";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image: string;
}

export function PageHero({ title, breadcrumb, image }: PageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[350px] lg:h-[50vh] flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/80 to-navy-900/40 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-20 lg:px-8 text-center text-white flex flex-col items-center">
        <AnimatedSection>
          <div className="flex items-center justify-center space-x-2 text-sm font-medium tracking-wider mb-6 text-brand-blue uppercase">
            <Link to="/" className="text-white hover:text-brand-blue transition-colors">HOME</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-brand-blue">{breadcrumb}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 px-4 leading-tight text-white drop-shadow-md">
            {title}
          </h1>
        </AnimatedSection>
      </div>
    </section>
  );
}
