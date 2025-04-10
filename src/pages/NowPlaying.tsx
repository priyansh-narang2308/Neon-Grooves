
import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat, MoreHorizontal, ListMusic } from "lucide-react";
import AudioWave from "@/components/ui/AudioWave";

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(30);
  
  // Simulate playing with progressing time
  useEffect(() => {
    if (isPlaying && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 0.5, 100));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, progress]);
  
  const formatTime = (percent: number) => {
    const totalSeconds = 220; // 3:40 in seconds
    const currentSeconds = Math.floor((percent / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="min-h-screen -mt-16 -mx-8 px-8 py-24 bg-gradient-to-b from-neon-darkpurple/30 to-neon-dark bg-blend-overlay">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-5/12">
          <div className="relative group">
            <div className="vinyl-record bg-gradient-to-br from-neon-gray to-black">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format" 
                alt="Album cover" 
                className={`w-full aspect-square object-cover rounded-full ${isPlaying ? 'animate-rotate-vinyl' : ''}`}
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              />
            </div>
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-neon-purple rounded-full p-4 shadow-xl hover:scale-105 transition-transform"
              >
                {isPlaying ? 
                  <Pause size={32} fill="black" className="text-black" /> : 
                  <Play size={32} fill="black" className="text-black ml-1" />
                }
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 text-center md:text-left">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs text-white py-1 px-2 bg-white/10 rounded-full">PLAYING FROM ALBUM</span>
            <span className="text-xs text-white py-1 px-2 bg-white/10 rounded-full">NEON FANTASY</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-2">Neon Dreams</h1>
          <p className="text-xl text-white/70 mb-8 font-medium">Midnight Groove</p>
          
          {isPlaying && (
            <div className="flex justify-center md:justify-start mb-8">
              <AudioWave />
            </div>
          )}
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-12">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-neon-purple rounded-full p-4 hover:scale-105 transition-transform"
            >
              {isPlaying ? 
                <Pause size={24} className="text-black" /> : 
                <Play size={24} className="text-black ml-1" />
              }
            </button>
            
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className="text-3xl"
            >
              <Heart size={28} className={`${isLiked ? 'fill-neon-purple text-neon-purple' : 'text-white/60'} hover:scale-110 transition-all`} />
            </button>
            
            <button className="text-white/60 hover:text-white transition-colors">
              <ListMusic size={28} />
            </button>
            
            <button className="text-white/60 hover:text-white transition-colors">
              <MoreHorizontal size={28} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <button className="text-white/60 hover:text-white transition-colors">
                <Shuffle size={20} />
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                <SkipBack size={20} />
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                <SkipForward size={20} />
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                <Repeat size={20} />
              </button>
            </div>
            
            <div className="w-full flex items-center gap-3">
              <span className="text-xs text-white/60">{formatTime(progress)}</span>
              <div className="relative flex-1 h-1 bg-white/20 rounded-full cursor-pointer group">
                <div 
                  className="absolute h-full bg-neon-purple group-hover:bg-neon-blue transition-colors rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-white/60">3:40</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Volume2 size={20} className="text-white/60" />
              <div className="relative w-full max-w-xs h-1 bg-white/20 rounded-full cursor-pointer group">
                <div className="absolute h-full w-3/4 bg-white/40 group-hover:bg-neon-purple transition-colors rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-4 glass-effect">
            <h3 className="text-lg font-medium text-white mb-2">Up Next</h3>
            <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format" 
                alt="Next song" 
                className="w-10 h-10 rounded-md object-cover"
              />
              <div>
                <p className="text-white text-sm font-medium">Crystal Echoes</p>
                <p className="text-white/60 text-xs">Midnight Groove</p>
              </div>
              <div className="ml-auto text-xs text-white/60">3:22</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
