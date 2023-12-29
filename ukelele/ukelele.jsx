import React from "react";
import Navbar from "../navbar/navbar";
// import AcousticAnatomy from "../images/AcousticAnatomy.png";
import UkeleleAnatomy from "../images/Ukelele Anatomy.png";
import HoldingUke from "../images/blog_ukelele_houding_sopraan.jpg";
import HoldUke from '../images/UkeHold.jpg';
import ukeC from "../images/ukulele-c-chord.png.png";
import ukeA from "../images/ukulele-a-chord.png.png";
import ukeAm from "../images/ukulele-am-chord.png.png";
import ukeG from "../images/ukulele-g-chord.png.png";
import ukeF from "../images/ukulele-f-chord.png.png";
import { Link } from "react-router-dom";

import "./ukelele.css";

class Ukelele extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="anatomy-parent">
          <div className="text">
            <h1>#1 Guitar Anatomy</h1>
            <p>
              You don't have to memorize the names of every single component,
              but it's crucial to familiarize yourself
              <br />
              with the key parts, as this knowledge will enable you to
              effectively follow a guitar lesson.
            </p>
          </div>

          <div className="image">
            <img src={UkeleleAnatomy} />
          </div>

          <div className="text-two">
            <h1>#2 Holding the Ukelele</h1>
          </div>
      

            <p><strong>Sit or Stand Comfortably:</strong></p>

            
          <p>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •Find a comfortable sitting or standing position. Make sure your back is straight, 
          and your shoulders are relaxed.
         
          </p>

          {'\u00A0'}
          <p><strong>Hold the Body:</strong></p>
         
          <p>
            {'\u00A0'}
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •Cradle the body of the ukulele against your chest.
          </p>
          <p>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •The curve of the ukulele should rest against your body, 
          and the soundhole should be facing outward..
          </p>
          



            <p><strong>Arm Position:</strong></p>
          <p>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •Let your strumming arm hang naturally.
          </p>
          <p>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •Your forearm should be parallel to the top of the ukulele.
          </p>

            <p><strong>Fretting Hand:</strong></p>
          <p>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •Your fretting hand (the one that presses the strings) should come around the neck from underneath.
          </p>
          <p>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} •Your thumb should be on the back of the neck, and your fingers should come over the top.
          </p>



          <div className="sitparent">
              <div className="imageInside">
              <img src={HoldingUke}/>
              </div>
              <div className="imageInside">
              <img src={HoldUke}/>
              </div>
             
            </div>


          <div className="text-two">
            <h1>#3 Tuning the Ukulele:</h1>
          </div>

          <p>Before you start playing, make sure your ukulele is in tune. The standard tuning for a soprano, concert, and tenor ukulele is G-C-E-A (from top string to bottom).<br></br> You can use an electronic tuner or a tuning app to help you get the right pitch.</p>
          {'\u00A0'}
          <p><strong>Basic Chords for Beginners:</strong></p>
          
          
              <div className="ukecord">
                <br></br>
                <ul>C major:</ul>
                <li>Place your ring finger on the third fret of the first (A) string.</li>

                  <div className="chord-image">
                    <img src={ukeC}/>
                  </div>

                <ul>G major:</ul>
                
                <li>Place your index finger on the second fret of the third (E) string.</li>
                <li>Place your middle finger on the second fret of the first (A) string.</li>
                <li>Place your ring finger on the third fret of the second (C) string.</li>

                  <div className="chord-image">
                    <img src={ukeG}/>
                  </div>

                <ul>F major:</ul>
                <li>Bar the first two strings with your index finger on the first fret.</li>
                <li>Place your middle finger on the second fret of the fourth (G) string.</li>

                  <div className="chord-image">
                    <img src={ukeF}/>
                  </div>

                <ul>Am major:</ul>
                <li>Place your middle finger on the second fret of the fourth (G) string.</li>

                  <div className="chord-image">
                    <img src={ukeAm}/>
                  </div>

                <ul>A major:</ul>
                <li>Place your index finger on the first fret of the third (C) string.</li>
                <li>Place your middle finger on the second fret of the fourth (G) string.</li>

                  <div className="chord-image">
                    <img src={ukeA}/>
                  </div>


              </div>


              <div className="text-two">
            <h1>#4 Strumming Patterns</h1>
          </div>

          <p>Start with simple downstrokes and upstrokes to get comfortable with the motion. As you progress, experiment with different strumming patterns. Here's a basic down-up strumming pattern to get you started:</p>
          {'\u00A0'}
          <p><strong>Down-Up Strumming:</strong></p>

          <p>Down strum: Swipe your thumb or index finger across the strings.</p>
          <p>Up strum: Reverse the motion, strumming upward.</p>
               

          <div className="text-two">
            <h1>#5 Practice Tips:</h1>
          </div>   

          <p><strong>Take It Slow:</strong></p>
          <li>Start with simple songs and chords.</li>
          <li>Practice transitioning between chords slowly.</li>

          <p><strong>Play Regularly:</strong></p>
          <li>Consistency is key. Try to practice a little bit every day.</li>
        
          <p><strong>Watch Tutorials:</strong></p>
          <li>Online tutorials and videos can be helpful for visual learners.</li>
      
          <p><strong>Have Fun:</strong></p>
          <li>Enjoy the learning process and have fun playing your favorite songs.</li>
        
    


          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          {/* <div className="bottomContainer">

<div className="box1">
  <h1 className = "box1-text">Well Done</h1>

  <div className="box-desc">
  <p3 className="box1-desct">Now that you've learned how to play a chord, let's move on to the next section: Learning Basic Chords. </p3>
  </div>

  <div className="next-btn-container">
  <Link to="/major">
    <button className="next" > 
    Next Step 
    </button>
    </Link>
  </div>
  
</div>
<div className="box2">
  <img src=""></img>
</div>

</div> */}


          
      </>
    );
  }
}

export default Ukelele;
