import React, { useState } from "react";
import { verify } from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import Swal from "sweetalert";

function VerifySignUpPage() {
  const [token, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const code = { token };

  function handleSubmit(event) {
    event.preventDefault();
    if (token !== "") {
      verify(code)
        .then((response) => {
          if (response.data.code === -1) {
            Swal("Error", 'Invalid Token', "error");
            setError("Enter valid Token")
            console.log(response.data);
          } else {
            Swal("Success", "Account Verified", "success");
            navigate("/productList");
          }
        })
        .catch((error) => {
          Swal("Error", "Something Went Wrong", "error");
          console.log("Something went wrong", error);
        });
    }
  }

  return (
    <div className={styles.verify}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.input}>
          <input className={styles.input}
            type="password"
            placeholder="Enter your Token"
            value={token}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className={styles.button} type="submit">Submit</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default VerifySignUpPage;
