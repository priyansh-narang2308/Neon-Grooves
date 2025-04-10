
import { useState } from "react";
import { Search as SearchIcon, Mic, TrendingUp } from "lucide-react";
import CategoryTitle from "@/components/ui/CategoryTitle";
import GenreCard from "@/components/cards/GenreCard";
import AlbumCard from "@/components/cards/AlbumCard";
import SongRow from "@/components/cards/SongRow";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const genres = [
    { name: "Synthwave", color: "#9b87f5" },
    { name: "Lo-Fi", color: "#7E69AB" },
    { name: "Ambient", color: "#33C3F0" },
    { name: "Chillstep", color: "#1EAEDB" },
    { name: "Future Bass", color: "#D6BCFA" },
    { name: "Indie Pop", color: "#6E59A5" },
    { name: "Vaporwave", color: "#1A1F2C" },
    { name: "Retrowave", color: "#403E43" },
  ];
  
  return (
    <div className="space-y-8">
      <div className="sticky top-0 z-10 bg-neon-dark/80 pt-2 pb-4">
        <div className="relative">
          <SearchIcon size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
          <input 
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-12 rounded-full glass-effect text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Mic size={24} className="text-white/60 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
      
      {searchQuery ? (
        <div className="animate-fade-in">
          <CategoryTitle title="Top result" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1 glass-effect p-5 rounded-xl hover:border-neon-purple/30 transition-colors cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format"
                alt="Search result"
                className="w-24 h-24 rounded-full shadow-lg mb-4 border-2 border-neon-purple/20"
              />
              <h3 className="text-2xl font-bold text-white mb-1 font-display">{searchQuery}</h3>
              <p className="text-sm text-white/60 mb-4">Artist</p>
              <button className="bg-neon-purple text-black rounded-full p-2 hover:scale-105 transition-transform">
                <SearchIcon size={20} />
              </button>
            </div>
            
            <div className="col-span-3">
              <h3 className="text-xl font-bold text-white mb-4 font-display">Tracks</h3>
              <div className="space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <SongRow 
                    key={i}
                    id={i.toString()}
                    image={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${i}`}
                    title={`${searchQuery} Track ${i}`}
                    artist={`Artist ${i}`}
                    duration={`3:${i * 10}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section>
            <CategoryTitle title="Browse Genres" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {genres.map((genre, index) => (
                <GenreCard key={index} name={genre.name} color={genre.color} id={index.toString()} />
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-neon-purple" />
              <CategoryTitle title="Trending Searches" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <AlbumCard 
                  key={i}
                  id={i.toString()}
                  image={`https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&${i}`}
                  title={`Trending Artist ${i}`}
                  artist={`Trending Track ${i}`}
                />
              ))}
            </div>
          </section>
          
          <section>
            <CategoryTitle title="Made For You" />
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-white/80 mb-4">Based on your recent listening</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <AlbumCard 
                    key={i}
                    id={i.toString()}
                    image={`https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&${i}`}
                    title={`Recommendation ${i}`}
                    artist={`Similar Artist ${i}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
