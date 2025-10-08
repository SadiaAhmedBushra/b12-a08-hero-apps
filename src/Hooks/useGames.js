import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('../gameData.json')
    .then((data) => setGames(data.data))
    .catch((err) => setError(err))
    .finally(() => setLoading(false))
  }, []);
  return { games, loading, error };
};

export default useGames;
