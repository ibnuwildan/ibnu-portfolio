import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/Home';
import WelcomePage from './page/Welcome';
import ProjectSatu from './page/project1';
import ProjecDua from './page/project2';
import ProjecTiga from './page/project3';
import AboutPage from './page/About';
import ProjectPage from './page/Project';
import ProjectEmpat from './page/project4';


function App() {
  return (
    <div className="body">
      <div>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/about' element={<HomePage />} />
          <Route path='/service' element={<AboutPage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/project1' element={<ProjectSatu />} />
          <Route path='/project2' element={<ProjecDua />} />
          <Route path='/project3' element={<ProjecTiga />} />
          <Route path='/project4' element={<ProjectEmpat />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
