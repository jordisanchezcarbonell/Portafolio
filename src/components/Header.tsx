'use client';
import React, { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  title: string;
  label: string;
  url: string;
}

const navItems: NavItem[] = [
  {
    title: 'Experiencia',
    label: 'experiencia',
    url: '/#experiencia',
  },
  {
    title: 'Proyectos',
    label: 'proyectos',
    url: '/#proyectos',
  },
  {
    title: 'Sobre mí',
    label: 'sobre-mi',
    url: '/#sobre-mi',
  },
  {
    title: 'Contacto',
    label: 'contacto',
    url: '/#contacto',
  },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        {navItems.map((link, index) => (
          <a
            key={index}
            className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
