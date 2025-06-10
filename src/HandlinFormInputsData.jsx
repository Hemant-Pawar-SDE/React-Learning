import React, { useState } from "react";

//multiple inputs
function HandlingFormInputs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { id, name, value, type, checked } = e.target;

    if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [id]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      agreeToTerms: false,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <h3>Select Gender:</h3>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        <br />

        <input
          type="checkbox"
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <label htmlFor="agreeToTerms">Agree To Terms and Conditions</label>
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Fallback UI */}
      <div>
        <h3>Submitted Data:</h3>
        {submitted ? (
          <ul>
            <li>
              <strong>Name:</strong> {submitted.name}
            </li>
            <li>
              <strong>Email:</strong> {submitted.email}
            </li>
            <li>
              <strong>Password:</strong> {submitted.password}
            </li>
            <li>
              <strong>Gender:</strong> {submitted.gender}
            </li>
            <li>
              <strong>Agreed to Terms:</strong>{" "}
              {submitted.agreeToTerms ? "Yes" : "No"}
            </li>
          </ul>
        ) : (
          <p>No submission yet.</p>
        )}
      </div>
    </div>
  );
}

export default HandlingFormInputs;
