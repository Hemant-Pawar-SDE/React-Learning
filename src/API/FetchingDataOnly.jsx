import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchingDataOnly() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.data;

      setUsers(data);
    }

    getData();
  }, []);

  return (
    <div>
      {users.map((item) => {
        const { id, name, email, phone } = item;
        return (
          <div key={id}>
            <p>ID:{id}</p>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FetchingDataOnly;
