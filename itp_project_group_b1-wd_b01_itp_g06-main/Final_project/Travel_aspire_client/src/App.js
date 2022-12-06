import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routing
import Home from "./Components/Home";
import Event from "./Components/Event/Event";
import Agent from "./Components/Agent/Agent";
import Food from "./Components/Food/Food";
import Hotel from "./Components/Hotel/Hotel";
import Package from "./Components/Package/Package";
import Flight from "./Components/Flight/Flight";
import Vehicle from "./Components/Vehicle/Vehicle";
import About_Us from "./Components/About_Us";
import Contact_Us from "./Components/Contact_Us";
import SingleEvent from "./Components/Event/SingleEvent";
import EventRegisterForm from "./Components/Event/EventRegisterForm";
import AgentSingleProfile from "./Components/Agent/AgentSingleProfile";
import AgentRegisterForm from "./Components/Agent/AgentRegisterForm";
import SingleVehicle from "./Components/Vehicle/SingleVehicle";
import BookVehicle from "./Components/Vehicle/BookVehicle";
import SinglePackage from "./Components/Package/SinglePackage";
import BookPackage from "./Components/Package/BookPackage";
import HotelReserve from "./Components/Hotel/HotelReserve";
import SingleHotel from "./Components/Hotel/SingleHotel";
import FlightBook from "./Components/Flight/FlightBook";
import SingleFood from "./Components/Food/SingleFood";
import FoodBook from "./Components/Food/FoodBook";
import PackageBook from "./Components/Package/BookPackage";
import User from "./Components/User";
import UserProfile from "./Components/UserProfile";
import EditUserProfile from "./Components/EditUserProfile";
import Customer_Service from "./Components/Customer_Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Agent" element={<Agent />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/Flight" element={<Flight />} />
          <Route path="/Vehicle" element={<Vehicle />} />
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
          <Route path="/SingleEvent" element={<SingleEvent />} />
          <Route path="/EventRegisterForm" element={<EventRegisterForm />} />
          <Route path="/AgentSingleProfile" element={<AgentSingleProfile />} />
          <Route path="/AgentRegisterForm" element={<AgentRegisterForm />} />
          <Route path="/SingleVehicle" element={<SingleVehicle />} />
          <Route path="/BookVehicle" element={<BookVehicle />} />
          <Route path="/SinglePackage" element={<SinglePackage />} />
          <Route path="/BookPackage" element={<BookPackage />} />
          <Route path="/HotelReserve" element={<HotelReserve />} />
          <Route path="/SingleHotel" element={<SingleHotel />} />
          <Route path="/FlightBook" element={<FlightBook />} />
          <Route path="/SingleFood" element={<SingleFood />} />
          <Route path="/FoodBook" element={<FoodBook />} />
          <Route path="/PackageBook" element={<PackageBook />} />
          <Route path="/User" element={<User />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/EditUserProfile" element={<EditUserProfile />} />
          <Route path="/Customer_Service" element={<Customer_Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
