import React from "react";
import Navbar from "../navbar/navbar";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import bassAnatomy from "../images/Bass Anatomy.png";
import bassString from "../images/Bass Strings.png";
import tunerApp from "../images/mobile app tuner.png";
import manualTuner from "../images/manual tuner.png";
import bassExercise from "../images/bass exercise.png";
import lefthand from "../images/left-hand-finger-numbering.jpg";
import bassDescending from "../images/bass descending.png";
import pdf from "./PDF/basschord.pdf";


import "./bass.css";







class Bass extends React.Component {


  handleDownload = async () => {
    const response = await fetch(pdf); // Replace with the actual server path
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'basschord.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

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

          <div className="image-bass">
            <img src={bassAnatomy} />
          </div>

          <div className="text-two-bass">
            <h1>#2 Understanding the Bass Guitar</h1>
          </div>

          <p>
            <br />
            •The bass guitar typically has four strings, tuned to E, A, D, and
            G. The strings are usually thicker than those of a regular guitar.
            <br />
            <br />
            • The notes on the bass are played one at a time, and the bass
            provides the foundation for the rhythm section in many styles of
            music.
            <br />
            Start by learning simple songs with an affordable guitar, and as you
            gain more experience, you can choose a guitar that better suits your
            evolving musical preferences.
          </p>

          <div className="imageString">
            <img src={bassString} />
          </div>

          <div className="text-two">
            <h1>#2 Understanding the Bass Guitar</h1>
          </div>

          <p>
            •The standard tuning for a 4-string bass guitar is E-A-D-G. Use a
            tuner to ensure your bass is in tune before playing.
          </p>

          <div className="tuners">
            <div className="tuner-1">
              <p>Mobile App</p>
              <img src={tunerApp} />
            </div>
            <div className="tuner-1">
              <p>Manual Tuner</p>
              <img src={manualTuner} />
            </div>
          </div>

          <p>
            Tuning a bass guitar by ear is a valuable skill that every musician
            should develop. Here's a basic guide on how to tune your bass guitar
            without using a tuner:
          </p>

          <div className="tuner-manual">

            <div className="E-parent">
              <button className="E">
                <p1> E String</p1>
              </button>
            </div>

            <div className="A-parent">
              <button className="A">
                <p1> A String</p1>
              </button>
            </div>

            <div className="D-parent">
              <button className="D">
                <p1> D String</p1>
              </button>
            </div>

            <div className="G-parent">
              <button className="G">
                <p1> G String</p1>
              </button>
            </div>
          </div>

          <div className="text-two">
            <h1>#4 Start with Basic Exercises:</h1>
          </div>
          <br/>

           <h1>•Ascending Exercise</h1>
            <br/>

          <p>
          This fundamental exercise serves not only to acquaint 
          you with playing bass notes but also aids in gradually improving the 
          flexibility and stretch of your fingers.
          </p>

          <br/>

            <div className="tab-image">
              
              <img src={bassExercise}/>

            </div>

            <br/>

            <p>
            The underlying concept of this exercise involves employing a one-finger-per-fret approach,
            aiming to maintain each finger's position while playing through the four notes on each string.
            </p>


            <div className="left-numbering">
              <img src ={lefthand}/>
            </div>

            <br/>
            <p>

            Don’t worry if you have trouble applying pressure with your pinky in the beginning,your finger will get stronger over time if you continue to practice this exercise.
            </p>


            <br/>

            <p>
            Once you play the first note (with your index finger), continue to hold that finger in position while you press your middle finger down to play the 4th fret note. By the end of the first bar,
            <br/>
            you should have all four fingers pressing down on the string.
            </p>

            <br/>
            <br/>
            <br/>


            <h1>•Descending Exercise</h1>
            <br/>

          <p>
          While the above exercise is a fantastic way to develop your finger control,
           it’s also a good idea to practice the exercise in the opposite direction.
          </p>


          <br/>

          <div className="tab-image">
              
              <img src={bassDescending}/>

            </div>


            <p>
            This time, start with all four fingers in position across the four frets. Play the 6th fret note, then remove that finger from the string to play the 5th fret note.
            </p>

            <br/>

            <p>
            After completing the sequence of all four notes on a string, return all four fingers to their initial positions on the next string, and proceed with the continuation of the exercise.
            </p>

            <p>
            Once you feel comfortable with both of the above exercises, you can combine them to form one long exercise that moves up and down the strings.
            </p>
          

            <div className="text-two">
            <h1>#5 Start with Simple Song:</h1>
          </div>


          <br/>
          <p>Choose easy songs that you enjoy listening to and that have a simple bass line.
             Start slow and gradually increase the tempo as you become more comfortable.</p>

            <br/>

             <iframe width="760" height="515" src="https://www.youtube.com/embed/euHaBjGhUmI?si=YSjYbCxougI3mMQ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       


             <div className="text-two">
            <h1>#6 Use Online Resources:</h1>
          </div>


          <p>
          Take advantage of online tutorials, videos, and bass tabs. Websites like Ultimate Guitar and YouTube can provide valuable lessons and play-along tracks.
          </p>


        <br/>

          <p>
          Once you've successfully played through all four notes on a specific string using the one-finger-per-fret technique, the next step is to transition smoothly to the adjacent string. <br/>As you conclude the sequence on one string, carefully reposition all four fingers back to their designated frets on the next string. <br/> This deliberate finger placement is crucial for maintaining precision and coordination in your playing.
          </p>

          <br/>

          <p>
          As you move to the next string, ensure a seamless transfer of your fretting hand, allowing for a fluid and uninterrupted progression of notes.<br/>This exercise not only enhances your familiarity with the fretboard but also contributes to the development of muscle memory in each finger, promoting agility and control.
          </p>

          <br/>

          <p>
          Consistency is key during this process. Aim to sustain a steady rhythm and tempo as you navigate through the strings, ensuring that each finger remains in its designated position.<br/> This practice not only cultivates technical proficiency but also promotes finger strength and flexibility over time.
          </p>

          <br/>

          <p>
          Remember, the objective is not just to play the notes but to cultivate a sense of control and precision in your fretting hand. As you continue this exercise across different strings, <br/>you'll find that your fingers become more accustomed to the movements, contributing to a smoother and more confident overall playing experience. <br/> Regular incorporation of such exercises into your practice routine will undoubtedly contribute to your growth as a bass player, refining your technique and laying <br/> a solid foundation for more advanced playing styles in the future.
          </p>
       
        </div>  {/* end of guitar anatomy-parent */}

        




        <div className="bottomContainer">
          <div className="box1">
            <h1 className="box1-text">Well Done</h1>

            <div className="box-desc">
              <p3 className="box1-desct">
                Now that you've learned how to play a chord, let's move on to
                the next section: Learning Basic Chords.{" "}
              </p3>
            </div>

            <button type="button" onClick={this.handleDownload}>
        Download
       
      </button>
      
          </div>
          <div className="box2">
            <img src=""></img>
          </div>
        </div>
      </>
    );
  }
}


export default Bass;
