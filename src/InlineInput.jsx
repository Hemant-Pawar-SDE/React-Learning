import React, { useState } from "react";

// Minimal styling
const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  padding: "8px",
  marginBottom: "10px",
};

const inputStyle = {
  flex: 1,
  padding: "6px",
  marginRight: "10px",
};

const buttonStyle = {
  padding: "6px 12px",
};

export default function ShowData() {
  const [data, setData] = useState([
    { id: 1, title: "Hello world" },
    { id: 2, title: "Waking up" },
    { id: 3, title: "Going to gym" },
  ]);
  const [editItem, setEditItem] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function handleEdit(item) {
    setEditItem(item.id);
    setInputValue(item.title);
  }

  function handleSave(id) {
    const updated = data.map((item) =>
      item.id === id ? { ...item, title: inputValue } : item
    );
    setData(updated);
    setEditItem(null);
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={rowStyle}>
          {editItem === item.id ? (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={inputStyle}
              />
              <button onClick={() => handleSave(item.id)} style={buttonStyle}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>{item.title}</p>
              <button onClick={() => handleEdit(item)} style={buttonStyle}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

