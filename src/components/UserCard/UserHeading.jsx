import React from "react";

const UserHeading = ({ lastname, name, position }) => {
  return (
    <article className="py-2 px-4 text-center">
      <h3 className="text-xl text-secondary font-bold">
        {lastname}, <span className="text-primary">{name}</span>
      </h3>
      <p className="text-gray-600">{position}</p>
    </article>
  );
};

export default UserHeading;
