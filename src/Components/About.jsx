import React from 'react';
import aboutImg from '../assets/about.jpg';


const About = () => {
    return (
        <section
            id="about"
            className=" bg-gray-100 dark:bg-gray-900 rounded-xl px-6 md:px-16 py-16 md:py-24"
        >
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
                    About Me
                </h2>
                <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                    Passionate full-stack developer crafting seamless user experiences with clean code,
                    performance, and design excellence.
                </p>
                <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={aboutImg}
                        alt="Krishna Prajapati portrait"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                </div>

                {/* Details */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                        Hello, I’m{" "}
                        <span className="text-blue-600 dark:text-blue-400">Krishna Prajapati</span>
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        I’m a full-stack developer who loves building performant web applications
                        and intuitive interfaces, focusing on accessibility, scalability, and clean code.
                    </p>

                    {/* Info Grid */}
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm text-gray-700 dark:text-gray-300">
                        {[
                            ['Name', 'Krishna Prajapati'],
                            ['DOB', '12-08-2001'],
                            ['Location', 'Mumbai, Maharashtra'],
                            ['Phone', '+91 90291 09451'],
                            ['Email', 'prajapatikrishna562@gmail.com'],
                        ].map(([label, value]) => (
                            <li key={label} className="flex justify-between">
                                <span className="font-medium text-lg">{label}:</span>
                                <span className="font-medium text-lg">{value}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Download CV */}
                    <a
                        href="/Krishna_Prajapti_resume.pdf"
                        download
                        className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
                        aria-label="Download CV"
                    >
                        Download CV <i className="fa-solid fa-download ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
