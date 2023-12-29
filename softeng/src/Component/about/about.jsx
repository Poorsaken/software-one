import React from "react";
import "./about.css";
import Navbar from "../navbar/navbar";
import heroimg from "../images/Timhenson.jpg";
import { Link } from "react-router-dom";
import kid from "../images/kidplaying.jpg";
import man from "../images/man.jpg";
import ejap from "../images/ejap.jpg";
import Jal from "../images/Jal.jpg";

class About extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="hero-parent">
          <div className="image-hero">
            <div className="header">
              <h1 className="h-one">
                <storng />
                Learn Guitar For Free
              </h1>
            </div>

            <div className="button-parent">
              <Link to="/guitars" className="links">
                <div className="button">
                  <p>Get Started</p>
                </div>
              </Link>
            </div>

            {/* <img src={heroimg}/> */}
          </div>

          <div className="aboutus-parent">
            <div className="about-header">
              <p1>About Us</p1>
            </div>

            <div className="about-desc">
              <p1>
                We, the team at GuitarGix, are passionate about one thing:
                empowering music enthusiasts to confidently strum their first
                chords. We understand the initial hurdles that aspiring
                guitarists face – the confusing jargon, the overwhelming sheet
                music, and the fear of making mistakes. But fear not! GuitarGix
                is here to demystify the magic of the guitar and make your
                musical journey smooth and enjoyable.
              </p1>
            </div>
          </div>

          <div className="mission-parent">
            <div className="about-header">
              <p1>MISSION</p1>
            </div>
          </div>

          <div className="missiondesc-parent">
            <div className="left">
              <p>
                Our mission is simple yet profound: <br />
                empower every guitarist with the <br />
                <strong>knowledge to unlock their musical potential.</strong>
              </p>
              <br />

              <div className="mission-desc">
                <p>
                  We believe that understanding the intricate world of guitars,
                  from their anatomy to the language of music theory, is not
                  just a bonus, but the key to mastery and self-expression.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="image-one">
                <img src={kid} />
              </div>
              <div className="image-two">
                <img src={man} />
              </div>
            </div>
          </div>

          <div className="vision-parent">
            <div className="about-header">
              <p1>Vision</p1>
            </div>
          </div>

          <div className="vissiondesc-parent">
            <div className="right-vision">
              <div className="image-one">
                <img src={kid} />
              </div>
              <div className="image-two">
                <img src={man} />
              </div>
            </div>

            <div className="left-vision">
              <p>
                Empowering guitarists worldwide,
                <br />
                unlock your musical potential with knowledge.
              </p>
              <br />

              <div className="mission-desc">
                <p>
                  In our envisioned future, every guitarist stands as a maestro
                  of their craft, wielding not just strings and frets but a
                  profound understanding of the musical universe. We see a world
                  where every player, from novice to virtuoso, is empowered with
                  the knowledge to unravel the full spectrum of their musical
                  potential.
                </p>
              </div>
            </div>
          </div>

          <div className="music-parent">
            <div className="music-desc">
              <p>
                From the beginner learning their first chords to the seasoned
                musician exploring new techniques, we strive to provide a
                comprehensive and accessible learning experience.
                <br /> Our platform is a treasure trove of knowledge,
                encompassing:
              </p>
            </div>

            <div className="category-parent">
              <div className="box-one">
                <div className="box-child">asd</div>

                <p1 className="title-music"> Guitar Anatomy</p1>
              </div>

              <div className="box-two">
                <div className="box-child">asd</div>

                <p1 className="title-music"> Music Theory </p1>
              </div>

              <div className="box-three">
                <div className="box-child">asd</div>

                <p1 className="title-music"> Technique Tutorials</p1>
              </div>
            </div>
          </div>

          <div className="team-parent">
            <div className="team-title">
              <p1>Meet The Team</p1>
            </div>

            <div className="team-box">
              <div className="box-jal">
                <div className="box-image">
                  <img src={ejap} />
                </div>

                <div className="name">
                  <p1> Enrik Jhoemama Pacana</p1> <br />
                  <p2> Full Stack Developer</p2>
                </div>
              </div>

              <div className="box-ej">
                <div className="box-image">
                  <img src={Jal} />
                </div>

                <p1> Jal Devecais</p1>
                <br></br>
                <p2> Full Stack Developer</p2>
              </div>
            </div>

           
          </div>
        </div>
      </>
    );
  }
}

export default About;
