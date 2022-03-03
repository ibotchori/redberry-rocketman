import styles from "./Thanks.module.css";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className={styles.main}>
      <div className={styles.title}>Thanks for Joining 😊</div>
    </div>
  );
};

export default Thanks;
