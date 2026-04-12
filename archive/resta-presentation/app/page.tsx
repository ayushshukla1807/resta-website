import { MOCK_CATEGORIES, MOCK_RESOURCES } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="relative text-center py-32 px-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Your Ultimate <span className="text-primary">Resource Station</span></h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">Discover curated notes, video lectures, and mock tests to accelerate your learning journey.</p>
          <Button asChild size="lg" className="text-lg"><Link href="/"><Search className="mr-2 h-5 w-5" /> Explore All Resources</Link></Button>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold font-display">Browse by <span className="text-primary">Discipline</span></h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MOCK_CATEGORIES.map((cat) => (
              <Link key={cat.slug} href="/">
                <Card className="bg-secondary/50 hover:bg-secondary transition-colors text-center p-6"><div className="text-5xl mb-4">{cat.icon}</div><h3 className="font-bold text-lg">{cat.name}</h3></Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold font-display">Featured <span className="text-primary">Resources</span></h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_RESOURCES.map((resource) => (
              <Card key={resource.id} className="overflow-hidden bg-secondary/50 group">
                <div className="aspect-video relative"><Image src={resource.imageUrl} alt={resource.title} fill className="object-cover group-hover:scale-105 transition-transform"/><Badge className="absolute top-4 right-4">{resource.type}</Badge></div>
                <CardHeader><CardTitle>{resource.title}</CardTitle><p className="text-sm text-muted-foreground">{resource.category}</p></CardHeader>
                <CardContent><Button asChild variant="outline" className="w-full"><Link href="/">View Details <ArrowRight className="ml-2 h-4 w-4"/></Link></Button></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
