import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Twitter, Github, Linkedin, Mail } from 'lucide-react';

// Reusing consistent styles from other components
const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG = "bg-gray-950";
const LIGHT_TEXT = "text-gray-100";
const MUTED_TEXT = "text-gray-400";

const Footer = () => {
  return (
    <footer className={`${DARK_BG} border-t border-gray-700`} style={FONT_STYLE}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center">
                <Code2 className={`w-5 h-5 ${PRIMARY_ACCENT}`} />
              </div>
              <span className={`font-bold text-xl ${LIGHT_TEXT}`}>DevCommunity</span>
            </div>
            <p className={`text-sm ${MUTED_TEXT}`}>
              Connecting talented freelance developers with amazing projects worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`${MUTED_TEXT} hover:text-white transition-colors`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`${MUTED_TEXT} hover:text-white transition-colors`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className={`${MUTED_TEXT} hover:text-white transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className={`${MUTED_TEXT} hover:text-white transition-colors`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold ${LIGHT_TEXT} mb-4`}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className={`${MUTED_TEXT} hover:text-white transition-colors`}>About Us</Link></li>
              <li><Link to="/developers" className={`${MUTED_TEXT} hover:text-white transition-colors`}>Find Developers</Link></li>
              <li><Link to="/portfolio" className={`${MUTED_TEXT} hover:text-white transition-colors`}>Portfolio</Link></li>
              <li><Link to="/services" className={`${MUTED_TEXT} hover:text-white transition-colors`}>Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-semibold ${LIGHT_TEXT} mb-4`}>Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className={`${MUTED_TEXT}`}>Web Development</span></li>
              <li><span className={`${MUTED_TEXT}`}>Mobile Apps</span></li>
              <li><span className={`${MUTED_TEXT}`}>UI/UX Design</span></li>
              <li><span className={`${MUTED_TEXT}`}>Backend Development</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-semibold ${LIGHT_TEXT} mb-4`}>Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className={`${MUTED_TEXT}`}>hello@devcommunity.com</li>
              <li className={`${MUTED_TEXT}`}>+1 (555) 123-4567</li>
              <li className={`${MUTED_TEXT}`}>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 DevCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;