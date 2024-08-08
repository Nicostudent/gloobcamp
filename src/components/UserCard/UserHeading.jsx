import React from "react";

const UserHeading = ({ lastname, name, position }) => {
  return (
    <div className="p-4">
      <p className="text-lg">
        {name} {lastname}{" "}
      </p>
      <span className="text-sm">{position}</span>
    </div>
  );
};

export default UserHeading;
