import useAsync from './useAsync'

// FIX useFetch HOOK AND useAsync HOOK

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}


export default function useFetch(url, options = {}, dependencies = []) {
  const asyncResult = useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
  }, dependencies)

  return asyncResult
}

// import { useEffect, useState } from "react";

// const useFetch = (initialUrl, options) => {
//     const [url, setUrl] = useState(initialUrl || "");
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if(!url) return

//         const fetchData = async () => {
//             setLoading(true)
//             try {
//                 const response = await fetch(url, {...DEFAULT_OPTIONS, ...options})
//                 if (!response.ok) {
//                     throw new Error(`HTTP error status: ${response.status}`);
//                 }
//                 const json = await response.json()
//                 setData(json)
//                 setLoading(false)
//                 setError(null)

//             } catch (error) {
//                 //This catches the error if either of the promises fails or the manual error is thrown
//                 setLoading(false)
//                 setError(error.message)
//             }
//         }

//         fetchData()
// }, [url, options]);

//     return [{ data, loading, error }, setUrl];
// }

// export default useFetch;
