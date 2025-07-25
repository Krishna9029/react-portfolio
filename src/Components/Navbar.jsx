import React, { useState, useEffect, useRef } from "react";
import sun_icon from "../assets/sun.png";
import moon_icon from "../assets/moon.png";

const navLinks = ["skills", "projects", "about", "contact"];

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("skills");
    const [scrolled, setScrolled] = useState(false);

    const observerRef = useRef(null);
    const sectionsRef = useRef(new Map());

    /* Scroll detection for navbar background */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Intersection Observer for active-section highlighting */
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -20% 0px",
            threshold: [0.1, 0.3, 0.7],
        };
        const handleIntersect = (entries) => {
            let maxRatio = 0;
            let mostVisible = null;
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    mostVisible = entry.target.id;
                }
            });
            if (mostVisible && navLinks.includes(mostVisible)) {
                setActiveSection(mostVisible);
            }
        };
        observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
        navLinks.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                sectionsRef.current.set(id, el);
                observerRef.current.observe(el);
            }
        });
        return () => observerRef.current?.disconnect();
    }, []);

    /* Smooth-scroll handler */
    const handleLinkClick = (section, e) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveSection(section);
        const el = document.getElementById(section);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 50, behavior: "smooth" });
        }
    };

    const navLinkClass = (section) => {
        const base =
            "relative px-3 py-2 rounded-lg text-md font-medium transition-all duration-200 ";
        const active =
            activeSection === section
                ? "text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10 "
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 ";
        return base + active;
    };

    const icon = darkMode ? sun_icon : moon_icon;
    const iconAlt = darkMode ? "Sun icon" : "Moon icon";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
                ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:border-gray-800/20"
                : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
                }`}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => handleLinkClick("skills", e)}
                        className="relative text-3xl font-bold"
                    >
                        <span className="text-blue-600 dark:text-blue-400">Krishna</span>
                        <span className="text-gray-900 dark:text-white">Dev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => handleLinkClick(section, e)}
                                className={navLinkClass(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                {activeSection === section && (
                                    <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-lg -z-10" />
                                )}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="ml-4 p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                        >
                            <img src={icon} alt={iconAlt} className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            <div className="w-6 h-6 relative">
                                <span
                                    className={`absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full transition-transform duration-200 ${isOpen ? "transform rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"
                                        }`}
                                />
                                <span
                                    className={`absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full transition-transform duration-200 ${isOpen ? "transform -rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg">
                    <div className="px-4 py-6 space-y-1">
                        {navLinks.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => handleLinkClick(section, e)}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${activeSection === section
                                    ? "text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10"
                                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="w-full mt-4 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                        >
                            <img src={icon} alt={iconAlt} className="w-5 h-5" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {darkMode ? "Light Mode" : "Dark Mode"}
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
