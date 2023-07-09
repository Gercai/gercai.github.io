import './App.css';
import './scss/main.scss';
import {Routes,Route, Link} from 'react-router-dom';
import Project from './modules/project';
import CanvasInterface from './modules/Canvas/CanvasInterface';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="nav">
            <li><Link to="/artpage">Artpage</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li>About</li>
          </ul> 
        </nav>
      </header>
      <article>
        <h1>Portfolio</h1>

        <Routes>
          <Route  path="/projects" element={<Project/>}/>
          <Route path="/canvasInterface" element={<CanvasInterface/>} />

        </Routes>

      </article>
    </div>
  );
}

export default App;
