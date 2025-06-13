import React, { useEffect, useState } from "react";
import axios from "axios";
import EasyApproach2AddPost from "./Axios-CRUD2";


function EasyApproach2() {
  const [posts, setPosts] = useState([]);
  const [showid, setShowid] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [debounced, setdebounced] = useState("");
  useEffect(() => {
    async function getdata() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.data;
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getdata();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setdebounced(searchText);
    }, 500);

    return () => {
      return clearTimeout(timer);
    };
  }, [searchText]);

  function handleShow(id) {
    setShowid(showid === id ? null : id);
  }

  function handleDelete(id) {
    setPosts((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  const filteredData = posts.filter((item) => {
    return item.title.toLowerCase().includes(debounced.toLowerCase());
  });

  return (
    <div>
      <div>
        <EasyApproach2AddPost posts={posts} setPosts={setPosts} />
        <input
          type="search"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div>
        {filteredData.map((item) => {
          const { id, title, body } = item;
          return (
            <div key={id}>
              <p>ID:{id}</p>
              <p>Title:{title}</p>
              <button
                onClick={() => {
                  handleShow(id);
                }}
              >
                {showid === id ? "HIDE" : "SHOW"}
              </button>
              {showid === id ? <p>Body:{body}</p> : null}

              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                DELETE
              </button>
              <button
                onClick={() => {
                  handleEdit(id);
                }}
              >
                EDIT
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EasyApproach2;
