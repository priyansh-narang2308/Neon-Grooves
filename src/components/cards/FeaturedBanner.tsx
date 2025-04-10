
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedBannerProps {
  image: string;
  title: string;
  description: string;
  id?: string;
}

export default function FeaturedBanner({ image, title, description, id = "1" }: FeaturedBannerProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div 
        className="w-full h-96 bg-cover bg-center p-8 flex items-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${image})`,
        }}
      >
        <div className="w-full flex justify-between items-end">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <p className="text-spotify-lightgray mb-6">{description}</p>
            <div className="flex items-center gap-4">
              <Link 
                to={`/now-playing/${id}`}
                className="bg-primary-spotify text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Play size={20} fill="black" />
                Play Now
              </Link>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Save to Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
