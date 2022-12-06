import * as React from "react";
import CardActions from "@mui/material/CardActions";

import { useState } from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Customer_Service() {
  const theme = useTheme();

  const [CustomerService, setCustomerService] = useState([]);
  axios
    .get("http://localhost:3000/ManagerManagement")
    .then((res) => {
      setCustomerService(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <NavBar />

      <Container style={{ padding: 50 }}>
        {CustomerService
          ? CustomerService.map((item) => (
              <Card sx={{ display: "flex", padding: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image={item.ProfileImage}
                  style={{ borderRadius: 10 }}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {item.FirstName}
                      {item.LastName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Email Address - {item.Email}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Contact Number - {item.MobileNumber}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Qualifications - {item.Qualifications}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Speaking Language - {item.Language}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))
          : "Loading.... Please Wait"}
      </Container>
      <Footer />
    </div>
  );
}
