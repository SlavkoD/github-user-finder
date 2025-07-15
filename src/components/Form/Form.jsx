import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSubmit(username.trim());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
