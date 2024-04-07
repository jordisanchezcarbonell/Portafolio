import React from "react";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

interface ExperienceListProps {
  experiences: ExperienceItemProps[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <ol className="relative mt-16">
      {experiences.map((experience, index) => (
        <li key={index} className="">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
