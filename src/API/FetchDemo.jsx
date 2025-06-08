import React, { useEffect, useState } from "react";

function FetchDemo() {
  const [userData, setUserData] = useState([]);
  const [showID, setShowID] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  function handleShow(id) {
    setShowID(id === showID ? null : id);
  }

  return (
    <div>
      {userData.map(({ id, name, email, phone }) => (
        <div key={id}>
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Name:</strong> {name}</p>
          <button onClick={() => handleShow(id)}>
            {showID === id ? "Hide" : "Show"}
          </button>
          {showID === id && (
            <div>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FetchDemo;
