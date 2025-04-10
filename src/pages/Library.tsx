
import { useState } from "react";
import { Grid3X3, List, Clock, Filter, ChevronDown, Music, Disc, Mic2, Play } from "lucide-react";
import CategoryTitle from "@/components/ui/CategoryTitle";
import AlbumCard from "@/components/cards/AlbumCard";
import SongRow from "@/components/cards/SongRow";
import ArtistCard from "@/components/cards/ArtistCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AudioWave from "@/components/ui/AudioWave";

export default function Library() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'playlists' | 'albums' | 'artists' | 'liked'>('playlists');
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  
  // Playlist data
  const playlists = [
    { id: "1", title: "Midnight Vibes", songs: 10, image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&1" },
    { id: "2", title: "Workout Flow", songs: 10, image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&2" },
    { id: "3", title: "Focus Zone", songs: 10, image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&3" },
    { id: "4", title: "Chill Afternoon", songs: 10, image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&4" },
  ];
  
  // Artist data
  const artists = [
    { id: "1", name: "The Neon Lights", genre: "Electronic", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&1" },
    { id: "2", name: "Midnight Runners", genre: "Hip Hop", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&2" },
    { id: "3", name: "Luna Soul", genre: "R&B", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&3" },
  ];
  
  // Generate custom songs for each playlist
  const getPlaylistSongs = (playlistId: string) => {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return [];
    
    const songs = [];
    
    // Generate 10 songs with names related to playlist
    if (playlist.title === "Midnight Vibes") {
      songs.push(
        { id: `${playlistId}-1`, title: "Moonlit Shadows", artist: "The Neon Lights", album: "After Hours", duration: "3:24", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-1` },
        { id: `${playlistId}-2`, title: "Twilight Dreams", artist: "Luna Soul", album: "Night Sessions", duration: "4:16", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-2` },
        { id: `${playlistId}-3`, title: "Night Whispers", artist: "Midnight Runners", album: "Urban Echoes", duration: "3:51", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-3` },
        { id: `${playlistId}-4`, title: "Dark Horizon", artist: "The Neon Lights", album: "After Hours", duration: "3:07", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-4` },
        { id: `${playlistId}-5`, title: "Starry Skies", artist: "Luna Soul", album: "Night Sessions", duration: "4:42", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-5` },
        { id: `${playlistId}-6`, title: "Urban Nightlife", artist: "Midnight Runners", album: "Urban Echoes", duration: "3:33", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-6` },
        { id: `${playlistId}-7`, title: "Midnight Serenade", artist: "The Neon Lights", album: "After Hours", duration: "3:19", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-7` },
        { id: `${playlistId}-8`, title: "Night Drive", artist: "Luna Soul", album: "Night Sessions", duration: "4:08", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-8` },
        { id: `${playlistId}-9`, title: "After Hours", artist: "Midnight Runners", album: "Urban Echoes", duration: "3:36", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-9` },
        { id: `${playlistId}-10`, title: "Velvet Moon", artist: "The Neon Lights", album: "After Hours", duration: "3:52", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-10` }
      );
    } else if (playlist.title === "Workout Flow") {
      songs.push(
        { id: `${playlistId}-1`, title: "Power Up", artist: "The Neon Lights", album: "Energy Boost", duration: "2:56", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-1` },
        { id: `${playlistId}-2`, title: "Push The Limit", artist: "Midnight Runners", album: "Marathon", duration: "3:22", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-2` },
        { id: `${playlistId}-3`, title: "Fast Lane", artist: "Luna Soul", album: "Runner's High", duration: "2:48", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-3` },
        { id: `${playlistId}-4`, title: "Heart Pumping", artist: "The Neon Lights", album: "Energy Boost", duration: "3:15", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-4` },
        { id: `${playlistId}-5`, title: "Never Quit", artist: "Midnight Runners", album: "Marathon", duration: "3:44", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-5` },
        { id: `${playlistId}-6`, title: "Sprint", artist: "Luna Soul", album: "Runner's High", duration: "2:37", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-6` },
        { id: `${playlistId}-7`, title: "Endorphin Rush", artist: "The Neon Lights", album: "Energy Boost", duration: "3:29", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-7` },
        { id: `${playlistId}-8`, title: "One More Rep", artist: "Midnight Runners", album: "Marathon", duration: "3:12", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-8` },
        { id: `${playlistId}-9`, title: "Peak Performance", artist: "Luna Soul", album: "Runner's High", duration: "2:53", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-9` },
        { id: `${playlistId}-10`, title: "Final Stretch", artist: "The Neon Lights", album: "Energy Boost", duration: "3:38", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-10` }
      );
    } else if (playlist.title === "Focus Zone") {
      songs.push(
        { id: `${playlistId}-1`, title: "Deep Concentration", artist: "Luna Soul", album: "Mindful State", duration: "4:17", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-1` },
        { id: `${playlistId}-2`, title: "Clarity", artist: "The Neon Lights", album: "Thought Space", duration: "3:49", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-2` },
        { id: `${playlistId}-3`, title: "Mind Flow", artist: "Midnight Runners", album: "Deep Work", duration: "4:32", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-3` },
        { id: `${playlistId}-4`, title: "Zen Mode", artist: "Luna Soul", album: "Mindful State", duration: "4:05", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-4` },
        { id: `${playlistId}-5`, title: "Thought Train", artist: "The Neon Lights", album: "Thought Space", duration: "3:27", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-5` },
        { id: `${playlistId}-6`, title: "Brain Waves", artist: "Midnight Runners", album: "Deep Work", duration: "4:21", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-6` },
        { id: `${playlistId}-7`, title: "Pure Focus", artist: "Luna Soul", album: "Mindful State", duration: "3:55", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-7` },
        { id: `${playlistId}-8`, title: "Mental Clarity", artist: "The Neon Lights", album: "Thought Space", duration: "4:12", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-8` },
        { id: `${playlistId}-9`, title: "Deep Thought", artist: "Midnight Runners", album: "Deep Work", duration: "3:42", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-9` },
        { id: `${playlistId}-10`, title: "Concentration", artist: "Luna Soul", album: "Mindful State", duration: "4:27", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-10` }
      );
    } else if (playlist.title === "Chill Afternoon") {
      songs.push(
        { id: `${playlistId}-1`, title: "Lazy Sunday", artist: "Luna Soul", album: "Easy Living", duration: "3:58", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-1` },
        { id: `${playlistId}-2`, title: "Afternoon Delight", artist: "The Neon Lights", album: "Daybreak", duration: "3:35", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-2` },
        { id: `${playlistId}-3`, title: "Sunset Vibes", artist: "Midnight Runners", album: "Golden Hour", duration: "4:19", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-3` },
        { id: `${playlistId}-4`, title: "Easy Going", artist: "Luna Soul", album: "Easy Living", duration: "3:46", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-4` },
        { id: `${playlistId}-5`, title: "Weekend Mood", artist: "The Neon Lights", album: "Daybreak", duration: "3:24", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-5` },
        { id: `${playlistId}-6`, title: "Golden Hour", artist: "Midnight Runners", album: "Golden Hour", duration: "4:02", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-6` },
        { id: `${playlistId}-7`, title: "Relaxation", artist: "Luna Soul", album: "Easy Living", duration: "3:51", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-7` },
        { id: `${playlistId}-8`, title: "Gentle Sun", artist: "The Neon Lights", album: "Daybreak", duration: "3:39", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-8` },
        { id: `${playlistId}-9`, title: "Warm Breeze", artist: "Midnight Runners", album: "Golden Hour", duration: "4:11", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-9` },
        { id: `${playlistId}-10`, title: "Take It Slow", artist: "Luna Soul", album: "Easy Living", duration: "3:33", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-10` }
      );
    } else {
      // Generic songs for any other playlist
      return [...Array(10)].map((_, index) => ({
        id: `${playlistId}-${index + 1}`,
        title: `${playlist.title} Song ${index + 1}`,
        artist: `${index % 3 === 0 ? "The Neon Lights" : index % 3 === 1 ? "Midnight Runners" : "Luna Soul"}`,
        album: `${playlist.title} Album`,
        duration: `${Math.floor(Math.random() * 2) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&${playlistId}-${index}`
      }));
    }
    
    return songs;
  };
  
  // Generate 5 songs for an artist
  const getArtistSongs = (artistId: string) => {
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return [];
    
    const songs = [];
    
    if (artist.name === "The Neon Lights") {
      songs.push(
        { id: `${artistId}-1`, title: "Digital Dreams", artist: artist.name, album: "Neon City", duration: "3:27", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-1` },
        { id: `${artistId}-2`, title: "Electric Soul", artist: artist.name, album: "After Hours", duration: "4:02", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-2` },
        { id: `${artistId}-3`, title: "Neon Boulevard", artist: artist.name, album: "Neon City", duration: "3:44", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-3` },
        { id: `${artistId}-4`, title: "Synthetic Hearts", artist: artist.name, album: "Energy Boost", duration: "3:19", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-4` },
        { id: `${artistId}-5`, title: "Crystal Waves", artist: artist.name, album: "Thought Space", duration: "4:15", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-5` }
      );
    } else if (artist.name === "Midnight Runners") {
      songs.push(
        { id: `${artistId}-1`, title: "Night Sprint", artist: artist.name, album: "Urban Echoes", duration: "3:12", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-1` },
        { id: `${artistId}-2`, title: "Midnight Express", artist: artist.name, album: "Marathon", duration: "3:36", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-2` },
        { id: `${artistId}-3`, title: "Urban Rhythm", artist: artist.name, album: "Urban Echoes", duration: "4:21", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-3` },
        { id: `${artistId}-4`, title: "Concrete Jungle", artist: artist.name, album: "Deep Work", duration: "3:53", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-4` },
        { id: `${artistId}-5`, title: "City Pulse", artist: artist.name, album: "Golden Hour", duration: "4:05", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-5` }
      );
    } else if (artist.name === "Luna Soul") {
      songs.push(
        { id: `${artistId}-1`, title: "Lunar Whispers", artist: artist.name, album: "Night Sessions", duration: "4:28", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-1` },
        { id: `${artistId}-2`, title: "Soul Searching", artist: artist.name, album: "Mindful State", duration: "3:51", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-2` },
        { id: `${artistId}-3`, title: "Ethereal Presence", artist: artist.name, album: "Easy Living", duration: "4:17", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-3` },
        { id: `${artistId}-4`, title: "Crescent Melodies", artist: artist.name, album: "Night Sessions", duration: "3:39", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-4` },
        { id: `${artistId}-5`, title: "Moonlit Path", artist: artist.name, album: "Runner's High", duration: "4:08", image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-5` }
      );
    } else {
      // Generic songs for any other artist
      return [...Array(5)].map((_, index) => ({
        id: `${artistId}-${index + 1}`,
        title: `${artist.name} Hit ${index + 1}`,
        artist: artist.name,
        album: `${artist.name} Album ${Math.floor(Math.random() * 3) + 1}`,
        duration: `${Math.floor(Math.random() * 2) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&artist-${artistId}-${index}`
      }));
    }
    
    return songs;
  };
  
  const goBackToPlaylists = () => {
    setSelectedPlaylist(null);
  };
  
  const goBackToArtists = () => {
    setSelectedArtist(null);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white font-display">Your Library</h1>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-neon-gray/30 text-white' : 'text-white/60 hover:text-white'}`}
          >
            <Grid3X3 size={20} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-neon-gray/30 text-white' : 'text-white/60 hover:text-white'}`}
          >
            <List size={20} />
          </button>
          <button className="p-2 rounded-md text-white/60 hover:text-white">
            <Filter size={20} />
          </button>
          <button className="flex items-center gap-1 p-2 rounded-md text-white/60 hover:text-white">
            <span className="text-sm font-medium">Recent</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
      
      <div className="border-b border-white/10">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('playlists')}
            className={`py-3 px-4 relative text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'playlists' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            <Music size={16} />
            Playlists
            {activeTab === 'playlists' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-neon-purple rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('albums')}
            className={`py-3 px-4 relative text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'albums' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            <Disc size={16} />
            Albums
            {activeTab === 'albums' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-neon-purple rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('artists')}
            className={`py-3 px-4 relative text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'artists' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            <Mic2 size={16} />
            Artists
            {activeTab === 'artists' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-neon-purple rounded-full"></span>
            )}
          </button>
        </div>
      </div>
      
      {activeTab === 'playlists' && (
        <>
          {selectedPlaylist ? (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={goBackToPlaylists} 
                  className="text-white/70 hover:text-white text-sm font-medium"
                >
                  ← Back to Playlists
                </button>
                <h2 className="text-2xl font-bold text-white">
                  {playlists.find(p => p.id === selectedPlaylist)?.title}
                </h2>
              </div>
              
              <div className="glass-effect overflow-hidden rounded-md">
                <div className="grid grid-cols-12 items-center py-2 px-4 border-b border-white/10 text-xs uppercase font-semibold text-white/60">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">TITLE</div>
                  <div className="col-span-4">ALBUM</div>
                  <div className="col-span-2 flex justify-end">
                    <Clock size={16} />
                  </div>
                </div>
                
                {getPlaylistSongs(selectedPlaylist).map((song, index) => (
                  <SongRow 
                    key={song.id}
                    id={(index + 1).toString()}
                    image={song.image}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6' : ''}`}>
              {viewMode === 'grid' ? (
                <>
                  {playlists.map((playlist) => (
                    <AlbumCard 
                      key={playlist.id}
                      id={playlist.id}
                      image={playlist.image}
                      title={playlist.title}
                      artist={`${playlist.songs} songs`}
                      onClick={() => setSelectedPlaylist(playlist.id)}
                    />
                  ))}
                </>
              ) : (
                <div className="glass-effect overflow-hidden rounded-md">
                  <div className="grid grid-cols-12 items-center py-2 px-4 border-b border-white/10 text-xs uppercase font-semibold text-white/60">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-5">TITLE</div>
                    <div className="col-span-4">SONGS</div>
                    <div className="col-span-2 flex justify-end">
                      <Clock size={16} />
                    </div>
                  </div>
                  
                  {playlists.map((playlist, index) => (
                    <div 
                      key={playlist.id}
                      className="grid grid-cols-12 items-center py-4 px-4 rounded-md hover:bg-white/10 transition-colors cursor-pointer group"
                      onClick={() => setSelectedPlaylist(playlist.id)}
                    >
                      <div className="col-span-1 text-center text-spotify-lightgray">{index + 1}</div>
                      <div className="col-span-5 flex items-center gap-3">
                        <img src={playlist.image} alt={playlist.title} className="w-12 h-12 object-cover rounded-md" />
                        <div className="text-white font-medium">{playlist.title}</div>
                      </div>
                      <div className="col-span-4 text-spotify-lightgray">{playlist.songs} songs</div>
                      <div className="col-span-2 flex items-center justify-end">
                        <button className="bg-neon-purple rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play size={16} fill="black" className="text-black ml-0.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
      
      {activeTab === 'albums' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <AlbumCard 
              key={i}
              id={i.toString()}
              image={`https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&${i + 100}`}
              title={`Album ${i}`}
              artist={`Artist ${i}`}
            />
          ))}
        </div>
      )}
      
      {activeTab === 'artists' && (
        <>
          {selectedArtist ? (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={goBackToArtists} 
                  className="text-white/70 hover:text-white text-sm font-medium"
                >
                  ← Back to Artists
                </button>
                <h2 className="text-2xl font-bold text-white">
                  {artists.find(a => a.id === selectedArtist)?.name}
                </h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Top Songs</h3>
                <div className="glass-effect overflow-hidden rounded-md">
                  <div className="grid grid-cols-12 items-center py-2 px-4 border-b border-white/10 text-xs uppercase font-semibold text-white/60">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-5">TITLE</div>
                    <div className="col-span-4">ALBUM</div>
                    <div className="col-span-2 flex justify-end">
                      <Clock size={16} />
                    </div>
                  </div>
                  
                  {getArtistSongs(selectedArtist).map((song, index) => (
                    <SongRow 
                      key={song.id}
                      id={(index + 1).toString()}
                      image={song.image}
                      title={song.title}
                      artist={song.artist}
                      duration={song.duration}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Albums</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[1, 2, 3].map((i) => (
                    <AlbumCard 
                      key={i}
                      id={`${selectedArtist}-album-${i}`}
                      image={`https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&artist-${selectedArtist}-album-${i}`}
                      title={`${artists.find(a => a.id === selectedArtist)?.name} Album ${i}`}
                      artist={artists.find(a => a.id === selectedArtist)?.name || ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {artists.map((artist) => (
                <div 
                  key={artist.id} 
                  onClick={() => setSelectedArtist(artist.id)}
                  className="cursor-pointer"
                >
                  <ArtistCard 
                    id={artist.id}
                    image={artist.image}
                    name={artist.name}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
