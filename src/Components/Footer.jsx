import React from 'react';
import github_icon from '../assets/Github.png';
import linkedin_icon from '../assets/LinkedIn.png';

const GITHUB_URL = 'https://github.com/';
const LINKEDIN_URL = 'https://linkedin.com/';

const iconContainerClass =
    'transition-all duration-200 hover:scale-105 active:scale-95 rounded-full p-4 bg-white shadow-md flex items-center justify-center';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-md text-gray-800 dark:text-gray-200 py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0">

                {/* Branding */}
                <div className="text-2xl font-semibold tracking-wide">
                    © {currentYear} KrishnaDev
                </div>

                {/* Navigation */}
                <nav className="flex space-x-6 font-medium text-md">
                    <a href="#skills" className="hover:text-blue-600 transition-colors duration-200">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
                        Contact
                    </a>
                </nav>

                {/* Social Icons */}
                <div className="flex space-x-4 items-center">
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className={iconContainerClass}
                    >
                        <img
                            src={github_icon}
                            alt="GitHub Logo"
                            className="w-6 h-6"
                            loading="lazy"
                        />
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className={iconContainerClass}
                    >
                        <img
                            src={linkedin_icon}
                            alt="LinkedIn Logo"
                            className="w-6 h-6"
                            loading="lazy"
                        />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
