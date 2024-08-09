import Link from "next/link";
import Image from "next/image";
const UserSocial = ({ github, linkedin }) => {
  return (
    <div className="flex gap-3">
      <Link
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-white hover:bg-indigo-800 px-6 py-2 border rounded-full text-lg text-white hover:text-black transition-colors duration-300"
      >
        <Image src="/linkedin.svg" alt="linkedin logo" width={20} height={20} />
      </Link>
      <Link
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-block border-white hover:bg-indigo-800 px-6 py-2 border rounded-full text-lg text-white hover:text-black transition-colors duration-300"
      >
        <Image src="/github.svg" alt="github logo" width={20} height={20} />
      </Link>
    </div>
  );
};

export default UserSocial;
