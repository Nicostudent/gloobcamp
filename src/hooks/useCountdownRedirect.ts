import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
