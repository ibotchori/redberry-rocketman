import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./PersonalInformation.module.css";

const PersonalInformation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <div>
          <form className={styles.form} action="/action_page.php">
            <div>
              <input
                className={styles.input}
                type="text"
                id="fname"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage />
            </div>
            <div>
              <input
                className={styles.input}
                type="email"
                id="lname"
                name="lstName"
                placeholder="Last Name"
              />
              <ErrorMessage />
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                id="email"
                name="email"
                placeholder="E mail"
              />
              <ErrorMessage />
            </div>
            <div>
              <input
                className={styles.input}
                type="number"
                id="number"
                name="phone"
                placeholder="+995 5__ __ __ __"
              />
              <ErrorMessage />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.mainRight}>
        <h1 className={styles.title}>Redberry Origins</h1>
        <div className={styles.rightP}>
          <p>
            You watch “What? Where? When?” Yeah. Our founders used to play it.
            That’s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry 😇
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
