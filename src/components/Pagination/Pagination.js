import styles from "./Pagination.module.css";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Pagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let regPhone = /^5[0-9]{8}$/g;

  // Global state
  const [userInfo, setUserInfo] = useContext(UserContext);

  const skillButtonClick = () => {
    if (location.pathname === "/covid") {
      navigate("/skills");
      setCovidButtonStyle(styles.inactive);
    }
    if (location.pathname === "/redberrian") {
      navigate("/skills");
      setRedberrianButtonStyle(styles.inactive);
      setCovidButtonStyle(styles.inactive);
    }
    if (location.pathname === "/personalInfo") {
      if (
        userInfo.first_name.length < 2 ||
        userInfo.last_name.length < 2 ||
        regEmail.test(userInfo?.email) === false ||
        regPhone.test(userInfo?.phone) === false
      ) {
        setUserInfo({ ...userInfo, showError: true });
      } else if (
        userInfo.first_name !== "" &&
        userInfo.last_name !== "" &&
        userInfo.email !== "" &&
        userInfo.phone !== ""
      ) {
        setSkillButtonStyle(styles.active);
        navigate("/skills");
      }
    } else {
      return;
    }
  };

  const covidButtonClick = () => {
    if (location.pathname === "/redberrian") {
      navigate("/covid");
      setRedberrianButtonStyle(styles.inactive);
    }
    if (location.pathname === "/skills") {
      if (userInfo.skills.length < 1) {
        setUserInfo({ ...userInfo, showSkillError: true });
      } else {
        setCovidButtonStyle(styles.active);
        navigate("/covid");
      }
    } else if (location.pathname === "/personalInfo") {
      setSkillButtonStyle(styles.bounce);
      return;
    }
  };

  const redberrianButtonClick = () => {
    if (location.pathname === "/covid") {
      if (userInfo.work_preference === "") {
        setUserInfo({ ...userInfo, showCovidError: true });
      } else if (userInfo.had_covid === true && userInfo.had_covid_at === "") {
        setUserInfo({ ...userInfo, showCovidError: true });
      } else if (
        userInfo.vaccinated === true &&
        userInfo.vaccinated_at === ""
      ) {
        setUserInfo({ ...userInfo, showCovidError: true });
      } else {
        setRedberrianButtonStyle(styles.active);
        navigate("/redberrian");
      }
    } else if (location.pathname === "/skills") {
      setCovidButtonStyle(styles.bounce);
      return;
    } else if (location.pathname === "/personalInfo") {
      setSkillButtonStyle(styles.bounce);
      return;
    }
  };

  const submitButtonClick = () => {
    if (location.pathname === "/redberrian") {
      if (
        userInfo.something_special.length < 10 ||
        userInfo.will_organize_devtalk === "undefined"
      ) {
        setUserInfo({ ...userInfo, showRedberrianError: true });
      } else if (
        userInfo.will_organize_devtalk === true &&
        userInfo.devtalk_topic.length < 10
      ) {
        setUserInfo({ ...userInfo, showRedberrianError: true });
      } else {
        navigate("/submit");
      }
    } else if (location.pathname === "/covid") {
      setRedberrianButtonStyle(styles.bounce);
      return;
    } else if (location.pathname === "/personalInfo") {
      setSkillButtonStyle(styles.bounce);
      return;
    } else if (location.pathname === "/skills") {
      setCovidButtonStyle(styles.bounce);
      return;
    }
  };

  const nextButtonClick = () => {
    if (location.pathname === "/personalInfo") {
      if (
        userInfo.first_name.length < 2 ||
        userInfo.last_name.length < 2 ||
        regEmail.test(userInfo?.email) === false ||
        regPhone.test(userInfo?.phone) === false
      ) {
        setUserInfo({ ...userInfo, showError: true });
      } else if (
        userInfo.first_name !== "" &&
        userInfo.last_name !== "" &&
        userInfo.email !== "" &&
        userInfo.phone !== ""
      ) {
        setSkillButtonStyle(styles.active);
        navigate("/skills");
      }
    } else if (location.pathname === "/skills") {
      if (userInfo.skills.length < 1) {
        setUserInfo({ ...userInfo, showSkillError: true });
      } else {
        setCovidButtonStyle(styles.active);
        navigate("/covid");
      }
    } else if (location.pathname === "/covid") {
      if (userInfo.work_preference === "") {
        setUserInfo({ ...userInfo, showCovidError: true });
      } else if (userInfo.had_covid === true && userInfo.had_covid_at === "") {
        setUserInfo({ ...userInfo, showCovidError: true });
      } else if (
        userInfo.vaccinated === true &&
        userInfo.vaccinated_at === ""
      ) {
        setUserInfo({ ...userInfo, showCovidError: true });
      } else {
        setRedberrianButtonStyle(styles.active);
        navigate("/redberrian");
      }
    } else if (location.pathname === "/redberrian") {
      if (
        userInfo.something_special.length < 10 ||
        userInfo.will_organize_devtalk === "undefined"
      ) {
        setUserInfo({ ...userInfo, showRedberrianError: true });
      } else if (
        userInfo.will_organize_devtalk === true &&
        userInfo.devtalk_topic.length < 10
      ) {
        setUserInfo({ ...userInfo, showRedberrianError: true });
      } else {
        navigate("/submit");
      }
    }
  };

  const prevButtonClick = () => {
    if (location.pathname === "/redberrian") {
      navigate("/covid");
      setRedberrianButtonStyle(styles.inactive);
    } else if (location.pathname === "/covid") {
      navigate("/skills");
      setCovidButtonStyle(styles.inactive);
    } else if (location.pathname === "/skills") {
      navigate("/personalInfo");
      setSkillButtonStyle(styles.inactive);
    } else if (location.pathname === "/personalInfo") {
      navigate("/");
    }
  };

  // States for button style
  const [skillButtonStyle, setSkillButtonStyle] = useState(styles.inactive);
  const [covidButtonStyle, setCovidButtonStyle] = useState(styles.inactive);
  const [redberrianButtonStyle, setRedberrianButtonStyle] = useState(
    styles.inactive
  );
  const [infoButtonStyle, setInfoButtonStyle] = useState(styles.inactive);

  useEffect(() => {
    if (location.pathname === "/redberrian") {
      setRedberrianButtonStyle(styles.now);
      setCovidButtonStyle(styles.active);
      setSkillButtonStyle(styles.active);
      setInfoButtonStyle(styles.active);
    } else if (location.pathname === "/covid") {
      setCovidButtonStyle(styles.now);
      setSkillButtonStyle(styles.active);
      setInfoButtonStyle(styles.active);
    } else if (location.pathname === "/skills") {
      setSkillButtonStyle(styles.now);
      setInfoButtonStyle(styles.active);
    } else if (location.pathname === "/personalInfo") {
      setRedberrianButtonStyle(styles.inactive);
      setCovidButtonStyle(styles.inactive);
      setSkillButtonStyle(styles.inactive);
      setInfoButtonStyle(styles.now);
    }
  }, [location.pathname]);

  return (
    <div className={styles.main}>
      <img
        onClick={() => prevButtonClick()}
        className={styles.arrow}
        src="/images/right.png"
      />

      <Link to="/personalInfo" className={infoButtonStyle} />
      <span onClick={() => skillButtonClick()} className={skillButtonStyle} />
      <span onClick={() => covidButtonClick()} className={covidButtonStyle} />
      <span
        onClick={() => redberrianButtonClick()}
        className={redberrianButtonStyle}
      />
      <span onClick={() => submitButtonClick()} className={styles.inactive} />

      <img
        onClick={() => nextButtonClick()}
        className={styles.arrow}
        src="/images/left.png"
      />
    </div>
  );
};

export default Pagination;
