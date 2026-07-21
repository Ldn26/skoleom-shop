import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export function useFetch<T>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setIsLoading(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setData(null);
    setIsLoading(true);
    setError(null);

    axios
      .get<T>(url, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}
