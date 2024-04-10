'use client';
import React from 'react';
import ExperienceItem, { ExperienceItemProps } from './ExperienceItem';
import { useSectionInView } from '@/lib/hooks';

interface ExperienceListProps {
  experiences: ExperienceItemProps[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  const { ref } = useSectionInView('Experiencia');

  return (
    <ol className="relative mt-16" ref={ref} id="experiencia">
      {experiences.map((experience, index) => (
        <li key={index} className="">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
