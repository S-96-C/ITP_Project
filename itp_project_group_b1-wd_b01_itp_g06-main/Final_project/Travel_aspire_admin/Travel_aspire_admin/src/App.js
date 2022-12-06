import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Dashbord from "./components/Dashbord";
import HotelAdd from "./components/Hotel/HotelAdd";
import HotelView from "./components/Hotel/HotelView";
import HotelReport from "./components/Hotel/HotelReport";
import HotelUpdate from "./components/Hotel/HotelUpdate";
import VehicleReport from "./components/Vehicle/VehicleReport";
import VehicleAdd from "./components/Vehicle/VehicleAdd";
import VehicleUpdate from "./components/Vehicle/VehicleUpdate";
import VehicleView from "./components/Vehicle/VehicleView";
import FoodAdd from "./components/Food/FoodAdd";
import FoodReport from "./components/Food/FoodReport";
import FoodUpdate from "./components/Food/FoodUpdate";
import FoodView from "./components/Food/FoodView";
import PackageView from "./components/Package/PackageView";
import PackageAdd from "./components/Package/PackageAdd";
import PackageReport from "./components/Package/PackageReport";
import PackageUpdate from "./components/Package/PackageUpdate";
import EventAdd from "./components/Event/EventAdd";
import EventReport from "./components/Event/EventReport";
import EventUpdate from "./components/Event/EventUpdate";
import EventView from "./components/Event/EventView";
import AgentAdd from "./components/Agent/AgentAdd";
import AgentReport from "./components/Agent/AgentReport";
import AgentUpdate from "./components/Agent/AgentUpdate";
import AgentView from "./components/Agent/AgentView";
import FlightAdd from "./components/Flight/FlightAdd";
import FlightReport from "./components/Flight/FlightReport";
import FlightUpdate from "./components/Flight/FlightUpdate";
import FlightView from "./components/Flight/FlightView";
import ManagerAdd from "./components/Manager/ManagerAdd";
import ManagerView from "./components/Manager/ManagerView";
import ManagerUpdate from "./components/Manager/ManagerUpdate";
import ManagerReport from "./components/Manager/ManagerReport";
import EventBookings from "./components/Manager/EventBookings";
import FlightBookings from "./components/Manager/FlightBookings";
import FoodBookings from "./components/Manager/FoodBookings";
import HotelBookings from "./components/Manager/HotelBookings";
import PackageBookings from "./components/Manager/PackageBookings";
import VehicleBookings from "./components/Manager/VehicleBookings";
import AgentBookings from "./components/Manager/AgentBookings";
import AgentBookingUpdate from "./components/Manager/AgentBookingUpdate";
import EventBookingUpdate from "./components/Manager/EventBookingUpdate";
import FlightBookingUpdate from "./components/Manager/FlightBookingUpdate";
import FoodBookingUpdate from "./components/Manager/FoodBookingUpdate";
import HotelBookingUpdate from "./components/Manager/HotelBookingUpdate";
import PackageBookingUpdate from "./components/Manager/PackageBookingUpdate";
import VehicleBookingUpdate from "./components/Manager/VehicleBookingUpdate";
import Contactus from "./components/Manager/Contactus";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/HotelAdd" component={HotelAdd} />
      <Route exact path="/HotelView" component={HotelView} />
      <Route exact path="/HotelReport" component={HotelReport} />
      <Route exact path="/HotelUpdate" component={HotelUpdate} />
      <Route exact path="/VehicleReport" component={VehicleReport} />
      <Route exact path="/VehicleView" component={VehicleView} />
      <Route exact path="/VehicleAdd" component={VehicleAdd} />
      <Route exact path="/VehicleUpdate" component={VehicleUpdate} />
      <Route exact path="/FoodAdd" component={FoodAdd} />
      <Route exact path="/FoodReport" component={FoodReport} />
      <Route exact path="/FoodUpdate" component={FoodUpdate} />
      <Route exact path="/FoodView" component={FoodView} />
      <Route exact path="/PackageView" component={PackageView} />
      <Route exact path="/PackageAdd" component={PackageAdd} />
      <Route exact path="/PackageReport" component={PackageReport} />
      <Route exact path="/PackageUpdate" component={PackageUpdate} />
      <Route exact path="/EventAdd" component={EventAdd} />
      <Route exact path="/EventReport" component={EventReport} />
      <Route exact path="/EventUpdate" component={EventUpdate} />
      <Route exact path="/EventView" component={EventView} />
      <Route exact path="/AgentAdd" component={AgentAdd} />
      <Route exact path="/AgentReport" component={AgentReport} />
      <Route exact path="/AgentUpdate" component={AgentUpdate} />
      <Route exact path="/AgentView" component={AgentView} />
      <Route exact path="/FlightAdd" component={FlightAdd} />
      <Route exact path="/FlightReport" component={FlightReport} />
      <Route exact path="/FlightUpdate" component={FlightUpdate} />
      <Route exact path="/FlightView" component={FlightView} />
      <Route exact path="/ManagerAdd" component={ManagerAdd} />
      <Route exact path="/ManagerReport" component={ManagerReport} />
      <Route exact path="/ManagerUpdate" component={ManagerUpdate} />
      <Route exact path="/ManagerView" component={ManagerView} />
      <Route exact path="/EventBookings" component={EventBookings} />
      <Route exact path="/FlightBookings" component={FlightBookings} />
      <Route exact path="/FoodBookings" component={FoodBookings} />
      <Route exact path="/HotelBookings" component={HotelBookings} />
      <Route exact path="/PackageBookings" component={PackageBookings} />
      <Route exact path="/VehicleBookings" component={VehicleBookings} />
      <Route exact path="/AgentBookings" component={AgentBookings} />
      <Route exact path="/AgentBookingUpdate" component={AgentBookingUpdate} />
      <Route exact path="/EventBookingUpdate" component={EventBookingUpdate} />
      <Route
        exact
        path="/FlightBookingUpdate"
        component={FlightBookingUpdate}
      />
      <Route exact path="/FoodBookingUpdate" component={FoodBookingUpdate} />
      <Route exact path="/HotelBookingUpdate" component={HotelBookingUpdate} />
      <Route
        exact
        path="/PackageBookingUpdate"
        component={PackageBookingUpdate}
      />
      <Route
        exact
        path="/VehicleBookingUpdate"
        component={VehicleBookingUpdate}
      />
      <Route exact path="/Contactus" component={Contactus} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
