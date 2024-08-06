import Link from "next/link";
export const LinkButton = ({ href, title, dark }) => {
const colored = "bg-primary hover:bg-blue-700 mt-5 px-4 py-2 border border-blue-700 rounded font-bold text-white";

  return (
    <Link href={href}>
      <p className={`${dark ? colored : "py-2 lg:max-w-28 text-sm text-tertiary sm:text-md hover:text-secondary hover:underline duration-100 ease-in-out"}`}>
        {title}
      </p>
    </Link>
  );
};

