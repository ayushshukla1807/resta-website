import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export const revalidate = 60;

export default async function HomePage() {
  const supabase = createClient(cookies());
  const { data: listings } = await supabase.from('listings').select('*').eq('is_active', true).order('created_at', { ascending: false }).limit(12);

  return (
    <div className="container py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-4">The Engineer's Marketplace</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Buy, sell, and rent books, notes, and equipment from students in your college.</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings?.map(listing => (
          <Card key={listing.id} className="overflow-hidden group flex flex-col">
            <div className="aspect-square relative"><Image src={listing.image_urls?.[0] || 'https://placehold.co/400'} alt={listing.title} fill className="object-cover group-hover:scale-105 transition-transform" /></div>
            <CardHeader className="flex-grow"><CardTitle className="line-clamp-2 text-lg">{listing.title}</CardTitle><p className="text-primary font-bold text-xl">₹{listing.price}</p></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{listing.branch}</p></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}