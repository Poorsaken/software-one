import React from "react";
import "./major.css"
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Cchord from '../images/C.png';
import Dchord from '../images/D.png';
import Echord from '../images/E.png';
import Fchord from '../images/F.png';
import Gchord from '../images/G.png';
import Achord from '../images/A.png';
import Bchord from '../images/B.png';


class Major extends React.Component {
    render() {
        return(
            <>
              <Navbar />
            
           
            

            <div className="chord-selection-parent">

                <div className="chord-title">
                    <h1> CHORD TYPE </h1>
                </div>

                <div className="chord-category">
                <div className="major"><Link to="/major" className="major-link">Major</Link></div>
                    <div className="minor"><Link to="/minor" className = "noUnderline">Minor</Link></div>
                    <div className="power"><Link to="/power"  className = "noUnderline">Power</Link></div>
                    <div className="sharp"><Link to="/sharp"  className = "noUnderline">Sharp</Link></div>
                </div>

            </div>


            <div className="chord-gallery-parent">

            <div className="chord">
                <img src= {Cchord} alt="" />
                
                <div className="descrip-chord">
                    C

                   
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>
                
               
                
                
                
                </div>



            <div className="chord">
                <img src= {Dchord} alt="" /> 
            
            <div className="descrip-chord">
                    D
                </div>

                <div className="button-play">

                <button class="button-D">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            
            </div>
            <div className="chord">
                 <img src= {Echord} alt="" />
            
            <div className="descrip-chord">
                    E
                </div>
                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Fchord} alt="" />
            
            <div className="descrip-chord">
                    F
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Gchord} alt="" />
            
            
            <div className="descrip-chord">
                    G
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>

                
                   <p1> Play Chord </p1>


                </div>


            </div>
            <div className="chord">
                <img src= {Achord} alt="" />
            
            <div className="descrip-chord">
                    A
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>


                <p1> Play Chord </p1>


                </div>

            </div>
            <div className="chord">
                <img src= {Bchord} alt="" />
            
            <div className="descrip-chord">
                    B
                </div>

                <div className="button-play">

                <button class="button-C">▶</button>


                <p1> Play Chord </p1>


                </div>


            </div>

            
            
            </div>


           
            <div className="back-container">
                <Link to="/guitars" className="none"><p1>back to</p1> </Link>
            </div>
            
            
            </>

        );

    }
}

export default Major;