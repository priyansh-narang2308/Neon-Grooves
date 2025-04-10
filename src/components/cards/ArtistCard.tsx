
import { Play } from "lucide-react";

interface ArtistCardProps {
  image: string;
  name: string;
  id?: string;
}

export default function ArtistCard({ image, name, id = "1" }: ArtistCardProps) {
  return (
    <div className="album-card group">
      <div className="p-4 bg-spotify-darkgray rounded-md hover:bg-spotify-gray/50 transition-colors duration-300">
        <div className="relative">
          <img src={image} alt={name} className="w-full aspect-square object-cover rounded-full shadow-lg mb-4" />
          <div className="album-card-hover">
            <button className="bg-primary-spotify rounded-full p-3 shadow-lg hover:scale-105 transition-transform">
              <Play size={24} fill="black" className="text-black ml-1" />
            </button>
          </div>
        </div>
        <h3 className="text-white font-semibold text-center truncate">{name}</h3>
        <p className="text-spotify-lightgray text-sm mt-1 text-center truncate">Artist</p>
      </div>
    </div>
  );
}
