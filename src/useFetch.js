import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPending(false);
          seterror(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setisPending(false);
            seterror(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, []);

  return { data, isPending, error };
}

export default useFetch;
