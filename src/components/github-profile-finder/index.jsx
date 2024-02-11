import React, { useState } from "react";
const GitHubProfileFinder = () => {
  const [username, setUsername] = useState("rBhagat4196");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        // console.log(userData);
        setUserData(userData);
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-[500px] mx-auto border-2 border-blue-200 p-1 rounded-xl">
      <div className="text-blue-600 text-3xl text-center">
        GitHub Profile Finder
      </div>
      <div className="container mx-auto p-2">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          GitHub Profile Finder
        </h1>
        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={loading || !username}
            className={`px-6 py-2 rounded-r focus:outline-none ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {userData && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="w-20 h-20 rounded-full mr-4 border border-gray-300"
              />
              <div>
                <h2 className="text-xl font-semibold">
                  {userData.name || userData.login}
                </h2>
                <p className="text-gray-600">@{userData.login}</p>
                {userData.bio && <p className="mt-2">{userData.bio}</p>}
                <div className="mt-4 flex space-x-4">
                  <div>
                    <p className="font-semibold">{userData.followers}</p>
                    <p className="text-sm text-gray-600">Followers</p>
                  </div>
                  <div>
                    <p className="font-semibold">{userData.following}</p>
                    <p className="text-sm text-gray-600">Following</p>
                  </div>
                  <div>
                    <p className="font-semibold">{userData.public_repos}</p>
                    <p className="text-sm text-gray-600">Repos</p>
                  </div>
                </div>
                {userData.location && (
                  <p className="mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-1 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 10.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {userData.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
