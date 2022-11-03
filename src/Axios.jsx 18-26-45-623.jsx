import { useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setUser(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {user.length && user.map((i) => <h2 key={i.id}>{i.first_name}</h2>)}
    </div>
  );
}
