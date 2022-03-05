import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./Redberrian.module.css";

const RedberrianInsights = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>What about you?</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <div className={styles.question}>
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              &nbsp;{" "}
              <input type="radio" id="yes" name="covid" defaultValue="HTML" />
              &nbsp; <label htmlFor="yes">Yes</label>
              <br />
              &nbsp;{" "}
              <input type="radio" id="no" name="covid" defaultValue="CSS" />
              &nbsp; <label htmlFor="no">No</label>
            </div>
            <ErrorMessage text={"* Choose one option"} />

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
            <ErrorMessage
              text={"* Text should include 10 or more characters"}
            />
            <div>
              <p className={styles.textAreaTitle}>Tell us something special</p>
              <textarea
                className={styles.textArea}
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="I..."
              ></textarea>
            </div>
            <ErrorMessage
              text={"* Text should include 10 or more characters"}
            />
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
