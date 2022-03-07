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

  const skillButtonClick = () => {
    if (location.pathname !== "/personalInfo") {
      navigate("/skills");
    }
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
      navigate("/skills");
    }
  };

  const covidButtonClick = () => {
    if (location.pathname !== "/skills") {
      navigate("/covid");
    }
    if (userInfo.skills.length < 1) {
      setUserInfo({ ...userInfo, showSkillError: true });
    } else {
      navigate("/covid");
    }
  };

  const submitButtonClick = () => {
    if (location.pathname !== "/redberrian") {
      navigate("/submit");
    }
    if (
      userInfo.devtalk_topic.length < 10 ||
      userInfo.something_special.length < 10 ||
      userInfo.will_organize_devtalk === "undefined"
    ) {
      setUserInfo({ ...userInfo, showRedberrianError: true });
    } else {
      navigate("/submit");
    }
  };

  return (
    <div className={styles.main}>
      <img className={styles.arrow} src="/images/right.png" />

      <Link to="/personalInfo" className={styles.active} />
      <span onClick={() => skillButtonClick()} className={styles.inactive} />
      <span onClick={() => covidButtonClick()} className={styles.inactive} />
      <Link to="/redberrian" className={styles.inactive} />
      <span onClick={() => submitButtonClick()} className={styles.inactive} />

      <img className={styles.arrow} src="/images/left.png" />
    </div>
  );
};

export default Pagination;
