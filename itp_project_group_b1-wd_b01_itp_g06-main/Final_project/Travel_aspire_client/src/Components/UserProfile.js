import React, { useState } from "react";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import axios from "axios";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { Form } from "react-bootstrap";
function UserProfile() {
  let UserID = sessionStorage.getItem("userID");
  console.log(UserID);

  const navigate = useNavigate();
  const [UserDetails, setUserDetails] = useState("");
  axios
    .get(`http://localhost:3000/UserDetails/${UserID}`)
    .then((res) => {
      setUserDetails(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <NavBar />
      <Container>
        <center>
          <h1>User Profile</h1>
        </center>

        <Card
          style={{
            width: "45rem",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Form>
            <div style={{ margin: 20, padding: 20 }}>
              <h3>First Name - {UserDetails.FirstName}</h3>
              <h3>Last Name - {UserDetails.LastName}</h3>
              <h3>UserName - {UserDetails.UserName}</h3>
              <h3>Email - {UserDetails.Email}</h3>
              <h3>ContactNumber - {UserDetails.ContactNumber}</h3>
              <h3>Address - {UserDetails.Address}</h3>
              <h3>Country - {UserDetails.Country}</h3>
            </div>
            <center>
              {/* <input
                type="button"
                href="/EditUserProfile"
                value={"SUBMIT"}
                style={{
                  backgroundColor: "#b2b2b2",
                  borderRadius: 10,
                  padding: 7,
                }}
              /> */}
              <a href="/EditUserProfile">Edit</a>
            </center>
          </Form>
        </Card>
      </Container>

      <Footer />
    </div>
  );
}

export default UserProfile;
