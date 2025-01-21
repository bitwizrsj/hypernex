import { TabletSmartphone, Globe, Palette, ShoppingCart, Search, Megaphone, Server, Settings } from "lucide-react";

const ServicesLayout = () => {
  // Predefined positions for services
  const services = [
    { 
      name: "App Development", 
      icon: TabletSmartphone,
      x: 20, 
      y: 40,
      delay: 0.2
    },
    { 
      name: "Website Development", 
      icon: Globe,
      x: 65, 
      y: 35,
      delay: 0.4
    },
    { 
      name: "UI/UX Design", 
      icon: Palette,
      x: 25, 
      y: 75,
      delay: 0.6
    },
    { 
      name: "E-Commerce Solutions", 
      icon: ShoppingCart,
      x: 65, 
      y: 80,
      delay: 0.8
    },
    { 
      name: "SEO Optimization", 
      icon: Search,
      x: 40, 
      y: 55,
      delay: 1.0
    },
    { 
      name: "Digital Marketing", 
      icon: Megaphone,
      x: 70, 
      y: 60,
      delay: 1.2
    },
    { 
      name: "Web Hosting", 
      icon: Server,
      x: 10, 
      y: 60,
      delay: 1.4
    },
    { 
      name: "Maintenance & Support", 
      icon: Settings,
      x: 45, 
      y: 30,
      delay: 1.6
    }
  ];

  // Generate random stars
  const stars = Array(100).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  return (
    <div className="w-full h-screen bg-gray-950 overflow-hidden relative">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="absolute top-8 p-5 text-5xl sm:text-6xl md:text-7xl text-gray-600 hover:text-gray-50 font-semibold">
        <h1>Our Services</h1>
      </div>

      {/* Services Container */}
      <div className="relative w-full h-full">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="absolute w-32 h-16 bg-gray-800/90 border border-blue-500/30 rounded-lg 
                         shadow-lg backdrop-blur-sm flex gap-2 p-2 items-center justify-center 
                         transition-all duration-500 group transform hover:scale-105"
              style={{
                left: `${service.x}%`,
                top: `${service.y}%`,
                transform: 'translate(-50%, -50%)',
                animation: `float 3s ease-in-out infinite ${service.delay}s`,
                opacity: 0,
                animationFillMode: 'forwards',
                animationName: 'fadeIn, float',
                animationDuration: '0.5s, 3s',
                animationDelay: `${service.delay}s, ${service.delay}s`,
                animationTimingFunction: 'ease-out, ease-in-out',
                animationIterationCount: '1, infinite'
              }}
            >
              <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-1 transition-colors duration-300" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-all duration-300 service-name">
                {service.name}
              </span>
            </div>
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          {services.map((service, i) => 
            services.slice(i + 1).map((otherService, j) => (
              <line
                key={`${i}-${j}`}
                x1={`${service.x}%`}
                y1={`${service.y}%`}
                x2={`${otherService.x}%`}
                y2={`${otherService.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))
          )}
        </svg>

        {/* Ambient Light Effects */}
        {services.map((service, index) => (
          <div
            key={`glow-${index}`}
            className="absolute w-48 h-48 rounded-full opacity-10"
            style={{
              left: `${service.x}%`,
              top: `${service.y}%`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .service-name {
            font-size: 0.875rem;
          }

          .group:hover .service-name {
            font-size: 0.75rem;
          }

          .group:hover .w-6 {
            width: 4rem;
          }
        }

        @media (max-width: 640px) {
          .relative {
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
          }

          .absolute {
            position: relative;
            margin: 0 10px;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            opacity: 1 !important;
            animation: none !important;
            width: 250px;
            height: auto;
          }
        }

        @media (max-width: 480px) {
          .service-name {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesLayout;
