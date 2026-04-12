import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from 'next/image';

export default async function DashboardPage() {
  const supabase = createClient(cookies());
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) { redirect('/login'); }
  const { data: listings } = await supabase.from('listings').select('*').eq('user_id', user.id);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold font-display mb-8">My Listings</h1>
      {listings && listings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map(listing => (
            <Card key={listing.id} className="overflow-hidden"><div className="aspect-video relative"><Image src={listing.image_urls?.[0] || 'https://placehold.co/400'} alt={listing.title} fill className="object-cover" /></div><CardHeader><CardTitle>{listing.title}</CardTitle></CardHeader><CardContent><p>Status: {listing.is_active ? 'Active' : 'Inactive'}</p></CardContent></Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">You haven't posted any listings yet.</p>
      )}
    </div>
  );
}