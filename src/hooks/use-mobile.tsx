
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if the window is mobile size
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check immediately on first render
    checkIsMobile()
    
    // Set up event listener
    window.addEventListener("resize", checkIsMobile)
    
    // Clean up the event listener
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}
