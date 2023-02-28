import React, { useState } from "react";
import { create } from "../../utils/userService";
import styles from "./SignUpPage.module.css";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    if (firstName.indexOf(" ") >= 0 || lastName.indexOf(" ") >= 0) {
      Swal("Error", "Name fields cannot contain space", "error");
      return;
    } else if (password !== confirmPassword) {
      Swal(
        "Error",
        "Password and Confirm Password fields do not match.",
        "error"
      );
    } else {
      create(user)
        .then((response) => {
          if (response.data.code === -5) {
            Swal("Error", response.data.description, "error");
            console.log("Something went wrong", response);
          } else if (response.status === 200) {
            Swal(
              "Registration Successful",
              response.data.description,
              "success"
            );
            console.log(response.data);
            navigate("/verification");
          }
        })
        .catch((error) => {
          Swal("Error", "Something Went Wrong", "error");
          console.log("Something went wrong", error);
        });
    }
  };

  return (
    <div className={`${styles['signup-page']}`}>
      <p className={styles.welcome}>Welcome to FoodMart</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}> SIGN UP</h2>
        <label className={styles.input}>
          <input className={styles.input}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.input}>
          <input className={styles.input}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.input}>
          <input className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.input}>
          <input className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.input}>
          <input className={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <div>
          <button className={styles.button} type="submit"> Sign Up</button>
          <div className={`${styles['login-link']}`}> 
            <h4 className={`${styles['login-link2']}`}>
              Already have an account? <Link to={"/login"}> Login</Link>
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
