import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className={styles.main}>
      <div className={styles.title}>Page not found. &#128533;</div>
      <Link to="/redberrian" className={styles.link}>
        &#8592; Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
