import Link from "next/link";
const NotFound = () => {
  return (
    <div className="text-3xl font-bold gap-2 flex justify-center items-center h-screen">
      <h1>Page Not Found, try go back to</h1>
      <Link className="underline" href="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
