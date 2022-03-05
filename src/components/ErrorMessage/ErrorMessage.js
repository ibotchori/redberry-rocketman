import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ text, style }) => {
  return (
    <div className={style ? styles.hidden : styles.main}>
      {text ? text : "Error message"}
    </div>
  );
};

export default ErrorMessage;
