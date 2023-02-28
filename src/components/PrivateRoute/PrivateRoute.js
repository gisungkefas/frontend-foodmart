import { Navigate } from "react-router-dom";
import { useUser } from "../../pages/useProvider";

const PrivateRoute = ({children}) => {
  const user = useUser();


  console.log(user);

  if (user && user.jwt) {
  } else {
  return  <Navigate to="/login" />;
  }
  return( <>
         
    <>{children}</>
  </>)
};

export default PrivateRoute;