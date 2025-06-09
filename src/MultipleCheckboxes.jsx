import { useState } from "react";

function MultipleCheckboxes() {
  const MI = ["Rohit", "Surya", "Hardik", "Tilak"];

  const [selected, setSelected] = useState([]);
  const [res, setRes] = useState([]);

  function handleChange(e) {
    if (e.target.checked) {
      setSelected((prev) => {
        return [...prev, e.target.value];
      });
    } else {
      setSelected((prev) => {
        return prev.filter((x) => {
          return x !== e.target.value;
        });
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRes(selected);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {MI.map((player) => {
          return (
            <div>
              <input
                type="checkbox"
                value={player}
                id={player}
                onChange={handleChange}
              />
              <label htmlFor={player}>{player}</label>
            </div>
          );
        })}
        <button type="Submit">Submit</button>
      </form>
      <h1>selected values: {res.join(", ").toUpperCase()}</h1>
    </div>
  );
}
export default MultipleCheckboxes;
