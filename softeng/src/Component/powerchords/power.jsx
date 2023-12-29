import React from "react";
import "./power.css"
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Cchord from '../images/c-power.png';
import Dchord from '../images/d-power.png';
import Echord from '../images/e-power.png';
import Fchord from '../images/f-power.png';
import Gchord from '../images/g-power.png';
import Achord from '../images/a-power.png';
import Bchord from '../images/b-power.png';


class Power extends React.Component {
    render() {
        return(
            <>
            <Navbar/>
          
            

            <div className="chord-selection-parent">

                <div className="chord-title">
                    <h1> CHORD TYPE </h1>
                </div>

                <div className="chord-category">
                <div className="major"><Link to="/major"  className = "noUnderline">Major</Link></div>
                    <div className="minor"><Link to="/minor"  className = "noUnderline">Minor</Link></div>
                    <div className="power"><Link to="/power" className = "power-link">Power</Link></div>
                    <div className="sharp"><Link to="/sharp"  className = "noUnderline">Sharp</Link></div>
                </div>

            </div>


            <div className="chord-gallery-parent">

            <div className="chord">
                <img src= {Cchord} alt="" />
                
                <div className="descrip-chord">
                    C-power

                   
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>
                
               
                
                
                
                </div>



            <div className="chord">
                <img src= {Dchord} alt="" /> 
            
            <div className="descrip-chord">
                    D-power
                </div>

                <div className="button-play">

                <button class="button-D">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            
            </div>
            <div className="chord">
                 <img src= {Echord} alt="" />
            
            <div className="descrip-chord">
                    E-power
                </div>
                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Fchord} alt="" />
            
            <div className="descrip-chord">
                    F-power
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Gchord} alt="" />
            
            
            <div className="descrip-chord">
                    G-power
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Achord} alt="" />
            
            <div className="descrip-chord">
                    A-power
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>


                <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Bchord} alt="" />
            
            <div className="descrip-chord">
                    B-power
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

export default Power;