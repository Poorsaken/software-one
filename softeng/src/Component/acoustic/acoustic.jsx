import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import AcousticAnatomy from "../images/AcousticAnatomy.png";
import Hold from "../images/fingerplacement.png";
import Colorcode from "../images/colorcoding.jpg";
import Achord from "../images/Achord.png";
import Achord2 from "../images/Achord2.png";
import ADemo from "../images/ADemo.png";



import "./acoustic.css";

class Acoustic extends React.Component {
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
            <img src={AcousticAnatomy} />
          </div>

          <div className="text-two">
            <h1>#2 Choosing The Right Guitar</h1>
          </div>

          <p>
            There are essentially two types of guitars: nylon-string and
            steel-string. If you're just starting out as a beginner, we
            recommend beginning with a nylon-string guitar.
            <br />
            Nylon strings are gentler on your fingers, making it easier to play
            (you don't have to press the strings as hard). This choice will make
            your learning experience much smoother. <br />
            <br />
            You can find a good beginner nylon-string guitar in the price range
            of $50 to $100. You don't need to spend too much at the outset.
            <br />
            Start by learning simple songs with an affordable guitar, and as you
            gain more experience, you can choose a guitar that better suits your
            evolving musical preferences.
          </p>

          <div className="text-three">
            <h1>#3 Learn To Hold The Guitar Before You Play It</h1>
          </div>

          <p>
            You can hold the guitar on either your right or left leg. Placing
            your guitar on your left leg is more recommended for those who wish
            to play classical music;
            <br />
            however, most guitarists, especially those playing pop music, will
            hold the guitar on the right leg, slightly inclined to allow a
            satisfactory posture of both hands.
            <br />
            Start by learning simple songs with an affordable guitar, and as you
            gain more experience, you can choose a guitar that better suits your
            evolving musical preferences.
          </p>

          <div className="image-finger">
            <img src={Hold} />
          </div>

          <div className="text-four">
            <h1>#4 Look at the numbering of the fingers</h1>
          </div>

          <p>
            The numbering of the fingers as used for the left hand is the
            following:
          </p>

          <div className="image-finger">
            <img src={Colorcode} />
          </div>

          <p>
            Please note that fingers are assigned numbers from 1 to 4, beginning
            with the index finger as number 1 and moving outward to the fourth
            finger.
            <br />
            This numbering system is quite helpful in illustrating how to form
            chords, indicating which finger should press each string on each
            fret.
            <br />
            This will become clearer as we go through the process of forming
            chords with your left hand.
          </p>

          <div Class="text-five">
          <h1>#5 Play with the left hand for the first time</h1>
        </div>

        <p>In the case of right-handed individuals,
          the left hand plays a crucial role in creating chords and
           playing individual notes.<br/>It's important to understand that
           the concept of a chord is distinct from that of a note.<br/>A chord
           is formed by combining or harmonizing multiple notes simultaneously,
           whereas a note represents the smallest unit of sound.<br/>A chord can 
           be represented in the following manner:
           
           </p>

           <div className="image-chord">
        <img src={Achord}/>
      </div>

      <p>In this diagram, the numbers on the strings correspond to the fingers of the left hand,
         using the same numbering system explained in step #4.<br/>These fingers should be used 
         to press the corresponding strings at the indicated frets shown in the illustration.<br/>
        The number to the left of the diagram (highlighted in Royal Blue  below) indicates the 
        position or fret on the instrument where that specific chord should be played:</p>


        <div ClassName="image-chord-2">
            <img src={Achord2} />
          </div>

          <p>Here, we're playing the A major chord, where the initial note is played on the first fret of the guitar.<br/>Now, let's see how this exact chord comes together when you put it into practice using your left hand on the guitar:</p>

          <div className="ADemo">
            <img src={ADemo}/>
          </div>

        </div>

        <div className="bottomContainer">

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

          </div>
      </>
    );
  }
}

export default Acoustic;
