import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <div className="bg-white">
      <PageHero 
        title="Let's Discuss Your Publishing Requirements" 
        breadcrumb="CONTACT US"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" 
      />

      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <SectionHeader title="Contact Info" />
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-brand-blue mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-navy-900">Head Office & Facility</h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    123 Print House Avenue,<br/>Publishing District, 10001<br/>Industrial Area
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-brand-blue mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-navy-900">Phone</h4>
                  <p className="text-gray-600 mt-1">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-brand-blue mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-navy-900">Email</h4>
                  <p className="text-gray-600 mt-1">info@multivista.com<br/>sales@multivista.com</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
               {/* Map Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                 [Google Maps Integration]
               </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <div className="bg-brand-light p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Send an Enquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company / Publisher</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-2">Requirement Type</label>
                  <select id="requirement" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow bg-white">
                    <option>Hardcover Books</option>
                    <option>Softcover Books</option>
                    <option>Children's Books</option>
                    <option>Commercial Printing</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"></textarea>
                </div>
                
                <Button type="submit" className="w-full">Submit Enquiry</Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
