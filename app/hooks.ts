import { useRouter } from "next/navigation";
import { useRef } from "react";

export function useBackpressure(delay: number = 300) {
  const router = useRouter();
  const isUpdatingRef = useRef(false);
  const updateCountRef = useRef(0);
  const latestUrlRef = useRef("");
  const formRef = useRef<HTMLFormElement>(null);

  async function triggerUpdate(newUrl: string) {
    updateCountRef.current++;
    latestUrlRef.current = newUrl;

    if (!isUpdatingRef.current) {
      isUpdatingRef.current = true;
      const currentUpdateCount = updateCountRef.current;

      router.replace(newUrl);

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          isUpdatingRef.current = false;
          if (updateCountRef.current !== currentUpdateCount) {
            formRef.current?.requestSubmit();
          }
          resolve();
        }, delay);
      });
    }
  }

  const shouldSuspend = updateCountRef.current > 0 && !isUpdatingRef.current;

  return { triggerUpdate, shouldSuspend, formRef };
}
