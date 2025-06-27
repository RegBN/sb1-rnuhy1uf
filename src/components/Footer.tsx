import React from 'react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const handleNavigation = (page: string) => {
    if (onPageChange) {
      if (page === 'newsletter') {
        // Navigate to home page first, then scroll to newsletter section
        onPageChange('home');
        setTimeout(() => {
          const linkedinSection = document.getElementById('linkedin-feed-section');
          if (linkedinSection) {
            linkedinSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (page === 'about') {
        // Navigate to home page first, then scroll to about section (Truth Alone, Triumphs)
        onPageChange('home');
        setTimeout(() => {
          const aboutSection = document.getElementById('about-section');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (page === 'community') {
        // Navigate to home page first, then scroll to community section (What We Offer)
        onPageChange('home');
        setTimeout(() => {
          const communitySection = document.getElementById('community-section');
          if (communitySection) {
            communitySection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        onPageChange(page);
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full px-4 relative z-10">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
          {[
            { id: 'about', label: 'About' },
            { id: 'community', label: 'What We Offer' },
            { id: 'newsletter', label: 'Newsletter' }
          ].map((item) => (
            <div key={item.id} className="group">
              <button
                onClick={() => handleNavigation(item.id)}
                className="w-full flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 min-h-[80px] md:min-h-[100px]"
              >
                <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 text-center">
                  {item.label}
                </h3>
              </button>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
              <span>|</span>
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Terms of Service
              </span>
              <span>|</span>
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Contact Us
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Z Clarity Solutions. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                *Results based on client surveys and case studies. Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}