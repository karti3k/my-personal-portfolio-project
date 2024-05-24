import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import SkillsSec from './Components/SkillsSec';
import ProjectSec from './Components/ProjectSec';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsSec />
      <ProjectSec />
    </div>
  );
}

export default App;
