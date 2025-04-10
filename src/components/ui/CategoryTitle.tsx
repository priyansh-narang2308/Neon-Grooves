
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryTitleProps {
  title: string;
  link?: string;
  children?: ReactNode;
}

export default function CategoryTitle({ title, link, children }: CategoryTitleProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {link && (
        <Link to={link} className="text-spotify-lightgray hover:text-white text-sm font-semibold uppercase flex items-center gap-1 transition-colors">
          See All <ChevronRight size={16} />
        </Link>
      )}
      {children}
    </div>
  );
}
