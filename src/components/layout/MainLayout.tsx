
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MiniPlayer from "./MiniPlayer";
import TopNav from "./TopNav";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="dark h-screen bg-gradient-to-br from-neon-dark to-black overflow-hidden">
      <Sidebar />
      <TopNav />
      <main className="ml-56 pt-16 pb-24 px-6 md:px-8 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="animate-fade-in max-w-[1800px] mx-auto">
          {children}
        </div>
      </main>
      <MiniPlayer />
    </div>
  );
}
