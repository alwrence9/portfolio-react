import './App.css';
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import SkillsShelf from "./components/SkillShelf/SkillsShelf";
import Experiences from "./components/Experiences/Experiences";
import Starlight from "./components/Starlight/Starlight";

function App() {
  return (
      <div className="App">
          <Navigation/>
          <main>
              <AboutMe/>
              <Starlight />
              <SkillsShelf/>
              <Experiences/>
          </main>
          <footer role="contentinfo" className="footer">
              <div className="row">
                  <ul className="footer__social-links">
                      <li className="footer__social-link-item">
                          <a href="https://github.com/alwrence9/" title="Link to Github Profile">
                              <img src="./images/github.svg" className="footer__social-image" alt="Github"/>
                          </a>
                      </li>
                      <li className="footer__social-link-item">
                          <a href="https://www.linkedin.com/in/hong-minh-vu-77a072250/">
                              <img src="./images/linkedin.svg" title="Link to Linkedin Profile"
                                   className="footer__social-image" alt="Linkedin"/>
                          </a>
                      </li>
                  </ul>
              </div>
          </footer>
      </div>
  );
}

export default App;
