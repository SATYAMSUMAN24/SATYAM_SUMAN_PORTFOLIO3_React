import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Fallback for older browsers
      if (window.pageYOffset > 0) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    } catch (error) {
      // Fallback for any scrolling issues
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <footer 
      id="footer" 
      className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Left Section - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <h3 className="text-lg font-bold text-white">Satyam Suman</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              I’m a Full Stack Developer passionate about building innovative web applications and seamless digital experiences. 
              I specialize in frontend development and combine it with data analysis to create smart, user-centric solutions that solve real-world problems.
            </p>

            {/* Social Links with better spacing */}
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-gray-400 text-sm mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { 
                    name: 'GitHub',
                    href: 'https://github.com/SATYAMSUMAN24', 
                    label: 'GitHub',
                    hoverColor: 'hover:bg-gray-900',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'X (Twitter)',
                    href: 'https://x.com/satyamsuman24', 
                    label: 'X (Twitter)',
                    hoverColor: 'hover:bg-black',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Instagram',
                    href: 'https://instagram.com/satyamsuman6349', 
                    label: 'Instagram',
                    hoverColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Facebook',
                    href: 'https://facebook.com/satyamsuman3366', 
                    label: 'Facebook',
                    hoverColor: 'hover:bg-blue-600',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'LinkedIn',
                    href: 'https://linkedin.com/in/satyamsuman2003', 
                    label: 'LinkedIn',
                    hoverColor: 'hover:bg-blue-700',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Discord',
                    href: 'https://discord.gg/satyamsuman24', 
                    label: 'Discord',
                    hoverColor: 'hover:bg-indigo-600',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Gmail',
                    href: 'mailto:satyamsuman2003@gmail.com', 
                    label: 'Gmail',
                    hoverColor: 'hover:bg-red-600',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                    )
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`min-w-[36px] min-h-[36px] w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center ${social.hoverColor} focus:bg-indigo-600 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-gray-300 hover:text-white`}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {[
                { name: 'Home', icon: '🏠', href: '/' },
                { name: 'About', icon: '👨‍💻', href: '/about' },
                { name: 'Skills', icon: '🛠️', href: '/skills' },
                { name: 'Projects', icon: '🚀', href: '/projects' },
                { name: 'Gallery', icon: '🖼️', href: '/gallery' },
                { name: 'Blog', icon: '📝', href: '/blog' },
                { name: 'Experience', icon: '💼', href: '/certificates' },
                { name: 'Contact', icon: '📧', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/50 text-sm"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" aria-label="Email">
                  <span className="text-white text-xs">📧</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:satyamsuman2003@gmail.com" 
                    className="text-gray-300 hover:text-white focus:text-white text-sm transition-colors break-all hover:underline focus:outline-none focus:underline"
                    aria-label="Send email to satyamsuman2003@gmail.com"
                  >
                    satyamsuman2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" aria-label="Location">
                  <span className="text-white text-xs">📍</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">Location</p>
                  <p className="text-gray-300 text-sm">India</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" aria-label="Education">
                  <span className="text-white text-xs">🎓</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">Education</p>
                  <p className="text-gray-300 text-sm">B.Tech Student</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-5 pt-4 border-t border-gray-700">
              <h5 className="text-sm font-semibold text-white mb-2">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 min-w-0"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 focus:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Satyam Suman. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React & Tailwind CSS • Deployed on Vercel..
              </p>
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
              {/* Policy Links - Stack on mobile, inline on larger screens */}
              <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start space-y-2 xs:space-y-0 xs:space-x-4 lg:space-x-6">
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white focus:text-white text-sm sm:text-base transition-colors hover:underline focus:outline-none focus:underline px-3 py-2 rounded-lg hover:bg-gray-800/50 w-full xs:w-auto text-center"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
                <span className="hidden xs:block text-gray-600">•</span>
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-white focus:text-white text-sm sm:text-base transition-colors hover:underline focus:outline-none focus:underline px-3 py-2 rounded-lg hover:bg-gray-800/50 w-full xs:w-auto text-center"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </a>
              </div>
              
              {/* Back to Top Button - Full width on mobile, auto on larger screens */}
              <div className="flex justify-center lg:justify-end">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center space-x-2 text-gray-400 hover:text-white focus:text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-4 py-3 sm:px-6 sm:py-2 bg-gray-800/50 hover:bg-gray-700 w-full xs:w-auto max-w-xs"
                  aria-label="Scroll to top"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span className="font-medium">Back to Top</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>🏠</span>
                <span>Home</span>
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>🚀</span>
                <span>Projects</span>
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>📧</span>
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;