import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import MenufacturersDetails from "./components/MenufacturersDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Blogs />
      <Experience />
      <Contact />
      <SocialLinks />
      <Routes>
        
        <Route path="menufacturers" element={<MenufacturersDetails />}></Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
