import './App.css';
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import SkillsShelf from "./components/SkillShelf/SkillsShelf";
import Experiences from "./components/Experiences/Experiences";
import Starlight from "./components/Starlight/Starlight";
import Projects from "./components/Projects/Projects";
import Socials from "./components/Socials/Socials";

function App() {
  return (
      <div className="App">
          <Navigation />
          <main>
              <div className="starlight" >
                  <Starlight className="starlight" />
              </div>
              <div className="about-me">
                <AboutMe className="about-me" />
              </div>
              <SkillsShelf/>
              <Projects />
              <Experiences/>
          </main>
          <footer role="contentinfo" className="footer">
              <Socials />
          </footer>
      </div>
  );
}

export default App;
