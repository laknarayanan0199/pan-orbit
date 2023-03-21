import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const result = await axios.get("https://panorbit.in/api/users.json");
      setUsers(result.data.users);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return { users, loading };
};
