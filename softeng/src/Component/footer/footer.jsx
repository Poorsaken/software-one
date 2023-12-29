import React from "react";

class Footer extends React.Component{

    render(){

        return (

            <>
            

            <footer className="footer">
              <div className="footeraddr">
                <h1 className="footerlogo">Guitar Gix</h1>
                <h2>Contact</h2>
                <address>
                  5534 Somewhere In. The World 22193-10212
                  <br />
                  <a
                    className="footerbtn"
                    href="mailto:example@gmail.com"
                  >
                    Email Us
                  </a>
                </address>
              </div>

              <ul className="footernav">
                <li className="navitem">
                  <h2 className="navtitle">Media</h2>
                  <ul className="navul">
                    <li>
                      <a href="#">Online</a>
                    </li>
                    <li>
                      <a href="#">Print</a>
                    </li>
                    <li>
                      <a href="#">Alternative Ads</a>
                    </li>
                  </ul>
                </li>

                <li className="navitem" >
                  <h2 className="navtitle">Technology</h2>
                  <ul className="navul" >
                    <li>
                      <a href="#">Hardware Design</a>
                    </li>
                    <li>
                      <a href="#">Software Design</a>
                    </li>
                    <li>
                      <a href="#">Digital Signage</a>
                    </li>
                    <li>
                      <a href="#">Automation</a>
                    </li>
                    <li>
                      <a href="#">Artificial Intelligence</a>
                    </li>
                    <li>
                      <a href="#">IoT</a>
                    </li>
                  </ul>
                </li>

                <li className="navitem">
                  <h2 className="navtitle">Legal</h2>
                  <ul className="navul">
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="legal">
                <p>&copy; 2019 Something. All rights reserved.</p>
                <div className="legallinks">
                  <span>
                    thank you for viewing
                    <span className="heart">♥</span>
                  </span>
                </div>
              </div>
            </footer>
            
            </>
        )
    }


}

export default Footer;