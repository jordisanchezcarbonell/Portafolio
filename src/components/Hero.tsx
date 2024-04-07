/* eslint-disable @next/next/no-img-element */
import React from "react";
import Badge from "@/components/Badge";
import LinkedInIcon from "@/components/icons/LinkedIn";
import MailIcon from "@/components/icons/Mail";
import SocialPill from "@/components/SocialPill";

const personalImageAlt: string = "Jordi Sánchez Carbonell";

const HomePageContent: React.FC = () => {
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src="/js.webp"
          alt={personalImageAlt}
        />
        <a
          href="https://linkedin.com/in/midudev"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>Disponible para trabajar</Badge>
        </a>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        Hey, soy Jordi Sánchez Carbonell
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
        +15 años de experiencia.{" "}
        <strong>
          Ingeniero de Software y Creador de Contenido sobre Programación
        </strong>{" "}
        de Barcelona, España 🇪🇸. Especializado en el desarrollo de aplicaciones
        web únicas.
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        <SocialPill href="mailto:miduga@gmail.com">
          <MailIcon className="size-4" />
          Contáctame
        </SocialPill>
        <SocialPill href="https://linkedin.com/in/midudev">
          <LinkedInIcon className="size-4" />
          LinkedIn
        </SocialPill>
      </div>
    </div>
  );
};

export default HomePageContent;
