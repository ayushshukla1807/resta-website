"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

export default function SellPage() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert('Please log in to sell.');

    const formData = new FormData(event.currentTarget);
    const { error } = await supabase.from('listings').insert([{
      title: formData.get('title'), price: formData.get('price'), branch: formData.get('branch'),
      condition: 'USED_GOOD', listing_type: 'SELL', user_id: user.id,
    }]);

    if (error) { alert(error.message); } 
    else { router.push('/dashboard'); }
  };

  return (
    <div className="container max-w-2xl py-12">
      <h1 className="text-3xl font-bold font-display mb-8">Create a New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="title" placeholder="Item Title (e.g., 'HC Verma Physics Vol 1')" required />
        <Input name="price" type="number" placeholder="Price (₹)" required />
        <Input name="branch" placeholder="Engineering Branch (e.g., 'Computer Science')" required />
        <Button type="submit" className="w-full">Post Listing</Button>
      </form>
    </div>
  );
}