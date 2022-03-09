import { useEffect, useState } from "react";
import styles from "./SubmittedItem.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const SubmittedItem = () => {
  const [toggle, setToggle] = useState(false);

  // Get submitted applications from API
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios(
        "https://bootcamp-2022.devtest.ge/api/applications",
        { params: { token: "a6a54265-3145-42e4-9de3-18a069741d42" } }
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
      {applications.map((post, index) => (
        <>
          <span
            onClick={() => setToggle((prevState) => !prevState)}
            className={styles.button}
          >
            <span>{index + 1}</span>
            {toggle ? <span>&#11167;</span> : <span>&#11165;</span>}
          </span>
          {toggle && (
            <div className={styles.mainInfo}>
              <div className={styles.infoContent}>
                <div className={styles.column}>
                  <div>
                    <p className={styles.infoTitle}>Personal Information</p>
                    <div className={styles.infoProperty}>
                      <span>First Name: </span>
                      <div>{post.first_name}</div>
                    </div>
                    <div className={styles.infoProperty}>
                      <span>Last Name: </span>
                      <div>{post.last_name}</div>
                    </div>
                    <div className={styles.infoProperty}>
                      <span>E mail: </span>
                      <div>{post.email}</div>
                    </div>
                    <div className={styles.infoProperty}>
                      <span>Phone: </span>
                      <div>{post.phone}</div>
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
                        checked={
                          post.work_preference === "from_office" ? true : false
                        }
                        disabled
                      />
                      &nbsp; <label htmlFor="sairme">From Sairme Office</label>
                      <br />
                      <input
                        type="radio"
                        id="home"
                        name="work"
                        checked={
                          post.work_preference === "from_home" ? true : false
                        }
                        disabled
                      />
                      &nbsp; <label htmlFor="home">From Home</label>
                      <br />
                      <input
                        type="radio"
                        id="hybrid"
                        name="work"
                        checked={
                          post.work_preference === "hybrid" ? true : false
                        }
                        disabled
                      />
                      &nbsp; <label htmlFor="hybrid">Hybrid</label>
                    </div>
                  </div>
                  <div className={styles.question}>
                    <p>Did you contact covid 19? :(</p>
                    <input
                      type="radio"
                      id="yes"
                      name="covid"
                      checked={post.had_covid === true}
                      disabled
                    />
                    &nbsp; <label htmlFor="yes">Yes</label>
                    <br />
                    <input
                      type="radio"
                      id="no"
                      name="covid"
                      checked={post.had_covid === false}
                      disabled
                    />
                    &nbsp; <label htmlFor="no">No</label>
                  </div>
                  {post.had_covid === true ? (
                    <div className={styles.question}>
                      <p>When did you have covid 19?</p>

                      <input
                        className={styles.dateInput}
                        type="date"
                        id="date"
                        name="covidDate"
                        disabled
                        value={post.had_covid_at}
                      />
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className={styles.question}>
                    <p>Have you been vaccinated?</p>
                    <input
                      type="radio"
                      id="yes"
                      name="contact"
                      checked={post.vaccinated === true}
                      disabled
                    />
                    &nbsp; <label htmlFor="yes">Yes</label>
                    <br />
                    <input
                      type="radio"
                      id="no"
                      name="contact"
                      checked={post.vaccinated === false}
                      disabled
                    />
                    &nbsp; <label htmlFor="no">No</label>
                  </div>
                  {post.vaccinated === true ? (
                    <div className={styles.question}>
                      <p>When did you get covid vaccine?</p>

                      <input
                        className={styles.dateInput}
                        type="date"
                        id="date"
                        name="covidVAccine"
                        disabled
                        value={post.vaccinated_at}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={styles.column}>
                  <div>
                    <p className={styles.infoTitle}>Skillset</p>
                    {post.skills.map((item) => (
                      <div className={styles.infoProperty}>
                        <span>
                          {item.id === 1
                            ? "HTML"
                            : item.id === 2
                            ? "CSS"
                            : item.id === 3
                            ? "PHP"
                            : item.id === 4
                            ? "Laravel"
                            : item.id === 5
                            ? "React.JS"
                            : item.id === 6
                            ? "Vue.JS"
                            : item.id === 7
                            ? "Svelte"
                            : "Angular"}
                        </span>
                        <div>Years of Experience: {item.experience}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className={styles.insightsTitle}>Insights</p>
                    <div>
                      <p>
                        Would you attend Devtalks and maybe also organize your
                        own?
                      </p>
                      <input
                        checked={post.will_organize_devtalk === true}
                        disabled
                        type="radio"
                        id="yes"
                        name="devtalks"
                      />
                      &nbsp; <label htmlFor="yes">Yes</label>
                      <br />
                      <input
                        checked={post.will_organize_devtalk === false}
                        disabled
                        type="radio"
                        id="no"
                        name="devtalks"
                      />
                      &nbsp; <label htmlFor="no">No</label>
                    </div>
                    {post.will_organize_devtalk === true ? (
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
                          disabled
                          placeholder={post.devtalk_topic}
                        ></textarea>
                      </div>
                    ) : (
                      <></>
                    )}

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
                        disabled
                        placeholder={post.something_special}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default SubmittedItem;
