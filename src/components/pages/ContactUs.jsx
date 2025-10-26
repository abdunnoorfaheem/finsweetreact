import React from 'react';
import Container from '../Container';

const ContactUs = () => {
    return (
        <div className="py-32 bg-[#f8f9fc]">
            <Container>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-poppins font-semibold text-4xl md:text-5xl text-primary mb-4">
                        Contact Us
                    </h2>
                    <p className="font-poppins font-medium text-base md:text-lg text-primary mx-4 md:mx-auto max-w-3xl pb-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="bg-[#F4F6FC] shadow-xl rounded-2xl p-6 md:p-10 max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-6">
                        
                        <div className="w-full flex gap-4">
                            {/* Name */}
                            <div className="lg:w-full md:w-1/2">
                                <label htmlFor="name" className="block text-black font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="lg:w-full md:w-1/2">
                                <label htmlFor="email" className="block text-black font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="w-full">
                            <label htmlFor="subject" className="block text-black font-semibold mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Provide context"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="w-full">
                            <label htmlFor="message" className="block text-black font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Write your question here"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default ContactUs;
