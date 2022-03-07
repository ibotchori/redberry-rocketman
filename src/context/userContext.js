import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    token: "",
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
