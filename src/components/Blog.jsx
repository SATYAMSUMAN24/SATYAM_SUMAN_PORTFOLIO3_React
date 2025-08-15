import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Building My First Portfolio with React',
      excerpt: 'Journey of creating a responsive portfolio website using React.js, Tailwind CSS, and modern web development practices. Learn about the challenges I faced and how I overcame them.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: '/Portfolio.png',
      author: 'Satyam Suman',
      tags: ['React', 'Portfolio', 'Frontend', 'Tailwind CSS'],
      featured: true,
      content: '<p>This is the full content of the portfolio article. It will include detailed steps and code snippets.</p>'
    },
    {
      id: 2,
      title: 'My College Journey at Gandhi Engineering College',
      excerpt: 'Sharing my experiences as a BTech CSE student, the projects I have worked on, and the skills I developed during my academic journey in computer science.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Personal',
      image: '/GEC1.jpg',
      author: 'Satyam Suman',
      tags: ['College', 'CSE', 'Academic', 'Personal Growth'],
      content: '<p>This is the full content of my college journey article. It will include reflections and project details.</p>'
    },
    {
      id: 3,
      title: 'Mastering Java: From Basics to Advanced Concepts',
      excerpt: 'My comprehensive guide to learning Java programming, covering OOP concepts, data structures, algorithms, and real-world project implementations.',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Programming',
      image: '/Java.png',
      author: 'Satyam Suman',
      tags: ['Java', 'Programming', 'OOP', 'Data Structures'],
      content: '<p>This is the full content of the Java mastering article. It will include code examples and explanations.</p>'
    },
    {
      id: 4,
      title: 'Frontend Development Trends in 2024',
      excerpt: 'Exploring the latest trends in frontend development, from new frameworks to design patterns that are shaping the future of web development.',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Web Development',
      image: '/Portfolio.png',
      author: 'Satyam Suman',
      tags: ['Frontend', 'Trends', 'Web Development', 'Technology'],
      content: '<p>This is the full content of the frontend trends article. It will include framework comparisons and future predictions.</p>'
    },
    {
      id: 5,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'A complete guide to creating beautiful, responsive user interfaces using Tailwind CSS. Tips, tricks, and best practices for modern web design.',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Web Development',
      image: '/GEC2.jpg',
      author: 'Satyam Suman',
      tags: ['Tailwind CSS', 'UI/UX', 'Responsive Design', 'CSS'],
      content: '<p>This is the full content of the Tailwind CSS article. It will include responsive design techniques and best practices.</p>'
    },
    {
      id: 6,
      title: 'My Learning Path in AI and Machine Learning',
      excerpt: 'Documenting my journey into artificial intelligence and machine learning, including courses taken, projects built, and key insights gained.',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Technology',
      image: '/certificate.png',
      author: 'Satyam Suman',
      tags: ['AI', 'Machine Learning', 'Python', 'Data Science'],
      content: '<p>This is the full content of the AI/ML article. It will include project details and learning resources.</p>'
    }
  ];

  const categories = ['All', 'Web Development', 'Programming', 'Personal', 'Technology'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const openArticle = (post) => {
    setSelectedArticle(post);
    setIsArticleOpen(true);
  };

  const closeArticle = () => {
    setIsArticleOpen(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights, experiences, and learnings from my journey in web development, programming, and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Featured+Post";
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full mr-3">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center mr-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">SS</span>
                      </div>
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <time dateTime={featuredPost.date} className="mr-6">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => openArticle(featuredPost)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200?text=Blog+Post";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-6">
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">SS</span>
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time dateTime={post.date} className="mr-4">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openArticle(post)}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Never Miss a Post!</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Subscribe to my newsletter and get the latest articles, tutorials, and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 500+ developers who get my weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {isArticleOpen && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SS</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{selectedArticle.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(selectedArticle.date).toLocaleDateString()} • {selectedArticle.readTime}
                  </p>
                </div>
              </div>
              <button
                onClick={closeArticle}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close article"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400?text=Article+Image";
                  }}
                />

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
                    {selectedArticle.category}
                  </span>
                  {selectedArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedArticle.title}
                </h1>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content || `
                  <p><strong>This is a preview article.</strong></p>
                  <p>${selectedArticle.excerpt}</p>
                  <p>This article is currently in development. The full content will be available soon with detailed insights, code examples, and practical tips.</p>
                  <p>Stay tuned for the complete article!</p>
                ` }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <button className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Like
                  </button>
                  <button className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
                <button
                  onClick={closeArticle}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;