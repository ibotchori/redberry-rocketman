import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = ({ text }) => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        {text ? text : "Oops! Something went wrong"} &#128533;
      </div>
      <Link to="/redberrian" className={styles.link}>
        &#8592; Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
