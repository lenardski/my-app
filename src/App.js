import "./App.css";
import React from "react";
import proFilePic from "./assets/profile.png";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Modules/Profile.jsx"
import RandomBgColor from "./Modules/FrontendMentor.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <img src={proFilePic} alt="Profile" className="profile-img" />
        <h2 className="myName">Lenard Baluyot</h2>
        <p className="location">London, United Kingdom</p>
        <p className="bio">"Backend Developer"</p>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <button onClick={() => navigate("/frontend-mentor")}>Frontend Mentor</button>
        <button className="disabled">GitHub</button>
        <button className="disabled">LinkedIn</button>
        <button className="disabled">Instagram</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="frontend-mentor" element={<RandomBgColor/>}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

// Challenge 1: React Router (Navigation Between Pages)
// 🎯 Goal:
// 1️ Set up React Router using the react-router-dom library.
// 2️ Create three routes:
//   Home (/) – Displays the main navigation buttons.
//   Profile (/profile) – Displays user profile details.
//   Frontend Mentor (/frontend-mentor) – Displays another content page.
// 3️ Use useNavigate() to allow button-based navigation between pages.
// 4️ Ensure navigation updates the URL without a full page reload.

// 🛠 Steps to Complete:
// Step 1: Ensure React Router is Installed (package: react-router-dom)
// Step 2: Import React Router in App.js
// Step 3: Create the 3 routes (Home, Profile, Frontend Mentor)
//       Please see the Profile and Frontend Mentor page inside Module createRoutesFromChildren.
// Step 4: Define Routes in App.js, reference: https://reactrouter.com/guides/home
// Step 5: Test Your Navigation
// Click on Profile and Frontend Mentor buttons to check if navigation works.
