import { useState, useRef, useEffect, } from 'react';
import { Link } from 'react-router-dom';


export default function MicrosoftStylePrivacyPolicy() {
    const [activeSection, setActiveSection] = useState('introduction');
    const sectionRefs = {
        introduction: useRef(null),
        'information-we-collect': useRef(null),
        'how-we-use': useRef(null),
        'how-we-share': useRef(null),
        'data-security': useRef(null),
        'cookies': useRef(null),
        'your-rights': useRef(null),
        'third-party': useRef(null),
        'updates': useRef(null),
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
        { id: 'information-we-collect', title: '1. Information We Collect' },
        { id: 'how-we-use', title: '2. How We Use Your Information' },
        { id: 'how-we-share', title: '3. How We Share Your Information' },
        { id: 'data-security', title: '4. Data Security' },
        { id: 'cookies', title: '5. Cookies and Tracking' },
        { id: 'your-rights', title: '6. Your Rights and Choices' },
        { id: 'third-party', title: '7. Third-Party Links' },
        { id: 'updates', title: '8. Updates to This Policy' },
        { id: 'contact', title: '9. Contact Us' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900">Privacy Policy</h1>
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
                                    At HyperNex Technologies ("we", "our", "us"), your privacy is important to us. This Privacy
                                    Policy describes how we collect, use, store, and protect your personal information when you
                                    visit our website (hypernextechnologies.com) or interact with our services. By using our
                                    website, you agree to the terms outlined in this policy. If you do not agree, please
                                    discontinue use of our site.
                                </p>
                            </section>

                            <section ref={sectionRefs['information-we-collect']} id="information-we-collect" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                                <p className="text-gray-700 mb-4">We may collect the following types of information:</p>

                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                                    <p className="text-gray-700">
                                        Information you voluntarily provide, such as your name, email address, phone number,
                                        company name, and any other details you submit through contact forms or account registration.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Usage Data</h3>
                                    <p className="text-gray-700">
                                        Information automatically collected when you use our website, including IP address,
                                        browser type, device information, pages visited, and the time and date of your visit.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies and Tracking Technologies</h3>
                                    <p className="text-gray-700">
                                        We use cookies and similar tracking technologies to enhance your experience, analyze
                                        website usage, and improve our services.
                                    </p>
                                </div>
                            </section>

                            <section ref={sectionRefs['how-we-use']} id="how-we-use" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                                <p className="text-gray-700 mb-4">We use the collected information to:</p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Provide, operate, and maintain our website and services</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Improve and personalize your experience on our website</li>
                                    <li>Send you updates, newsletters, or marketing communications (if you have opted in)</li>
                                    <li>Analyze website performance and usage trends</li>
                                    <li>Comply with legal obligations and protect our rights</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['how-we-share']} id="how-we-share" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Share Your Information</h2>
                                <p className="text-gray-700 mb-4">
                                    We do not sell or rent your personal information to third parties. We may share your
                                    information in the following circumstances:
                                </p>

                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Service Providers</h3>
                                    <p className="text-gray-700">
                                        With trusted third-party vendors who assist us in operating our website and delivering
                                        services, under confidentiality agreements.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Legal Compliance</h3>
                                    <p className="text-gray-700">
                                        If required by law or in good faith to comply with legal obligations or protect the rights,
                                        property, or safety of HyperNex Technologies, our users, or the public.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Business Transfers</h3>
                                    <p className="text-gray-700">
                                        In the event of a merger, acquisition, or sale of assets, your information may be
                                        transferred as part of that transaction, with notice provided as required by law.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Aggregated Data</h3>
                                    <p className="text-gray-700">
                                        We may share non-personally identifiable, aggregated information for analytics or
                                        marketing purposes.
                                    </p>
                                </div>
                            </section>

                            <section ref={sectionRefs['data-security']} id="data-security" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                                <p className="text-gray-700">
                                    We implement appropriate technical and organizational measures to protect your personal
                                    information against unauthorized access, alteration, disclosure, or destruction. However,
                                    no method of transmission over the internet or electronic storage is 100% secure.
                                </p>
                            </section>

                            <section ref={sectionRefs.cookies} id="cookies" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                                <p className="text-gray-700">
                                    Our website uses cookies and similar technologies to collect and store certain information.
                                    You can control the use of cookies through your browser settings, but disabling cookies
                                    may affect your experience on our website.
                                </p>
                            </section>

                            <section ref={sectionRefs['your-rights']} id="your-rights" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                                <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Access, correct, or delete your personal information</li>
                                    <li>Object to or restrict processing of your data</li>
                                    <li>Withdraw consent for data processing (where applicable)</li>
                                    <li>Opt out of marketing communications at any time</li>
                                </ul>
                                <p className="text-gray-700 mt-4">To exercise your rights, please contact us using the information below.</p>
                            </section>

                            <section ref={sectionRefs['third-party']} id="third-party" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
                                <p className="text-gray-700">
                                    Our website may contain links to external sites not operated by HyperNex Technologies.
                                    We are not responsible for the privacy practices or content of these third-party sites.
                                    Please review their privacy policies before providing any personal information.
                                </p>
                            </section>

                            <section ref={sectionRefs.updates} id="updates" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
                                <p className="text-gray-700">
                                    We may update this Privacy Policy from time to time. Changes will be posted on this page
                                    with an updated effective date. We encourage you to review this policy periodically.
                                </p>
                            </section>

                            <section ref={sectionRefs.contact} id="contact" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                                <p className="text-gray-700 mb-4">
                                    If you have any questions or concerns about this Privacy Policy or our data practices,
                                    please reach out to us through our contact page:
                                </p>
                                <Link
                                    to="/contact"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"  >
                                    Contact Us
                                </Link>
                            </section>

                            <div className="text-gray-600 text-sm italic">
                                By using our website, you acknowledge that you have read and understood this Privacy Policy.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accept Button */}
                {/* <div className="mt-12 py-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <p className="text-sm text-gray-600">You must accept our privacy policy to continue using our services</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition">
                        Accept & Continue
                    </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}