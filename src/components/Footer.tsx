import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-bold text-2xl mb-4" tabIndex={0}>Dr. Patrick Rajkumar</h2>
            <p className="text-gray-300 mb-6 max-w-md" tabIndex={0}>
              Coach of the Indian Blind Cricket Team, motivational speaker, and mentor dedicated to transforming lives through sports and inspiration.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/coach_patrickrajkumar/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100011404370273" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook profile"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/patrick-rajkumar-3a7bb7100/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-300" tabIndex={0}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-300" tabIndex={0}>Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <a 
                  href="mailto:patrickcoach72@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  patrickcoach72@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <a 
                  href="tel:+919742198935" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 9742198935
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400" tabIndex={0}>
            &copy; {new Date().getFullYear()} Dr. Patrick Rajkumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
