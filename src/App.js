import './styles/home.scss'
// import './App.css';
import Home from './components/Home.js';
import About from './components/About.js'
import Projects from './components/Projects.js'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  )
}

export default App;
