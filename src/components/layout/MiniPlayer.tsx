
import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, ListMusic } from "lucide-react";
import { Link } from "react-router-dom";

export default function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/60 h-20 border-t border-white/5 px-4 z-50 glass-effect">
      <div className="flex items-center justify-between h-full max-w-screen-2xl mx-auto">
        <Link to="/now-playing" className="flex items-center gap-4 w-1/4">
          <div className="relative w-14 h-14 rounded-md overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" 
              alt="Album cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play size={20} className="text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-white font-medium hover:underline">Neon Dreams</div>
            <div className="text-white/60 text-sm hover:underline">Midnight Groove</div>
          </div>
          <button 
            onClick={() => setIsLiked(!isLiked)} 
            className="ml-4"
          >
            <Heart size={20} className={`${isLiked ? 'fill-neon-purple text-neon-purple' : 'text-white/60'} hover:scale-110 transition-all`} />
          </button>
        </Link>
        
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-neon-purple rounded-full p-2 hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-black ml-0.5" />}
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-xs text-white/60">1:23</span>
            <div className="relative flex-1 h-1 bg-white/20 rounded-full group cursor-pointer">
              <div className="absolute h-full w-1/3 bg-neon-purple rounded-full group-hover:bg-neon-blue transition-colors"></div>
            </div>
            <span className="text-xs text-white/60">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-4 w-1/4">
          <button className="text-white/60 hover:text-white transition-colors">
            <ListMusic size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Volume2 size={20} className="text-white/60" />
            <div className="relative w-24 h-1 bg-white/20 rounded-full group cursor-pointer">
              <div className="absolute h-full w-3/4 bg-white/60 rounded-full group-hover:bg-neon-purple transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
