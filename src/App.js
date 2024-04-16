import { Navbar } from "./components/Navbar/navbar";
import Hero from './components/Hero/hero';
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skill />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
