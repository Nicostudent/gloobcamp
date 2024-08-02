import Link from "next/link";
import Image from "next/image";
const UserSocial = ({ github, linkedin }) => {
  return (
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
        <Image src="/linkedin.svg" alt="linkedin logo" width={20} height={20} />
      </Link>
    </article>
  );
};

export default UserSocial;
