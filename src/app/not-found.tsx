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
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-black tracking-widest">
          404
        </h1>
        <div className="bg-primary px-2 text-xl rounded rotate-12 absolute top-10 font-bold w-full text-center tracking-widest">
          <p>Page Not Found</p>
        </div>
      </div>
      <p className="text-black mt-4">
        You will be redirected to home in {countdown} seconds...
      </p>
      <button
        onClick={handleGoHomeClick}
        className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-5"
      >
        Go Home
      </button>
    </main>
  );
};

export default NotFound;
