// CUSTOM HOOK
import { useState, useEffect } from 'react';
export default function useFetchGithubUserDetails(user) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Cannot fetch!');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Data');
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          console.log('Error');
          setLoading(false);
          setError(err.message);
          console.log(err.message);
          setData(null);
        });
    }
  }, [user]);
  return [data, loading, error];
}
