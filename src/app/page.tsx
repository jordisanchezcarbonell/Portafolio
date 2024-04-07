// Importaciones de componentes
import AboutMe from "@/components/AboutMe";
import Briefcase from "@/components/icons/Briefcase";
import CodeIcon from "@/components/icons/Code";
import Experience from "@/components/Experience";
import ProfileCheck from "@/components/icons/ProfileCheck";
import Projects from "@/components/Projects";
import SectionContainer from "@/components/SectionContainer";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import EmailTemplate from "@/components/email-template";

const EXPERIENCIE = [
  {
    date: "Actualmente...",
    title: "Creador de Contenido",
    company: "Twitch",
    description:
      "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
    link: "https://twitch.tv/midudev",
  },
  {
    date: "Septiembre 2022",
    title: "Principal Frontend Engineer",
    company: "Adevinta Spain",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
  },
];
const HomePage: React.FC = () => {
  return (
    <main className="px-4">
      <SectionContainer className="py-16 md:py-36" id={""}>
        <Hero>{/* Contenido del héroe */}</Hero>
      </SectionContainer>

      <div className="space-y-24">
        {/* Sección de experiencia laboral */}
        <SectionContainer id="experiencia" className={""}>
          <>
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <Briefcase className="size-8" />
              Experiencia laboral
            </h2>
            <Experience experiences={EXPERIENCIE} />
          </>
        </SectionContainer>

        {/* Sección de proyectos */}
        <SectionContainer id="proyectos" className={""}>
          <>
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <CodeIcon className="size-7" />
              Proyectos
            </h2>
            <Projects />
          </>
        </SectionContainer>

        {/* Sección sobre mí */}
        <SectionContainer id="sobre-mi" className={""}>
          <>
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
              <ProfileCheck className="size-8" />
              Sobre mí
            </h2>
            <AboutMe personalImageAlt={""} />
          </>
        </SectionContainer>

        {/* Sección sobre mí */}
        <SectionContainer id="contacto" className={""}>
          <EmailTemplate firstName={"Jordi"} />
        </SectionContainer>
      </div>
    </main>
  );
};

export default HomePage;
