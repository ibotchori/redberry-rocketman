import styles from "./Pagination.module.css";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { regEmail } from "../../utils/regex";

const Pagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Global state
  const [userInfo, setUserInfo] = useContext(UserContext);
  console.log(location.pathname);

  const skillButtonClick = () => {
    if (location.pathname === "/personalInfo") {
      if (
        userInfo.first_name.length < 2 ||
        userInfo.last_name.length < 2 ||
        regEmail.test(userInfo?.email) === false ||
        userInfo.phone.length < 9
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
    if (location.pathname === "/skills") {
      if (userInfo.skills.length < 1) {
        setUserInfo({ ...userInfo, showSkillError: true });
      } else {
        setCovidButtonStyle(styles.active);
        navigate("/covid");
      }
    } else {
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
    } else {
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
    } else {
      return;
    }
  };

  const [skillButtonStyle, setSkillButtonStyle] = useState(styles.inactive);
  const [covidButtonStyle, setCovidButtonStyle] = useState(styles.inactive);
  const [redberrianButtonStyle, setRedberrianButtonStyle] = useState(
    styles.inactive
  );
  return (
    <div className={styles.main}>
      <img className={styles.arrow} src="/images/right.png" />

      <Link to="/personalInfo" className={styles.active} />
      <span onClick={() => skillButtonClick()} className={skillButtonStyle} />
      <span onClick={() => covidButtonClick()} className={covidButtonStyle} />
      <span
        onClick={() => redberrianButtonClick()}
        className={redberrianButtonStyle}
      />
      <span onClick={() => submitButtonClick()} className={styles.inactive} />

      <img className={styles.arrow} src="/images/left.png" />
    </div>
  );
};

export default Pagination;
