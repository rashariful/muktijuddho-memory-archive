
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample photo data
const photos = [
  {
    id: "photo1",
    title: "Mass Rally at Dhaka University",
    date: "March 7, 1971",
    category: "events",
    description: "Sheikh Mujibur Rahman addresses a mass rally at Dhaka University, calling for independence.",
    photographer: "Unknown",
    source: "Liberation War Museum",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80",
  },
  {
    id: "photo2",
    title: "Refugees Crossing the Border",
    date: "May 1971",
    category: "people",
    description: "Refugees fleeing to India during the Liberation War.",
    photographer: "James Roberts",
    source: "International Press Archive",
    imageUrl: "https://images.unsplash.com/photo-1580820267682-426da823b514?auto=format&fit=crop&q=80",
  },
  {
    id: "photo3",
    title: "Freedom Fighters in Training",
    date: "June 1971",
    category: "military",
    description: "Young freedom fighters receiving military training at a camp near the border.",
    photographer: "Abdul Hamid",
    source: "National Archives",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-b53601a7a6c9?auto=format&fit=crop&q=80",
  },
  {
    id: "photo4",
    title: "Destroyed Bridge in Comilla",
    date: "August 1971",
    category: "locations",
    description: "A strategic bridge destroyed during combat operations in the Comilla region.",
    photographer: "David Williams",
    source: "War Correspondents Collection",
    imageUrl: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80",
  },
  {
    id: "photo5",
    title: "Surrender Ceremony",
    date: "December 16, 1971",
    category: "events",
    description: "Pakistani forces surrendering to the joint forces of Bangladesh and India.",
    photographer: "Rashid Ahmed",
    source: "Government Archives",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
  },
  {
    id: "photo6",
    title: "Women Freedom Fighters",
    date: "July 1971",
    category: "people",
    description: "Women participating in the liberation movement in various roles.",
    photographer: "Nazma Begum",
    source: "Women's History Collection",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    id: "photo7",
    title: "Destroyed Village",
    date: "September 1971",
    category: "locations",
    description: "The aftermath of an attack on a village in the Khulna region.",
    photographer: "Michael Thompson",
    source: "International Red Cross Archives",
    imageUrl: "https://images.unsplash.com/photo-1605013343009-c16ee71f2a66?auto=format&fit=crop&q=80",
  },
  {
    id: "photo8",
    title: "Victory Celebration",
    date: "December 17, 1971",
    category: "events",
    description: "Citizens celebrating in the streets of Dhaka after victory.",
    photographer: "Farid Khan",
    source: "National Museum",
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
  },
  {
    id: "photo9",
    title: "Guerrilla Operations",
    date: "October 1971",
    category: "military",
    description: "Freedom fighters planning guerrilla operations against occupying forces.",
    photographer: "Anonymous",
    source: "Military Archives",
    imageUrl: "https://images.unsplash.com/photo-1541959833400-049d37f98cfc?auto=format&fit=crop&q=80",
  },
  {
    id: "photo10",
    title: "Refugee Camp in West Bengal",
    date: "June 1971",
    category: "people",
    description: "Conditions at a refugee camp in West Bengal, India.",
    photographer: "Sunil Das",
    source: "Indian Archives",
    imageUrl: "https://images.unsplash.com/photo-1580820267682-426da823b514?auto=format&fit=crop&q=80",
  },
  {
    id: "photo11",
    title: "International Aid Workers",
    date: "November 1971",
    category: "people",
    description: "International volunteers providing humanitarian aid to refugees.",
    photographer: "Sarah Johnson",
    source: "UNICEF Archives",
    imageUrl: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80",
  },
  {
    id: "photo12",
    title: "Dhaka University After Attack",
    date: "April 1971",
    category: "locations",
    description: "The state of Dhaka University campus after the military crackdown.",
    photographer: "Rahman Ali",
    source: "University Archives",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80",
  }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const handleOpenPhoto = (photo: (typeof photos)[0]) => {
    setSelectedPhoto(photo);
  };
  
  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };
  
  const filteredPhotos = photos.filter(photo => 
    activeCategory === "all" || photo.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="bg-archive-navy text-white py-12">
          <div className="archive-container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Photograph Collection</h1>
            <p className="text-gray-300 max-w-3xl">
              Explore our curated collection of photographs documenting key moments, people, and places 
              from the Liberation War. These visual records offer a window into Bangladesh's struggle for independence.
            </p>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 border-b border-gray-200">
          <div className="archive-container">
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-archive-paper w-full justify-start overflow-x-auto">
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="events">Historic Events</TabsTrigger>
                <TabsTrigger value="people">People</TabsTrigger>
                <TabsTrigger value="military">Military</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-12">
          <div className="archive-container">
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredPhotos.length}</span> of <span className="font-medium">{photos.length}</span> photographs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPhotos.map((photo) => (
                <div 
                  key={photo.id}
                  className="aspect-square relative overflow-hidden group bg-archive-navy cursor-pointer card-hover"
                  onClick={() => handleOpenPhoto(photo)}
                >
                  <img 
                    src={photo.imageUrl || `https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80`}
                    alt={photo.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-80 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white font-serif font-medium text-lg">{photo.title}</h3>
                    <p className="text-white/80 text-sm">{photo.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-12 bg-archive-paper">
          <div className="archive-container">
            <h2 className="font-serif text-2xl font-bold mb-8">Special Photo Collections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Collection 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-[4/3] bg-archive-navy relative">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
                    alt="Women in Liberation War"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-serif text-xl font-medium">Women in Liberation War</h3>
                    <p className="text-white/80 text-sm">42 photographs</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">
                    A collection highlighting the crucial roles women played during the Liberation War, from combat to support services.
                  </p>
                  <button className="archive-btn-outline text-sm">View Collection</button>
                </div>
              </div>
              
              {/* Collection 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-[4/3] bg-archive-navy relative">
                  <img 
                    src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80"
                    alt="Refugee Crisis"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-serif text-xl font-medium">Refugee Crisis</h3>
                    <p className="text-white/80 text-sm">38 photographs</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Documenting the mass exodus of refugees to India and the humanitarian crisis that unfolded during the conflict.
                  </p>
                  <button className="archive-btn-outline text-sm">View Collection</button>
                </div>
              </div>
              
              {/* Collection 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-[4/3] bg-archive-navy relative">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
                    alt="Victory Day"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-serif text-xl font-medium">Victory Day</h3>
                    <p className="text-white/80 text-sm">25 photographs</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Images capturing the jubilation and emotional scenes from December 16, 1971, when victory was achieved.
                  </p>
                  <button className="archive-btn-outline text-sm">View Collection</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Photo Detail Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={handleClosePhoto}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedPhoto && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 bg-archive-navy">
                <div className="relative aspect-square md:aspect-auto md:h-full">
                  <img 
                    src={selectedPhoto.imageUrl || `https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80`}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/3 p-6 max-h-[500px] overflow-y-auto">
                <h3 className="font-serif text-xl font-bold mb-2">{selectedPhoto.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{selectedPhoto.date}</p>
                
                <p className="text-gray-700 mb-6">{selectedPhoto.description}</p>
                
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Photographer:</span> {selectedPhoto.photographer}</p>
                  <p><span className="font-medium">Source:</span> {selectedPhoto.source}</p>
                  <p><span className="font-medium">Category:</span> {selectedPhoto.category.charAt(0).toUpperCase() + selectedPhoto.category.slice(1)}</p>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <button className="archive-btn-primary text-sm">
                    Download Image
                  </button>
                  <button className="archive-btn-outline text-sm">
                    Share
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Gallery;
