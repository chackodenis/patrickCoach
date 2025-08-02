
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SkipToContent } from "@/components/SkipToContent";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Gallery from "@/components/Gallery";
import Index from "./pages/Index";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import NewBlog from "./pages/NewBlog";
import Talks from "./pages/Talks";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import NewspaperCoverage from "./pages/NewspaperCoverage";
import './utils/exportData'; // Import for browser console access

const queryClient = new QueryClient();

// This component wraps the app content and applies the scroll to top behavior
const AppContent = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100" data-id="app-content">
      <SkipToContent />
      <Navigation />
      <Toaster />
      <Sonner />
      <main id="main-content" className="flex-1" data-id="main-content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/newspaper-coverage" element={<NewspaperCoverage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
