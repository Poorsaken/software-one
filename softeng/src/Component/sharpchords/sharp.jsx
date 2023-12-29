import React from "react";
import "./sharp.css"
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import Cchord from '../images/db-major.png';
import Dchord from '../images/eb-major.png';
import Fchord from '../images/gb-major.png';
import Gchord from '../images/ab-major.png';
import Achord from '../images/bb-major.png';



class Sharp extends React.Component {
    render() {
        return(
            <>
              <Navbar />
    
            

            <div className="chord-selection-parent">

                <div className="chord-title">
                    <h1> CHORD TYPE </h1>
                </div>

                <div className="chord-category">
                <div className="major"><Link to="/major"  className = "noUnderline">Major</Link></div>
                    <div className="minor"><Link to="/minor"  className = "noUnderline">Minor</Link></div>
                    <div className="power"><Link to="/power"  className = "noUnderline" >Power</Link></div>
                    <div className="sharp"><Link to="/sharp" className = "sharp-link">Sharp</Link></div>
                </div>

            </div>


            <div className="chord-gallery-parent">

            <div className="chord">
                <img src= {Cchord} alt="" />
                
                <div className="descrip-chord">
                    C#

                   
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>
                
               
                
                
                
                </div>



            <div className="chord">
                <img src= {Dchord} alt="" /> 
            
            <div className="descrip-chord">
                    D#
                </div>

                <div className="button-play">

                <button class="button-D">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            
            </div>
           
            <div className="chord">
                <img src= {Fchord} alt="" />
            
            <div className="descrip-chord">
                    F#
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Gchord} alt="" />
            
            
            <div className="descrip-chord">
                    G#
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Achord} alt="" />
            
            <div className="descrip-chord">
                    A#
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>


                <p1> Play Chord </p1>


                </div>

            </div>
           
            
            </div>
            
            
            </>

        );

    }
}

export default Sharp;