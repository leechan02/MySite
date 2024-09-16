"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');
  const sections = ['Overview', 'Highlights'];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="hidden md:block fixed top-1/2 right-10 transform -translate-y-1/2"
      >
        <ul className="space-y-4">
          {sections.map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={() => handleClick(section)}
                className={`cursor-pointer text-xs ${
                  activeSection === section.toLowerCase() ? 'text-primary font-bold' : 'text-foreground opacity-50'
                }`}
                animate={{
                  color: activeSection === section.toLowerCase() ? 'var(--color-primary)' : 'var(--color-foreground)',
                }}
                transition={{ duration: 0.3 }}
              >
                {section}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default TableOfContents;