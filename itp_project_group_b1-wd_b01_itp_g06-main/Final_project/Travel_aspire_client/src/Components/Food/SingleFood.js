import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Button from "@mui/material/Button";

function SingleFood() {
  let FoodDetail = JSON.parse(sessionStorage.getItem("FoodDetail"));
  console.log(FoodDetail);

  return (
    <div>
      <NavBar />
      <Container>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <div>
            <div
              style={{
                display: "inline-block",
              }}
            >
              <img
                src={FoodDetail.FoodImage}
                alt="FoodImage"
                width={"500px"}
                height={"400px"}
                style={{ borderRadius: 20 }}
              />
            </div>
            <div
              style={{
                display: "inline-block",
                margin: 50,
              }}
            >
              <h1>{FoodDetail.Name}</h1>
              <h3>Qty - {FoodDetail.Quantity}</h3>
              <h4>Description - {FoodDetail.Description}</h4>
              <h4>Price - {FoodDetail.Price}</h4>
              <Button
                variant="outlined"
                style={{ top: 10 }}
                href="/FoodBook"
                // onClick={() => FoodsBooking(item)}
              >

                Order

              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default SingleFood;
