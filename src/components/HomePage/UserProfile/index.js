import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from './styles.module.css'

const UserProfile = () => {
  const [cookie] = useCookies();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/users/148307", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => setUser(user.data));
      
  }, []);

  return <span className={styles.span}> <img  className={styles.image}
  src={user.profilepicture} alt="User Image" />
    Welcome {user.name}
 </span>;
};

export default UserProfile;
