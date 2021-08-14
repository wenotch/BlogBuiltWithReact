import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          seterror(err.message);
          setisPending(false);
        });
    }, 1000);
  }, []);

  return { data, isPending, error };
}

export default useFetch;
