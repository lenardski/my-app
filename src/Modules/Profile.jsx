import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Profile = () => {
  const [toggle, setToggle] = useState(false)
  const handleShowBioClick = () => {
    setToggle(!toggle)
  };

  return (
    <div className="page-container">
      <h2>Profile Page</h2>
      <p>
        Welcome to{" "}
        <span
          onClick={handleShowBioClick}
          className="name-toggle"
          style={{ cursor: "pointer", fontWeight: "bold", color: "#007bff" }}
        >
          Lenard Baluyot!
        </span>
        's profile page.
      </p>
      <div
        className="bio-container"
        style={{
          maxHeight: toggle ? "100px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          background: "#444",
        }}
      >
        <p className="bio">I love the basic introduction to React!</p>
      </div>
      <Link to="/" className="back-button">
        Go Back
      </Link>
    </div>
  );
};

export default Profile;

// Challenge 2: useState (Toggle Bio on Profile Page)
// 🎯 Goal:
// 1️ Use the useState hook to store a boolean state (true or false).
// 2️ Create a toggle effect that shows or hides the bio when clicking the user’s name.
// 3️ Apply a smooth animation when showing or hiding the bio.