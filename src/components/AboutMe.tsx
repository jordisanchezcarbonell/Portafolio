/* eslint-disable @next/next/no-img-element */
import React from "react";

interface PersonalInfoProps {
  personalImageAlt: string;
}

const PersonalInfo = ({ personalImageAlt }: PersonalInfoProps) => {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="order-2 md:order-1">
        <p className="mb-4 text-pretty">
          Me llamo Jordi Sánchez Carbonell pero mis amigos me llaman midu.
          Empecé en la programación con un Amstrad, tenía 10 años. Actualmente
          estoy{" "}
          <strong className="text-yellow-500 dark:text-yellow-100 font-normal font-mono">
            liderando equipos de desarrollo en multinacionales
          </strong>
          .
        </p>
        <p className="text-pretty">
          Algunos de mis éxitos incluyen{" "}
          <strong className="text-yellow-500 dark:text-yellow-100 font-normal font-mono">
            colaborar con Mozilla para el desarrollo de las primeras apps en su
            sistema FirefoxOS
          </strong>
          . Aunque hoy está desaparecido fue un gran avance en el mundo del
          desarrollo web.
        </p>
        <p className="text-pretty">
          Como creador de contenido,{" "}
          <strong className="text-yellow-500 dark:text-yellow-100 font-normal font-mono">
            cuento con el canal de habla hispana más visto del mundo en la
            categoría de <em className="italic">Software & Game Development</em>{" "}
            en Twitch
          </strong>
          . Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el
          acceso a contenido de calidad.
        </p>
      </div>

      <img
        src="/js.webp"
        alt={personalImageAlt}
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
        style={{ objectPosition: "50% 50%", width: "200px", height: "200px" }}
      />
    </article>
  );
};

export default PersonalInfo;
