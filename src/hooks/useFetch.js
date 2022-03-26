import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(null);

  useEffect(() => {
    const abortCtrls = new AbortController();
    fetchData(abortCtrls);
    return () => abortCtrls.abort;
  }, [url]);

  const fetchData = async (abortCtrls) => {
    try {
      let response = await fetch(url, { signal: abortCtrls.signal });
      let data = await response.json();
      if (!response.ok) {
        setData(null);
        setLoading(false);
        throw Error("Server Error");
      }
      setData(data);
      setLoading(false);
      setErrors(null);
    } catch (e) {
      if (e.name === "AbortError") {
        console.log("fetch aborted");
      } else {
        console.log("Error Server");
        setErrors(e.message);
        setLoading(false);
      }
    }
  };

  return { data, loading, error };
};

export default useFetch;
