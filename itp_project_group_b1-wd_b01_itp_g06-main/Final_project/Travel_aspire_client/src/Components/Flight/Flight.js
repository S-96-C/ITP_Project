import React, { useEffect, useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Flight() {
  const [Flight, setFlight] = useState("");

  axios
    .get("http://localhost:3000/FlightManagement")
    .then((response) => {
      setFlight(response.data);
      // console.log("inserted", response.data);
    })
    .catch((error) => {
      console.log("error message", error.data);
    });

  const FlightBooking = (item) => {
    console.log(item);
    window.sessionStorage.setItem("flightDetails", JSON.stringify(item));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div className="row" style={{ padding: 50 }}>
          {Flight
            ? Flight.map((item) => (
                <Card sx={{ maxWidth: 340 }} style={{ margin: 20 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.AirlineName}
                      <br />
                      {item.FromLocation} - {item.ToLocation}
                      <br />
                      {item.DepartureTime} - {item.ArrivalTime}
                      <br />
                      {item.Duration}
                      <br />
                      Total Seats {item.TotalSeats}
                      <br />
                      Seats Price {item.SeatsPrice}
                    </Typography>
                  </CardContent>
                  <center>
                    <Button
                      href="/FlightBook"
                      onClick={() => FlightBooking(item)}
                    >
                      Book Now
                    </Button>
                  </center>
                </Card>
              ))
            : "Loading..."}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Flight;
