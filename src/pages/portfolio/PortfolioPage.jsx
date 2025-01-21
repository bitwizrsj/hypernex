import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const recentProjects = [
    {
      title: "HKFP News Platform",
      description: "Hong Kong Free Press digital news platform with mobile-first approach",
      image: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-11626.jpg",
      tags: ["React", "Mobile", "Web Design"],
      link: "" // Example live link
    },
    {
      title: "Varadise Monitoring",
      description: "Construction monitoring dashboard with real-time updates",
      image: "https://img.freepik.com/free-vector/business-landing-page-with-illustration_52683-8177.jpg",
      tags: ["Dashboard", "React", "Real-time"],
      link: ""
    },
    {
      title: "World Green Organisation",
      description: "Environmental organization platform with donation system",
      image: "https://img.freepik.com/free-psd/landing-page-template-world-environment-day-celebration_23-2150373365.jpg",
      tags: ["WordPress", "Web Design"],
      //link: "https://example.com/world-green-organisation"
    },
    {
      title: "EcoShop E-Commerce",
      description: "Sustainable fashion and goods e-commerce platform",
      image: "https://img.freepik.com/free-psd/spring-sale-discount-landing-page-template_23-2150086666.jpg",
      tags: ["E-commerce", "React", "Web Design"],
      //link: "https://example.com/ecoshop"
    },
    {
      title: "TechLabs Dashboard",
      description: "Data analytics dashboard for tech startup",
      image: "https://img.freepik.com/free-vector/landing-page-template-business_23-2148249454.jpg",
      tags: ["React", "Data", "Dashboard"],
      //link: "https://example.com/techlabs-dashboard"
    }
  ];

  const featuredPortfolio = [
    {
      title: "Anna Smith",
      description: "Personal portfolio with 3D elements",
      image: "https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149227033.jpg",
      tags: ["ThreeJS", "React", "Portfolio"],
      //link: "https://example.com/nkosi-johnson"
    },
    {
      title: "Dawn Clothing",
      description: "Fashion e-commerce with 3D product previews",
      image: "https://img.freepik.com/free-vector/business-landing-page-with-photo_52683-26368.jpg",
      tags: ["E-commerce", "ThreeJS", "React"],
      //link: "https://example.com/dawn-clothing"
    },
    {
      title: "Augmented Reality",
      description: "Interactive 3D web experiences",
      image: "https://img.freepik.com/free-vector/cartoon-banner-with-people-wearing-augmented-reality-glasses-dark_1284-27929.jpg",
      tags: ["ThreeJS", "Interactive", "Web Design"],
      //link: "https://example.com/digital-reality"
    },
    {
      title: "Virtual Fitness Studio",
      description: "Virtual 3D fitness studio for personalized workouts",
      image: "https://img.freepik.com/free-vector/sport-landing-page-with-photo_23-2148372646.jpg",
      tags: ["ThreeJS", "Web Design", "Fitness"],
      //link: "https://example.com/virtual-fitness"
    },
    {
      title: "Techie Trends Blog",
      description: "Tech blog with interactive 3D elements and animations",
      image: "https://img.freepik.com/free-psd/poetry-day-landing-page_23-2148887552.jpg",
      tags: ["Blog", "ThreeJS", "React"],
      //link: "https://example.com/techie-trends"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden" >
      {/* Background Sphere */}
      <div className="fixed right-0 top-40 w-1/2 h-screen overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Recent Projects Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-mono mb-4">Recent Projects</h2>
          <p className="text-gray-400 font-mono mb-8">
            Over the past 10 years, I have developed projects of various kinds such as Blogs, CMS, company
            websites, funding platforms, and Android+iOS apps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="flex items-center text-blue-500 hover:text-blue-400 mt-4">
                  <span className="mr-2">View Live</span> 
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="animate-pulse"
                  >
                    <path d="M4 12l1.41 1.41L10 8.83V20h2V8.83l4.59 4.58L20 12l-8-8-8 8z"></path>
                  </motion.svg>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Portfolio Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-mono mb-4">Featured Portfolio</h2>
          <p className="text-gray-400 font-mono mb-8">
            I designed and developed these showcase projects with Figma, Spline, React, and ThreeJS in 2024.
            Various 3D elements/scenes are tailor-made to create more absorbing user experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="flex items-center text-blue-500 hover:text-blue-400 mt-4">
                  <span className="mr-2">View Live</span> 
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="animate-pulse"
                  >
                    <path d="M4 12l1.41 1.41L10 8.83V20h2V8.83l4.59 4.58L20 12l-8-8-8 8z"></path>
                  </motion.svg>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ThreeJS Explorations Section */}
        <section>
          <h2 className="text-2xl font-mono mb-4">ThreeJS Explorations</h2>
          <p className="text-gray-400 font-mono mb-8">
            I love to create interesting and beautiful 3D scenes in my free time. Click to view the live demos!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 cursor-pointer overflow-hidden"
            >
              <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-colors p-6 flex items-end">
                <h3 className="text-xl font-semibold">Abstract Waves</h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 cursor-pointer overflow-hidden"
            >
              <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-colors p-6 flex items-end">
                <h3 className="text-xl font-semibold">Galaxy Simulation</h3>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
