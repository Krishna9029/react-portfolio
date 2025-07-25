import React from 'react';
import hero_img from '../assets/hero.jpg'


const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-27"
            aria-label="Introduction and hero section"
        >


            {/* Main Content Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Text Content */}
                <div className="w-full flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-gray-500 dark:text-gray-400">
                        Hi, I Am
                    </h2>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                        Krishna Prajapati
                    </h1>

                    <div className="relative">
                        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 mb-5 text-blue-600 dark:text-blue-400 font-semibold">
                            Full Stack Developer
                        </p>
                    </div>

                    <p className="max-w-2xl mt-5 text-lg sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Passionate full-stack developer crafting seamless user experiences.
                        Combining powerful backend logic with vibrant and intuitive frontend design—
                        driven by creativity, precision, and a love for building tools that matter.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a
                            href="#projects"
                            className="group px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
                            aria-label="View my projects portfolio"
                        >
                            View Projects
                            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3"
                            aria-label="Get in touch with me"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full h-full justify-center md:justify-end order-1 md:order-2 relative hidden md:block ">
                    <img src={hero_img} alt="" className="rounded" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
