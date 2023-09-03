import { useState, useCallback, useEffect } from "react";

function useAsync(callback, dependencies = []) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized, ...dependencies]); // Include dependencies in the array

  return { loading, error, value };
}

export default useAsync;
