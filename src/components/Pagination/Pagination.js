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

  return (
    <div className={styles.main}>
      <img className={styles.arrow} src="/images/right.png" />

      <Link to="/personalInfo" className={styles.active} />
      <span onClick={() => skillButtonClick()} className={styles.inactive} />
      <Link to="/covid" className={styles.inactive} />
      <Link to="/redberrian" className={styles.inactive} />
      <Link to="/submit" className={styles.inactive} />

      <img className={styles.arrow} src="/images/left.png" />
    </div>
  );
};

export default Pagination;
