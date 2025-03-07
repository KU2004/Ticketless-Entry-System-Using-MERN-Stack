import React from "react";
import { Link } from "react-router-dom";

function Sanctuaries() {
  return (
    <div>
      <h1>Sanctuaries Page</h1>
      <p>Discover wildlife sanctuaries and nature reserves.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Sanctuaries;
