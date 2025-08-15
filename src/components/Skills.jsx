
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgressVisible(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const codingSkills = [
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 92, experience: '3+ years' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90, experience: '2.5+ years' },
    { name: 'Java', image: 'Java.png', level: 88, experience: '3+ years' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 85, experience: '2+ years' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 85, experience: '2+ years' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 82, experience: '2+ years' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 80, experience: '1.5+ years' },
    { name: 'HTML/CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, experience: '4+ years' },
    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', level: 88, experience: '1.5+ years' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 85, experience: '3+ years' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 78, experience: '1.5+ years' },
    { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 80, experience: '2+ years' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 75, experience: '1+ years' },
    { name: 'C/C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 80, experience: '2+ years' }
  ];

  const tools = [
    { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'IntelliJ IDEA', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'Eclipse', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Vercel', image: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png' },
    { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Netlify', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' }
  ];

  const softSkills = [
    { 
      name: 'Communication', 
      image: 'communication.png', 
      description: 'Effective verbal and written communication skills',
      icon: '💬'
    },
    { 
      name: 'Problem Solving', 
      image: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png', 
      description: 'Analytical thinking and solution-oriented approach',
      icon: '🧩'
    },
    { 
      name: 'Team Work', 
      image: 'https://cdn-icons-png.flaticon.com/512/1006/1006555.png', 
      description: 'Collaborative and supportive team player',
      icon: '🤝'
    },
    { 
      name: 'Leadership', 
      image: 'https://cdn-icons-png.flaticon.com/512/1087/1087815.png', 
      description: 'Ability to guide and motivate teams effectively',
      icon: '👑'
    },
    { 
      name: 'Time Management', 
      image: 'https://cdn-icons-png.flaticon.com/512/2784/2784403.png', 
      description: 'Efficient task prioritization and deadline management',
      icon: '⏰'
    },
    { 
      name: 'Creativity', 
      image: 'https://cdn-icons-png.flaticon.com/512/3176/3176366.png', 
      description: 'Innovative thinking and creative problem-solving',
      icon: '🎨'
    }
  ];

  const courses = [
    {
      name: 'Java Programming Complete Course',
      image: 'https://i.ytimg.com/vi/yRpLlJmRo2w/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=yRpLlJmRo2w',
      description: 'Comprehensive Java programming covering OOP, collections, multithreading, and design patterns',
      instructor: 'Apna College By Shardha Khapra',
      duration: '40+ hours',
      rating: '4.9/5'
    },
    {
      name: 'Data Structures and Algorithms in Java',
      image: 'hq720.jpg',
      link: 'https://www.youtube.com/watch?v=CBYHwZcbD-s',
      description: 'Complete DSA course with Java implementation and problem-solving techniques',
      instructor: 'Code With Harry',
      duration: '50+ hours',
      rating: '4.8/5'
    },
    {
      name: 'React.js - The Complete Guide',
      image: 'https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
      description: 'Master React.js from basics to advanced concepts including hooks, context, and routing',
      instructor: 'Code With Harry',
      duration: '30 hours',
      rating: '4.8/5'
    },
    {
      name: 'Python Programming Masterclass',
      image: 'python.png',
      link: 'https://youtu.be/UrsmFxEIp5k',
      description: 'Complete Python course from beginner to advanced with real projects',
      instructor: 'Code With Harry',
      duration: '35 hours',
      rating: '4.9/5'
    },
    {
      name: 'MERN Stack Development',
      image: 'https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=7CqJlxBYj-M',
      description: 'Full MERN stack development with MongoDB, Express.js, React, and Node.js',
      instructor: 'Code With Harry',
      duration: '25 hours',
      rating: '4.8/5'
    },
    {
      name: 'Database Management with MySQL',
      image: 'https://i.ytimg.com/vi/HXV3zeQKqGY/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
      description: 'Complete MySQL course covering database design, queries, and optimization',
      instructor: 'Derek Banas',
      duration: '15 hours',
      rating: '4.7/5'
    },
    {
      name: 'Web Development Bootcamp',
      image: 'https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
      description: 'Complete web development bootcamp covering HTML, CSS, JavaScript, and frameworks',
      instructor: 'freeCodeCamp',
      duration: '40+ hours',
      rating: '4.9/5'
    },
    {
      name: 'Git & GitHub Mastery',
      image: 'https://i.ytimg.com/vi/RGOj5yH7evk/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
      description: 'Master Git version control, GitHub workflows, and collaborative development',
      instructor: 'Brad Traversy',
      duration: '8 hours',
      rating: '4.8/5'
    },
    {
      name: 'C++ Programming and OOP',
      image: 'https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
      description: 'Complete C++ programming with object-oriented programming concepts',
      instructor: 'CodeWithHarry',
      duration: '30 hours',
      rating: '4.7/5'
    }
  ];

  return (
    <div className="py-16 bg-gray-50 sm:py-20 lg:py-24 section-padding" id="skills">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 container">
        
        {/* Technical Skills Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            My <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Programming Languages & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingSkills.map((skill, index) => (
              <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="w-8 h-8 mr-3 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/32x32?text=" + skill.name.charAt(0);
                    }}
                  />
                  <div className="flex-1">
                    <h4 className="text-md font-semibold text-gray-900">{skill.name}</h4>
                    <p className="text-xs text-gray-500">{skill.experience}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar"
                      style={{
                        width: progressVisible ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Tools</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-12 h-12 mx-auto mb-3"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/48x48?text=" + tool.name.charAt(0);
                    }}
                  />
                  <h4 className="text-md font-semibold text-gray-900">{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Soft Skills & Personal Attributes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg text-center group">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Courses & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200?text=Course";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600">{course.instructor}</span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h4>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-yellow-600">⭐ {course.rating}</span>
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Course
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
