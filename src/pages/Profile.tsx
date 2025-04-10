
import { useState } from "react";
import { Sun, Moon, Edit, LogOut, User, Settings, Bell, Music } from "lucide-react";

export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex flex-col items-center">
        <div className="relative mb-4">
          <img 
            src="https://i.pravatar.cc/150?img=12" 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover border-4 border-neon-purple"
          />
          <button className="absolute bottom-0 right-0 bg-neon-purple text-black p-2 rounded-full hover:scale-110 transition-transform">
            <Edit size={16} />
          </button>
        </div>
        <h1 className="text-3xl font-bold text-white font-display">Alex Johnson</h1>
        <p className="text-white/60 mt-1">@alexjohnson</p>
        
        <div className="flex gap-6 mt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-white">247</p>
            <p className="text-sm text-white/60">Following</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-white">1.2K</p>
            <p className="text-sm text-white/60">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-white">45</p>
            <p className="text-sm text-white/60">Playlists</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="glass-effect p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-neon-gray/30 p-3 rounded-full">
                <User size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Account</h3>
                <p className="text-sm text-white/60">Manage your account details</p>
              </div>
            </div>
            <button className="text-white/60 hover:text-white">
              <Edit size={20} />
            </button>
          </div>
        </div>
        
        <div className="glass-effect p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-neon-gray/30 p-3 rounded-full">
                <Bell size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Notifications</h3>
                <p className="text-sm text-white/60">Manage your notifications</p>
              </div>
            </div>
            <button className="text-white/60 hover:text-white">
              <Settings size={20} />
            </button>
          </div>
        </div>
        
        <div className="glass-effect p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-neon-gray/30 p-3 rounded-full">
                <Music size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Audio Quality</h3>
                <p className="text-sm text-white/60">Manage sound settings</p>
              </div>
            </div>
            <button className="text-white/60 hover:text-white">
              <Settings size={20} />
            </button>
          </div>
        </div>
        
        <div className="glass-effect p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-neon-gray/30 p-3 rounded-full">
                {isDarkMode ? <Moon size={20} className="text-white" /> : <Sun size={20} className="text-white" />}
              </div>
              <div>
                <h3 className="text-white font-medium">Display Mode</h3>
                <p className="text-sm text-white/60">Switch between light and dark modes</p>
              </div>
            </div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-12 h-7 flex items-center bg-neon-gray/30 rounded-full px-1 transition-colors relative"
            >
              <span 
                className={`absolute h-5 w-5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-neon-purple translate-x-5' : 'bg-white translate-x-0'}`}
              ></span>
            </button>
          </div>
        </div>
        
        <button className="w-full glass-effect hover:bg-red-600/20 text-red-400 font-medium py-3 rounded-xl mt-6 flex items-center justify-center gap-2 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
