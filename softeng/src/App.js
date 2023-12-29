
import './App.css';
import {
  BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
  import Subcontent from './Component/subcontent/subcontent';
import Guitars from './Component/guitars/guitars';
import Acoustic from './Component/acoustic/acoustic';
import Electric from './Component/electric/electric';
import Ukelele from './Component/ukelele/ukelele';
import Bass from './Component/bass/bass';
import About from './Component/about/about';
import MusicTheory from './ComponentTwo/MusicScales/scales';
import LandingPage from './ComponentThree/landingpage';
import Minorchords from './Component/minorchords/minor';
import Majorchords from './Component/majorchords/major';
import Powerchords from './Component/powerchords/power';
import Sharpchords from './Component/sharpchords/sharp';
import Footer from './Component/footer/footer';



function App() {
  return (
    <>
    <div>
    <Router> 
      <Routes>
       {/* <Route path="/" element={<Subcontent />} />  */}
        <Route path="/guitars" element={<Guitars />} />
        <Route path="/" element={<About />} />
        <Route path="/scales" element={<MusicTheory />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/acoustic" element={<Acoustic />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/ukelele" element={<Ukelele />} />
        <Route path="/bass" element={<Bass />} />
        <Route path="/minor" element={<Minorchords />} />
        <Route path="/major" element={<Majorchords />} />
        <Route path="/power" element={<Powerchords />} />
        <Route path="/sharp" element={<Sharpchords />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </Router>


   <Footer/>
    
    </div>
  



   
    </>
  );
}

export default App;
