import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import About from '../Components/About'

const Home = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  })
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <div className="dark:bg-gray-900 bg-white text-gray-800 dark:text-gray-200 transition-colors ">
      <Navbar darkMode={dark} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
