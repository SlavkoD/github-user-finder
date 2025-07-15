import React from "react";
import "./UserDetails.css";

const UserDetails = ({ user, repos, onReset }) => {
  return (
    <div className="user-details">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.name}</h2>
      <p>
        <strong>Location:</strong> {user.location}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>

      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UserDetails;
