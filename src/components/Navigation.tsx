
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ui/theme-toggle";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);



  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`transition-colors hover:text-blue-500 ${
        isActive(to) 
          ? 'font-medium text-blue-500' 
          : (isScrolled || !isHomePage || isMenuOpen) ? 'text-gray-700 dark:text-gray-300' : 'text-white'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || !isHomePage
          ? "bg-white dark:bg-gray-900 shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo isScrolled={isScrolled || isMenuOpen || !isHomePage} />
          
          {isMobile ? (
            <>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                
                <button 
                  onClick={toggleMenu} 
                  className={`focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors ${
                    isScrolled || isMenuOpen || !isHomePage ? "text-gray-800 dark:text-gray-200" : "text-white"
                  }`}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
              
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl">
                  <div className="flex flex-col p-6 space-y-4">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/videos">Videos</NavLink>
                    <NavLink to="/newspaper-coverage">News Coverage</NavLink>
                    <NavLink to="/services">Community Impact</NavLink>
                    <NavLink to="/talks">Book a Talk</NavLink>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center gap-8">
              <div className="flex gap-8">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/videos">Videos</NavLink>
                <NavLink to="/newspaper-coverage">News Coverage</NavLink>
                <NavLink to="/services">Community Impact</NavLink>
                <NavLink to="/talks">Book a Talk</NavLink>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
