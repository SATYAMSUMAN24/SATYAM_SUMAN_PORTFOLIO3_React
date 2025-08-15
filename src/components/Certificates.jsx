
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Kalolytics Solution.',
      location: 'Remote',
      duration: '3 months ',
      type: 'Internship',
      image: 'logo.png',
      description: 'Worked on developing modern web applications using React.js, JavaScript, and responsive design principles. Gained hands-on experience with industry-standard development practices.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git','Github', 'Postgresql', 'MySql', 'Debare'],
      achievements: [
        'Developed 5+ responsive web components',
        'Improved code efficiency by 35%',
        'Collaborated with development teams',
        'Learned modern development workflows'
      ]
    },
    {
      id: 2,
      title: 'Junior Web Developer',
      company: 'Yhills Software Solution Ltd. Pvt',
      location: 'Remote',
      duration: '3 months (Jan 2024 - Jun 2024)',
      type: 'Part-time',
      image: 'logo2.png',
      description: 'Assisted in developing websites and web applications for various clients. Focused on creating clean, maintainable code and responsive user interfaces.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'MySQL'],
      achievements: [
        'Completed 8+ client projects successfully',
        'Maintained 95% client satisfaction rate',
        'Met all project deadlines',
        'Enhanced problem-solving skills'
      ]
    },
    {
      id: 3,
      title: 'Fronted  Development Project',
      company: 'Personal Learning Initiative',
      location: 'Self-Study',
      duration: 'Ongoing (2023 - Present)',
      type: 'Learning Project',
      image: 'GEC1.JPG',
      description: 'Self-directed learning in full-stack development, building various projects to enhance programming skills and understand end-to-end application development.',
      technologies: ['Java', 'React', 'Node.js', 'Express', 'MongoDB', 'Python'],
      achievements: [
        'Built 10+ full-stack applications',
        'Mastered multiple programming languages',
        'Developed strong debugging skills',
        'Created comprehensive project portfolio'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey and hands-on experience in web development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="lg:w-1/3">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Experience";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Internship' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-indigo-600 font-medium">@ {exp.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Summary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">10+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
