import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="portfolioContainer">
        <div className="portfolio">
          <Portfolio />
        </div>
      </div>
      <div className="AboutMe">
        <div>
          <h2>About Me</h2>
          <p>Hi there! My name is Brent! I'm a budding, 24-year-old developer whose main goal is to constantly learn and improve. I'm originally from Central Illinois, but moved to Atlanta, Georgia in 2019 to start a new life.</p>
          <p>Having originally studied ancient history and languages, I am now spending time learning computer programming languages. The work is hard, but the reward is great and I am constantly finding reasons to keep getting excited about it.</p>
          <p>Below are some links to projects I've worked on. I will continue to update this portfolio page with more interactivity and more projects!</p>
        </div>
      </div>
      <footer>
      <h2>Contact Me</h2>
            <p>Feel free to reach out to me on the following platforms:</p>
            <ul>
                <li><a href="https://github.com/BrenniusXIV" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://gitlab.com/bbaughan" target="_blank" rel="noreferrer">GitLab</a></li>
                <li><a href="https://www.linkedin.com/in/brent-baughan-33a136181" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
      </footer>
    </div>
  );
}

export default App;
