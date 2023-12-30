import React from "react";
import vibratoimg from "./guitar-vibrato.jpg";
import Navbar from "../../Component/navbar/navbar";
import vibratotwo from "./Frame 5.png";
import vibratothree from "./wrist-based-guitar-vibrato.jpg";

class Vibrato extends React.Component{
    render(){


        return(
            <>
            <Navbar/>
            <div className="hero-image">
            <div className="hammer-title">
              <h1> Hammer On Technique</h1>
            </div>
          </div>
           <div className="vibrato-title">
            <h1>What is Vibrato Guitar Technique.</h1>
             </div>

            <div className="vibrato-desc">
            <p>Vibrato is a technique used on the guitar to add a subtle pitch variation to a sustained note, giving it a warmer and more expressive sound.<br/> Here are five steps to help you learn how to do vibrato on the guitar</p>


            </div>

            <div className="step-parent">
                <div className="left-step">
                    <h1>1.Select a Note to Vibrato:</h1>
                    <p>•Start by playing a note on the guitar.
                         Choose a note that you want to apply vibrato to. It's often easier to begin with sustained notes,
                          as vibrato is most noticeable and effective on longer-duration sounds.</p>
                </div>

                <div className="right-step">
                    <img src={vibratoimg}/>

                </div>
            </div>

            <div className="step-parent">

            <div className="right-step">
                    <img src={vibratotwo}/>

                </div>

                <div className="left-step">
                    <h1>2.Vibrato Motion:</h1>
                    <p>• The motion for vibrato involves oscillating the pitch of the note by rocking your finger back and forth. Instead of sliding the finger along the fret,
                         which would produce a slide or bend, you're essentially "wiggling" the string horizontally.</p>
                </div>

                
            </div>


            <div className="step-parent">


            <div className="left-step">
                    <h1>3.Use Your Wrist:</h1>
                    <p>• Execute the vibrato motion using your wrist, not just your finger. 
                        Start with small movements and gradually increase the width of the vibrato as you become more comfortable. 
                        The goal is to create a subtle pitch variation, not an exaggerated bend.</p>
                </div>

            <div className="right-step">
                    <img src={vibratothree}/>

                </div>


                

                
            </div>

            <div className="closing">
            <p1>Remember to practice vibrato regularly to develop control and finesse. It may take some time to build strength and coordination, but with consistent practice, you'll be able to incorporate vibrato into your playing with ease. Listen to professional guitarists to get a sense of the different vibrato styles and find what works best for your musical expression.</p1>

            </div>

            </>
        )
    }

    
       
    
}

export default Vibrato;