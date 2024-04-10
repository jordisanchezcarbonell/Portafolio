// Importaciones de componentes
import AboutMe from '@/components/AboutMe';
import Briefcase from '@/components/icons/Briefcase';
import CodeIcon from '@/components/icons/Code';
import Experience from '@/components/Experience';
import ProfileCheck from '@/components/icons/ProfileCheck';
import Projects from '@/components/Projects';
import SectionContainer from '@/components/SectionContainer';
import Hero from '@/components/Hero';
import EmailTemplate from '@/components/email-template';

const EXPERIENCIE = [
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
const HomePage: React.FC = () => {
  return (
    <main>
      <SectionContainer id="Inicio" className="py-16 md:py-36">
        <Hero />
      </SectionContainer>

      <div className="space-y-24">
        {/* Sección de experiencia laboral */}
        <SectionContainer id="Experiencia" className={''}>
          <>
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <Briefcase className="size-8" />
              Experiencia laboral
            </h2>
            <Experience experiences={EXPERIENCIE} />
          </>
        </SectionContainer>

        {/* Sección de proyectos */}
        <SectionContainer id="Proyectos" className={''}>
          <>
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <CodeIcon className="size-7" />
              Proyectos
            </h2>
            <Projects />
          </>
        </SectionContainer>

        {/* Sección sobre mí */}
        <SectionContainer id="Sobre mí" className={''}>
          <>
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
              <ProfileCheck className="size-8" />
              Sobre mí
            </h2>
            <AboutMe personalImageAlt={''} />
          </>
        </SectionContainer>

        {/* Sección sobre mí */}
        <SectionContainer id="Contacto" className={''}>
          <EmailTemplate firstName={'Jordi'} />
        </SectionContainer>
      </div>
    </main>
  );
};

export default HomePage;
