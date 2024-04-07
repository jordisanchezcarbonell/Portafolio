"use client";
import React from "react";
import GitHub from "./icons/GitHub";
import NextJS from "./icons/NextJS";
import Tailwind from "./icons/Tailwind";
import Link from "./icons/Link";
import LinkButton from "./LinkButton";

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
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
};

const PROJECTS: Project[] = [
  {
    title: "SVGL - A beautiful library with SVG logos",
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    link: "https://svgl.vercel.app/",
    github: "https://github.com/pheralb/svgl",
    image: "/projects/svgl.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "AdventJS - Retos de programación con JavaScript y TypeScript",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];

const ProjectList: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-16">
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
                  loading="lazy"
                  src={image}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>
              <div className="flex flex-wrap mt-2">
                <ul className="flex flex-row mb-2 gap-x-2">
                  {tags.map((tag, index) => (
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

                <div className="mt-2 text-gray-700 dark:text-gray-400">
                  {description}
                </div>
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
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default ProjectList;
