import { useState, useEffect } from "react";

//4 - custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);

  //5 - refatorando o POST
  const [config, setCongig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  //6 - loading
  const [loading, setLoading] = useState(false);

  //7 - tratando erros
  const [error, setError] = useState(null);

  const httpCongig = (data, method) => {
    if (method === "POST") {
      setCongig({
        method,
        headers: {
          "content-type": "application-json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("houve algum erro ao carregar os dados");
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpCongig, loading, error };
};

export default useFetch;
