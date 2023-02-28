import React, { createContext } from "react";
import { apiPostAuthorization } from "./axios";



export const dataContext = createContext();

const DataProvider = ({ children }) => {
  
//   const[FundWallet] = useState('')

  /**==============Registration======= **/
  const FundWallet = async (fundData) => {
    try {
        const paymentForm = {
            amount: fundData.amount
        }
      
      await apiPostAuthorization("wallet/fundWallet", paymentForm).then((res) => {
        // successNotification(res.data.data);
        // console.log(res.data.data);
        setTimeout(() => {
          window.location.href = res.data;
        }, 1500);
      });
    } catch (err) {
    //   errorNotification(err.response.data);
      console.log(err.response.data);
    }
  };

  return (
    <dataContext.Provider
      value={{
        FundWallet
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;