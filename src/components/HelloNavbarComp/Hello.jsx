import React, { useState} from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import './Hello.css';
import Cookies from "js-cookie";

const Hello = () => {
  const [firstname] = useState(Cookies.get("firstname"));

  return (
    <>
      <BsPersonLinesFill />
      <span className="helloUser">Hello {firstname}</span>
    </>
  );
};

export default Hello;

