import React from "react";
import Theory from "../../Component/images/about-bg.png";
import Navbar from "../../Component/navbar/navbar";
import "../MusicScales/scales.css";
import fretboardscales from "../images/musicfretboard.png";
import { Link } from "react-router-dom";
import Cscale from "../images/c-scale.png";
import fscale from "../images/f Major Scale.png";
import Escale from "../images/E Major Scale.png";
import Gscale from "../images/G Major Scale.png";
import Bscale from "../images/B Major Scale.png";
import Ascale from "../images/A Major Scale.png";
import MajorScale from "../images/MAJOR PENTATONIC SCALES.png";
import MinorScale from "../images/MINOR PENTATONIC SCALES.png";

class Scales extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="music-parent">
          <div className="hero">
            <div className="theory-title">
              <h1> Learn Music Theory</h1>
            </div>
          </div>

          <div className="introduction">
            <div className="title">
              <h1>Music Theory For Beginners</h1>
            </div>
            <div className="descript">
              <p1>
                Music theory is a vast and fascinating subject that covers the
                principles of how music works. As a beginner, it's important to
                start with the basics. Here's an overview of some fundamental
                concepts in music theory:
              </p1>
            </div>

            <div className="title-text">
              <h1>#1 Notes</h1>

              <div className="number-desc">
                <p1>
                  •Music is made up of notes. The basic notes are named A, B, C,
                  D, E, F, and G. After G, the sequence repeats.
                </p1>
              </div>
            </div>

            <div className="scales-fretboard">
              <img src={fretboardscales} />
            </div>

            <div className="number-desc">
              <p1>
                Notes can also have modifiers called sharps (#) and flats (b),
                which raise or lower a pitch by a half-step.
              </p1>
            </div>

            <div className="title-text">
              <h1>#2 Scales</h1>

              <div className="number-desc">
                <p1>
                  •A scale is a series of notes arranged in ascending or
                  descending order.
                </p1>
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="left-each">
                <p>
                  The most common scale is the major scale, which has a specific
                  pattern of whole and half steps. For example, the{" "}
                  <strong>C major scale</strong> is <i> C-D-E-F-G-A-B.</i>
                </p>
              </div>
              <div className="right-each">
                <img src={Cscale} />
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="right-each">
                <img src={Cscale} />
              </div>

              <div className="left-each">
                <p>
                  {" "}
                  <strong>D major Scale </strong>
                  <br />
                  <br />
                  <i> D - E - F# - G - A - B - C# - D</i>
                </p>
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="left-each">
                <p>
                  {" "}
                  <strong>E major Scale </strong>
                  <br />
                  <br />
                  <i> E - F# - G# - A - B - C# - D# - E</i>
                </p>
              </div>

              <div className="right-each">
                <img src={Escale} />
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="right-each">
                <img src={fscale} />
              </div>

              <div className="left-each">
                <p>
                  {" "}
                  <strong>F major Scale </strong>
                  <br />
                  <br />
                  <i> F - G - A - Bb - C - D - E - F</i>
                </p>
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="left-each">
                <p>
                  {" "}
                  <strong>G major Scale </strong>
                  <br />
                  <br />
                  <i> G - A - B - C - D - E - F# - G</i>
                </p>
              </div>

              <div className="right-each">
                <img src={Gscale} />
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="right-each">
                <img src={Ascale} />
              </div>

              <div className="left-each">
                <p>
                  {" "}
                  <strong>A major Scale </strong>
                  <br />
                  <br />
                  <i> G - A - B - C - D - E - F# - G</i>
                </p>
              </div>
            </div>

            <div className="scaleseach-parent">
              <div className="left-each">
                <p>
                  {" "}
                  <strong>B major Scale </strong>
                  <br />
                  <br />
                  <i> B - C# - D# - E - F# - G# - A# - B</i>
                </p>
              </div>

              <div className="right-each">
                <img src={Bscale} />
              </div>
            </div>

            <div className="title-text">
              <h1>#3 Pentatonic Scales</h1>

              <div className="number-desc">
                <p1>
                  A pentatonic scale is a musical scale that consists of five
                  notes. The word "penta" means five, and "tonic" refers to the
                  first note of the scale.
                </p1>

                <div className="pent-imp">
                  <h1>Why Pentatonic Scales Important?</h1>
                  <br />

                  <div className="pentatonic-margin">
                    <p1>1. Easy to Remember</p1>

                    <br />

                    <p>
                      •Pentatonic scales are simple and easy to remember because
                      they only have five notes.
                    </p>

                    <p1>2. Versatile</p1>

                    <br />

                    <p>
                      •They work well in many styles of music, from rock and
                      blues to pop and jazz.
                    </p>

                    <p1>3. Great for Improvisation</p1>

                    <br />

                    <p>
                      •Musicians often use pentatonic scales for improvisation,
                      creating their melodies and solos.
                    </p>

                    <p1>4. No "Wrong" Notes</p1>

                    <br />

                    <p>
                      •Pentatonic scales sound good, and there are no dissonant
                      or "wrong" notes, making them beginner-friendly.
                    </p>
                  </div>

                  <h1> How to Practice?</h1>
                  <br />

                  <div className="pentatonic-margin">
                    <p1>Play on your Instrument</p1>

                    <p>
                      •Whether you have a guitar, keyboard, or another
                      instrument, try playing the pentatonic scales slowly at
                      first.
                    </p>

                    <p1>Listen to Songs</p1>

                    <p>
                      •Listen to songs that use pentatonic scales, and see if
                      you can identify the sound.
                    </p>

                    <p1>Experiment with Melodies</p1>

                    <p>
                      •Start creating your simple melodies using the pentatonic
                      scale. It's a great way to express yourself musically.
                    </p>
                  </div>

                  <div className="scale-title">
                    <p>There are two types of scales:</p>

                    <h1>Major Scale:</h1>
                    <br />
                  </div>

                  <div className="pattern-scale">
                    <img src={MajorScale} />
                  </div>

                  <div className="scale-title">
                    <h1>Minor Scale:</h1>
                    <br />
                  </div>

                  <div className="pattern-scale">
                    <img src={MinorScale} />
                  </div>

                  <br />
                  <p1>
                    The Pentatonic Scale are useful when it comes in crafting
                    soloPentatonic scales are incredibly versatile and have a
                    wide range of uses in music.
                    <br />
                    Here are some common applications:<br/>
                  </p1>
                  <br/>

                  <div className="margin-applications">
                    <p1>1. Melodies and Solos:</p1>
                    

                    <p>
                     • Pentatonic scales are frequently used to create melodies
                      and solos in various musical genres. They have a simple
                      and pleasing sound, making them <br />
                      ideal for crafting memorable and expressive melodic lines.
                    </p>

                    <p1>2.Improvisation:</p1>

                    <p>
                      •Musicians often use pentatonic scales for improvisation. Since these scales sound good over many chord progressions, <br/>they provide a solid foundation for creating improvised solos in genres like blues, rock, jazz, and more.
                    </p>

                    <p1>3.Songwriting:</p1>


                    <p>
                      •Pentatonic scales are valuable tools for songwriters. Many popular songs incorporate melodies and chord progressions derived from pentatonic scales, <br/>contributing to the overall catchy and accessible nature of the music.
                    </p>

                    <p1>4.Guitar Riffs:</p1>

                    <p>
                      •Guitarists frequently use pentatonic scales to create iconic riffs. The simplicity of the scale makes it easy to play and remember,<br/> leading to the creation of memorable guitar hooks in various genres, especially in rock and blues.
                    </p>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Scales;
