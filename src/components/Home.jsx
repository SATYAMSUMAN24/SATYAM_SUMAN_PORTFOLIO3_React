
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Fronted Developer and Data Analyst...";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 lg:py-40 min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Status Badge */}
              <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full animate-glow">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Available for Work
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-float">
                  Satyam Suman
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-6 font-light min-h-[3rem]">
                {typedText}<span className="animate-pulse">|</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl lg:max-w-none mb-12 leading-relaxed">
                I’m a passionate Full Stack Developer and B.Tech Computer Science Engineering graduate from BPUT. 
                With strong skills in Java, Python, web development, data analysis, and database management, I focus on building scalable, user-friendly applications and creating digital solutions that solve real-world problems. 
                I’m driven by a love for clean code, continuous learning, and impactful tech.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <Link 
                  to="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  View My Work
                </Link>

                <a 
                  href="/resume.pdf" 
                  download
                  className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { 
                    name: 'GitHub', 
                    url: 'https://github.com/SATYAMSUMAN24', 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    color: 'hover:bg-gray-900'
                  },
                  { 
                    name: 'LinkedIn', 
                    url: 'https://linkedin.com/in/satyamsuman2003', 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    color: 'hover:bg-blue-600'
                  },
                  { 
                    name: 'Email', 
                    url: 'mailto:satyamsuman2003@gmail.com', 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    color: 'hover:bg-red-500'
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 text-gray-600 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 rounded-full bg-gray-100 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="text-center order-1 lg:order-2">
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated background rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Profile container */}
                <div className="relative w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-2 shadow-2xl">
                  <img 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" 
                    src="1.png" 
                    alt="Er SATYAM SUMAN" 
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  👋
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About Me</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I’m a passionate Full Stack Developer and B.Tech Computer Science Engineering graduate from BPUT. 
              With strong skills in Java, Python, web development, data analysis, and database management, I focus on building scalable, user-friendly applications and creating digital solutions that solve real-world problems. 
              I’m driven by a love for clean code, continuous learning, and impactful tech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl sm:text-2xl shadow-lg">
                🎓
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">BTech in Computer Science & Engineering</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl sm:text-2xl shadow-lg">
                💼
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Full Stack Developer & Data Analyst</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 sm:col-span-4 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl sm:text-2xl shadow-lg">
                🚀
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Projects</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Multiple projects built</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tech Stack</h3>
            <p className="text-xl text-gray-600">Technologies I work with daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
              { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-orange-500' },
              { name: 'Python', icon: '🐍', color: 'from-green-500 to-teal-500' },
              { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-500' },
              { name: 'HTML5', icon: '🔶', color: 'from-orange-500 to-red-500' },
              { name: 'CSS3', icon: '🔷', color: 'from-blue-500 to-indigo-500' },
              { name: 'Tailwind', icon: '💨', color: 'from-teal-500 to-blue-500' },
              { name: 'Git', icon: '📝', color: 'from-gray-500 to-gray-700' }
            ].map((tech) => (
              <div key={tech.name} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <div className="text-gray-700 font-medium">{tech.name}</div>
                <div className={`h-1 w-full bg-gradient-to-r ${tech.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quick Starts</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500', icon: '🚀' },
              { number: '8+', label: 'Certifications', color: 'from-purple-500 to-pink-500', icon: '🏆' },
              { number: 'Graduated', label: '2025 B.tech CSE', color: 'from-green-500 to-teal-500', icon: '🎓' },
              { number: '3+', label: 'Years Coding', color: 'from-orange-500 to-red-500', icon: '💻' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something awesome together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
            <Link 
              to="/projects"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
