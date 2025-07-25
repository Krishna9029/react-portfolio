import React from 'react';
import html from '../assets/HTML5.png';
import css from '../assets/CSS3.png';
import MongoDB from '../assets/MongoDB.png';
import NodeJs from '../assets/Node.js.png';
import Express from '../assets/Express.png';
import Bootstrap from '../assets/Bootstrap.png';
import Tailwind from '../assets/Tailwind CSS.png';
import Js from '../assets/JavaScript.png';
import react from '../assets/React.png';

const skillData = [
    {
        type: 'Frontend Development',
        color: 'blue',
        description:
            'Crafting accessible, responsive, and visually interactive interfaces.',
        skills: [
            {
                name: 'HTML5',
                icon: html,
                proficiency: 95,
                description: 'Semantic markup and modern standards',
            },
            {
                name: 'CSS3',
                icon: css,
                proficiency: 90,
                description: 'Modern layouts with Flex/Grid',
            },
            {
                name: 'JavaScript',
                icon: Js,
                proficiency: 88,
                description: 'ES6+, async handling, and client logic',
            },
            {
                name: 'React',
                icon: react,
                proficiency: 92,
                description: 'Component architecture, SPA, hooks',
            },
            {
                name: 'Tailwind CSS',
                icon: Tailwind,
                proficiency: 85,
                description: 'Utility-first responsive design',
            },
            {
                name: 'Bootstrap',
                icon: Bootstrap,
                proficiency: 80,
                description: 'Pre-designed responsive UI tools',
            },
        ],
    },
    {
        type: 'Backend Development',
        color: 'green',
        description:
            'Building structured APIs with resilient backend architecture.',
        skills: [
            {
                name: 'Node.js',
                icon: NodeJs,
                proficiency: 80,
                description: 'Asynchronous, scalable backend runtime',
            },
            {
                name: 'Express.js',
                icon: Express,
                proficiency: 82,
                description: 'Minimalist and fast RESTful APIs',
            },
            {
                name: 'MongoDB',
                icon: MongoDB,
                proficiency: 78,
                description: 'Flexible NoSQL schema-less database',
            },
        ],
    },
];

// Utility to generate Tailwind class variants dynamically
const colorVariants = {
    blue: {
        chipBg: 'bg-blue-100 dark:bg-blue-800',
        chipText: 'text-blue-800 dark:text-blue-200',
        bar: 'bg-blue-600 dark:bg-blue-400',
    },
    green: {
        chipBg: 'bg-blue-100 dark:bg-blue-800',
        chipText: 'text-blue-800 dark:text-blue-200',
        bar: 'bg-blue-600 dark:bg-blue-400',
    },
};

const SkillCard = ({ skill, color }) => {
    const current = colorVariants[color];

    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition p-5 h-full flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 p-2 rounded bg-gray-100 dark:bg-gray-700 shrink-0 flex items-center justify-center">
                    <img
                        src={skill.icon}
                        alt={`${skill.name} Logo`}
                        className="object-contain w-full h-full"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">
                        {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.description}
                    </p>
                </div>
            </div>

            <div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div
                        className={`${current.bar} h-full rounded-full transition-all`}
                        style={{ width: `${skill.proficiency}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

const CategoryHeader = ({ title, description, color }) => {
    const current = colorVariants[color];

    return (
        <div
            className={`rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6 shadow-md bg-white dark:bg-gray-800 ${current.chipBg}`}
        >
            <div className={`flex items-center gap-3 mb-2 ${current.chipText}`}>
                
                <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{description}</p>
        </div>
    );
};


const Skills = () => {
    return (
        <section id="skills" className="bg-gray-100 dark:bg-black py-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                        Technical Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My technologies focus on scalable, high-performing, and accessible web development.
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-5" />
                </div>

                {/* Skill Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {skillData.map((category, idx) => (
                        <div key={idx}>
                            <CategoryHeader
                                icon={category.icon}
                                title={category.type}
                                description={category.description}
                                color={category.color}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.skills.map((skill, i) => (
                                    <SkillCard key={i} skill={skill} color={category.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
