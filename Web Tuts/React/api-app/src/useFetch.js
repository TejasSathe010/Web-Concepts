import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    // Runs every render of component or State changes
    useEffect(() => {
      const abortCont = new AbortController();
        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
          .then(res => {
            if(!res.ok) {
              throw new Error('Could not fetch blog data');
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            if(err.name === 'AbortError') {
              console.log("Request Aborted!");
            } else {
              setError(err.message);
              setIsPending(false);
            }
          })
        }, 1000);
        return () => {abortCont.abort()}
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;