import { useState } from "react";

export const useFetchData = (url, options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url, options]);

  return data;
};
