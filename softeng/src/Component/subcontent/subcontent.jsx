import React from "react";
import "./subcontent.css";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import guitarbg from "../images/guitarbg.png";


    class Subcontent extends React.Component {
        render(){
            return(

                <>
            <Navbar />
                    <div className="subcontent">
                        <div className="subtext">
                            <h1 className="p1">Strum, Learn, Rock<br></br>
                            with <strong>GuitarGix:</strong><br></br>
                            Your riff to mastery</h1>
                           
                            <Link to="/guitars" ></Link> <button className="btnGetStarted">
                                                    <div className="custombtn">Get Started</div>
                                                </button> 
                           
                        </div> 
                       <div className="guitarimg">
                        <img src={guitarbg} alt="gege" />
                       </div>

                                
                    </div>
                
                
                
                </>

            );
        }

    }


export default Subcontent;