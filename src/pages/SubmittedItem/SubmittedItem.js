import { useState } from "react";
import styles from "./SubmittedItem.module.css";
import { Link } from "react-router-dom";

const SubmittedItem = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Submitted Applications</h1>
        <Link to="/" className={styles.link}>
          &#8592; Go back
        </Link>
      </div>

      <div className={styles.button}>
        <span>1</span>
        <span>&#11165;</span>
      </div>
      <div className={styles.button}>
        <span>2</span>
        <span>&#11165;</span>
      </div>

      <div
        onClick={() => setToggle((prevState) => !prevState)}
        className={styles.button}
      >
        <span>3</span>
        {toggle ? <span>&#11167;</span> : <span>&#11165;</span>}
      </div>
      {toggle && (
        <div className={styles.mainInfo}>
          <div className={styles.infoContent}>
            <div className={styles.column}>
              <div>
                <p className={styles.infoTitle}>Personal Information</p>
                <div className={styles.infoProperty}>
                  <span>First Name: </span>
                  <div>Irakli</div>
                </div>
                <div className={styles.infoProperty}>
                  <span>Last Name: </span>
                  <div>Bochorishvili</div>
                </div>
                <div className={styles.infoProperty}>
                  <span>E mail: </span>
                  <div>ibochorishvili@gmail.com</div>
                </div>
                <div className={styles.infoProperty}>
                  <span>Phone: </span>
                  <div>+995 555 55 55 55</div>
                </div>
              </div>
              <div>
                <p className={styles.covidTitle}>Covid Situation</p>
                <div>
                  <p>How would you prefer to work?</p>
                  <input
                    type="radio"
                    id="sairme"
                    name="work"
                    defaultValue="HTML"
                  />
                  &nbsp; <label htmlFor="sairme">From Sairme Office</label>
                  <br />
                  <input
                    type="radio"
                    id="home"
                    name="work"
                    defaultValue="CSS"
                  />
                  &nbsp; <label htmlFor="home">From Home</label>
                  <br />
                  <input
                    checked
                    type="radio"
                    id="hybrid"
                    name="work"
                    defaultValue="JavaScript"
                  />
                  &nbsp; <label htmlFor="hybrid">Hybrid</label>
                </div>
              </div>
              <div className={styles.question}>
                <p>Did you contact covid 19? :(</p>
                <input type="radio" id="yes" name="covid" defaultValue="HTML" />
                &nbsp; <label htmlFor="yes">Yes</label>
                <br />
                <input
                  checked
                  type="radio"
                  id="no"
                  name="covid"
                  defaultValue="CSS"
                />
                &nbsp; <label htmlFor="no">No</label>
              </div>
              <div className={styles.question}>
                <p>When did you have covid 19?</p>

                <input
                  className={styles.dateInput}
                  type="date"
                  id="date"
                  name="covidDate"
                  defaultValue="HTML"
                />
              </div>
              <div className={styles.question}>
                <p>Have you been vaccinated?</p>
                <input
                  checked
                  type="radio"
                  id="yes"
                  name="contact"
                  defaultValue="HTML"
                />
                &nbsp; <label htmlFor="yes">Yes</label>
                <br />
                <input type="radio" id="no" name="contact" defaultValue="CSS" />
                &nbsp; <label htmlFor="no">No</label>
              </div>
              <div className={styles.question}>
                <p>When did you get covid vaccine?</p>

                <input
                  className={styles.dateInput}
                  type="date"
                  id="date"
                  name="covidVAccine"
                  defaultValue="HTML"
                />
              </div>
            </div>
            <div className={styles.column}>
              <div>
                <p className={styles.infoTitle}>Skillset</p>
                <div className={styles.infoProperty}>
                  <span>PHP</span>
                  <div>Years of Experience: 10</div>
                </div>
                <div className={styles.infoProperty}>
                  <span>React.JS</span>
                  <div>Years of Experience: 5</div>
                </div>
              </div>
              <div>
                <p className={styles.insightsTitle}>Insights</p>
                <div>
                  <p>
                    Would you attend Devtalks and maybe also organize your own?
                  </p>
                  <input
                    checked
                    type="radio"
                    id="yes"
                    name="devtalks"
                    defaultValue="HTML"
                  />
                  &nbsp; <label htmlFor="yes">Yes</label>
                  <br />
                  <input
                    type="radio"
                    id="no"
                    name="devtalks"
                    defaultValue="CSS"
                  />
                  &nbsp; <label htmlFor="no">No</label>
                </div>
                <div>
                  <p className={styles.textAreaTitle}>
                    What would you speak about at Devtalk?
                  </p>
                  <textarea
                    className={styles.textArea}
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="I would..."
                  ></textarea>
                </div>
                <div>
                  <p className={styles.textAreaTitle}>
                    Tell us something special
                  </p>
                  <textarea
                    className={styles.textArea}
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="I..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedItem;
