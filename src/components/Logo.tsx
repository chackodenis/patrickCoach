
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <Link 
      to="/" 
      className={`font-bold text-2xl flex items-center gap-2 transition-colors duration-300 ${
        isScrolled ? "text-blue-600" : "text-white"
      }`}
      aria-label="Dr. Pat - Home"
    >
      <div className={`flex items-center gap-1 px-3 py-1.5 rounded-md border-2 ${
        isScrolled ? "border-blue-600 text-blue-600" : "border-white text-white"
      }`}>
        <span className="font-bold">Dr. Pat</span>
      </div>
      <div className="flex items-center gap-1">
        <GraduationCap className={`w-5 h-5 ${
          isScrolled ? "text-blue-600" : "text-white"
        }`} />
      </div>
    </Link>
  );
};
