import styles from "./TechnicalSkill.module.css";

const TechnicalSkill = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Tell us about your skills</h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <select name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <input
              type="number"
              id="number"
              name="epxYear"
              placeholder="Experience Duration in Years"
            />

            <div className={styles.buttonWrap}>
              <div className={styles.button}>Add Programing Language</div>
            </div>

            <div className={styles.skills}>
              <div className={styles.skill}>
                <p className={styles.pLanguage}>PHP</p>
                <p>Years of Experience: 3</p>
                <img
                  className={styles.icon}
                  src="/images/delete.jpg"
                  alt="delete"
                />
              </div>
              <div className={styles.skill}>
                <p className={styles.pLanguage}>Java</p>
                <p>Years of Experience: 1</p>
                <img
                  className={styles.icon}
                  src="/images/delete.jpg"
                  alt="delete"
                />
              </div>
              <div className={styles.skill}>
                <p className={styles.pLanguage}>JavaScript</p>
                <p>Years of Experience: 5</p>
                <img
                  className={styles.icon}
                  src="/images/delete.jpg"
                  alt="delete"
                />
              </div>
              <div className={styles.skill}>
                <p className={styles.pLanguage}>Python</p>
                <p>Years of Experience: 3</p>
                <img
                  className={styles.icon}
                  src="/images/delete.jpg"
                  alt="delete"
                />
              </div>
              <div className={styles.skill}>
                <p className={styles.pLanguage}>Swift</p>
                <p>Years of Experience: 3</p>
                <img
                  className={styles.icon}
                  src="/images/delete.jpg"
                  alt="delete"
                />
              </div>
              <div className={styles.skill}>
                <p className={styles.pLanguage}>Node.js</p>
                <p>Years of Experience: 3</p>
                <img
                  className={styles.icon}
                  src="/images/delete.jpg"
                  alt="delete"
                />
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
