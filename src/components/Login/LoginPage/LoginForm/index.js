import axios from "axios";
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useCookies } from "react-cookie";
import Alert from 'react-bootstrap/Alert';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const [EmailError , setEmailError]=useState(false);
const [FormError , setFormError]=useState('');

  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    
  };
  const login = () => {
    if(email.length==0||password.length==0){
      setFormError("EROOR")
    }
    axios
      .post("http://restapi.adequateshop.com/api/authaccount/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.data.Token);
        setCookie("token", result.data.data.Token);
        navigate("/");
        console.log(cookie);
      })
      .catch((error) => {
        setFormError(true);
        console.log(error);
      });
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
    if(regex.test(email)===false){
      setEmailError("Please Enter Valid Email !")
    }
    else{
      setEmailError("")
    }
  };
  return (
    <>
    <div className={styles.ErrorMessage}>
      
      </div>
      <div className={styles.formFiled}>
     
        <input
          className={styles.LoginInput}
          type="text"
          value={email}
          onChange={handelEmail}
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      {EmailError&&<Alert className={styles.Error} key="danger" variant="danger">
      Please enter the email correctly 
        </Alert>}
      {/* <div className={styles.ErrorMessage}><p>{EmailError}</p></div> */}

      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type={passwordShown ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <button className={styles.ShowHideButton} onClick={togglePassword}>
          {" "}
          {passwordShown ? <MdOutlineRemoveRedEye /> : <RxEyeClosed />}
        </button>
      </div>
      <div className={styles.formFiled}>
        <button onClick={login} className={styles.LoginButton}>
          Log In
        </button>
      </div>
    </>
  );
};

export default LoginForm;
