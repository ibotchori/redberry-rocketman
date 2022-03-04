import { useEffect, useState } from "react";
import styles from "./TechnicalSkill.module.css";
import axios from "axios";

const TechnicalSkill = () => {
  const [expYear, setExpYear] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [allExperiences, setAllExperiences] = useState([]);
  // Get skills from API
  let [skills, setSkills] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios(
        "https://bootcamp-2022.devtest.ge/api/skills"
      );
      setSkills(results.data);
    }
    getResults();
  }, []);

  const addWorkingExperience = () => {
    // Extract Selected Skill ID
    const selectedSkillID = skills?.find(
      (item) => item.title === selectedSkill
    )?.id;
    let oneWorkingExperience = {
      id: selectedSkillID,
      experience: expYear,
      title: selectedSkill,
    };
    if (expYear !== "" && selectedSkill !== "") {
      setAllExperiences((currentArray) => [
        ...currentArray,
        oneWorkingExperience,
      ]);
    }

    // clear inputs
    setSelectedSkill("");
    setExpYear("");
  };

  const removeWorkingExperience = (itemId) => {
    setAllExperiences(allExperiences.filter(({ id }) => id !== itemId));
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Tell us about your skills</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <select
              onChange={(e) => setSelectedSkill(e.target.value)}
              className={styles.select}
              name="country"
              value={selectedSkill}
            >
              <option defaultValue="" hidden>
                Skills
              </option>
              {skills?.map((item) => {
                return (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <input
              onChange={(e) => setExpYear(e.target.value)}
              className={styles.input}
              type="number"
              id="number"
              value={expYear}
              name="epxYear"
              placeholder="Experience Duration in Years"
            />

            <div className={styles.buttonWrap}>
              <div onClick={addWorkingExperience} className={styles.button}>
                Add Programing Language
              </div>
            </div>

            <div className={styles.skills}>
              {allExperiences.length !== 0 ? (
                allExperiences.map((item) => (
                  <div className={styles.skill}>
                    <p className={styles.pLanguage}>{item.title}</p>
                    <p>Years of Experience: {item.experience}</p>
                    <img
                      onClick={() => removeWorkingExperience(item.id)}
                      className={styles.icon}
                      src="/images/delete.jpg"
                      alt="delete"
                    />
                  </div>
                ))
              ) : (
                <p>No experience added.</p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className={styles.mainRight}>
        <h1 className={styles.title}>A bit about our battles</h1>
        <div className={styles.rightP}>
          <p>
            As we said, Redberry has been on the field for quite some time now,
            and we have touched and embraced a variety of programming languages,
            technologies, philosophies, and frameworks. We are battle-tested in
            PHP Laravel Stack with Vue.js, refined in React, and allies with
            Serverside technologies like Docker and Kubernetes, and now we have
            set foot in the web3 industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkill;
