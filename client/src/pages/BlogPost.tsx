import { useParams, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User, Clock, Share2, ExternalLink } from "lucide-react";
import { blogArticles } from "@/data/blogData";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/media">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Media
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background" data-testid="blog-post-page">
      {/* Hero Section with Featured Image */}
      <section className="relative">
        <div className="aspect-[21/9] max-h-[500px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link href="/media">
              <Button variant="outline" size="sm" className="mb-4 bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Media
              </Button>
            </Link>
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8">
                {article.excerpt}
              </p>
              
              <div 
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {article.externalUrl && (
                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-3">
                    This article was originally published on {article.source}
                  </p>
                  <a 
                    href={article.externalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Original Article
                    </Button>
                  </a>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share */}
              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </h3>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      const url = window.location.href;
                      const text = article.title;
                      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                    }}
                  >
                    Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </Card>

              {/* Tags */}
              {article.tags && (
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">Related</span> <span className="text-accent">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">{related.category}</Badge>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{related.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-primary">Stay</span> <span className="text-accent">Updated</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Want to learn more about Victory Farms and sustainable aquaculture in Kenya?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/media">
              <Button variant="outline">
                View All Articles
              </Button>
            </Link>
            <Link href="/contact">
              <Button>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
