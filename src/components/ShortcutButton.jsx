
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShortcutButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { 
      name: 'Home', 
      path: '/', 
      icon: '🏠', 
      color: 'from-blue-500 to-indigo-500' 
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      icon: '🚀', 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: '📧', 
      color: 'from-green-500 to-teal-500' 
    },
    { 
      name: 'Skills', 
      path: '/skills', 
      icon: '💻', 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      name: 'Blog', 
      path: '/blog', 
      icon: '📝', 
      color: 'from-yellow-500 to-orange-500' 
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: '👨‍💻', 
      color: 'from-cyan-500 to-blue-500' 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Shortcut Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px] animate-scale-up">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Quick Navigation</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.name}
                to={shortcut.path}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center p-3 rounded-xl bg-gradient-to-r ${shortcut.color} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 group`}
              >
                <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {shortcut.icon}
                </span>
                <span className="text-xs font-medium">{shortcut.name}</span>
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="border-t pt-3 space-y-2">
            <button
              onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <span>⬆️</span>
              <span className="text-sm font-medium">Back to Top</span>
            </button>

            <a
              href="/resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <span>📄</span>
              <span className="text-sm font-medium">Download Resume</span>
            </a>

            <a
              href="mailto:satyamsuman2003@gmail.com"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span>✉️</span>
              <span className="text-sm font-medium">Send Email</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Shortcut Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center text-white text-xl font-bold group ${
          isOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
        }`}
        aria-label="Quick shortcuts menu"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl group-hover:rotate-12 transition-transform">⚡</span>
        )}
      </button>

      {/* Floating notification badge */}
      {!isOpen && (
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          6
        </div>
      )}
    </div>
  );
};

export default ShortcutButton;
