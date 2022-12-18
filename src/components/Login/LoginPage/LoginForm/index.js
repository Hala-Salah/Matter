import axios from "axios";
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";
import { useCookies } from 'react-cookie'
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[cookie , setCookie]=useCookies();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
const login=()=>{
  
  axios.post('http://restapi.adequateshop.com/api/authaccount/login' ,{
    email:email, password:password
  }).then(result=>{
    localStorage.setItem('token' , result.data.data.Token)
    setCookie("token" , result.data.data.Token)
    navigate('/')
    console.log(cookie)
  }).catch(error=>{
    alert('Sorry ! Please Check Your Email Or Your Password ! :( ')
    console.log(error)
  })
  
}
  return (
    <>
      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type="text"
          value={email}
          onChange={e =>
            setEmail(e.target.value)
          }
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type={passwordShown ? "text" : "password"}
          value={password}
          onChange={(e) =>
            setPassword( e.target.value )
          }
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <button className={styles.ShowHideButton} onClick={togglePassword}>
          {" "}
          {passwordShown ? <MdOutlineRemoveRedEye /> : <RxEyeClosed />}
        </button>
      </div>
      <div className={styles.formFiled}><button onClick={login} className={styles.LoginButton}>Log In</button></div>
      
    </>
  );
};

export default LoginForm;
