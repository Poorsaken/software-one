import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import electricAnatomy from "../images/Electric Anatomy.png";
// import Hold from "../images/fingerplacement.png";
// import Colorcode from "../images/colorcoding.jpg";
// import Achord from "../images/Achord.png";
// import Achord2 from "../images/Achord2.png";
// import ADemo from "../images/ADemo.png";

import amplifier from "../images/amplifier.png";
import strap1 from "../images/strap1.png";
import strap2 from "../images/strap2.png";
import strap3 from "../images/strap3.png";
import mooer from "../images/mooer.png";
import tabs from "../images/blank.png";
import tabs5 from "../images/tabs-5.png";



import "./electric.css";
import { Form } from "react-router-dom";

class Electric extends React.Component {
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
            <img src={electricAnatomy} />
          </div>

          <div className="text-two">
            <h1>#2 Start with the right gear</h1>
          </div>


          <h1 className="guitar-key">The Guitar is the key</h1>

          <p>
          Each guitar possesses unique characteristics, yet there are a few entry-level guitar brands known for their reliability, such as Fender Squire, Epiphone, and Yamaha Pacifica. Keep in mind that the quality of your purchase corresponds to the price; opting for a budget-friendly $80 guitar on Amazon may result in subpar sound quality.
          </p>

          <div className="text-three">
            <h1>#3 MODELING AMPS ARE AMAZING</h1>
          </div>

          <p>
          Ensure you have a functional amplifier and a reliable guitar cable. Nowadays, there are numerous affordable options for modeling amplifiers, which are particularly appealing as they provide software replicas or "models" of various classic and modern amps.
          </p>

          <div className="image-finger">
            <img src={amplifier} />
          </div>

          <p>
          You have the opportunity to experiment with these sounds on a budget-friendly modeling amp initially, and once you discover a model you truly appreciate, you can then consider upgrading to a higher-quality amplifier.
          </p>

          <div className="text-four">
            <h1>#4 PICKS, STRAPS, ETC.</h1>
          </div>

          <p>
          Additionally, you will need to find appropriate picks and a comfortable guitar strap. It is also advisable to get strap locks for your guitar, so that it does not fly off the strap pins when you really start rocking out!

Guitar picks come in a wide range of styles. Some are large, some are small. Some are thick and some are thin.

See if you can find a sample pack of different picks and experiment until you find a few styles you enjoy.
          </p>

          <div className="strap-parent">
            <div className="strap1">
              <img src={strap1}/>
            </div>
            <div className="strap2">
            <img src={strap2}/>
            </div>
            <div className="strap3">
            <img src={strap3}/>
            </div>
            
          </div>


          <div className="text-four">
            <h1>#5 TUNING AND STRING CHANGING</h1>
          </div>

          <p>
          Learning how to tune your guitar is crucial at all stages of your development. Fortunately, there are numerous high quality phone apps for tuning guitars.
          </p>
          <br/>
          <p>
          You can also find inexpensive tuners that clip onto the headstock of your guitar (where the tuning pegs are). These clip-on tuners allow for fast tuning between songs and are great for performing.
          </p>


          <br></br>

          <p>
            Of course, if you are feeling really professional, you can always purchase a pedal tuner that sits in your signal chain. Generally, guitarists will place a pedal tuner first in their signal chain.
          </p>


          <br/>

          <p>
          The signal chain refers to the route that your electric guitar signal follows through various effects pedals before reaching the amplifier speakers, if you incorporate any effects pedals in your setup.
          </p>



          <br/>

          <p>There are different philosophies around which pedals should go in which order. But, a safe bet is that your tuner should go first, if you opt to use a pedal tuner.</p>

            <br/>
            <br/>
            <br/>

            <div className="mooer">
              <img src={mooer}/>
            </div>

            <br/>
            <br/>
            <br/>

            <p>Moreover, mastering the skill of replacing your guitar strings is an essential aspect, and you can find numerous excellent tutorial videos for guidance.</p>

            <br/>

            <p>Also, try out different string thicknesses and styles. String gauge simply refers to how thick the set of strings is.</p>

            <br/>

            <p>Thinner strings are usually more beginner-friendly, making them easier to play and bend. On the other hand, some experienced players across various genres may favor thicker strings for a fuller sound and more consistent intonation.</p>
            <br/>
            <p>Similar to exploring various guitar pick styles, it's a good idea to experiment with different string gauges to find the one that suits your preference.</p>
         


            <div className="text-four">
            <h1>#6 LEARN HOW TO READ TABS </h1>
          </div>  

          <br></br>


          <p>The simplest way to begin learning songs and acquaint yourself with the electric guitar is by understanding how to read guitar tablature and chord charts. You don't even have to be familiar with traditional musical notation to pick up the electric guitar!</p>
          
          <br/>
          <p><strong>GUITAR TABS ARE YOUR FRIEND</strong></p>

            <p>Guitar tablature serves as a quick shorthand for notating music on the guitar. It comprises six horizontal lines, akin to the traditional five-line music staff. Each of these lines corresponds to one string on the guitar.</p>

              <br></br>
            <p>When reading guitar tablature, we follow a bottom-up approach. In this arrangement, the lowest horizontal line corresponds to the low E string, or the 6th string on the guitar, while the highest horizontal line corresponds to the high E string, or the 1st string on the guitar.  </p>     
            
            <br></br>
            <p>We then place a series of numbers on the lines that correspond to particular frets on the guitar. For example, if you see a number 1 on the highest line, that means you play the first fret on the high E string:</p>
              
              <div className="tabs">
                <img src={tabs}/>
              </div>


              <p>If you see a 5 on the lowest horizontal line, that means you play the fifth fret on the low E string:</p>
              
              <div className="tabs">
                <img src={tabs5}/>
              </div>



          <div className="text-four">
                      <h1>#7 USE THE INTERNET</h1>
                    </div>  

                  <p>Today's guitarists have an abundance of information and resources at their fingertips. We are currently in a golden age of guitar learning, with the internet providing easy access to a vast array of information and materials for aspiring musicians.</p>
            
                  <br></br>

                  <p>However, be sure to look for good quality resources. Not everything you find is accurate!</p>

                  <br></br>
                  <p>Consider investing in a guitar course and diligently follow its lessons. This approach allows you to track your progress systematically and develop the skill of discerning valuable information from less reliable sources.</p>
           
                    <br/>
                    <p>The surest way to develop as a guitarist is to follow a disciplined learning plan and stick with it.</p>
             
                      
       
             
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

export default Electric;
