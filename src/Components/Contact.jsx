import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Contact() {

     useEffect(() => {
            AOS.init();
        }, []);

    return (
        <section className="text-gray-600 body-font relative bg-[#f5e6c0]">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* Map Section */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Salem%2C%20Tamil%20Nadu%2C%20India&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                       
                    ></iframe>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                123 Main Street, Salem, Tamil Nadu, India
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-500 leading-relaxed">
                                example@email.com
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+91 12345 67890</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div 
                   data-aos="fade-up"
                    data-aos-duration="2000"

                className="lg:w-1/3 md:w-1/2 bg-white p-5 rounded flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Contact Us
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        We'd love to hear your thoughts!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        We respect your privacy. Your information is safe with us.
                    </p>
                </div>
            </div>
        </section>
    );
}
