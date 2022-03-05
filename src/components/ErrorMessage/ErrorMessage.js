import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ text, style }) => {
  return <div className={style ? styles.hidden : styles.main}>{text}</div>;
};

export default ErrorMessage;
