import { useEffect, useState } from "react";

export default function useFetchImages(apiUrl, params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams();

    for (const key in params) {
      if (Array.isArray(params[key])) {
        params[key].forEach((value) => {
          queryParams.append(key, value);
        });
      } else {
        queryParams.set(key, params[key]);
      }
    }

    const requestUrl = `${apiUrl}?${queryParams.toString()}`;

    const fetchData = async () => {
      try {
        const response = await fetch(requestUrl);
        if (!response.ok) {
          throw new Error("Fetch request failed with status code: " + response.status);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, params]);

  return { data, error, loading };
}
