
import { Link } from "react-router-dom";

interface GenreCardProps {
  name: string;
  color: string;
  id?: string;
}

export default function GenreCard({ name, color, id = "1" }: GenreCardProps) {
  return (
    <Link to={`/genre/${id}`} className="block">
      <div 
        className="p-4 rounded-lg h-44 flex items-end hover:scale-105 transition-transform"
        style={{ backgroundColor: color }}
      >
        <h3 className="text-white text-2xl font-bold">{name}</h3>
      </div>
    </Link>
  );
}
