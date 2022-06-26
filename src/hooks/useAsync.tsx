import { useState, useMemo } from "react";

interface AsyncResult<T> {
  result: T;
  loading: boolean;
  error: any;
}

export function useAsync<T>(callback: () => Promise<unknown>, debounce?: number): AsyncResult<T> {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useMemo(() => {
    const callCallback = () => {
      callback()
        .then((result) => {
          setResult(result);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    };

    const debouncedCallback = (): number => {
      return window.setTimeout(callCallback, debounce);
    };
    let timerId: number;
    setLoading(true);
    if (debounce) {
      timerId = debouncedCallback();
    } else {
      callCallback();
    }
    return () => {
      window.clearTimeout(timerId);
    };
  }, [callback, debounce]);

  return {
    result,
    loading,
    error,
  };
}
