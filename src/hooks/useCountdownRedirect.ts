import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// TODO: shall we separate the Interface from the definition?
interface UseCountdownRedirectProps {
  redirectTime: number;
  redirectPath: string;
}

export const useCountdownRedirect = ({
  redirectTime,
  redirectPath,
}: UseCountdownRedirectProps): { countdown: number } => {
  const [countdown, setCountdown] = useState(redirectTime);
  const router = useRouter();

  /**
   * TODO: Instead of using only one useEffect, can we split it? Because
   * right now, the effect depends on countdown, redirectPath and router,
   * but redirectPath and router won't change. Also clearInterval is
   * being call in each render, right now it's not a big deal because this
   * is only being used in 404 pages, but this is just an observation
   * 
   * we can hace something like this:
   * 
      useEffect(() => {
        const timer = setInterval(() => {
          setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
      }, []);

      useEffect(() => {
        if (countdown === 0) {
          router.replace(redirectPath);
        }
      }, [countdown, redirectPath, router]);
   */

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (countdown === 0) {
      router.replace(redirectPath);
    }

    return () => clearInterval(timer);
  }, [countdown, redirectPath, router]);

  return { countdown };
};
