import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./PersonalInformation.module.css";
import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const PersonalInformation = () => {
  // Global state
  const [userInfo, setUserInfo] = useContext(UserContext);

  let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let regPhone = /^5[0-9]{8}$/g;

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
                onChange={(e) =>
                  setUserInfo({ ...userInfo, first_name: e.target.value })
                }
                value={userInfo.first_name}
              />
              {userInfo.showError && userInfo.first_name.length < 2 ? (
                <ErrorMessage
                  text={"* First name should include 2 or more characters"}
                />
              ) : (
                <ErrorMessage
                  text={"* First name should include 2 or more characters"}
                  style="hidden"
                />
              )}
            </div>
            <div>
              <input
                className={styles.input}
                type="email"
                id="lname"
                name="lstName"
                placeholder="Last Name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, last_name: e.target.value })
                }
                value={userInfo.last_name}
              />
              {userInfo.showError && userInfo.last_name.length < 2 ? (
                <ErrorMessage
                  text={"* Last name should include 2 or more characters"}
                />
              ) : (
                <ErrorMessage
                  text={"* Last name should include 2 or more characters"}
                  style="hidden"
                />
              )}
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                id="email"
                name="email"
                placeholder="E mail"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                value={userInfo.email}
              />
              {userInfo?.showError &&
              regEmail.test(userInfo?.email) === false ? (
                <ErrorMessage text={"* Please enter a valid Email"} />
              ) : (
                <ErrorMessage
                  text={"* Please enter a valid Email"}
                  style="hidden"
                />
              )}
            </div>
            <div>
              <input
                className={styles.input}
                type="number"
                id="number"
                name="phone"
                placeholder="5__ __ __ __"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
                value={userInfo.phone}
              />
              {userInfo.showError &&
              regPhone.test(userInfo?.phone) === false ? (
                <ErrorMessage text={"* Please enter a valid phone number"} />
              ) : (
                <ErrorMessage
                  text={"* Please enter a valid phone number"}
                  style="hidden"
                />
              )}
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
