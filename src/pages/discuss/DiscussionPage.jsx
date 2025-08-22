import React, { useRef } from 'react';
import {
    Send,
    Upload,
    Clock,
    Phone,
    Mail
} from 'lucide-react';

const ProjectDiscussion = () => {
    const formRef = useRef(null);

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6 lg:px-24 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Let's Discuss Your Project
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Share your vision with us, and we'll help bring it to life. Tell us about your project needs, goals, and timeline.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-colors">
                            <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span>+1 307-213-1361</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span>info@hypernextechnologies.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                    <span>Response time: 24 hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-colors">
                            <h3 className="text-xl font-semibold mb-4">Available Times</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Monday - Friday</p>
                                <p>9:00 AM - 6:00 PM EST</p>
                            </div>
                        </div>
                    </div>

                    {/* Project Form */}
                    <form ref={formRef} className="lg:col-span-2 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white/10 border border-white/10 focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white/10 border border-white/10 focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Project Type</label>
                            <select className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10">
                                <option value="">Select project type</option>
                                <option value="website">Website Development</option>
                                <option value="ecommerce">E-Commerce Platform</option>
                                <option value="mobile">Mobile Application</option>
                                <option value="custom">Custom Software</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Project Description</label>
                            <textarea 
                                className="w-full px-4 py-3 bg-white/10 rounded-lg h-32 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:bg-white/10 focus:border-blue-500"
                                placeholder="Tell us about your project goals, features, and requirements..."
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Project Timeline</label>
                            <select className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10">
                                <option value="">Select timeline</option>
                                <option value="1-3">1-3 months</option>
                                <option value="3-6">3-6 months</option>
                                <option value="6+">6+ months</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Budget Range</label>
                            <select className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10">
                                <option value="">Select budget range</option>
                                <option value="small">$5,000 - $10,000</option>
                                <option value="medium">$10,000 - $25,000</option>
                                <option value="large">$25,000 - $50,000</option>
                                <option value="enterprise">$50,000+</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Additional Files</label>
                            <div className="relative">
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    id="fileUpload"
                                    multiple
                                />
                                <label 
                                    htmlFor="fileUpload"
                                    className="flex items-center gap-2 w-full px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer border border-white/10 hover:border-blue-500"
                                >
                                    <Upload className="w-5 h-5" />
                                    <span>Upload files (optional)</span>
                                </label>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">Upload mockups, documents, or references</p>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2"
                        >
                            Submit Project Details
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProjectDiscussion;
