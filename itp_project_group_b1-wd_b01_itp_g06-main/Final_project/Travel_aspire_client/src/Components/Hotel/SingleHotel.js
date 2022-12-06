import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";

function SingleHotel() {
  let SingleHotel = JSON.parse(sessionStorage.getItem("SingleHotel"));
  // console.log("SingleHotel : ", SingleHotel);

  return (
    <div>
      <div>
        <NavBar />
        <img src={SingleHotel.Image} width={"100%"} height={"600px"} />
        <Container>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <h1>{SingleHotel.Name}</h1>
              Address -- {SingleHotel.Address} {SingleHotel.Street}{" "}
              {SingleHotel.State} {SingleHotel.Province} {SingleHotel.Country}{" "}
              <br />
              Contact Number -- {SingleHotel.MobileNumber}
              <br />
              Per Night -- {SingleHotel.Price}
              <br />
            </div>
          </div>
          <center style={{ margin: 20 }}>
            <Button variant="outlined" style={{ marginRight: 10 }}>
              Cancel
            </Button>
            <Button variant="contained">
              <a
                href="/HotelReserve"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Reserve !
              </a>
            </Button>
          </center>
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default SingleHotel;
