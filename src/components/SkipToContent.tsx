
import { useState, useEffect } from 'react';

export const SkipToContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle keyboard focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && !event.shiftKey) {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <a 
      href="#main-content"
      className={`
        fixed top-2 left-2 z-50 bg-blue-600 text-white px-4 py-2 rounded
        focus:outline-none focus:ring-2 focus:ring-blue-400
        transform transition-transform duration-200
        ${isVisible ? 'translate-y-0' : '-translate-y-20'}
      `}
      onBlur={() => setIsVisible(false)}
    >
      Skip to content
    </a>
  );
};
