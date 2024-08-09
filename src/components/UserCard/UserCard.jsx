import React from "react";
import UserImage from "./UserImage.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import UserHeading from "./UserHeading.jsx";
import UserSocial from "./UserSocial.jsx";

const UserCard = ({ picture, lastname, name, position, github, linkedin }) => {
  return (
    <div className="relative max-w-fit overflow-hidden">
      <div className="relative group">
        <UserImage source={picture} />
        <div className="absolute inset-0 flex flex-col justify-start items-start gap-4 bg-indigo-500 bg-opacity-100 opacity-0 group-hover:opacity-100 p-8 rounded-lg transition-opacity duration-300 ease-in-out">
          <UserSocial github={github} linkedin={linkedin} />
        </div>
      </div>
      <UserHeading lastname={lastname} name={name} position={position}/>
    </div>
  );
};

export default UserCard;
