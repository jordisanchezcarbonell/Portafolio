import React from "react";

interface LinkCardProps {
  title: string;
  body: string;
  href: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, body, href }) => {
  return (
    <li className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  );
};

export default LinkCard;
