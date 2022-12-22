import axios from "axios";
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useCookies } from "react-cookie";
import Alert from 'react-bootstrap/Alert';

const LoginForm = () => {
  const [form , setForm]=useState([{email:"" ,password:"" }])
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const [EmailError , setEmailError]=useState(false);

  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    
  };
  const login = () => {
    
    axios
      .post("http://restapi.adequateshop.com/api/authaccount/login", {
        email: form.email,
        password: form.password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.data.Token);
        setCookie("token", result.data.data.Token);
        navigate("/");
        console.log(cookie);
      })
      // .catch((error) => {
      //   console.log(error);
      // });
  };
  const handelEmail = (e) => {
    setForm([...form , {email:e.target.value}]);
    if(regex.test(form.email)===false){
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
          value={form.email}
          onChange={handelEmail}
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      {EmailError&&<Alert className={styles.Error} key="danger" variant="danger">
      Please enter the email correctly 
        </Alert>}

      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type={passwordShown ? "text" : "password"}
          value={form.password}
          onChange={(e)=>setForm([...form , {password:e.target.value}])}
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
