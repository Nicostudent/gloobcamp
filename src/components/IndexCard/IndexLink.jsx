import Link from "next/link";
export const IndexLink = ({ topic }) => {
  return (
    <Link href={`JavaScript${topic.path}`}>
      <p className="py-2 lg:max-w-28 text-sm text-tertiary sm:text-md hover:text-secondary hover:underline duration-100 ease-in-out">
        {topic.id}. {topic.title}
      </p>
    </Link>
  );
};

