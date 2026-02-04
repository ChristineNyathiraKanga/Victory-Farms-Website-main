import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Leaf, 
  DollarSign, 
  Fish,
  Plane,
  TreePine,
  Baby,
  Handshake,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "wouter";

export default function Impact() {
  const impactPillars = [
    {
      id: 1,
      icon: Users,
      title: "Community Engagement & Shared Value",
      subtitle: "Through HEAP",
      color: "primary",
      description: "Strong communities are at the heart of Victory Farms' impact. Through our Homa Bay Extensive Aquaponics Programme (HEAP), we partner with local landowners and smallholder farmers to unlock new, reliable income streams while strengthening rural economies.",
      highlights: [
        "Victory Farms installs and manages fish broodstock ponds on under-utilized land",
        "Participating landowners earn monthly royalties from harvested tilapia eggs",
        "Integrated aquaponics solutions use nutrient-rich water to irrigate crops",
        "Turning idle land into a dependable source of household income",
        "Building financial stability and shared economic opportunity"
      ],
      imagePlaceholder: "HEAP Program - Community fish ponds"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Innovation & Sector Transformation",
      subtitle: "Pioneering Aquaculture Technology",
      color: "accent",
      description: "Innovation drives everything we do at Victory Farms. We constantly explore game-changing technologies that make our operations more efficient, more resilient, and more impactful—from data-driven production systems to next-generation aquaculture practices.",
      highlights: [
        "Drone-based egg transportation program for tilapia eggs",
        "Over 80% of egg yields transported by drone",
        "Replaces long, slow road journeys from remote areas",
        "One of the first commercial fish egg delivery systems",
        "Reduces emissions while strengthening supply reliability"
      ],
      imagePlaceholder: "Drone Technology - Egg transportation"
    },
    {
      id: 3,
      icon: Leaf,
      title: "Environmental Stewardship & Biodiversity",
      subtitle: "Sustainable Operations",
      color: "primary",
      description: "At Victory Farms, sustainability is central to how we operate. Through our tree planting initiatives and introduction of novel, environmentally resilient crops, we actively create carbon sinks that help offset emissions while restoring local ecosystems.",
      highlights: [
        "Tree planting initiatives creating carbon sinks",
        "Introduction of environmentally resilient crops",
        "Promoting biodiversity with habitats for native flora and fauna",
        "Enriching soils and enhancing water retention",
        "Combining aquaculture with regenerative land use practices"
      ],
      imagePlaceholder: "Environmental Initiatives - Tree planting"
    },
    {
      id: 4,
      icon: DollarSign,
      title: "Economic Empowerment & Inclusive Livelihoods",
      subtitle: "Mama Samaki Network",
      color: "accent",
      description: "We create shared economic opportunities along the fish value chain. Through our Mama Samaki network, small-scale traders—especially women—gain sustainable income while distributing nutritious fish to local communities.",
      highlights: [
        "Mama Samaki network empowers small-scale traders",
        "Focus on women entrepreneurs in the fish trade",
        "Training and mentorship programs to strengthen businesses",
        "Sustainable income distribution models",
        "Enabling families to grow financially and thrive"
      ],
      imagePlaceholder: "Mama Samaki Network - Women traders"
    },
    {
      id: 5,
      icon: Heart,
      title: "Addressing Malnutrition",
      subtitle: "Through Affordable Protein Access",
      color: "primary",
      description: "In Kenya, 1 in 5 children under five is stunted, largely due to inadequate access to affordable, high-quality protein during early childhood. Victory Tilapia offers one of the most cost-effective animal protein sources available.",
      highlights: [
        "Significantly more affordable than chicken or beef",
        "Accessible to low-income households at scale",
        "Essential protein and micronutrient needs met consistently",
        "Supporting healthier growth outcomes",
        "Strengthening diets during the critical first 1,000 days of life"
      ],
      imagePlaceholder: "Nutrition Impact - Families with children"
    }
  ];

  const impactStats = [
    { value: "1 in 5", label: "Children under 5 stunted in Kenya", icon: Baby },
    { value: "80%+", label: "Egg yields transported by drone", icon: Plane },
    { value: "1000s", label: "Families supported through HEAP", icon: Handshake },
    { value: "20,000", label: "Mama Samaki traders empowered", icon: Fish }
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="impact-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="mr-2 h-4 w-4" />
              Our Impact
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-primary">Five Pillars</span> <span className="text-accent">of</span>
              <br />
              <span className="text-accent">Sustainable</span> <span className="text-primary">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Victory Farms, our impact is built on five interconnected pillars—empowering communities, 
              pioneering innovation, protecting the environment, creating economic opportunity, and expanding 
              access to affordable, nutritious protein—together driving sustainable growth for people, ecosystems, 
              and the regional food system.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 1: Community Engagement & HEAP */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Users className="mr-2 h-4 w-4" />
                Pillar 1
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-primary">Community Engagement</span>
                <br />
                <span className="text-accent">& Shared Value Through HEAP</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Strong communities are at the heart of Victory Farms' impact. Through our Homa Bay 
                Extensive Aquaponics Programme (HEAP), we partner with local landowners and smallholder 
                farmers to unlock new, reliable income streams while strengthening rural economies.
              </p>
              
              <div className="space-y-4">
                {impactPillars[0].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Image Placeholder</p>
                  <p className="text-sm text-muted-foreground">HEAP Program - Community fish ponds</p>
                </div>
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-xl bg-background max-w-xs hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Monthly Royalties</p>
                    <p className="text-sm text-muted-foreground">From harvested tilapia eggs</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Innovation & Sector Transformation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Plane className="h-16 w-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Image Placeholder</p>
                  <p className="text-sm text-muted-foreground">Drone Technology - Egg transportation</p>
                </div>
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -right-6 p-4 shadow-xl bg-background max-w-xs hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">80%+ By Drone</p>
                    <p className="text-sm text-muted-foreground">Of egg yields transported</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Lightbulb className="mr-2 h-4 w-4" />
                Pillar 2
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-accent">Innovation</span>
                <br />
                <span className="text-primary">& Sector Transformation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Innovation drives everything we do at Victory Farms. We constantly explore game-changing 
                technologies that make our operations more efficient, more resilient, and more impactful—from 
                data-driven production systems to next-generation aquaculture practices.
              </p>
              
              <div className="bg-accent/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-accent mb-3">Drone-Based Egg Transportation</h3>
                <p className="text-muted-foreground">
                  A standout breakthrough where advanced drones carry tilapia eggs from smallholder partner 
                  ponds to our core hatchery. This technology replaces long, slow road journeys and allows 
                  us to collect eggs from remote areas—pioneering one of the first commercial fish egg 
                  delivery systems.
                </p>
              </div>

              <div className="space-y-3">
                {impactPillars[1].highlights.slice(0, 3).map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Environmental Stewardship */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Leaf className="mr-2 h-4 w-4" />
                Pillar 3
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-primary">Environmental Stewardship</span>
                <br />
                <span className="text-accent">& Biodiversity</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Victory Farms, sustainability is central to how we operate. Through our tree planting 
                initiatives and introduction of novel, environmentally resilient crops, we actively create 
                carbon sinks that help offset emissions while restoring local ecosystems.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 text-center bg-primary/5">
                  <TreePine className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-foreground">Tree Planting</p>
                  <p className="text-sm text-muted-foreground">Carbon sinks</p>
                </Card>
                <Card className="p-4 text-center bg-accent/5">
                  <Leaf className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="font-medium text-foreground">Biodiversity</p>
                  <p className="text-sm text-muted-foreground">Native habitats</p>
                </Card>
              </div>
              
              <div className="space-y-4">
                {impactPillars[2].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <TreePine className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Image Placeholder</p>
                  <p className="text-sm text-muted-foreground">Environmental Initiatives - Tree planting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Economic Empowerment */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="h-16 w-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Image Placeholder</p>
                  <p className="text-sm text-muted-foreground">Mama Samaki Network - Women traders</p>
                </div>
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -right-6 p-4 shadow-xl bg-background max-w-xs hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Women Empowered</p>
                    <p className="text-sm text-muted-foreground">Through Mama Samaki</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <DollarSign className="mr-2 h-4 w-4" />
                Pillar 4
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-accent">Economic Empowerment</span>
                <br />
                <span className="text-primary">& Inclusive Livelihoods</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We create shared economic opportunities along the fish value chain. Through our Mama Samaki 
                network, small-scale traders—especially women—gain sustainable income while distributing 
                nutritious fish to local communities.
              </p>
              
              <div className="bg-accent/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-accent mb-3">Mama Samaki Network</h3>
                <p className="text-muted-foreground">
                  Our training and mentorship programs strengthen their businesses, enabling families 
                  to grow financially and thrive. By focusing on women entrepreneurs, we create 
                  sustainable livelihoods that benefit entire communities.
                </p>
              </div>

              <div className="space-y-4">
                {impactPillars[3].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 5: Addressing Malnutrition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Heart className="mr-2 h-4 w-4" />
                Pillar 5
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-primary">Addressing Malnutrition</span>
                <br />
                <span className="text-accent">Through Affordable Protein Access</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In Kenya, 1 in 5 children under five is stunted, largely due to inadequate access to 
                affordable, high-quality protein during early childhood. Victory Tilapia offers one of 
                the most cost-effective animal protein sources available—significantly more affordable 
                than chicken or beef—making it accessible to low-income households at scale.
              </p>

              <div className="bg-primary/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">The First 1,000 Days</h3>
                <p className="text-muted-foreground">
                  By expanding access to affordable tilapia, Victory Farms enables families to meet 
                  children's essential protein and micronutrient needs more consistently, strengthening 
                  diets during the critical first 1,000 days of life and supporting healthier growth outcomes.
                </p>
              </div>
              
              <div className="space-y-4">
                {impactPillars[4].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Baby className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Image Placeholder</p>
                  <p className="text-sm text-muted-foreground">Nutrition Impact - Families with children</p>
                </div>
              </div>
              {/* Stats Card */}
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-xl bg-background max-w-xs hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">1 in 5 Children</p>
                    <p className="text-sm text-muted-foreground">Under 5 stunted in Kenya</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-accent">Our Five Pillars</span> <span className="text-primary">Working Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each pillar of our impact strategy reinforces the others, creating a holistic approach 
              to sustainable development in East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {impactPillars.map((pillar) => (
              <Card key={pillar.id} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{pillar.id}</div>
                  <CardTitle className="text-sm leading-tight">{pillar.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join our Mission to provide affordable Protein
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with Victory Farms to bring affordable tilapia across Kenyan households-Join Victory in Feeding Families
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-partner-with-us"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
