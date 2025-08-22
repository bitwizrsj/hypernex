import React from 'react';
import { Rocket, Sparkles, Globe, ArrowUpRight, ChevronRight } from 'lucide-react';

const DarkCareersSection = () => {
    return (
        <section
            className="relative bg-gray-950 py-32 px-6 lg:px-24 overflow-hidden z-10"
            style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 100%)',
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 opacity-40" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-2 w-2 bg-yellow-400 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s infinite`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Main Content */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Join the Future
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        Create extraordinary digital experiences with a team of visionaries and innovators
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm">
                        <Rocket className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">45+</h3>
                        <p className="text-gray-400">Active Projects</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm">
                        <Globe className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">12</h3>
                        <p className="text-gray-400">Countries</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm">
                        <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                        <p className="text-gray-400">Innovation</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        className="group relative inline-flex items-center gap-2 bg-yellow-400 text-gray-900 md:px-8 px-6 py-4 rounded-full text-lg font-medium overflow-hidden hover:bg-yellow-300 transition-colors duration-300"
                        onClick={() => window.location.href = '/careers'}
                    >
                        Explore Opportunities
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

                
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) }
                    50% { transform: translateY(-20px) }
                }
            `}</style>
        </section>
    );
};

export default DarkCareersSection;
