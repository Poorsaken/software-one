import React from "react";
import Navbar from "../../src/Component/navbar/navbar";
import "./landingpage.css";
import Guitars from "../Component/guitars/guitars";
import palm from "../Component/images/palm.jpg";
import hammer from '../Component/images/hammer-on-guitar.jpg';
import vibrato from "../Component/images/vibrato.jpg";




    class LandingPage extends React.Component {
        render(){
            return(

                <>
                    <Navbar />
                    
                    
                      <div className="technique-parent">
                        <div className="title-tech">
                            <h1>Technique Tutorial</h1>
                        </div>

                        <div className="learn-tech">
                            <h1>1.Why you need to learn guitar picking technique?</h1>
                            
                        </div>

                        <div className="tech-desc">
                            <p>  learning guitar technique is not just about playing notes accurately; it's about unlocking the full potential of the instrument, 
                                expressing yourself musically, and ensuring a sustainable and enjoyable playing experience.
                                <br/> Whether you're a beginner or an advanced player, dedicating time to mastering and refining your technique is an investment in your musical journey.</p>
                        </div>


                            <div className="three-tech">
                                <div className="palm">
                                    <div className="image-div">
                                    <img src={palm}/>

                                    </div>
                                    
                                    <div className="texxttt">
                                       <p1>Palm Mute</p1>
                                    </div>
                                </div>
                                <div className="hammeron">

                                <div className="image-div">
                                    <img src={hammer}/>

                                    </div>
                                    
                                    <div className="texxttt">

                                        
                                       <p1>Hammer-On</p1>
                                    </div>

                                </div>
                                <div className="vibrato">
                                <div className="image-div">
                                    <img src={vibrato}/>

                                    </div>
                                    
                                    <div className="texxttt">

                                        
                                       <p1>Vibrato</p1>
                                    </div>

                                    
                                </div>
                            </div>

                           


                      </div>
                
                </>

            );
        }

    }


export default LandingPage;