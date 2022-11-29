import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";

import styles from "./styles.module.css";
let array = [{ id: 0, email: "", password: "" }];

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(array);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type="text"
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm({ ...LoginForm, email: e.target.value })
          }
          name=""
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type={passwordShown ? "text" : "password"}
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...LoginForm, password: e.target.value })
          }
          name=""
          id="password"
          placeholder="Enter Your Password"
        />
        <button className={styles.ShowHideButton} onClick={togglePassword}>
          {" "}
          {passwordShown ? <MdOutlineRemoveRedEye /> : <RxEyeClosed />}
        </button>
      </div>
      <div className={styles.formFiled}><button className={styles.LoginButton}>Log In</button></div>
      
    </>
  );
};

export default LoginForm;
