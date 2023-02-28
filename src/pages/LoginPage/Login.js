import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import { useUser } from "../useProvider";
import {AiOutlineCloseCircle} from "react-icons/ai"
import {GrStatusGood} from "react-icons/gr"
import Logincss from "./Login.module.css";
import Cookies from "js-cookie";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";

const Login = () => {

  const users = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPop, setshowPop] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null)
  
  const handleClosePopUp = (e)=>{
    e.preventDefault()
    console.log(showPop)
    setshowPop(null)
  }

  async function sendLoginRequest() {
  setErrorMsg("");
    const requestBody = {
      email: email,
      password: password,
    };


    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(requestBody),
      });
      const data = await res.text();
      // const data = await res.json();
      
      console.log(data)
      if (res.status === 200 && data) {
        setSuccessMsg("Logged in successfully");
        setshowPop(true);
        Cookies.set("jwt", data);
        // Cookies.set("jwt", data.token);
        Cookies.set("firstname", data.firstname);
        
        setTimeout(() => {
          users.setJwt(data);
          navigate("/productList");
        }, 1000);
    
        return "jwt";
      } else if (res.status === 401 || res.status === 403) {
        setshowPop(true);
        setErrorMsg("Invalid username or password");
      } else {
        setshowPop(true);
        setErrorMsg("Something went wrong, please try again later");
      }
    } catch (error) {
      console.error(error);
      setshowPop(true);
      setErrorMsg("Something went wrong, please try again later");
    }

}

  return (
    <>
    <LoginNavbar />
    {errorMsg!==null && showPop!==null && <Popup closePopup={handleClosePopUp} title={"Error"} message={errorMsg} symbol={<AiOutlineCloseCircle size={"50px"} color="red" onClick={handleClosePopUp} />} />}
    {successMsg!==null && showPop!==null && <Popup closePopup={handleClosePopUp} title={"Success"} message={successMsg} symbol={<GrStatusGood size={"50px"} color="green" onClick={handleClosePopUp} />} />}
    

    {errorMsg ? (
          <Row className="justify-content-center mb-4">
            <Col md="8" lg="6">
              
            </Col>
          </Row>
        ) : (
          <></>
        )}
    <div className={Logincss.login_body}>
      <div className={Logincss.login_container}>
        {errorMsg ? 
          (<div className="" style={{ color: "red", fontWeight: "bold" }}>
                {errorMsg}
          </div>) 
          :(
            <></>
          )}
      <h3 className={Logincss.header}> LOGIN </h3>
      <h6>Hi, welcome back, please login</h6>
            <Form.Group className="mb-6" controlId="email">
              <Form.Control
                type="email"
                size="lg"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                size="lg"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          <p className={Logincss.login_small}>
              <a href="/passwordRequest">Forgotten password?</a>
            </p>
            <div className={Logincss.c_btn}>
            <button
            className={Logincss.login_buttons}
              id="submit"
              type="button"
              size="lg"
              onClick={() => sendLoginRequest()}
              style={{marginBottom:"0px", marginTop:"0px"}}
            >
              Login
            </button>
            <button
            className={Logincss.login_buttons2}
              variant="secondary"
              type="button"
              size="lg"
              onClick={() => {
                navigate("/dashboard");
              }}
              style={{marginBottom:"0px", marginTop:"0px"}}
            >
              Cancel
            </button>
            </div>
            <h6>
              Don't have an account ? <Link to={"/signup"}> SignUp </Link>
            </h6>
      </div>
      </div>
    </>
  );
};

export default Login;