import React, { useEffect, useState } from "react";
import styles from "./SubmittedItemList.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import SubmittedItem from "./SubmittedItem/SubmittedItem";

const SubmittedItemList = () => {
  // Get submitted applications from API
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios(
        "https://bootcamp-2022.devtest.ge/api/applications",
        { params: { token: "4a367e79-2313-4af6-86b5-9073fad0d74b" } }
      );
      setApplications(results.data);
    }
    getResults();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Submitted Applications</h1>
        <Link to="/" className={styles.link}>
          &#8592; Go back
        </Link>
      </div>
      {applications.length > 0 ? (
        applications.map((post, index) => (
          <SubmittedItem
            key={Math.random() * 3}
            post={post}
            index={index}
          ></SubmittedItem>
        ))
      ) : (
        <h3 className={styles.noApplications}>
          No Applications Submitted &#128533;
        </h3>
      )}
    </div>
  );
};

export default SubmittedItemList;
