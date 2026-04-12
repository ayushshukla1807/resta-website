import { MOCK_LISTINGS } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="container py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-4">The Engineer's Marketplace</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Buy, sell, and rent books, notes, and equipment from students at your college.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_LISTINGS.map(listing => (
            <Card key={listing.id} className="overflow-hidden group flex flex-col">
                <div className="aspect-square relative bg-secondary">
                    <img src={listing.imageUrl} alt={listing.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                </div>
                <CardHeader className="flex-grow">
                    <CardTitle className="line-clamp-2 text-lg">{listing.title}</CardTitle>
                    <p className="text-primary font-bold text-xl">{listing.price > 0 ? `₹${listing.price}` : 'Free'}</p>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{listing.branch}</p>
                    <Button variant="secondary" className="w-full">View Details</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
