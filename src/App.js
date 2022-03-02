import Covid from "./pages/Covid/Covid";
import Landing from "./pages/Landing/Landing";
import PersonalInformation from "./pages/PersonalInformation/PersonalInformation";
import TechnicalSkill from "./pages/TechnicalSkill/TechnicalSkill";

function App() {
  return (
    <div className="App">
      <Landing />
      <PersonalInformation />
      <TechnicalSkill />
      <Covid />
    </div>
  );
}

export default App;
