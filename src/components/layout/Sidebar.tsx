
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Library, Heart, Plus, ChevronLeft, ChevronRight, Music, Headphones } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <aside className={`bg-black/40 backdrop-blur-lg h-screen ${collapsed ? 'w-20' : 'w-56'} flex flex-col transition-all duration-300 border-r border-white/5 fixed left-0 top-0 z-40`}>
      <div className="flex justify-between items-center p-6">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Headphones size={24} className="text-neon-purple" />
            <span className="text-xl font-bold font-display gradient-text">Neon Waves</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="text-white/70 hover:text-white transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="mt-6 px-3 flex-1">
        <ul className="space-y-2">
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <Home size={24} />
              {!collapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/search" className={`nav-link ${isActive('/search') ? 'active' : ''}`}>
              <Search size={24} />
              {!collapsed && <span>Search</span>}
            </Link>
          </li>
          <li>
            <Link to="/library" className={`nav-link ${isActive('/library') ? 'active' : ''}`}>
              <Library size={24} />
              {!collapsed && <span>Your Library</span>}
            </Link>
          </li>
          <li>
            <Link to="/liked" className={`nav-link ${isActive('/liked') ? 'active' : ''}`}>
              <Heart size={24} />
              {!collapsed && <span>Liked Songs</span>}
            </Link>
          </li>
        </ul>
        
        {!collapsed && (
          <>
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs uppercase font-semibold text-white/60 mb-4">Playlists</div>
              <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Plus size={20} className="bg-white/20 text-white p-1 rounded-sm" />
                <span>Create Playlist</span>
              </button>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer transition-colors">
                  <Music size={16} className="text-neon-purple" />
                  <span>Midnight Vibes</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer transition-colors">
                  <Music size={16} className="text-neon-blue" />
                  <span>Workout Flow</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer transition-colors">
                  <Music size={16} className="text-neon-lightpurple" />
                  <span>Focus Zone</span>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
      
      <div className="mt-auto p-4">
        <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
          <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-8 h-8 rounded-full border border-white/10" />
          {!collapsed && <span>Profile</span>}
        </Link>
      </div>
    </aside>
  );
}
