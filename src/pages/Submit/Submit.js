import styles from "./Submit.module.css";
import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <div className={styles.main}>
      <Link to="/thanks" className={styles.button}>
        Submit
      </Link>
      <Link to="/redberrian" className={styles.link}>
        &#8592; Go back
      </Link>
    </div>
  );
};

export default Submit;
