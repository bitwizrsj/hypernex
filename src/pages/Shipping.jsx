import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ShippingPolicy() {
    const [activeSection, setActiveSection] = useState('introduction');
    const sectionRefs = {
        introduction: useRef(null),
        'order-processing': useRef(null),
        'shipping-methods': useRef(null),
        'shipping-areas': useRef(null),
        'shipping-costs': useRef(null),
        'delivery-times': useRef(null),
        'shipping-restrictions': useRef(null),
        'risk-loss': useRef(null),
        'shipping-issues': useRef(null),
        'shipping-delays': useRef(null),
        'contact': useRef(null)
    };

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
            sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
        { id: 'order-processing', title: '1. Order Processing' },
        { id: 'shipping-methods', title: '2. Shipping Methods' },
        { id: 'shipping-areas', title: '3. Shipping Areas' },
        { id: 'shipping-costs', title: '4. Shipping Costs' },
        { id: 'delivery-times', title: '5. Delivery Times' },
        { id: 'shipping-restrictions', title: '6. Shipping Restrictions' },
        { id: 'risk-loss', title: '7. Risk of Loss' },
        { id: 'shipping-issues', title: '8. Shipping Issues' },
        { id: 'shipping-delays', title: '9. Shipping Delays' },
        { id: 'contact', title: '10. Contact Information' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900">Shipping and Delivery Policy</h1>
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
                                    This Shipping and Delivery Policy outlines how HyperNex Technologies ("we", "our", "us") handles the processing, shipping, and delivery of physical products ordered through our platform. Please review this policy carefully before placing an order.
                                </p>
                            </section>

                            <section ref={sectionRefs['order-processing']} id="order-processing" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Order Processing</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>All orders placed through HyperNex Technologies will be processed within 1-3 business days after payment confirmation.</li>
                                    <li>Orders placed on weekends or public holidays will be processed on the next business day.</li>
                                    <li>You will receive an email confirmation once your order has been shipped, including tracking information when available.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['shipping-methods']} id="shipping-methods" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Shipping Methods and Carriers</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>We use trusted logistics partners to ensure reliable and timely delivery.</li>
                                    <li>Shipping carriers may include FedEx, UPS, DHL, or other reputable couriers depending on your location.</li>
                                    <li>Shipping options and delivery times may vary based on the destination and the nature of the products ordered.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['shipping-areas']} id="shipping-areas" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Shipping Areas</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>We ship to street addresses within the United States and select international locations.</li>
                                    <li>We do not ship to P.O. Boxes, private mailbox stores, freight forwarders, or certain U.S. territories.</li>
                                    <li>For international shipping, customs duties and taxes may apply depending on your country's regulations.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['shipping-costs']} id="shipping-costs" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Shipping Costs</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Shipping fees will be calculated at checkout based on the shipping destination, package weight, and delivery method.</li>
                                    <li>Free standard shipping may be offered on qualifying orders as specified on our website or promotional materials.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['delivery-times']} id="delivery-times" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Estimated Delivery Times</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Domestic orders within the United States typically arrive within 3-7 business days after shipment.</li>
                                    <li>International delivery times vary by destination and can range from 7-21 business days.</li>
                                    <li>Please note that delivery times are estimates and may be affected by factors beyond our control, such as carrier delays, customs processing, or natural events.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['shipping-restrictions']} id="shipping-restrictions" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Shipping Restrictions and Limitations</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>We do not ship to P.O. Boxes, military addresses (APO/FPO), or certain remote locations.</li>
                                    <li>Some products may have special shipping requirements or restrictions; these will be communicated at the time of purchase.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['risk-loss']} id="risk-loss" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Risk of Loss and Title</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>The risk of loss or damage to products passes to you upon delivery to the carrier or upon your or your designated recipient's physical receipt of the product.</li>
                                    <li>Title to the products passes to you when the products are picked up by the carrier from our warehouse.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['shipping-issues']} id="shipping-issues" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Shipping Issues and Claims</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>If you experience any issues with your shipment, such as damage, loss, or non-delivery, please contact our Customer Support immediately.</li>
                                    <li>All claims must be reported within 10 days of delivery or the last tracking scan to be eligible for resolution.</li>
                                    <li>We will work with the carrier to investigate and resolve any shipping problems promptly.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs['shipping-delays']} id="shipping-delays" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Shipping Delays</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>While we strive to meet estimated delivery times, unforeseen circumstances such as carrier disruptions, weather conditions, customs delays, or force majeure events may cause delays.</li>
                                    <li>We will notify you of any significant delays as soon as possible.</li>
                                </ul>
                            </section>

                            <section ref={sectionRefs.contact} id="contact" className="mb-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                                <p className="text-gray-700 mb-4">
                                    For any questions about shipping or delivery, please contact us through our contact page:
                                </p>
                                <Link
                                    to="/contact"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"  >
                                    Contact Us
                                </Link>
                            </section>

                            <div className="text-gray-600 text-sm italic">
                                By placing an order with us, you acknowledge that you have read and understood this Shipping and Delivery Policy.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}