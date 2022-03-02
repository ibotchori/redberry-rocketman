import Covid from "./pages/Covid/Covid";
import Landing from "./pages/Landing/Landing";
import PersonalInformation from "./pages/PersonalInformation/PersonalInformation";
import RedberrianInsights from "./pages/RedberrianInsights/RedberrianInsights";
import Submit from "./pages/Submit/Submit";
import TechnicalSkill from "./pages/TechnicalSkill/TechnicalSkill";
import Thanks from "./pages/Thanks/Thanks";

function App() {
  return (
    <div className="App">
      <Landing />
      <PersonalInformation />
      <TechnicalSkill />
      <Covid />
      <RedberrianInsights />
      <Submit />
      <Thanks />
    </div>
  );
}

export default App;
