import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Vehicle() {
  const [vehicledetails, setvehicledetails] = useState();
  axios
    .get(`http://localhost:3000/VehicleManagement`)
    .then((res) => {
      setvehicledetails(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  const VehicleBooking = (details) => {
    window.sessionStorage.setItem("VehicleDetails", JSON.stringify(details));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <div class="row">
            {vehicledetails
              ? vehicledetails.map((item) => (
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
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{ textDecoration: "none" }}
                          >
                            {item.category} {item.Model}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <div>Rs. {item.Price} Per day</div>
                          </Typography>
                          <Button
                            variant="outlined"
                            style={{ top: 10 }}
                            href="/SingleVehicle"
                            onClick={() => VehicleBooking(item)}
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Vehicle;
