import React from "react";
import "./WalletDashboard.css";
import PaymentModal from "./PaymentModal";
import { Modal } from "@mui/material";
import { apiGet } from "../../utils/axios";
import { useState, useEffect } from "react";
import { WALLET, BALANCE } from "../../utils/routes";
import axios from "axios";

export default function WalletDashboard() {
  const [open, setOpen] = React.useState(false);
  const [walletDetail, setWalletDetail] = useState({});
  const [transactionDetail, setTransactionDetail] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const getUserAndWalletBalance = async () => {
    const { data } = await apiGet(`${WALLET}/${BALANCE}`);
    setWalletDetail(data);
  };
const Url = "api/v1/viewWalletTransactions"
   
   const getTransaction = async () => {
    const { data } = await apiGet(`${Url}`);
    setTransactionDetail(data);
   }

  useEffect(() => {
    getUserAndWalletBalance();
    getTransaction()
  }, []);

  return (
    <>
      <div className="top-container">
        <p className="customer-name">{walletDetail.userName}</p>
        <p className="account-balance">
          <span>Account Balance: </span>
          <span className="amount-label">{walletDetail.walletBalance}</span>
        </p>
        <button onClick={handleOpen}>Fund Wallet</button>
      </div>
      <div className="lower-container">
        <p className="transaction-h1">Transaction</p>
        <table>
            
          <tr>
            <th>Date</th>
            
            <th>Reference</th>
            <th>Purpose</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {transactionDetail && transactionDetail.walletTransactions ? transactionDetail.walletTransactions.map((detail, index)=>(
            <tbody key={index}>
            <tr >
             <td>{detail.transactionDate}</td>
             
             <td>{detail.transactionReference}</td>
             <td>{detail.transactionType}</td>
             <td>{detail.amount}</td>
             <td>completed</td>
           </tr>
           </tbody>
          )):
          <th>You have no transactions</th>
        }
         
          {/* <tr>
            <td>2023-01-28</td>
            <td>14:03:04</td>
            <td>43ettebbejnsjjbd xnnsm43 nxnx xnsmcd</td>
            <td>deposit</td>
            <td>12000</td>
            <td>completed</td>
          </tr>
          <tr>
            <td>2023-01-28</td>
            <td>14:03:04</td>
            <td>43ettebbejnsjjbd xnnsm43 nxnx xnsmcd</td>
            <td>deposit</td>
            <td>12000</td>
            <td>completed</td>
          </tr>
          <tr>
            <td>2023-01-28</td>
            <td>14:03:04</td>
            <td>43ettebbejnsjjbd xnnsm43 nxnx xnsmcd</td>
            <td>deposit</td>
            <td>12000</td>
            <td>completed</td>
          </tr>
          <tr>
            <td>2023-01-28</td>
            <td>14:03:04</td>
            <td>43ettebbejnsjjbd xnnsm43 nxnx xnsmcd</td>
            <td>deposit</td>
            <td>12000</td>
            <td>completed</td>
          </tr> */}
        </table>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          outline: "none",
          ":focus": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <PaymentModal />
      </Modal>
    </>
  );
}
