
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedBanner from "@/components/cards/FeaturedBanner";
import AlbumCard from "@/components/cards/AlbumCard";
import ArtistCard from "@/components/cards/ArtistCard";
import SongRow from "@/components/cards/SongRow";
import CategoryTitle from "@/components/ui/CategoryTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const recentlyPlayedRef = useRef<HTMLDivElement>(null);
  const topAlbumsRef = useRef<HTMLDivElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="space-y-10">
      <FeaturedBanner 
        image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww"
        title="Vibe of the Day"
        description="Immerse yourself in soothing synth waves and cosmic melodies. Perfect for late-night coding sessions or stargazing adventures."
      />
      
      <section>
        <CategoryTitle title="Trending Songs" link="/trending" />
        <div className="bg-neon-gray/10 backdrop-blur-sm rounded-xl overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <SongRow 
              key={i}
              id={i.toString()}
              image={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${i}`}
              title={`Neon Pulse ${i}`}
              artist={`Cosmic Artist ${i}`}
              duration={`3:${i * 10}`}
            />
          ))}
        </div>
      </section>
      
      <section className="relative">
        <div className="flex items-center justify-between mb-4">
          <CategoryTitle title="Recently Played" link="/history" />
          <div className="flex gap-2">
            <button 
              onClick={() => scrollLeft(recentlyPlayedRef)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scrollRight(recentlyPlayedRef)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div 
          ref={recentlyPlayedRef}
          className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div className="snap-start" style={{ minWidth: '200px' }} key={i}>
              <AlbumCard 
                id={i.toString()}
                image={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&${i}`}
                title={`Sonic Journey ${i}`}
                artist={`Electric Artist ${i}`}
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className="relative">
        <div className="flex items-center justify-between mb-4">
          <CategoryTitle title="Top Albums" link="/albums" />
          <div className="flex gap-2">
            <button 
              onClick={() => scrollLeft(topAlbumsRef)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scrollRight(topAlbumsRef)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div 
          ref={topAlbumsRef}
          className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div className="snap-start" style={{ minWidth: '200px' }} key={i}>
              <AlbumCard 
                id={i.toString()}
                image={`https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&${i}`}
                title={`Neon Waves ${i}`}
                artist={`Cosmic Synth ${i}`}
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className="relative">
        <div className="flex items-center justify-between mb-4">
          <CategoryTitle title="Popular Artists" link="/artists" />
          <div className="flex gap-2">
            <button 
              onClick={() => scrollLeft(artistsRef)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scrollRight(artistsRef)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div 
          ref={artistsRef}
          className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div className="snap-start" style={{ minWidth: '160px' }} key={i}>
              <ArtistCard 
                id={i.toString()}
                image={`https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&${i}`}
                name={`Neon Artist ${i}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
