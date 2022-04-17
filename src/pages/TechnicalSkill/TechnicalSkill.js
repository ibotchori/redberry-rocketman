import { useContext, useEffect, useState } from "react";
import styles from "./TechnicalSkill.module.css";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useAxios } from "../../CustomHooks/useAxios";
import { useAxios2 } from "../../CustomHooks/useAxios2";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
// actions
import {
  addSkill,
  fetchSkills,
  removeSkill,
} from "../../features/skill/skillSlice";

const TechnicalSkill = () => {
  // Global state (Context)
  const [userInfo, setUserInfo] = useContext(UserContext);

  //  Global state (Redux)
  const fetchedSkills = useSelector((state) => state.skill.fetchedSkills);
  const addedSkillsFromRedux = useSelector((state) => state.skill.skills);

  const dispatch = useDispatch();

  // Local state
  const [expYear, setExpYear] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [allExperiences, setAllExperiences] = useState([]);

  const [skillErrorMessage, setSkillErrorMessage] = useState("");
  const [expErrorMessage, setExpErrorMessage] = useState("");

  // Get skills from API
  // const [skills, setSkills] = useState([]);
  // useEffect(() => {
  //   async function getResults() {
  //     const results = await axios(
  //       "https://bootcamp-2022.devtest.ge/api/skills"
  //     );
  //     setSkills(results.data);
  //   }
  //   getResults();
  // }, []);

  //  Get skills from API with redux toolkit
  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  // Clear error messages if input is not empty
  useEffect(() => {
    if (selectedSkill !== "") {
      setSkillErrorMessage("");
    }
    if (expYear !== "") {
      setExpErrorMessage("");
    }
  }, [selectedSkill, expYear]);

  const addWorkingExperience = () => {
    // Extract Selected Skill ID
    const selectedSkillID = fetchedSkills?.find(
      (item) => item.title === selectedSkill
    )?.id;
    let oneWorkingExperience = {
      id: selectedSkillID,
      experience: expYear,
      title: selectedSkill,
    };

    // Show error messages if input is empty
    if (selectedSkill === "") {
      setSkillErrorMessage("Select programing language");
      return;
    }
    if (expYear === "") {
      setExpErrorMessage("Enter duration year");
      return;
    }

    // Show error message if programming language is already added
    const existSkill = userInfo?.skills.some(
      (item) => item.title === selectedSkill
    );
    if (existSkill) {
      setSkillErrorMessage(
        "This language is already added, choose different language"
      );
      return;
    }

    // Save working experience to Local state
    setAllExperiences((currentArray) => [
      ...currentArray,
      oneWorkingExperience,
    ]);
    // Save working experience to Global state
    if (selectedSkill !== "" && expYear !== "") {
      setUserInfo({
        ...userInfo,
        skills: [...userInfo.skills, oneWorkingExperience],
      });
      // Save working experience to Redux Global state
      dispatch(addSkill({ selectedSkillID, expYear, selectedSkill }));
    }

    // clear inputs & error messages
    setSelectedSkill("");
    setExpYear("");
    setSkillErrorMessage("");
    setExpErrorMessage("");
  };

  // Hide error message when deleting experience
  useEffect(() => {
    setUserInfo({ ...userInfo, showSkillError: false });
  }, [userInfo.skills.length]);

  const removeWorkingExperience = (itemId) => {
    // Remove working experience from Local state
    setAllExperiences(allExperiences.filter(({ id }) => id !== itemId));
    // Remove working experience from Global state
    setUserInfo({
      ...userInfo,
      skills: userInfo.skills.filter((item) => item.id !== itemId),
    });
    // Remove working experience from Redux Global state
    dispatch(removeSkill({ itemId }));
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Tell us about your skills</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <div>
              <select
                onChange={(e) => setSelectedSkill(e.target.value)}
                className={styles.select}
                name="country"
                value={selectedSkill}
              >
                <option defaultValue="" hidden>
                  Skills
                </option>
                {fetchedSkills?.map((item) => {
                  return (
                    <option key={Math.random() * 9} value={item.title}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
              {!skillErrorMessage ? (
                <ErrorMessage style="hidden" />
              ) : (
                <ErrorMessage text={skillErrorMessage} />
              )}
              <input
                onChange={(e) => setExpYear(Math.abs(e.target.value))}
                className={styles.input}
                type="number"
                id="number"
                value={expYear}
                name="epxYear"
                placeholder="Experience Duration in Years"
              />
              {!expErrorMessage ? (
                <ErrorMessage style="hidden" />
              ) : (
                <ErrorMessage text={expErrorMessage} />
              )}

              <div className={styles.buttonWrap}>
                <div onClick={addWorkingExperience} className={styles.button}>
                  Add Programing Language
                </div>
              </div>

              <div className={styles.skills}>
                {/*  {skillsFromRedux.length !== 0 ? (
                  skillsFromRedux.map((item) => ( */}
                {userInfo.skills.length !== 0 ? (
                  userInfo.skills.map((item) => (
                    <div key={Math.random() * 11} className={styles.skill}>
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
                {userInfo.showSkillError && userInfo.skills.length < 1 ? (
                  <ErrorMessage text={"* Please add at least one experience"} />
                ) : (
                  <ErrorMessage
                    text={"* Please add at least one experience"}
                    style="hidden"
                  />
                )}
              </div>
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
