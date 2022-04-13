import { useContext } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./Covid.module.css";
import { UserContext } from "../../context/userContext";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
// actions
import {
  setWorkPreference,
  setCovid,
  setCovidAt,
  setVaccinated,
  setVaccinatedAt,
} from "../../redux/reducers/covidSlice";

const Covid = () => {
  // Global state (Context)
  const [userInfo, setUserInfo] = useContext(UserContext);

  //  Global state (Redux)
  const covidFromRedux = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Covid Stuff</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <div className={styles.question}>
              <p>How would you prefer to work?</p>
              &nbsp;{" "}
              <input
                type="radio"
                id="sairme"
                name="sairme"
                checked={
                  userInfo.work_preference === "from_office" ? true : false
                }
                value={"from_office"}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    work_preference: e.currentTarget.value,
                  });
                  // save to redux
                  dispatch(setWorkPreference(e.currentTarget.value));
                }}
              />
              &nbsp; <label htmlFor="sairme">From Sairme Office</label>
              <br />
              &nbsp;{" "}
              <input
                type="radio"
                id="sairme"
                name="home"
                checked={
                  userInfo.work_preference === "from_home" ? true : false
                }
                value={"from_home"}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    work_preference: e.currentTarget.value,
                  });
                  // save to redux
                  dispatch(setWorkPreference(e.currentTarget.value));
                }}
              />
              &nbsp; <label htmlFor="home">From Home</label>
              <br />
              &nbsp;{" "}
              <input
                type="radio"
                id="sairme"
                name="hybrid"
                checked={userInfo.work_preference === "hybrid" ? true : false}
                value={"hybrid"}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    work_preference: e.currentTarget.value,
                  });
                  // save to redux
                  dispatch(setWorkPreference(e.currentTarget.value));
                }}
              />
              &nbsp; <label htmlFor="hybrid">Hybrid</label>
            </div>
            {userInfo.showCovidError && userInfo.work_preference === "" ? (
              <ErrorMessage text={"* Choose one option"} />
            ) : (
              <ErrorMessage text={"* Choose one option"} style="hidden" />
            )}
            <div className={styles.question}>
              <p>Did you contact covid 19? :(</p>
              &nbsp;{" "}
              <input
                type="radio"
                id="yes"
                name="covidContact"
                checked={userInfo.had_covid === true ? true : false}
                value={true}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    had_covid: JSON.parse(e.currentTarget.value),
                  });
                  // save to redux
                  dispatch(setCovid(JSON.parse(e.currentTarget.value)));
                }}
              />
              &nbsp; <label htmlFor="yes">Yes</label>
              <br />
              &nbsp;{" "}
              <input
                type="radio"
                id="no"
                name="covidContact"
                checked={userInfo.had_covid === false ? true : false}
                value={false}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    had_covid: JSON.parse(e.currentTarget.value),
                  });
                  // save to redux
                  dispatch(setCovid(JSON.parse(e.currentTarget.value)));
                }}
              />
              &nbsp; <label htmlFor="no">No</label>
            </div>
            {/* {userInfo.showCovidError && userInfo.had_covid === "undefined" ? (
              <ErrorMessage text={"* Choose one option"} />
            ) : (
              <ErrorMessage text={"* Choose one option"} style="hidden" />
            )} */}

            {userInfo.had_covid === true ? (
              <div className={styles.question}>
                <p>When?</p>
                &nbsp;{" "}
                <input
                  className={styles.dateInput}
                  type="date"
                  id="date"
                  name="covidDate"
                  value={userInfo.had_covid_at}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      had_covid_at: e.currentTarget.value,
                    });
                    // save to redux
                    dispatch(setCovidAt(e.currentTarget.value));
                  }}
                />
                {userInfo.showCovidError && userInfo.had_covid_at === "" ? (
                  <ErrorMessage text={"* Please select date"} />
                ) : (
                  <ErrorMessage text={"* Please select date"} style="hidden" />
                )}
              </div>
            ) : (
              <div className={styles.hidden}>
                <p>When?</p>
                &nbsp;{" "}
                <input
                  className={styles.dateInput}
                  type="date"
                  id="date"
                  name="covidDate"
                  defaultValue="HTML"
                />
              </div>
            )}

            <div className={styles.question}>
              <p>Have you been vaccinated?</p>
              &nbsp;{" "}
              <input
                type="radio"
                id="yes"
                name="vaccinated"
                checked={userInfo.vaccinated === true ? true : false}
                value={true}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    vaccinated: JSON.parse(e.currentTarget.value),
                  });
                  // save to redux
                  dispatch(setVaccinated(JSON.parse(e.currentTarget.value)));
                }}
              />
              &nbsp; <label htmlFor="yes">Yes</label>
              <br />
              &nbsp;{" "}
              <input
                type="radio"
                id="no"
                name="vaccinated"
                checked={userInfo.vaccinated === false ? true : false}
                value={false}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    vaccinated: JSON.parse(e.currentTarget.value),
                  });
                  // save to redux
                  dispatch(setVaccinated(JSON.parse(e.currentTarget.value)));
                }}
              />
              &nbsp; <label htmlFor="no">No</label>
            </div>
            {/* {userInfo.showCovidError && userInfo.vaccinated === "undefined" ? (
              <ErrorMessage text={"* Choose one option"} />
            ) : (
              <ErrorMessage text={"* Choose one option"} style="hidden" />
            )} */}
            {userInfo.vaccinated === true ? (
              <div className={styles.question}>
                <p>When did you get your last covid vaccine?</p>
                &nbsp;{" "}
                <input
                  className={styles.dateInput}
                  type="date"
                  id="date"
                  name="covidDate"
                  value={userInfo.vaccinated_at}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      vaccinated_at: e.currentTarget.value,
                    });
                    // save to redux
                    dispatch(setVaccinatedAt(e.currentTarget.value));
                  }}
                />
                {userInfo.showCovidError && userInfo.vaccinated_at === "" ? (
                  <ErrorMessage text={"* Please select date"} />
                ) : (
                  <ErrorMessage text={"* Please select date"} style="hidden" />
                )}
              </div>
            ) : (
              <div className={styles.hidden}>
                <p>When did you get your last covid vaccine?</p>
                &nbsp;{" "}
                <input
                  className={styles.dateInput}
                  type="date"
                  id="date"
                  name="covidDate"
                  defaultValue="HTML"
                />
              </div>
            )}
          </form>
        </div>
      </div>
      <div className={styles.mainRight}>
        <h1 className={styles.title}>Redberry Covid Policies</h1>
        <div className={styles.rightP}>
          <p>
            As this infamous pandemic took over the world, we adjusted our
            working practices so that our employees can be as safe and
            comfortable as possible. We have a hybrid work environment, so you
            can either work from home or visit our lovely office on Sairme
            Street. If it was up to us, we would love you to see us in the
            office because we think face-to-face communications &#10095; Zoom
            meetings. Both on the fun and productivity scales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Covid;
