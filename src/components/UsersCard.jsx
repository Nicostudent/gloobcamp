import Image from "next/image";
import Link from "next/link";
const UsersCard = ({ picture, lastname, name, position, github, linkedin }) => {
  return (
    <div className="bg-white max-w-fit shadow-lg rounded-lg">
      <article>
        <Image
          src={picture}
          alt="A picture of the member team"
          width={500}
          height={500}
          className="size-72"
        />
      </article>

      <article className="py-2 px-4 text-center">
        <h3 className="text-xl text-secondary font-bold">
          {lastname}, <span className="text-primary">{name}</span>
        </h3>
        <p className="text-gray-600">{position}</p>
      </article>

      <article className="flex text-center">
        <Link
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center text-white font-bold px-4 py-2 bg-primary hover:opacity-90 w-full ease-in-out duration-300"
        >
          <Image src="/github.svg" alt="github logo" width={20} height={20} />
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center text-white font-bold px-4 py-2 bg-primary hover:opacity-90 w-full ease-in-out duration-300"
        >
          <Image
            src="/linkedin.svg"
            alt="linkedin logo"
            width={20}
            height={20}
          />
        </Link>
      </article>
    </div>
  );
};

export default UsersCard;
