import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from './pages/Home/Home'
import WalletDashboard from './pages/wallet/WalletDashboard';
import VerifyPayment from './pages/wallet/VerifyPayment';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginNavbar from './components/LoginNavbar/LoginNavbar';
import CancelOrder from './pages/CancelOrder/CancelOrder';
import HelpPage from './pages/HelpPage/HelpPage';
import OrderHelp from './pages/OrderHelp/OrderHelp';
import VerifySignUpPage from "./pages/Sign-up/VerifySignUpPage";
import SignUpPage from "./pages/Sign-up/SignUpPage";
import Login from './pages/LoginPage/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from "./components/Dashboard/Dashboard";
import {MenuDetails} from "./components/Product/MenuDetails";
import ViewAnOrderPage from './components/ViewAnOrder/ViewAnOrderPage';




function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Checkout' element={<Checkout/>} />
          <Route path='walletdashboard' element={
          <PrivateRoute><WalletDashboard/>
          </PrivateRoute>
          }/>
          <Route path='/verify' element={
          <PrivateRoute>
          <VerifyPayment/>
          </PrivateRoute>
          }/>
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/passwordRequest' element={<ForgotPassword/>}/>
          <Route path='/resetPassword' element={<ResetPassword/> }/>
          <Route path='/loginnav' element={<LoginNavbar/>}/>
          <Route path='/cancelorder' element={<CancelOrder/>}/>
          <Route path='/help' element={<HelpPage/>}/>
          <Route path='/orderhelp' element={<OrderHelp/>}/>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verification" element={ <VerifySignUpPage /> } />
          <Route path='/productList' element={<MenuDetails />} />
          <Route path='/viewAnOrder' element={<ViewAnOrderPage/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;