import React, { useEffect, useState } from "react";
import location from "./assets/icon-location.svg";
import website from "./assets/icon-website.svg";
import twitter from "./assets/icon-twitter.svg";
import company from "./assets/icon-company.svg";

export default function Profile({ searchValue = "octocat" }) {
    const [userData, setUserData] = useState(null);

    const searchUser = async (user) => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (!response.ok) {
          throw new Error(`GitHub API request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data); // Set the fetched data into the state
      } catch (error) {
        console.error(error);
        // Handle the error or display an error message to the user
      }
    };
  
    useEffect(() => {
      // Use searchValue if it's provided, otherwise use 'octocat'
      const userToSearch = searchValue || 'octocat';
  
      searchUser(userToSearch);
    }, [searchValue]);
  
    if (userData === null) {
      return <div>Loading...</div>;
    }

  return (
    <div className="profile-container">
      <div className="personal-info">
        <div className="bio">
          <div>
            <img
              src={userData.avatar_url}
              style={{ height: "4em", width: "4em", borderRadius: "50%" }}
              alt="profile pic"
            />
          </div>
          <div>
            <div className="username">
              <span style={{ fontWeight: 700, fontSize: "1.6em" }}>
                {userData.login}
              </span>
              <span>Joined {userData.created_at.slice(0,10)}</span>
            </div>
            <p>@{userData.login}</p>
            <p>{userData.bio ? userData.bio : "This profile has no bio"}</p>
          </div>
        </div>
        <div className="stats">
          <div className="category">
            <span style={{ fontSize: ".8em" }}>Repos</span>
            <span style={{ fontSize: "1.4em", fontWeight: 700 }}>
              {userData.public_repos}
            </span>
          </div>
          <div className="category">
            <span style={{ fontSize: ".8em" }}>Followers</span>
            <span style={{ fontSize: "1.4em", fontWeight: 700 }}>
              {userData.followers}
            </span>
          </div>
          <div className="category">
            <span style={{ fontSize: ".8em" }}>Following</span>
            <span style={{ fontSize: "1.4em", fontWeight: 700 }}>
              {userData.following}
            </span>
          </div>
        </div>
        <div className="network">
          <div>
            <div className="link">
              <img src={location} alt="location" />
              <span>{userData.location ? userData.location : "Not Available"}</span>
            </div>
            <div className="link">
              <img src={website} alt="website" />
              <span>{userData.html_url ? userData.html_url : "Not Available"}</span>
            </div>
          </div>
          <div>
            <div className="link">
              <img src={twitter} alt="twitter" />
              <span>Not Available</span>
            </div>
            <div className="link">
              <img src={company} alt="company" />
              <span>{userData.company ? userData.company : "Not Available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
