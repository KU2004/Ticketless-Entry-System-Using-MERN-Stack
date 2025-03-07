import React from "react";
import { Link } from "react-router-dom";

function Caves() {
  return (
    <div>
      <h1>Caves Page</h1>
      <p>Discover ancient and natural caves.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Caves;
