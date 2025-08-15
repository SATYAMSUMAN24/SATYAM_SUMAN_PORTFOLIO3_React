import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: "Yhills Internship",
      image: "c2.png",
      category: "Certificates",
      description: "My achievement certificate from YHILS for completing AI and Machine Learning course, showcasing my dedication to emerging technologies."
    },
    {
      id: 2,
      title: "DSA With Java",
      image: "c1.png",
      category: "Certificates",
      description: "Certificate from a 3months intensive communication skills training program that enhanced my professional presentation abilities."
    },
    {
      id: 3,
      title: "Gandhi Engineering College",
      image: "GEC1.jpg",
      category: "College",
      description: "The iconic main building of Gandhi Engineering College, Bhubaneswar - my alma mater where I'm pursuing BTech in CSE."
    },
    {
      id: 4,
      title: "College Event",
      image: "GEC2.jpg",
      category: "Events",
      description: "Memorable moments from our annual technical fest and cultural events, fostering innovation and creativity among students."
    },
    {
      id: 5,
      title: "Campus Life",  
      image: "GEC3.jpg",
      category: "College",
      description: "Beautiful glimpses of campus life showcasing the vibrant environment and modern infrastructure of our college."
    },
    {
      id: 6,
      title: "Portfolio Project",
      image: "Portfolio.png",
      category: "Projects",
      description: "Screenshot of my responsive portfolio website built with React and Tailwind CSS, demonstrating my frontend development skills."
    },
    {
      id: 7,
      title: "Profile Picture",
      image: "s2.jpg",
      category: "Personal",
      description: "My professional headshot used across platforms, reflecting confidence and approachability in the tech industry."
    },
    {
      id: 8,
      title: "About Me Photo",
      image: "s1.jpg",
      category: "Personal",
      description: "A candid photo that captures my personality - passionate about technology and always eager to learn new things."
    }
  ];

  const categories = ['All', 'Certificates', 'College', 'Events', 'Projects', 'Personal'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            My <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            A visual journey through my achievements, college life, and special moments
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-hover group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg"
              onClick={() => openLightbox(item)}
            >
              <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=Image";
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex px-3 py-1 text-xs font-semibold text-white bg-indigo-600/80 backdrop-blur-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <img
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                src={selectedImage.image}
                alt={selectedImage.title}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 text-lg">{selectedImage.description}</p>
                <span className="inline-flex px-3 py-1 text-sm font-medium text-white bg-indigo-600/80 backdrop-blur-sm rounded-full mt-3">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Gallery Statistics</h3>
            <p className="text-gray-600">Visual journey through my achievements and memories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-1">{galleryItems.filter(i => i.category === 'Certificates').length}</div>
              <div className="text-gray-600 font-medium">Certificates</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🏫</span>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">{galleryItems.filter(i => i.category === 'College').length}</div>
              <div className="text-gray-600 font-medium">College Photos</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <div className="text-3xl font-bold text-pink-600 mb-1">{galleryItems.filter(i => i.category === 'Events').length}</div>
              <div className="text-gray-600 font-medium">Event Photos</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">💻</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">{galleryItems.filter(i => i.category === 'Projects').length}</div>
              <div className="text-gray-600 font-medium">Project Screenshots</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;