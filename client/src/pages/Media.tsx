import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { blogArticles } from "@/data/blogData";

export default function Media() {
  // Get featured article (most recent)
  const featuredArticle = blogArticles[0];
  // Get remaining articles for the grid
  const gridArticles = blogArticles.slice(1);
  // Get unique categories
  const categories = Array.from(new Set(blogArticles.map(a => a.category)));

  return (
    <div className="min-h-screen bg-background" data-testid="media-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-20" data-testid="media-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">News</span> <span className="text-accent">&amp; Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, stories, and insights from Victory Farms—Kenya's 
            leading aquaculture company transforming food security across East Africa.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredArticle.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <Badge variant="secondary">{featuredArticle.category}</Badge>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredArticle.readTime} min read
                    </div>
                  </div>
                  <Button className="w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2">
              All Articles
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16" data-testid="news-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-primary">Latest</span> <span className="text-accent">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our stories of innovation, community impact, and sustainable aquaculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="news-grid">
            {gridArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col" data-testid={`news-card-${article.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      data-testid={`news-image-${article.id}`}
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" data-testid={`news-category-${article.id}`}>
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg mb-2" data-testid={`news-title-${article.id}`}>
                      {article.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-3" data-testid={`news-excerpt-${article.id}`}>
                      {article.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Media Section */}
      <section className="bg-muted/30 py-20" data-testid="media-contact-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-primary">Media</span> <span className="text-accent">Inquiries</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            For press inquiries, interview requests, or additional media resources, 
            please contact our communications team.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="p-6">
              <h3 className="font-bold text-primary mb-4">Press Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: Marketing@victoryfarmskenya.com</p>
                <p>Phone: +254 113 661982</p>
                <p>Available: Monday - Friday, 8:00 AM - 5:00 PM EAT</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-accent mb-4">Media Resources</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>High-resolution photos available upon request</p>
                <p>Executive interviews can be arranged</p>
                <p>Facility tours for media representatives</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}