import React from "react";
import TitleComponent from "../../TitleComponent";
import LoginForm from "./LoginForm";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginBody}>
          <TitleComponent title={"Login"} />
          <LoginForm/>
          <p>Don't Have an account ? <span className={styles.signUpSpan}>Sign Up</span></p>
        </div>
      </div>
    </>
  );
};

export default Login;
