import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";
import axios from "axios";

function Package() {
  const [AllPackages, setAllPackages] = useState();
  axios
    .get(`http://localhost:3000/PackageManagement`)
    .then((res) => {
      setAllPackages(res.data);
    })
    .catch((error) => {
      console.log(error.data);
    });

  const PackageBooking = (item) => {
    window.sessionStorage.setItem("PackageDetails", JSON.stringify(item));
  };

  return (
    <div>
      <NavBar />
      <div>
        <img src="./Assets/Images/Package.png" width={"100%"} />
        <Container>
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <div class="row">
              {AllPackages
                ? AllPackages.map((item) => (
                    <div class="column">
                      <div class="card">
                        {/* <a href="/SingleEvent"> */}
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
                              <a
                                href="/SinglePackage"
                                onClick={() => PackageBooking(item)}
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                              >
                                {item.name}
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <div style={{ textDecoration: "none" }}>
                                {item.includes}
                              </div>
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default Package;
