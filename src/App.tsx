
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import NowPlaying from "./pages/NowPlaying";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            } 
          />
          <Route 
            path="/search" 
            element={
              <MainLayout>
                <Search />
              </MainLayout>
            } 
          />
          <Route 
            path="/library" 
            element={
              <MainLayout>
                <Library />
              </MainLayout>
            } 
          />
          <Route 
            path="/now-playing" 
            element={
              <MainLayout>
                <NowPlaying />
              </MainLayout>
            } 
          />
          <Route 
            path="/now-playing/:id" 
            element={
              <MainLayout>
                <NowPlaying />
              </MainLayout>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            } 
          />
          <Route 
            path="/liked" 
            element={
              <MainLayout>
                <Library />
              </MainLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
