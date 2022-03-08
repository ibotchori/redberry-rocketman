import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    token: "a631c5f6-1eb5-4828-aed1-ed8b233f1265",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    skills: [],
    work_preference: "",
    had_covid: false,
    had_covid_at: "",
    vaccinated: false,
    vaccinated_at: "",
    will_organize_devtalk: "undefined",
    devtalk_topic: "",
    something_special: "",
    showError: false,
    showSkillError: false,
    showRedberrianError: false,
    showCovidError: false,
  });
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
