import React from "react";
import Navbar from "../navbar/navbar";
import "./guitars.css";
import { Link } from "react-router-dom";
import acoustic from "../images/acoustic.png";
import electric from "../images/Electric.png";
import ukelele from "../images/Ukelele.png";
import bass from "../images/Bass.png";

class Guitars extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="parent">
          <div className="kind">
          
            <h1>What Kind of guitar you have?</h1>
          </div>

          <div className="cards">
          
            <div className="one" >
            <Link to="/acoustic">
              <img src={acoustic}></img>
              </Link>
              <h1>Acoustic</h1>

            </div>
            
            <div className="two">
            <Link to="/electric">
              <img src={electric}></img>
              </Link>
              <h1>electric</h1>
            </div>

            <div className="three">
            <Link to="/ukelele">
              <img src={ukelele}></img>
              </Link>
              <h1>ukelele</h1>
              
            </div>

            <div className="five">
            <Link to="/bass">
              <img src={bass}></img>
              </Link>
              <h1>bass</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Guitars;
