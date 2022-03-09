import styles from "./Submit.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Submit = () => {
  // Global state
  const [userInfo, setUserInfo] = useContext(UserContext);

  const navigate = useNavigate();

  const dataForSubmit = {
    token: userInfo.token,
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    phone: userInfo.phone,
    skills: userInfo.skills,
    work_preference: userInfo.work_preference,
    had_covid: userInfo.had_covid,
    had_covid_at: userInfo.had_covid_at,
    vaccinated: userInfo.vaccinated,
    vaccinated_at: userInfo.vaccinated_at,
    will_organize_devtalk: userInfo.will_organize_devtalk,
    devtalk_topic: userInfo.devtalk_topic,
    something_special: userInfo.something_special,
  };

  // Remove properties from object, if value is not defined
  if (dataForSubmit.phone === "") {
    delete dataForSubmit.phone;
  }
  if (dataForSubmit.had_covid_at === "") {
    delete dataForSubmit.had_covid_at;
  }
  if (dataForSubmit.vaccinated_at === "") {
    delete dataForSubmit.vaccinated_at;
  }

  if (dataForSubmit.devtalk_topic === "") {
    delete dataForSubmit.devtalk_topic;
  }

  const handleSubmit = async () => {
    if (
      userInfo.first_name !== "" &&
      userInfo.last_name !== "" &&
      userInfo.email !== "" &&
      userInfo.phone !== "" &&
      userInfo.skills.length > 0 &&
      userInfo.work_preference !== "" &&
      userInfo.had_covid !== "" &&
      // userInfo.had_covid_at !== "" &&
      userInfo.vaccinated !== "" &&
      // userInfo.vaccinated_at !== "" &&
      userInfo.will_organize_devtalk !== "" &&
      // userInfo.devtalk_topic !== "" &&
      userInfo.something_special !== ""
    ) {
      try {
        await axios({
          method: "POST",
          url: "https://bootcamp-2022.devtest.ge/api/application",
          data: dataForSubmit,
          headers: { Authorization: "Bearer ..." },
        });

        // Clear global state after submit
        setUserInfo({
          token: "4a367e79-2313-4af6-86b5-9073fad0d74b",
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          skills: [],
          work_preference: "",
          had_covid: false,
          had_covid_at: "",
          vaccinated: false,
          vaccinated_at: "",
          will_organize_devtalk: "undefined",
          devtalk_topic: "",
          something_special: "",
        });
        navigate("/thanks");
      } catch (error) {
        console.log(error.message);
        navigate("/errorPage");
      }
    } else {
      console.log("Please fill all fields.");
      navigate("/errorPage");
    }
  };
  return (
    <div className={styles.main}>
      <button onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
      <Link to="/redberrian" className={styles.link}>
        &#8592; Go back
      </Link>
    </div>
  );
};

export default Submit;
