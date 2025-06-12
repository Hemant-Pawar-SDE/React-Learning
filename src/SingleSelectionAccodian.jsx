//single selection
import React, { useState } from "react";
import accordianData from "./accordianData";

function Accordian1() {
  const [selectedID, setSelectedID] = useState(null);

  function handleClick(id) {
    if (selectedID === id) {
      setSelectedID(null);
    } else {
      setSelectedID(id);
    }
  }

  return (
    <div>
      {accordianData.map((data) => (
        <div key={data.id}>
          <div
            onClick={() => handleClick(data.id)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              padding: "8px 12px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>{data.question}</span>
            <span>{selectedID === data.id ? "-" : "+"}</span>
          </div>
          {selectedID === data.id && (
            <div style={{ padding: "8px 12px", backgroundColor: "#f9f9f9" }}>
              {data.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordian1;
