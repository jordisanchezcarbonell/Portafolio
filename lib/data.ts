import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import NextJS from '@/components/icons/NextJS';
import Tailwind from '@/components/icons/Tailwind';
import TypeScript from '@/components/icons/TypeScript';
import Jest from '@/components/icons/Jest';
import Nestjs from '@/components/icons/Nestjs';
import PostgressIcon from '@/components/icons/PostgressIcon';
import ReactIcon from '@/components/icons/React';
import Strapi from '@/components/icons/Strapi';
import PythonIcon from '@/components/icons/PythonIcon';

export const links = [
  {
    name: 'Inicio',
    hash: '#home',
  },

  {
    name: 'Proyectos',
    hash: '#projects',
  },

  {
    name: 'Experiencia',
    hash: '#experience',
  },
  {
    name: 'Sobre mi',
    hash: '#about',
  },
  {
    name: 'Contacto',
    hash: '#contact',
  },
] as const;

export const myExperience = [
  {
    date: 'Actualmente...',
    title: 'Desarrollador Full Stack',
    company: 'Eunoia Digital',
    description:
      'Desarrollador Full Stack en Eunoia Digital, responsable de diseñar e implementar interfaces de usuario atractivas y funcionales utilizando tecnologías como React, Next.js, TypeScript, Tailwind, CSS, Nest.js y Python.',
    icon: React.createElement(LuGraduationCap),
  },
  {
    date: 'Sep 2020 - Abr 2022',
    title: 'Desarrollador Full Stack',
    company: 'Ogilvy',
    description:
      'Trabajé en proyectos internacionales con Drupal 7/8, donde realicé tareas de sitebuilding, solución de errores (bug fixing) y administración de contenido. Además, me encargué del aseguramiento de la calidad utilizando herramientas como Selenium y New Relic. También tengo experiencia en el uso de Sass, Bootstrap y CSS para el diseño y desarrollo de interfaces de usuario, así como en el desarrollo de aplicaciones web con Angular y React.',
    icon: React.createElement(LuGraduationCap),
  },
  {
    date: 'Abr 2018 - Jun 2019',
    title: 'Desarrollador Web',
    company: 'Jausas Legal',
    description:
      'Mi experiencia laboral incluye trabajar con Pardot y Wordpress, donde estuve involucrado en diversas tareas como la gestión de bases de datos, la creación y modificación de landing pages en Pardot, así como la gestión de contenido en Wordpress.',
    icon: React.createElement(LuGraduationCap),
  },
];

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

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

export const projectsData: Project[] = [
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

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;

export const EXPERIENCIE = [
  {
    date: 'Actualmente...',
    title: 'Desarrollador Full Stack',
    company: 'Eunoia Digital',
    description:
      'Desarrollador Full Stack en Eunoia Digital, responsable de diseñar e implementar interfaces de usuario atractivas y funcionales utilizando tecnologías como React, Next.js, TypeScript, Tailwind, CSS, Nest.js y Python.',
  },
  {
    date: 'Sep 2020 - Abr 2022',
    title: 'Desarrollador Full Stack',
    company: 'Ogilvy',
    description:
      'Trabajé en proyectos internacionales con Drupal 7/8, donde realicé tareas de sitebuilding, solución de errores (bug fixing) y administración de contenido. Además, me encargué del aseguramiento de la calidad utilizando herramientas como Selenium y New Relic. También tengo experiencia en el uso de Sass, Bootstrap y CSS para el diseño y desarrollo de interfaces de usuario, así como en el desarrollo de aplicaciones web con Angular y React.',
  },
  {
    date: 'Abr 2018 - Jun 2019',
    title: 'Desarrollador Web',
    company: 'Jausas Legal',
    description:
      'Mi experiencia laboral incluye trabajar con Pardot y Wordpress, donde estuve involucrado en diversas tareas como la gestión de bases de datos, la creación y modificación de landing pages en Pardot, así como la gestión de contenido en Wordpress.',
  },
];
