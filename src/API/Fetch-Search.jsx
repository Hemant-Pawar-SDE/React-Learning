import React, { useEffect, useState } from "react";

function FetchDemo2() {
  const [userData, setUserData] = useState([]);
  const [showID, setShowID] = useState(null);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);

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

  const newData = userData.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase()); //search by name
  });

  return (
    <div>
      <input
        type="search"
        placeholder="Search Title here...."
        value={searchText}
        onChange={(e) => {
          setSearchtext(e.target.value);
        }}
      />
      {newData.map((user) => {
        const { id, name, email, phone } = user;
        return (
          <div key={user.id}>
            <p>
              <strong>ID:</strong>
              {id}
            </p>
            <p>
              <strong>name:</strong>
              {name}
            </p>
            <button
              onClick={() => {
                handleShow(id);
              }}
            >
              {showID === id ? "Hide" : "Show"}
            </button>
            <div>
              {showID === id ? (
                <div>
                  <p>
                    <strong>email:</strong>
                    {email}
                  </p>
                  <p>
                    <strong>phone:</strong>
                    {phone}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchDemo2;
