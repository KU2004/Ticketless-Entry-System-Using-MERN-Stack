import React from "react";
import { Link } from "react-router-dom";

function Forts() {
  return (
    <div>
      <h1>Forts Page</h1>
      <p>Explore historical forts from various regions.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Forts;
