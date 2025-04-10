
import { Search, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AudioWave from "../ui/AudioWave";

export default function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === "/";
  const isSearchPage = location.pathname === "/search";
  const isNowPlaying = location.pathname.includes("/now-playing");
  
  return (
    <div className="fixed top-0 left-56 right-0 h-16 bg-neon-dark/80 backdrop-blur-md z-30 flex items-center justify-between px-8 border-b border-white/5">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={() => navigate(1)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        
        {isHomePage && (
          <h1 className="text-xl font-display font-bold gradient-text">Neon Waves</h1>
        )}
        
        {isSearchPage && (
          <div className="flex items-center gap-3">
            <Search size={20} className="text-white/70" />
            <h1 className="text-xl font-display font-medium text-white">Search</h1>
          </div>
        )}
        
        {isNowPlaying && (
          <div className="flex items-center gap-3">
            <AudioWave />
            <h1 className="text-xl font-display font-medium text-white">Now Playing</h1>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-neon-gray/30 text-white/70 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-neon-purple"></span>
        </button>
        <div className="flex items-center gap-3">
          <img 
            src="https://i.pravatar.cc/150?img=12" 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-neon-purple/30"
          />
        </div>
      </div>
    </div>
  );
}
