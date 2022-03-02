import Covid from "./pages/Covid/Covid";
import Landing from "./pages/Landing/Landing";
import PersonalInformation from "./pages/PersonalInformation/PersonalInformation";
import RedberrianInsights from "./pages/RedberrianInsights/RedberrianInsights";
import TechnicalSkill from "./pages/TechnicalSkill/TechnicalSkill";

function App() {
  return (
    <div className="App">
      <Landing />
      <PersonalInformation />
      <TechnicalSkill />
      <Covid />
      <RedberrianInsights />
    </div>
  );
}

export default App;
