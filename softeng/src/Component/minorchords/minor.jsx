import React from "react";
import "./minor.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Cchord from '../images/c-minor.png';
import Dchord from '../images/d-minor.png';
import Echord from '../images/e-minor.png';
import Fchord from '../images/f-minor.png';
import Gchord from '../images/g-minor.png';
import Achord from '../images/a-minor.png';
import Bchord from '../images/b-minor.png';


class Minor extends React.Component {
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
                    <div className="minor"><Link to="/minor" className = "minor-link">Minor</Link></div>
                    <div className="power"><Link to="/power"  className = "noUnderline">Power</Link></div>
                    <div className="sharp"><Link to="/sharp"  className = "noUnderline">Sharp</Link></div>
                </div>

            </div>


            <div className="chord-gallery-parent">

            <div className="chord">
                <img src= {Cchord} alt="" />
                
                <div className="descrip-chord">
                    C minor

                   
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>
                
               
                
                
                
                </div>



            <div className="chord">
                <img src= {Dchord} alt="" /> 
            
            <div className="descrip-chord">
                    D minor
                </div>

                <div className="button-play">

                <button class="button-D">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            
            </div>
            <div className="chord">
                 <img src= {Echord} alt="" />
            
            <div className="descrip-chord">
                    E minor
                </div>
                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Fchord} alt="" />
            
            <div className="descrip-chord">
                    F minor
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Gchord} alt="" />
            
            
            <div className="descrip-chord">
                    G minor
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Achord} alt="" />
            
            <div className="descrip-chord">
                    A minor
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>


                <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Bchord} alt="" />
            
            <div className="descrip-chord">
                    B minor
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

export default Minor;