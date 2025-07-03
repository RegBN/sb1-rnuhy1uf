import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {

  const handleGetStarted = () => {
    window.open('https://calendly.com/zclarity/alignment?month=2025-06', '_blank');
  };

  const handleHomeClick = () => {
    onPageChange('home');
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    // First navigate to home page if not already there
    if (currentPage !== 'home') {
      onPageChange('home');
      // Wait for page to load then scroll
      setTimeout(() => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCommunityClick = () => {
    // First navigate to home page if not already there
    if (currentPage !== 'home') {
      onPageChange('home');
      // Wait for page to load then scroll
      setTimeout(() => {
        const communitySection = document.getElementById('community-section');
        if (communitySection) {
          communitySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const communitySection = document.getElementById('community-section');
      if (communitySection) {
        communitySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBlogClick = () => {
    // First navigate to home page if not already there
    if (currentPage !== 'home') {
      onPageChange('home');
      // Wait for page to load then scroll
      setTimeout(() => {
        const linkedinSection = document.getElementById('linkedin-feed-section');
        if (linkedinSection) {
          linkedinSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const linkedinSection = document.getElementById('linkedin-feed-section');
      if (linkedinSection) {
        linkedinSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <div 
          className="cursor-pointer flex items-center space-x-3"
          onClick={handleHomeClick}
        >
          <img 
            src="/assets/9acd87a6-d4aa-42e6-9a89-8b9b54746d61-removebg-preview.png" 
            alt="Z Clarity Solutions Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Z-Clarity Solutions
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <span
            onClick={handleHomeClick}
            className={`cursor-pointer transition-all duration-300 font-semibold ${
              currentPage === 'home' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent'
            }`}
          >
            Home
          </span>
          <span
            onClick={handleAboutClick}
            className="cursor-pointer transition-all duration-300 font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
          >
            About
          </span>
          <span
            onClick={handleCommunityClick}
            className="cursor-pointer transition-all duration-300 font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
          >
            Community
          </span>
          <span
            onClick={handleBlogClick}
            className="cursor-pointer transition-all duration-300 font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
          >
            Newsletter
          </span>
        </div>
        <Button 
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
}