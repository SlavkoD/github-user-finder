export const getUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error("User not found");
  return await response.json();
};

export const getRepos = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  if (!response.ok) throw new Error("Repos not found");
  return await response.json();
};
