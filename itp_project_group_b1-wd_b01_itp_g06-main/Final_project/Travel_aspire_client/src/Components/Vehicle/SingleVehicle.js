import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";

function SingleVehicle() {
  let VehicleDetails = JSON.parse(sessionStorage.getItem("VehicleDetails"));

  return (
    <div>
      <NavBar />
      <Container>
        <div style={{}}>
          <div className="row">
            <div>
              <img
                src={VehicleDetails.Image}
                alt="SingleVehicle"
                width={"600px"}
              />
            </div>
            <div>
              <h2>
                {VehicleDetails.category} {VehicleDetails.Model}
              </h2>
              <div className="row" style={{ margin: 10 }}>
                <div>Car Number - {VehicleDetails.CarNumber}</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Price Per Day - {VehicleDetails.Price}</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Car Color - {VehicleDetails.colour}</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>No of Seat - {VehicleDetails.Seat}</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Description - {VehicleDetails.Description}</div>
              </div>
            </div>
          </div>
          <div>
            <h2>Additional</h2>
            <div className="row">
              <div>Driver - {VehicleDetails.Driver}</div>
              <div>Children Sheat - {VehicleDetails.ChildSeat}</div>
              <div>GPS - {VehicleDetails.Gps}</div>
            </div>
          </div>
        </div>
        <center style={{ margin: 20 }}>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="contained">
            <a
              href="/BookVehicle"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Register
            </a>
          </Button>
        </center>
      </Container>
      <Footer />
    </div>
  );
}

export default SingleVehicle;
