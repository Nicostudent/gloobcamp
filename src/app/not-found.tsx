"use client";

import { useCountdownRedirect } from "@/hooks";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const REDIRECT_TIME = 5;

  const { countdown } = useCountdownRedirect({
    redirectTime: REDIRECT_TIME,
    redirectPath: "/",
  });

  const router = useRouter();

  const handleGoHomeClick = () => {
    router.replace("/");
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="relative">
        <h1 className="font-extrabold text-9xl text-black tracking-widest">
          404
        </h1>
        <div className="top-10 absolute bg-primary px-2 rounded w-full font-bold text-center text-xl tracking-widest rotate-12">
          <p>Page Not Found</p>
        </div>
      </div>
      <p className="mt-4 text-black">
        You will be redirected to home in {countdown} seconds...
      </p>
      <button
        onClick={handleGoHomeClick}
        className="bg-primary hover:bg-blue-700 mt-5 px-4 py-2 border border-blue-700 rounded font-bold text-white"
      >
        Go Home
      </button>
    </main>
  );
};

export default NotFound;
