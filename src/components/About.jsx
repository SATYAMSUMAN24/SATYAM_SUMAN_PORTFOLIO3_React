
import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 sm:py-20 lg:py-24 section-padding" id="about">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            About <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate BTech CSE student with a strong foundation in programming and web development
          </p>
        </div>
        
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <p className="text-lg leading-relaxed text-gray-700">
              I am <span className="font-semibold text-gray-900">Satyam Suman</span>, I’m a Computer Science Engineering graduate from BPUT, passionate about Data Science and Full Stack Development. Skilled in Python, Java, and the MERN stack, I build scalable web applications and data-driven solutions that solve real-world problems.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span>
                My Achievements
              </h3>
              <div className="grid gap-4">
                {[
                  { icon: '🚀', text: 'Built 10+ projects In Web Development' },
                  { icon: '☕', text: 'Java programming and OOP expertise' },
                  { icon: '🐍', text: 'Python development and data science projects' },
                  { icon: '🌐', text: 'Full Stack web development specialist' },
                  { icon: '🎯', text: 'Strong problem-solving and algorithmic thinking' },
                  { icon: '📚', text: 'Active GitHub contributor and continuous learner' }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-colors">
                    <span className="text-2xl mr-4">{achievement.icon}</span>
                    <span className="text-gray-700 font-medium">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎓</span>
                My Education Journey
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-4 border-indigo-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900">BTech Computer Science Engineering</h4>
                    <p className="text-indigo-600 font-medium">Gandhi Engineering College, Bhubaneswar</p>
                    <p className="text-gray-600">Graduate (2021-2025)</p>
                    <p className="text-sm text-gray-700 mt-2">Specializing in Computer Science & Engineering</p>
                  </div>
                </div>
                
                <div className="relative pl-6 border-l-4 border-purple-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900">Class 12th (Higher Secondary)</h4>
                    <p className="text-purple-600 font-medium">Science Stream (PCM)</p>
                    <p className="text-gray-600">2020 - 2021</p>
                    <p className="text-sm text-gray-700 mt-2">Completed with Physics, Chemistry, Mathematics focusing on analytical and problem-solving skills.</p>
                  </div>
                </div>

                <div className="relative pl-6 border-l-4 border-green-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900">Class 10th (Secondary)</h4>
                    <p className="text-green-600 font-medium">CBSE Board</p>
                    <p className="text-gray-600">2018 - 2020</p>
                    <p className="text-sm text-gray-700 mt-2">Strong foundation in mathematics and science, developing logical thinking and problem-solving abilities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎨</span>
                My Hobbies & Interests
              </h3>
              <div className="grid gap-4">
                {[
                  { icon: '📸', text: 'Photography - Capturing campus moments and memories' },
                  { icon: '💻', text: 'Coding - Building innovative web applications' },
                  { icon: '🔧', text: 'Learning new technologies and frameworks' },
                  { icon: '📖', text: 'Reading tech blogs and articles' },
                  { icon: '🏁', text: 'Participating in coding competitions' },
                  { icon: '♟️', text: 'Playing chess and strategic games' }
                ].map((hobby, index) => (
                  <div key={index} className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors">
                    <span className="text-2xl mr-4">{hobby.icon}</span>
                    <span className="text-gray-700 font-medium">{hobby.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="relative">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img 
                  className="w-80 h-96 object-cover rounded-2xl shadow-lg" 
                  src="2.png" 
                  alt="About Me - SATYAM SUMAN" 
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl animate-bounce">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl animate-bounce" style={{animationDelay: '1s'}}>
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="absolute top-1/4 -left-8 bg-white rounded-xl p-3 shadow-xl animate-bounce" style={{animationDelay: '2s'}}>
                  <span className="text-2xl">⚛️</span>
                </div>
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl">
                  <div className="px-8 py-6 text-center">
                    <span className="block mt-1 text-sm font-semibold">Er SATYAM SUMAN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
