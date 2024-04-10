/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import GitHub from './icons/GitHub';
import NextJS from './icons/NextJS';
import Tailwind from './icons/Tailwind';
import TypeScript from './icons/TypeScript';
import Jest from './icons/Jest';
import Nestjs from './icons/Nestjs';
import PostgressIcon from './icons/PostgressIcon';
import ReactIcon from './icons/React';
import Strapi from './icons/Strapi';
import PythonIcon from './icons/PythonIcon';
import Link from './icons/Link';
import LinkButton from './LinkButton';
import { useSectionInView } from '@/lib/hooks';

interface Tag {
  name: string;
  class: string;
  icon: any;
}

interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  tags: Tag[];
}

const TAGS: { [key: string]: Tag } = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextJS,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: Tailwind,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-black text-white',
    icon: TypeScript,
  },
  JEST: {
    name: 'JEST',
    class: 'bg-black text-white',
    icon: Jest,
  },
  Nestjs: {
    name: 'Nestjs',
    class: 'bg-black text-white',
    icon: Nestjs,
  },
  PostgressIcon: {
    name: 'Postgress',
    class: 'bg-black text-white',
    icon: PostgressIcon,
  },
  ReactIcon: {
    name: 'React',
    class: 'bg-black text-white',
    icon: ReactIcon,
  },
  Strapi: {
    name: 'Strapi',
    class: 'bg-black text-white',
    icon: Strapi,
  },
  PythonIcon: {
    name: 'Python',
    class: 'bg-[#003159] text-white',
    icon: PythonIcon,
  },
};

const PROJECTS: Project[] = [
  {
    title: 'Elecsum',
    description:
      'Elecsum es una plataforma de energía renovable que permite a los usuarios comprar energía solar de forma sencilla y segura. Creada desde cero con Next.js, React.',
    link: 'https://share.elecsum.com/',
    image: '/projects/elecsumWeb.webp',
    tags: [
      TAGS.NEXT,
      TAGS.ReactIcon,
      TAGS.TYPESCRIPT,
      TAGS.PostgressIcon,
      TAGS.PythonIcon,
    ],
  },
  {
    title: 'Elecsum App',
    description:
      'Aplicacion movil para los usuarios de elecsum tanto cliente como administrador, puedan gestionar sus servicios y productos. Creado desde cero con React Native.',
    link: 'https://play.google.com/store/apps/details?id=com.elecsum.app',
    image: '/projects/elecsumApp.webp',
    tags: [
      TAGS.ReactIcon,
      TAGS.TYPESCRIPT,
      TAGS.PostgressIcon,
      TAGS.PythonIcon,
    ],
  },
  {
    title: 'Eunoia Web',
    description:
      'Web corporativa de Eunoia, una empresa de tecnología que ofrece soluciones de software a medida. Creada desde cero con Next.js, React',
    link: 'https://www.eunoia.es/',
    image: '/projects/eunoiaWeb.webp',
    tags: [TAGS.NEXT, TAGS.ReactIcon, TAGS.Strapi, TAGS.TYPESCRIPT],
  },
  {
    title: 'Biovert Front',
    description:
      'Web de productos que dan soluciones manvert, efectivas y sostenibles, para maximizar el rendimiento y la calidad de tus cultivos.',
    link: 'https://manvert.com/',
    image: '/projects/manvertWeb.webp',
    tags: [
      TAGS.NEXT,
      TAGS.TYPESCRIPT,
      TAGS.PostgressIcon,
      TAGS.ReactIcon,
      TAGS.Strapi,
      TAGS.PythonIcon,
    ],
  },

  // {
  //   title: "Dentaid",
  //   description:
  //     "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
  //   link: "https://adventjs.dev",
  //   image: "/projects/adventjs.webp",
  //   tags: [
  //     TAGS.NEXT,
  //     TAGS.TAILWIND,
  //     TAGS.TYPESCRIPT,
  //     TAGS.JEST,
  //     TAGS.Nestjs,
  //     TAGS.PostgressIcon,
  //     TAGS.ReactIcon,
  //     TAGS.Strapi,
  //   ],
  // },
  {
    title: 'Exclusiverse',
    description:
      'Landing page para la empresa Exclusiverse donde se informa de los beneficios de los NFT y como se pueden adquirir para viajar.',
    link: 'https://adventjs.dev',
    image: '/projects/exclusivereWeb.webp',
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT],
  },
  {
    title: 'Last Mile Group',
    description:
      'Control de flota de coches y motos donde se puede gestionar sus asignaciones, mantenimientos y revisiones.',
    image: '/projects/jomWeb.webp',
    tags: [
      TAGS.NEXT,
      TAGS.TYPESCRIPT,
      TAGS.JEST,
      TAGS.Nestjs,
      TAGS.PostgressIcon,
      TAGS.ReactIcon,
    ],
  },
  {
    title: 'Muris',
    description:
      'Software de control de almacenes y stock para empresas de logística y transporte.',
    image: '/projects/murisWeb.webp',
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.PythonIcon, TAGS.PostgressIcon],
  },
];

const ProjectList: React.FC = () => {
  const { ref } = useSectionInView('Proyectos');
  return (
    <div className="flex flex-col gap-y-16" ref={ref} id="proyectos">
      {PROJECTS.map(
        ({ image, title, description, tags, link, github }, index) => (
          <article
            key={index}
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          >
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  alt="Recién llegado vs 5 años en Nueva Zelanda"
                  className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  src={image}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>

              {/* Renderizar las primeras mitad de etiquetas */}
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <li key={index}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                    >
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Renderizar las segundas mitad de etiquetas */}
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.slice(3).map((tag, index) => (
                  <li key={index}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                    >
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Renderizar la descripción */}
              <div className="mt-2 text-gray-700 dark:text-gray-400">
                {description}
              </div>

              {/* Renderizar los enlaces */}
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                  <LinkButton href={github}>
                    <GitHub className="size-6" />
                    Code
                  </LinkButton>
                )}
                {link && (
                  <LinkButton href={link}>
                    <Link className="size-4" />
                    Preview
                  </LinkButton>
                )}
              </footer>
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default ProjectList;
