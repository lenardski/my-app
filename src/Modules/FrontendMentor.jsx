// Challenge 3: useEffect (Change Background Color on Page Load)
// 🎯 Goal:
//  1 Use the useEffect hook to trigger a function when the page loads.
//  2 Randomly change the background color of the page each time it loads.
//  3 Ensure the effect runs only once when the component mounts.
//  4 Allow the user to navigate back to the home page.



// 🛠 Steps to Complete:
// Step 1: Import useEffect
// Step 2: Use useEffect to Change Background Color
//  HINT: document.body.style.backgroundColor = getRandomColor();

import { useEffect } from "react";
import { Link } from "react-router-dom";

const RandomBgColor = () => {
  const getRandomColor = () => {
    const colors = [
      "#FFB6C1",
      "#ADD8E6",
      "#90EE90",
      "#FFD700",
      "#FFA07A",
      "#282c34",
    ];
    return colors[Math.floor(Math.random() * colors.length)];

    // To select a random color from an array, the function uses: Math.floor(Math.random() * colors.length)
    // Math.random() generates a decimal between 0 and 1.
    // Multiplying by colors.length scales it to the size of the array.
    // Math.floor() rounds it down to the nearest whole number (ensuring a valid index).

  };
  console.log(getRandomColor);

  useEffect(() => {
      document.body.style.backgroundColor = getRandomColor()
  },[])

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h2>🎨 Background Color Changes on Page Load!</h2>
      <p>Refresh the page to see a new color. 😃</p>
      <Link to="/" className="back-button">
        Go Back
      </Link>
    </div>
  );
};

export default RandomBgColor;
