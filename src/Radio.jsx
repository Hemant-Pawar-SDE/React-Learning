import React, { useState } from "react";

function Practice() {
  const [gender, setGender] = useState("");
  const [value, setValue] = useState("");

  function handleChange(e) {
    if (e.target.checked) {
      setGender(e.target.id);
    } else {
      setGender("");
    }
  }

  function handleSub(e) {
    e.preventDefault();
    setValue(gender);
  }
  return (
    <div>
      <form onSubmit={handleSub}>
        <h1>Select Gender:</h1>
        <input
          type="radio"
          checked={gender === "male"}
          id="male"
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          checked={gender === "female"}
          id="female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <button>Submit</button>
      </form>
      <h1>Selected:{value}</h1>
    </div>
  );
}

export default Practice;
