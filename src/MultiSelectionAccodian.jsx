//multi selection
import React, { useState } from "react";
import accordianData from "./accordianData";

export default function AccordianMulti() {
  const [selectedId, setSelectedID] = useState(null);
  const [Multiple, setMultiple] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  function handleClick(id) {
    if (enableMulti) {
      //for multi selection logic
      if (Multiple.includes(id)) {
        setMultiple(
          Multiple.filter((item) => {
            return item !== id;
          })
        );
      } else {
        setMultiple((prev) => {
          return [...prev, id];
        });
      }
    } else {
      //for single selection logic
      if (selectedId === id) {
        setSelectedID(null);
      } else {
        setSelectedID(id);
      }
    }
  }
  return (
    <div>
      {accordianData.map((data) => {
        return (
          <div key={data.id}>
            <div
              onClick={() => {
                handleClick(data.id);
              }}
            >
              <h2>{data.question}</h2>
              <span>
                {(
                  enableMulti
                    ? Multiple.includes(data.id)
                    : selectedId === data.id
                )
                  ? "-"
                  : "+"}
              </span>
            </div>
            {(
              enableMulti ? Multiple.includes(data.id) : selectedId === data.id
            ) ? (
              <div>{data.answer}</div>
            ) : null}
          </div>
        );
      })}
      <button
        onClick={() => {
          setEnableMulti(!enableMulti);
        }}
      >
        {enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
    </div>
  );
}
