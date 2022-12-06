import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Hotel() {
  const [HotelDetails, setHotelDetails] = useState();
  axios
    .get(`http://localhost:3000/HotelManagement`)
    .then((res) => {
      console.log(res.data);
      setHotelDetails(res.data);
    })
    .catch((error) => {
      console.log(error.data);
    });

  const HotelBooking = (details) => {
    window.sessionStorage.setItem("SingleHotel", JSON.stringify(details));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div class="row">
          {HotelDetails
            ? HotelDetails.map((item) => (
                <div class="column">
                  <div class="card">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.Image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.Address} {item.Street} {item.State}{" "}
                          {item.Province} {item.Country}
                          <br />
                          <a
                            href="./SingleHotel"
                            onClick={() => HotelBooking(item)}
                          >
                            More details...
                          </a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))
            : "Loading..."}

        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Hotel;
