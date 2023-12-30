import React from "react";
import Navbar from "../../Component/navbar/navbar";
import first from "../palmmute/image/hammer-one.jpg";
import first2 from "../palmmute/image/550px-nowatermark-Hammer-on-a-Guitar-Note-Step-3-Version-4.jpg.jpg";
import "../hammeron/hammeron.css";
import practab from "../palmmute/image/hammer-on-electric-guitar-2-tab.png";

class Hammeron extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="hammeron-parent">
          <div className="hero-image">
            <div className="hammer-title">
              <h1> Hammer On Technique</h1>
            </div>
          </div>

          <div className="first-parent">
            <div className="left-first">
              <div className="title-ham1">
                <h1>1. Start with your index finger on a note</h1>

                <p>
                  Simply play one note on the guitar, using your index finger so
                  that the rest of your hand is open. It is much easier to
                  hammer on to a note if it is nearby a note you're already
                  holding down. Pick this note, letting it ring out.
                </p>
              </div>
            </div>
            <div className="right-second">
              <img src={first} />
            </div>
          </div>

          <div className="first-parent">
            <div className="right-second2">
              <img src={first2} />
            </div>

            <div className="left-first">
              <div className="title-ham1">
                <h1>2.Land your ring finger two frets down to hammer on.</h1>

                <p>
                  Just press down firmly on a different fret while remaining on
                  the same string as the initial note you plucked. The new note
                  will resonate, smoothly transitioning from the first one since
                  you only plucked the string once.
                </p>

                <br />
                <p>
                  •Attempt to strike the hammer as near as possible to the rear
                  of the fret, specifically the side farthest from your
                  strumming hand, to achieve optimal sound quality.
                </p>
              </div>
            </div>

            
          </div>

        <div className="prac-tabs">

            <h1>3. Practice with tab </h1>
            <p> here i have a simple tab for you to practice on</p>

            <div className="prac-tabimage">
                <img src={practab}/>
            </div>


            <h1>4. Practice with Video </h1>
        

            <div className="prac-tabvid">
                <br></br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jT1daGH32k8?si=Jy7V-g96dv8IJhP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <p1>Remember, consistent and focused practice is key to mastering any guitar technique. Incorporate hammer-ons into your regular practice routine and use them in various musical contexts to enhance your playing.</p1>



        </div>
          
        </div>
      </>
    );
  }
}

export default Hammeron;
