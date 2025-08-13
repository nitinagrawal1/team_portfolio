import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Users, Briefcase, Mail, Info, Home } from 'lucide-react';

// Reusing consistent styles from other components
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG_TRANSPARENT = "bg-black/80";
const LIGHT_TEXT = "text-gray-100";
const MUTED_TEXT = "text-gray-400";
const ACCENT_HOVER = "hover:text-white hover:bg-gray-800";
const ACCENT_BUTTON_GRADIENT = "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Developers', path: '/developers', icon: Users },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Services', path: '/services', icon: Code2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 ${DARK_BG_TRANSPARENT} backdrop-blur-md border-b border-gray-700 shadow-md transition-colors duration-300`}
      style={FONT_STYLE}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/30 rounded-full flex items-center justify-center">
                <Code2 className={`w-5 h-5 sm:w-6 sm:h-6 ${PRIMARY_ACCENT}`} />
              </div>
              <span className={`font-bold text-lg sm:text-xl md:text-2xl ${LIGHT_TEXT}`}>DevCommunity</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-2 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? `${PRIMARY_ACCENT} bg-purple-400/10`
                      : `${MUTED_TEXT} ${ACCENT_HOVER}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:block">{item.name}</span>
                </Link>
              );
            })}
            <button 
              className={`ml-4 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 ${ACCENT_BUTTON_GRADIENT} hover:scale-105 transform`}
            >
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? `${PRIMARY_ACCENT} bg-purple-400/10`
                      : `${MUTED_TEXT} ${ACCENT_HOVER}`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-2">
              <button 
                className={`w-full text-white font-medium py-3 px-5 rounded-full transition-all duration-300 ${ACCENT_BUTTON_GRADIENT} hover:scale-105 transform`}
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;