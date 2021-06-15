import { useRef } from "react";
import { useAsync } from "react-use";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mockedApiCall(data: string) {
  await sleep(2000);
  return data;
}

export function useSuspenseAsyncData(data: string) {
  const promise = useRef<Promise<string>>();
  const { loading, value } = useAsync(async () => {
    promise.current = mockedApiCall(data);
    return promise.current;
  }, [data]);

  if (loading && promise.current) {
    throw promise.current;
  }

  return value;
}

export function useAsyncData(data: string) {
  return useAsync(() => mockedApiCall(data), [data]);
}
