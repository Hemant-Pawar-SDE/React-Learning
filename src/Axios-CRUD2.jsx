
import React, { useState } from "react";
import axios from "axios";

function EasyApproach2AddPost({ posts, setPosts }) {
  const [newpost, setnewpost] = useState({ title: "", body: "" });

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newpost
      );
      const data = await response.data;
      setPosts([...posts, data]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="title here..."
          value={newpost.title}
          onChange={(e) => {
            setnewpost({ ...newpost, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="body here..."
          value={newpost.body}
          onChange={(e) => {
            setnewpost({ ...newpost, body: e.target.value });
          }}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default EasyApproach2AddPost;
