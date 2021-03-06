import Pagination from "./components/Pagination/Pagination";
import Covid from "./pages/Covid/Covid";
import Landing from "./pages/Landing/Landing";
import PersonalInformation from "./pages/PersonalInformation/PersonalInformation";
import RedberrianInsights from "./pages/RedberrianInsights/RedberrianInsights";
import Submit from "./pages/Submit/Submit";
import SubmittedItemList from "./pages/SubmittedItems/SubmittedItemList";
import TechnicalSkill from "./pages/TechnicalSkill/TechnicalSkill";
import Thanks from "./pages/Thanks/Thanks";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/personalInfo" element={<PersonalInformation />} />
        <Route path="/skills" element={<TechnicalSkill />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/redberrian" element={<RedberrianInsights />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/submitted-item" element={<SubmittedItemList />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {location.pathname === "/personalInfo" ||
      location.pathname === "/skills" ||
      location.pathname === "/covid" ||
      location.pathname === "/redberrian" ? (
        <Pagination />
      ) : null}
    </div>
  );
}

export default App;
