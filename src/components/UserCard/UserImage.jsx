import React from "react";
import Image from "next/image";

const UserImage = ({ source }) => {
  return (
    <article>
      <Image
        src={source}
        alt="A picture of the member team"
        width={500}
        height={500}
        className="rounded-lg size-72"
      />
    </article>
  );
};

export default UserImage;
