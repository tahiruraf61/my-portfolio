import NavBar from "./components/navBar/NavBar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
