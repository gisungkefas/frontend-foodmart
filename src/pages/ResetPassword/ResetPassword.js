import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import { useUser } from "../useProvider";
import {AiOutlineCloseCircle} from "react-icons/ai"
import ResetPasswordcss from "./ResetPassword.module.css"
import {Link} from "react-router-dom";

const ResetPassword = () => {
  let { token } = useParams();

  const users = useUser();
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState(null);
  const [showPop, setshowPop] = useState(null)
  
  const handleClosePopUp = (e)=>{
    e.preventDefault()
    setshowPop(null)
  }
  
  function sendPasswordReset() {
  setErrorMsg("");
  if(password!==confirmPassword){
    setErrorMsg("Your passwords do not match")
    setshowPop(true)
    return;
  }
  
  const requestBody = {
    
    token: token,
    password: password,
  };


  fetch("http://localhost:8080/api/v1/auth/password-reset", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.status === 200) return response.text();
      else if (response.status === 401 || response.status === 403) {
        setshowPop(true)
        setErrorMsg("Invalid password");
      } else {
        setshowPop(true)
        setErrorMsg(
          "Something went wrong, please try again later"
        );
      }
    })
    .then((data) => {
      if (data) {
        users.setJwt(data);
        navigate("/login");
      }
    });
}

  return (
    <>
    {errorMsg && showPop && <Popup closePopup={handleClosePopUp} title={"Error"} message={errorMsg} symbol={<AiOutlineCloseCircle size={"50px"} color="red"  onClick={handleClosePopUp}  />} />}
    <div className={ResetPasswordcss.body}>
      <div className={ResetPasswordcss.reset_container}>
      {errorMsg ? (
          <Row className="justify-content-center mb-4">
            <Col md="8" lg="6">
              <div className="" style={{ color: "red", fontWeight: "bold" }}>
                {errorMsg}
              </div>
            </Col>
          </Row>
          
        ) : (
          <></>
        )}
      <h3 className={ResetPasswordcss.header}> RESET PASSWORD</h3>
      <h5 className={ResetPasswordcss.header2}>Input your new password below</h5>
        <Row className="justify-content-center">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                size="lg"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                size="lg"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col
            md="8"
            lg="6"
            className="mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between"
          >
            <Button
              id="submit"
              type="button"
              size="lg"
              onClick={() => sendPasswordReset()}
            >
              Reset Password
            </Button>
          </Col>
            <h5 className={ResetPasswordcss.a_lin}>
              Don't have an account ? <Link to={"/signup"} className={ResetPasswordcss.a_link}> SignUp</Link>
            </h5>
            <h5 className={ResetPasswordcss.a_lin}>
              Already have an account ? <Link to={"/login"} className={ResetPasswordcss.a_link}> Login</Link>
            </h5>
        </Row>
      </div>
      </div>
    </>
  );
};

export default ResetPassword;