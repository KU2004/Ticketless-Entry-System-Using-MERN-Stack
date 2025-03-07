import React from "react";
import { Link } from "react-router-dom";

function Temples() {
  return (
    <div>
      <h1>Temples Page</h1>
      <p>Visit ancient and famous temples.</p>

      {/* ✅ Back to Home Link */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Temples;
