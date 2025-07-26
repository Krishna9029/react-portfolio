import React from 'react';
import ecommerce from '../assets/ecommerce.png';
import Blog_img from '../assets/Blog.png';
import Imagify_img from '../assets/imagify.png';

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Store",
        subtitle: "Modern Shopping Experience",
        description:
            "Full-featured shopping app with user authentication, payment integration, and a responsive layout.",
        image: ecommerce,
        link: "https://fash-store-frontend.vercel.app",
        github: "https://github.com/Krishna9029/Fash-Store",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Razorpay"],
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Blog Website",
        subtitle: "Content Management Platform",
        description: "Responsive blog with comment system, theme toggle, and SEO features.",
        image: Blog_img,
        link: "https://quick-blog-ygaj.vercel.app",
        github: "https://github.com/Krishna9029/QuickBlog",
        tags: ["React", "Node.js", "MongoDB", "Razorpay"],
        category: "Full Stack"
    },
    {
        id: 3,
        title: "Ai Image generate Website",
        subtitle: "Content Management Platform",
        description: "Responsive blog with comment system, theme toggle, and SEO features.",
        image: Imagify_img,
        link: "https://imagify-frontend-gold.vercel.app/",
        github: "https://github.com/Krishna9029/Imagify",
        tags: ["React", "Node.js", "MongoDB", "Razorpay"],
        category: "Full Stack"
    }
];

const ProjectCard = ({ project }) => (
    <article className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Project Image */}
        <div className="h-48 overflow-hidden">
            <img
                src={project.image}
                alt={`${project.title}`}
                className="w-full h-full object-cover object-center"
            />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
            {/* Category */}
            <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full">
                {project.category}
            </span>

            {/* Title and Subtitle */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.subtitle}</p>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 my-4">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center sm:flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Live Demo
                </a>
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center sm:flex-1 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                        <i className="fa-brands fa-github mr-2 text-lg"></i>
                        GitHub
                    </a>
                )}
            </div>
        </div>
    </article>
);

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 px-4 md:px-10 bg-gray-50 dark:bg-gray-950 transition-colors"
            aria-label="My Work and Case Studies"
        >
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    My Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    A selection of work I’ve built — from full-stack platforms to frontend applications.
                </p>
                <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-5" />
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Footer CTA */}
            <div className="text-center mt-16 max-w-3xl mx-auto">
                <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-inner border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        Want to see more?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Visit my GitHub to explore more open-source contributions and projects.
                    </p>
                    <a
                        href="https://github.com/Krishna9029"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors hover:dark:bg-gray-600"
                    >
                        <i className="fa-brands fa-github mr-2 text-lg"></i>
                        Visit GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
