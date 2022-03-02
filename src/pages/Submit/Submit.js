import styles from "./Submit.module.css";

const Submit = () => {
  return (
    <div className={styles.main}>
      <button className={styles.button}>Submit</button>
      <a href="/personalInformation" className={styles.link}>
        &#8592; Go back
      </a>
    </div>
  );
};

export default Submit;
