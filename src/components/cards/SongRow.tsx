
import { useState } from "react";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

interface SongRowProps {
  image: string;
  title: string;
  artist: string;
  duration: string;
  id?: string;
}

export default function SongRow({ image, title, artist, duration, id = "1" }: SongRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div 
      className="grid grid-cols-12 items-center py-2 px-4 rounded-md hover:bg-white/10 transition-colors group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="col-span-1 text-center">
        {isHovered ? (
          <button className="text-white">
            <Play size={16} fill="white" />
          </button>
        ) : (
          <span className="text-spotify-lightgray">{id}</span>
        )}
      </div>
      
      <div className="col-span-5 flex items-center gap-3">
        <img src={image} alt={title} className="w-10 h-10 object-cover" />
        <div>
          <Link to={`/now-playing/${id}`} className="text-white font-medium hover:underline block">{title}</Link>
          <Link to={`/artist/${id}`} className="text-spotify-lightgray text-sm hover:underline block">{artist}</Link>
        </div>
      </div>
      
      <div className="col-span-4">
        <Link to={`/album/${id}`} className="text-spotify-lightgray text-sm hover:underline">Album Name</Link>
      </div>
      
      <div className="col-span-2 flex items-center justify-end gap-4">
        <button 
          onClick={() => setIsLiked(!isLiked)} 
          className={`${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}
        >
          <Heart size={16} className={`${isLiked ? 'fill-primary-spotify text-primary-spotify' : 'text-spotify-lightgray'}`} />
        </button>
        <span className="text-spotify-lightgray text-sm">{duration}</span>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-spotify-lightgray">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}
