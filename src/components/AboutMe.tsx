/* eslint-disable @next/next/no-img-element */
'use client';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';

interface PersonalInfoProps {
  personalImageAlt: string;
}

const PersonalInfo = ({ personalImageAlt }: PersonalInfoProps) => {
  const { ref } = useSectionInView('Sobremí');
  return (
    <article
      className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"
      id="sobre-mi"
      ref={ref}
    >
      <div className="order-2 md:order-1">
        <p className="mb-4">
          ¡Hola! Soy Jordi, un desarrollador web apasionado con experiencia
          tanto en front-end como en back-end. Me especializo en tecnologías
          como
          <strong className="text-yellow-500 dark:text-yellow-100 font-normal font-mono">
            {' '}
            React, Next.js, Node.js y Nest.js{' '}
          </strong>{' '}
          creando aplicaciones robustas y escalables.
        </p>
        <p className="mb-4">
          Fuera del trabajo, soy un entusiasta del deporte y un seguidor ávido
          de la NFL y la UFC. También tengo un gran interés en la ciberseguridad
          y disfruto mantenerme al día con las últimas noticias y tendencias en
          este campo.
        </p>
        <p>
          En mi tiempo libre, me encanta sumergirme en un buen libro y ampliar
          mis horizontes. Estoy emocionado de enfrentar nuevos desafíos tanto en
          mi carrera como en mis pasatiempos. ¡Espero tener la oportunidad de
          trabajar juntos!
        </p>
      </div>

      <img
        src="/js.webp"
        alt={personalImageAlt}
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
        style={{ objectPosition: '50% 50%', width: '200px', height: '200px' }}
      />
    </article>
  );
};

export default PersonalInfo;
