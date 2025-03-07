import React from "react";
import { Link } from "react-router-dom";

function Palaces() {
  return (
    <div>
      <h1>Palaces Page</h1>
      <p>Explore majestic palaces and royal residences.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Palaces;
