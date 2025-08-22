import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MicrosoftStyleTermsAndConditions() {
    const [activeSection, setActiveSection] = useState('introduction');
    const sectionRefs = {
        introduction: useRef(null),
        'use-of-website': useRef(null),
        'intellectual-property': useRef(null),
        'services': useRef(null),
        'user-content': useRef(null),
        'disclaimer': useRef(null),
        'liability': useRef(null),
        'indemnification': useRef(null),
        'governing-law': useRef(null),
        'changes': useRef(null),
        'contact': useRef(null)
    };

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
            sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Track scroll position to update active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Adding offset for better highlighting

            for (const section in sectionRefs) {
                const element = sectionRefs[section].current;
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'use-of-website', title: '1. Use of Website' },
        { id: 'intellectual-property', title: '2. Intellectual Property' },
        { id: 'services', title: '3. Services' },
        { id: 'user-content', title: '4. User Content' },
        { id: 'disclaimer', title: '5. Disclaimer of Warranties' },
        { id: 'liability', title: '6. Limitation of Liability' },
        { id: 'indemnification', title: '7. Indemnification' },
        { id: 'governing-law', title: '8. Governing Law' },
        { id: 'changes', title: '9. Changes to Terms' },
        { id: 'contact', title: '10. Contact Information' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900">Terms and Conditions</h1>
                    <p className="text-gray-500 mt-2">HyperNex Technologies | Effective Date: April 25, 2025</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-10">
                            <nav className="border-l border-gray-200">
                                <ul className="space-y-1">
                                    {sections.map(section => (
                                        <li key={section.id}>
                                            <button
                                                onClick={() => scrollToSection(section.id)}
                                                className={`pl-4 py-2 w-full text-left border-l-2 transition duration-200 ${activeSection === section.id
                                                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                                                        : 'border-transparent hover:border-gray-300 hover:bg-gray-50 text-gray-600'
                                                    }`}
                                            >
                                                <span className="text-sm">{section.title}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="mt-8 text-sm text-gray-500">
                                <p>Last updated: April 25, 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="prose max-w-none">
                            <section ref={sectionRefs.introduction} id="introduction" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                                <p className="text-gray-700">
                                    Welcome to HyperNex Technologies ("we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website, hypernextechnologies.com, and any services we provide. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
                                </p>
                            </section>

                            <section ref={sectionRefs['use-of-website']} id="use-of-website" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Use of Website</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</li>
                                    <li>You must not use our website to transmit any harmful, offensive, or illegal content.</li>
                                    <li>We reserve the right to suspend or terminate your access to the website at our discretion if you violate these Terms.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['intellectual-property']} id="intellectual-property" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Intellectual Property</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>All content on this website, including text, graphics, logos, images, videos, and software, is the property of HyperNex Technologies or its licensors and is protected by applicable intellectual property laws.</li>
                                    <li>You may not copy, reproduce, distribute, or create derivative works from any content on this website without our prior written consent.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.services} id="services" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>We provide IT consulting, software development, cloud solutions, and other technology services as described on our website.</li>
                                    <li>All service engagements are subject to separate agreements outlining specific terms, deliverables, timelines, and payment terms.</li>
                                    <li>We strive to provide accurate and up-to-date information about our services but do not guarantee that all information is error-free or complete.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['user-content']} id="user-content" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>If you submit any content (such as inquiries, feedback, or other materials) through our website, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute that content for the purposes of operating and improving our services.</li>
                                    <li>You represent and warrant that you have the right to submit such content and that it does not violate any third-party rights.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.disclaimer} id="disclaimer" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied.</li>
                                    <li>We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
                                    <li>We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.liability} id="liability" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>To the maximum extent permitted by law, HyperNex Technologies shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our website or services.</li>
                                    <li>This includes damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.indemnification} id="indemnification" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnification</h2>
                                <p className="text-gray-700">
                                    You agree to indemnify, defend, and hold harmless HyperNex Technologies and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from your violation of these Terms or your misuse of the website or services.
                                </p>
                            </section>

                            <section ref={sectionRefs['governing-law']} id="governing-law" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
                                <p className="text-gray-700">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, USA, without regard to its conflict of law principles.
                                </p>
                            </section>

                            <section ref={sectionRefs.changes} id="changes" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                                <p className="text-gray-700">
                                    We reserve the right to update or modify these Terms at any time without prior notice. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes constitutes your acceptance of the revised Terms.
                                </p>
                            </section>

                            <section ref={sectionRefs.contact} id="contact" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                                <p className="text-gray-700 mb-4">
                                    If you have any questions about these Terms and Conditions, please contact us through our contact page:
                                </p>
                                <Link
                                    to="/contact"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"  >
                                    Contact Us
                                </Link>
                            </section>

                            <div className="text-gray-600 text-sm italic">
                                By using our website, you acknowledge that you have read and understood these Terms and Conditions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}