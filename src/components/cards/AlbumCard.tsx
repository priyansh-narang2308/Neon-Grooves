
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface AlbumCardProps {
  image: string;
  title: string;
  artist: string;
  id?: string;
  onClick?: () => void;
}

export default function AlbumCard({ image, title, artist, id = "1", onClick }: AlbumCardProps) {
  // If onClick is provided, we'll use a div instead of a Link
  const CardWrapper = onClick ? 
    ({ children }: { children: React.ReactNode }) => (
      <div className="album-card group cursor-pointer" onClick={onClick}>
        {children}
      </div>
    ) : 
    ({ children }: { children: React.ReactNode }) => (
      <Link to={`/now-playing/${id}`} className="album-card group">
        {children}
      </Link>
    );

  return (
    <CardWrapper>
      <div className="p-4 bg-spotify-darkgray rounded-md hover:bg-spotify-gray/50 transition-colors duration-300">
        <div className="relative">
          <img src={image} alt={title} className="w-full aspect-square object-cover rounded-md shadow-lg mb-4" />
          <div className="album-card-hover">
            <button className="bg-primary-spotify rounded-full p-3 shadow-lg hover:scale-105 transition-transform">
              <Play size={24} fill="black" className="text-black ml-1" />
            </button>
          </div>
        </div>
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-spotify-lightgray text-sm mt-1 truncate">{artist}</p>
      </div>
    </CardWrapper>
  );
}
