import React from "react";
import { Link } from "react-router-dom";

function Museums() {
  return (
    <div>
      <h1>Museums Page</h1>
      <p>Explore museums showcasing history, art, and culture.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Museums;
