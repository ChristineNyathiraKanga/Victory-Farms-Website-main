
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
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <section className="w-full max-w-lg text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/media">
            <Button className="mx-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Media
            </Button>
          </Link>
        </section>
      </main>
    );
  }

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background flex flex-col" data-testid="blog-post-page">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="aspect-[21/9] max-h-[400px] sm:max-h-[500px] w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 pb-8">
            <Link href="/media">
              <Button variant="outline" size="sm" className="mb-4 bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Media
              </Button>
            </Link>
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
              <span className="flex items-center"><User className="w-4 h-4 mr-2" />{article.author}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="flex-1 w-full py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12">
          {/* Main Article */}
          <article className="flex-1 min-w-0">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              {article.excerpt}
            </p>
            <div
              className="text-foreground leading-relaxed space-y-6 prose prose-lg max-w-none"
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
          <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-8">
            {/* Share */}
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  aria-label="Share on Twitter"
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
                  aria-label="Share on LinkedIn"
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
                  aria-label="Copy link"
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
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-8">
              <span className="text-primary">Related</span> <span className="text-accent">Articles</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
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
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
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
    </main>
  );
}
