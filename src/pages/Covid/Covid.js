import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./Covid.module.css";

const Covid = () => {
  const [covidContact, setCovidContact] = useState("");
  const [covidVaccine, setCovidVAccine] = useState("");

  const covidHandleChange = (event) => {
    setCovidContact(event.target.value);
  };
  const vaccineHandleChange = (event) => {
    setCovidVAccine(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Covid Stuff</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <div className={styles.question}>
              <p>How would you prefer to work?</p>
              &nbsp;{" "}
              <input type="radio" id="sairme" name="work" defaultValue="HTML" />
              &nbsp; <label htmlFor="sairme">From Sairme Office</label>
              <br />
              &nbsp;{" "}
              <input type="radio" id="home" name="work" defaultValue="CSS" />
              &nbsp; <label htmlFor="home">From Home</label>
              <br />
              &nbsp;{" "}
              <input
                type="radio"
                id="hybrid"
                name="work"
                defaultValue="JavaScript"
              />
              &nbsp; <label htmlFor="hybrid">Hybrid</label>
            </div>
            <ErrorMessage text={"* Choose one option"} />
            <div className={styles.question}>
              <p>Did you contact covid 19? :(</p>
              &nbsp;{" "}
              <input
                onChange={covidHandleChange}
                type="radio"
                id="yes"
                name="covid"
                value="yes"
              />
              &nbsp; <label htmlFor="yes">Yes</label>
              <br />
              &nbsp;{" "}
              <input
                onChange={covidHandleChange}
                type="radio"
                id="no"
                name="covid"
                value="no"
              />
              &nbsp; <label htmlFor="no">No</label>
            </div>
            <ErrorMessage text={"* Choose one option"} />

            {covidContact === "yes" ? (
              <div className={styles.question}>
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
            <ErrorMessage text={"* Please select date"} />
            <div className={styles.question}>
              <p>Have you been vaccinated?</p>
              &nbsp;{" "}
              <input
                onChange={vaccineHandleChange}
                type="radio"
                id="yes"
                name="vaccine"
                value="yes"
              />
              &nbsp; <label htmlFor="yes">Yes</label>
              <br />
              &nbsp;{" "}
              <input
                onChange={vaccineHandleChange}
                type="radio"
                id="no"
                name="vaccine"
                value="no"
              />
              &nbsp; <label htmlFor="no">No</label>
            </div>
            <ErrorMessage text={"* Choose one option"} />
            {
              //Check if message failed
              covidVaccine === "yes" ? (
                <div className={styles.question}>
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
              )
            }

            <ErrorMessage text={"* Please select date"} />
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
