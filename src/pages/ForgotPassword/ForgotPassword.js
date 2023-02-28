import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import Popup from "../../components/Popup/Popup";
import {AiOutlineCloseCircle} from "react-icons/ai";
import ForgotPasswordcss from "./ForgotPassword.module.css"

    
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPop, setshowPop] = useState(null);

  const handleClosePopUp = (e) => {
    e.preventDefault();
    setshowPop(null);
  };

  function sendPasswordRequest() {
    setErrorMsg("");
    const requestBody = {
      email: email,
    };

    fetch("http://localhost:8080/api/v1/auth/password-reset-request", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(requestBody),
    }).then((response) => {
      if (response.status === 200) return response.text();
      else if (response.status === 401 || response.status === 403) {
        setshowPop(true);
        setErrorMsg("Email not found");
      } else {
        setshowPop(true);
        setErrorMsg("Something went wrong, please try again later");
      }
    });
  }

  return (
    <>
    {errorMsg && showPop && <Popup closePopup={handleClosePopUp} title={"Error"} message={errorMsg} symbol={<AiOutlineCloseCircle size={"50px"} color="red" />} />}
      
    <div className={ForgotPasswordcss.f_body}>
      <div className={ForgotPasswordcss.request_container}>
      {errorMsg ? (
          <Row className="justify-content-center mb-4">

            <Col md="8" lg="6">
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  size="lg"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      <h3 className={ForgotPasswordcss.header}> FORGOT PASSWORD</h3>
      <p className={ForgotPasswordcss.p}>Please input your registered email below</p>
        <Row className="justify-content-center">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                size="lg"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={() => sendPasswordRequest()}
              >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
};

export default ForgotPassword;
