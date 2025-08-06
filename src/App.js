import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './User/Components/About';
import Contact from './User/Components/Contact';
import Footer from './User/Components/Footer';
import Header from './User/Components/Header';
import Package from './User/Components/Package';
import Service from './User/Components/Service';
// import "./Sass.scss";
import Login from "./User/Components/Login";
import Loading from "./User/Components/Loading";
import PrivacyPolicy from "./User/Components/PrivacyPolicy";
import FAQ from "./User/Components/FAQ";
import Signup from "./User/Components/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CPass from "./User/Components/CPass";
import FPass from "./User/Components/FPass";
import OTP from "./User/Components/OTP";
import NPass from "./User/Components/NPass";
import Terms from "./User/Components/Terms";
import Admin_Login from "./Admin/Components/Admin_Login";
import Ahome from "./Admin/Components/Ahome";
import Add_Train from "./Admin/Components/Add_Train";
import Manage_Train from "./Admin/Components/Manage_Train";
import Manage_Booking from "./Admin/Components/Manage_Booking";
import Manage_Contact from "./Admin/Components/Manage_Contact";
import Manage_User from "./Admin/Components/Manage_User";
import Add_Packages from "./Admin/Components/Add_Packages";
import Manage_Packages from "./Admin/Components/Manage_Packages";
import Booking from "./User/Components/Booking";
import Add_Station from "./Admin/Components/Add_Station";
import Manage_Station from "./Admin/Components/Manage_Station";
import Add_Employee from "./Admin/Components/Add_Employee";
import Manage_Employee from "./Admin/Components/Manage_Employee";
import TrainTicket from "./User/Components/TrainTicket";
import TrainSearch from "./User/Components/TrainSearch";
import PNRStatus from "./User/Components/PNRStatus";
import PackageBooking from './User/Components/PackageBooking';
import PackageTicket from './User/Components/PackageTicket';
//import Home from './User/Components/Home';

const Home = lazy(() => delayForDemo(import('./User/Components/Home')))
function App() {

  return (

    <>
     
      <Router>
      <Suspense fallback={<Loading />}>
      <ToastContainer position="top-center"></ToastContainer>      
          
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Terms" element={<Terms/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Package" element={<Package />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/FAQ" element={<FAQ/>}></Route>
          <Route path="/CPass" element={<CPass/>}></Route>
          <Route path="/FPass" element={<FPass/>}></Route>
          <Route path="/OTP" element={<OTP/>}></Route>
          <Route path="/NPass" element={<NPass/>}></Route>
          <Route path="/TrainTicket" element={<TrainTicket/>}></Route>
          <Route path="/TrainSearch" element={<TrainSearch/>}></Route>
          <Route path="/PNRStatus" element={<PNRStatus/>}></Route>
          <Route path="/PackageBooking" element={<PackageBooking />} />
          <Route path="/PackageBooking/:id" element={<PackageBooking />} />
          <Route path="/PackageTicket" element={<PackageTicket />} />

          
          
          {/* Admin Route */}


          <Route path="/Admin_Login" element={<Admin_Login/>}></Route>
          <Route path="/Ahome" element={<Ahome/>}></Route>
          <Route path="/Add_Train" element={<Add_Train/>}></Route>
          <Route path="/Add_Station" element={<Add_Station/>}></Route>
          <Route path="/Add_Packages" element={<Add_Packages/>}></Route>
          <Route path="/Add_Employee" element={<Add_Employee/>}></Route>
          <Route path="/Manage_Train" element={<Manage_Train/>}></Route>
          <Route path="/Manage_Packages" element={<Manage_Packages/>}></Route>
          <Route path="/Manage_Booking" element={<Manage_Booking/>}></Route>
          <Route path="/Manage_Contact" element={<Manage_Contact/>}></Route>
          <Route path="/Manage_Station" element={<Manage_Station/>}></Route>
          <Route path="/Manage_Employee" element={<Manage_Employee/>}></Route>
          <Route path="/Manage_User" element={<Manage_User/>}></Route>
          
          
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}



export default App;

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
