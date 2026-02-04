import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Smartphone, MessageCircle, ArrowRight, CookingPot } from "lucide-react";
import BranchMap from "@/components/BranchMap";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background" data-testid="contact-page">
      {/* Hero Section - Eye-catching */}
      <section className="relative py-1 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center space-y-4 sm:space-y-6">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CookingPot className="mr-2 h-4 w-4" />
              From Lake to Plate
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold" data-testid="contact-title">
              <span className="text-accent">Connect</span> <span className="text-primary">With Us</span>
            </h1>
          </div>
        </div>
      </section>

            {/* Contact Methods Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="group bg-white dark:bg-slate-950 border border-muted rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Phone</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p><span className="font-semibold text-foreground">General:</span> +0116930330</p>
                <p><span className="font-semibold text-foreground">Sales:</span> +0116930331</p>
                <p><span className="font-semibold text-foreground">Customer Service:</span> +0116930332</p>
              </div>
              <a href="tel:+0116930330" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Call Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Sales */}
            <div className="group bg-white dark:bg-slate-950 border border-muted rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Mail className="text-accent h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Sales Email</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For orders and wholesale pricing
              </p>
              <a href="mailto:customerd@victoryfarmskenya.com" className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Email Sales <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Official */}
            <div className="group bg-white dark:bg-slate-950 border border-muted rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Official Matters</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Partnership & business inquiries
              </p>
              <a href="mailto:info@victoryfarmskenya.com" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Email Here <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Hours */}
            <div className="group bg-white dark:bg-slate-950 border border-muted rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Clock className="text-accent h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Business Hours</h3>
              <div className="space-y-1 text-sm text-muted-foreground mb-4">
                <p><span className="font-semibold text-foreground">Mon-Fri:</span> 8:00 AM - 6:00 PM</p>
                <p><span className="font-semibold text-foreground">Saturday:</span> 8:00 AM - 4:00 PM</p>
                <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* USSD Quick Access CTA - HERO SECTION */}
      <section className="py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl overflow-hidden shadow-xl">
            
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-white space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">Instant Access</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Find Branches Near You
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
                  Dial <span className="font-bold text-lg">*617*13#</span> to instantly access our branch locations, operating hours, and direct contact information on any phone - no internet required.
                </p>
                <div className="pt-2">
                  <p className="text-white/80 text-xs sm:text-sm font-medium">Works on all networks • Zero cost • Instant results</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 sm:p-8 text-center">
                  <div className="text-white/90 text-xs sm:text-sm font-semibold mb-3">DIAL</div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-mono tracking-wider mb-4">
                    *617*13#
                  </div>
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                    onClick={() => window.location.href = 'tel:*617*13#'}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Dial Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Address Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                <span className="text-primary"> Our</span> <span className="text-accent">Address</span>
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Main Office</h3>
                    <p className="text-muted-foreground">
                      Katko Complex<br />
                      Old Mombasa Road<br />
                      Warehouse 33 & 34<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <Button className="mt-6" onClick={() => window.open('https://maps.google.com/?q=Katko+Complex+Old+Mombasa+Road+Nairobi', '_blank')}>
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Maps
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl h-64 flex items-center justify-center border border-primary/30">
                <p className="text-muted-foreground text-center"> map*</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent to-primary rounded-2xl p-8 sm:p-12 text-white shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Need Bulk Orders or Custom Processing?</h3>
            <p className="text-white/90 mb-6 text-base sm:text-lg leading-relaxed">
              Our sales team specializes in wholesale pricing, bulk buying, and custom processing solutions tailored to your business needs.
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              data-testid="button-sales-team"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
