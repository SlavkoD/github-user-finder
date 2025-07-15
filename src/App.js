import React, { useState } from "react";
import Form from "./components/Form/Form";
import UserDetails from "./components/UserDetails/UserDetails";
import { getUser, getRepos } from "./api/github";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async (username) => {
    try {
      const userData = await getUser(username);
      const repoData = await getRepos(username);
      setUser(userData);
      setRepos(repoData);
    } catch {
      alert("Greška prilikom dohvaćanja podataka");
    }
  };

  const handleReset = () => {
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="app">
      <h1>GitHub User Finder</h1>
      {!user ? (
        <Form onSubmit={handleSearch} />
      ) : (
        <UserDetails user={user} repos={repos} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
