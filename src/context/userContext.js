import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    token: "4a367e79-2313-4af6-86b5-9073fad0d74b",
    // User entered values
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
    // States for show/hide errors
    showError: false,
    showSkillError: false,
    showRedberrianError: false,
    showCovidError: false,
    // Dummy state if API did't respond
    dummySubmittedData: [],
  });
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
