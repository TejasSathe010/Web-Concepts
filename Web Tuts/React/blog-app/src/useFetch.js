import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    // Runs every render of component or State changes
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
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
            setError(err.message);
            setIsPending(false);
          })
        }, 2000);
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;