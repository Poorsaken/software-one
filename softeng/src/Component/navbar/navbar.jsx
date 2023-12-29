import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav>
          {/* Navbar content goss */}

          <div className="logohere"> <Link to="/subcontent" className="noUnderline">
           
              <h1>GuitarGix.</h1> </Link>
          </div>

          <div className="nav-links">
            <ul>
            <Link to="/about" className="nav">About us</Link>
            <Link to="/scales"className="nav">Music Theory</Link>
            <Link to="/landingpage" className="nav">Technique Tutorial</Link>
            </ul>
          </div>

          <div className="signbar">
            <button className="singnin">
              <h2> Sign in </h2>
            </button>
            <button className="signup">
              <h2> Sign up </h2>
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
