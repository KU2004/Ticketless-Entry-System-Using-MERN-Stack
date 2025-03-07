import React from "react";
import { Link } from "react-router-dom";

function Maps() {
  return (
    <div>
      <h1>Maps Page</h1>
      <p>Find locations of historical sites on the map.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Maps;
