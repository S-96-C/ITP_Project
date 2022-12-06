const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());

//import Routes
const AgentManagementRoute = require("./Admin/routes/AgentManagement");
const EventManagementRoute = require("./Admin/routes/EventManagement");
const FoodManagementRoute = require("./Admin/routes/FoodManagement");
const PackageManagementRoute = require("./Admin/routes/PackageManagement");
const RoomManagementRoute = require("./Admin/routes/RoomManagement");
const VehicleManagementRoute = require("./Admin/routes/VehicleManagement");
const FlightManagement = require("./Admin/routes/FlightManagement");
const HotelManagement = require("./Admin/routes/HotelManagement");
const ManagerManagement = require("./Admin/routes/ManagerManagement");
const FeedBackManagement = require("./Admin/routes/FeedBackManagement");

const EventBooking = require("./User/routes/EventBooking");
const FlightBooking = require("./User/routes/FlightBooking");
const HotelBooking = require("./User/routes/HotelBooking");
const PaymentDetails = require("./User/routes/PaymentDetails");
const VehicleBooking = require("./user/routes/VehicleBooking");
const AddressDetail = require("./User/routes/AddressDetail");
const AgentBooking = require("./User/routes/AgentBooking");
const FoodsBooking = require("./User/routes/FoodBooking");
const PackageBooking = require("./User/routes/PackageBooking");
const UserDetails = require("./User/routes/UserDetails");

//API Paths
app.use("/AgentManagement", AgentManagementRoute);
app.use("/EventManagement", EventManagementRoute);
app.use("/FoodManagement", FoodManagementRoute);
app.use("/PackageManagement", PackageManagementRoute);
app.use("/RoomManagement", RoomManagementRoute);
app.use("/VehicleManagement", VehicleManagementRoute);
app.use("/FlightManagement", FlightManagement);
app.use("/HotelManagement", HotelManagement);
app.use("/ManagerManagement", ManagerManagement);
app.use("/FeedBackManagement", FeedBackManagement);

app.use("/EventBooking", EventBooking);
app.use("/FlightBooking", FlightBooking);
app.use("/HotelBooking", HotelBooking);
app.use("/PaymentDetails", PaymentDetails);
app.use("/VehicleBooking", VehicleBooking);
app.use("/AddressDetail", AddressDetail);
app.use("/AgentBooking", AgentBooking);
app.use("/FoodsBooking", FoodsBooking);
app.use("/PackageBooking", PackageBooking);
app.use("/UserDetails", UserDetails);

app.get("/", (req, res) => {
  res.send("We are on Home");
});

//mongo db cluster added 
mongoose.connect(
  
  "mongodb+srv://gawsan:Gawsan2020@cluster0.b8nhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("Happy Hacking....!")
);

app.listen(3000);
