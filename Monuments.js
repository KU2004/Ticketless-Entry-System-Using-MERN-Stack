import React from "react";
import { Link } from "react-router-dom";

function Monuments() {
  return (
    <div>
      <h1>Monuments Page</h1>
      <p>Explore famous monuments here.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Monuments;
