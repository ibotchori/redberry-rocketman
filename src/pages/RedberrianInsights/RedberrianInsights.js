import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./Redberrian.module.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

const RedberrianInsights = () => {
  // Global state
  const [userInfo, setUserInfo] = useContext(UserContext);

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>What about you?</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <div className={styles.question}>
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              &nbsp;{" "}
              <input
                type="radio"
                id="yes"
                name="covid"
                value={true}
                checked={userInfo.will_organize_devtalk === true ? true : false}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    will_organize_devtalk: JSON.parse(e.currentTarget.value),
                  })
                }
              />
              &nbsp; <label htmlFor="yes">Yes</label>
              <br />
              &nbsp;{" "}
              <input
                type="radio"
                id="no"
                name="covid"
                checked={
                  userInfo.will_organize_devtalk === false ? true : false
                }
                value={false}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    will_organize_devtalk: JSON.parse(e.currentTarget.value),
                  })
                }
              />
              &nbsp; <label htmlFor="no">No</label>
            </div>
            {userInfo.showRedberrianError &&
            userInfo.will_organize_devtalk === "undefined" ? (
              <ErrorMessage text={"* Choose one option"} />
            ) : (
              <ErrorMessage text={"* Choose one option"} style="hidden" />
            )}

            {userInfo.will_organize_devtalk === true ? (
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
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, devtalk_topic: e.target.value })
                  }
                  value={userInfo.devtalk_topic}
                ></textarea>
                {userInfo.showRedberrianError &&
                userInfo.devtalk_topic.length < 10 ? (
                  <ErrorMessage
                    text={"* Text should include 10 or more characters"}
                  />
                ) : (
                  <ErrorMessage
                    text={"* Text should include 10 or more characters"}
                    style="hidden"
                  />
                )}
              </div>
            ) : (
              <></>
            )}

            <div>
              <p className={styles.textAreaTitle}>Tell us something special</p>
              <textarea
                className={styles.textArea}
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="I..."
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    something_special: e.target.value,
                  })
                }
                value={userInfo.something_special}
              ></textarea>
            </div>
            {userInfo.showRedberrianError &&
            userInfo.something_special.length < 10 ? (
              <ErrorMessage
                text={"* Text should include 10 or more characters"}
              />
            ) : (
              <ErrorMessage
                text={"* Text should include 10 or more characters"}
                style="hidden"
              />
            )}
          </form>
        </div>
      </div>
      <div className={styles.mainRight}>
        <h1 className={styles.title}>Redberrian Insights</h1>
        <div className={styles.rightP}>
          <p>
            We were soo much fun before the pandemic started! Parties almost
            every weekend and lavish employee birthday celebrations!
            Unfortunately, covid ruined that fun like it did almost everything
            else in the world. But we try our best to zhuzh it up a bit. For
            example, we host biweekly Devtalks where our senior and lead
            developers talk about topics they are passionate about. Previous
            topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold
            these talks in the office but you can join our Zoom broadcast as
            well. Feel free to join either as an attendee or a speaker!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedberrianInsights;
