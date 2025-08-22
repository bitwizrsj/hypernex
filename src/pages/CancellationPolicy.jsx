import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CancellationPolicy() {
    const [activeSection, setActiveSection] = useState('introduction');
    const sectionRefs = {
        introduction: useRef(null),
        'cancellation-policy': useRef(null),
        'refund-policy': useRef(null),
        'how-to-request': useRef(null),
        'exceptions': useRef(null),
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
            const scrollPosition = window.scrollY + 100;

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
        { id: 'cancellation-policy', title: '1. Cancellation Policy' },
        { id: 'refund-policy', title: '2. Refund Policy' },
        { id: 'how-to-request', title: '3. How to Request' },
        { id: 'exceptions', title: '4. Exceptions' },
        { id: 'contact', title: '5. Contact Information' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900">Cancellation and Refund Policy</h1>
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
                                    This Cancellation and Refund Policy outlines the terms and conditions governing the cancellation of services and refund eligibility for HyperNex Technologies ("we", "our", "us"). Please read this policy carefully before engaging with our services.
                                </p>
                            </section>

                            <section ref={sectionRefs['cancellation-policy']} id="cancellation-policy" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Cancellation Policy</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>You may cancel your service subscription or project engagement with HyperNex Technologies at any time by notifying us in writing via our customer support email.</li>
                                    <li>Cancellation requests will take effect at the end of the current billing or service period unless otherwise agreed upon in a separate contract.</li>
                                    <li>For subscription-based services, if you cancel before the end of the billing cycle, you will continue to have access until the period expires, but no further charges will be applied.</li>
                                    <li>Immediate cancellation requests may be subject to review based on the terms of your service agreement.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['refund-policy']} id="refund-policy" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Refund Policy</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Refunds are generally not provided for services already rendered or digital subscriptions once access has been granted.</li>
                                    <li>If a refund is applicable (for example, due to a pricing error or failure to deliver contracted services), it will be processed back to the original payment method used.</li>
                                    <li>In cases where HyperNex Technologies cancels a service or subscription without cause, a pro-rata refund for any unused portion of prepaid fees will be issued.</li>
                                    <li>No refunds will be provided for partial use or dissatisfaction after service delivery unless explicitly agreed in writing.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['how-to-request']} id="how-to-request" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How to Request Cancellation or Refund</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>To request cancellation or a refund, please contact our Customer Support team at support@hypernextechnologies.com with your full name, contact details, and relevant order or subscription information.</li>
                                    <li>We aim to respond to all requests promptly and resolve them within a reasonable timeframe.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.exceptions} id="exceptions" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Exceptions and Special Circumstances</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Certain customized projects or long-term contracts may have specific cancellation and refund terms outlined in separate agreements.</li>
                                    <li>Refunds will not be issued for services terminated due to breach of terms or misuse of services by the customer.</li>
                                    <li>In the event of service interruptions caused by HyperNex Technologies beyond reasonable control, you may be eligible for a pro-rata refund or service credit.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.contact} id="contact" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
                                <p className="text-gray-700 mb-4">
                                    For any questions or assistance regarding cancellations or refunds, please contact us through our contact page:
                                </p>
                                <Link
                                    to="/contact"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"  >
                                    Contact Us
                                </Link>
                            </section>

                            <div className="text-gray-600 text-sm italic">
                                By using our services, you acknowledge that you have read and understood this Cancellation and Refund Policy.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}