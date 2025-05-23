import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Share2, Calendar, MapPin } from 'lucide-react';
import { SimplePassport } from '@/components/simple-passport';

export default function PassportPage() {
  return (
    <div className="relative bg-amber-900/50">
      <span
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: `url(/grain.webp)` }}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row">
          <div>
            <h1 className="font-medievalSharp text-3xl font-bold text-gray-100">
              Digital Passport
            </h1>
            <p className="mt-2 text-gray-300">
              Your collection of magical stamps and badges from your adventures
            </p>
          </div>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Button
              variant="outline"
              className="border-amber-200 text-amber-700"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share Passport
            </Button>
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-100/30 p-6">
          <div className="grid items-center gap-6 md:grid-cols-[200px_1fr]">
            <div className="mx-auto overflow-hidden rounded-full border-2 border-amber-200 bg-amber-100 p-2">
              <Image
                src="/baddy-icon.png?height=180&width=180"
                alt="Avatar"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h2 className="font-medievalSharp text-2xl font-bold text-amber-900">
                  Adventurer Dev Badraj
                </h2>
                <Badge className="font-medievalSharp bg-amber-700 text-amber-50">
                  Explorer
                </Badge>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col rounded-lg border border-dashed border-amber-200 bg-amber-800 p-3 text-center">
                  <span className="text-xl font-bold text-amber-400">12</span>
                  <span className="text-sm text-amber-500">Locations</span>
                </div>
                <div className="flex flex-col rounded-lg border border-dashed border-amber-200 bg-amber-800 p-3 text-center">
                  <span className="text-xl font-bold text-amber-400">5</span>
                  <span className="text-sm text-amber-500">NFTs</span>
                </div>
                <div className="flex flex-col rounded-lg border border-dashed border-amber-200 bg-amber-800 p-3 text-center">
                  <span className="text-xl font-bold text-amber-400">150</span>
                  <span className="text-sm text-amber-500">SOL Earned</span>
                </div>
                <div className="flex flex-col rounded-lg border border-dashed border-amber-200 bg-amber-800 p-3 text-center">
                  <span className="text-xl font-bold text-amber-400">3</span>
                  <span className="text-sm text-amber-500">Quests Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="stamps" className="w-full">
          <TabsList className="mb-6 border border-amber-200 bg-amber-100">
            <TabsTrigger
              value="stamps"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              Stamps
            </TabsTrigger>
            <TabsTrigger
              value="nfts"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              NFT Collection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stamps" className="mt-0">
            <SimplePassport />
          </TabsContent>

          <TabsContent value="nfts" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-amber-200 bg-amber-300/50 transition-all hover:shadow-lg"
                >
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`NFT ${i}`}
                      width={300}
                      height={300}
                      className="h-64 w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="font-medievalSharp bg-amber-700 text-amber-50">
                        {i % 3 === 0
                          ? 'Legendary'
                          : i % 2 === 0
                            ? 'Rare'
                            : 'Common'}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medievalSharp mb-1 text-lg font-bold text-amber-900">
                      Enchanted Relic #{i}
                    </h3>
                    <div className="mb-3 flex items-center text-sm text-amber-700">
                      <Calendar className="mr-1 h-4 w-4" /> Acquired: May{' '}
                      {i + 10}, 2025
                    </div>
                    <p className="mb-3 text-sm text-amber-800">
                      A mystical artifact discovered during your journey through
                      the ancient forest.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-amber-700">
                        <MapPin className="mr-1 h-4 w-4" /> Mystic Garden
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-700 text-amber-700"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
