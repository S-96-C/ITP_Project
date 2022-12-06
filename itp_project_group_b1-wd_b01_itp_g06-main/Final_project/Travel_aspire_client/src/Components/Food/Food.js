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

function Food() {
  const [foods, setFoods] = useState();
  axios
    .get(`http://localhost:3000/FoodManagement`)
    .then((res) => {
      console.log(res.data);
      setFoods(res.data);
    })
    .catch((error) => {
      console.log(error.data);
    });

  const FoodsBooking = (item) => {
    window.sessionStorage.setItem("FoodDetail", JSON.stringify(item));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <div class="row">
            {foods
              ? foods.map((item) => (
                  <div class="column">
                    <div class="card">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.FoodImage}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{ textDecoration: "none" }}
                          >
                            {item.Name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <div>Rs. {item.Price}</div>
                          </Typography>
                          <Button
                            variant="outlined"
                            style={{ top: 10 }}
                            href="/SingleFood"
                            onClick={() => FoodsBooking(item)}
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

export default Food;
