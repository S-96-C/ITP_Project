import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Contact_Us() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("name : ", name);
    console.log("email : ", email);
    console.log("message : ", message);

    if (name == "" || email == "" || message == "") {
      alert("Please fill all required fileds...");
    } else {
      axios
        .post("http://localhost:3000/FeedBackManagement", {
          Name: name,
          Email: email,
          Message: message,
        })
        .then((res) => {
          alert("Thanks for filling out our form!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log("Something error, Please try again later.");
        });
    }
  };
  return (
    <div>
      <NavBar />

      <center>
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
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder={"Enter the Name"}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={email}
                placeholder={"Enter the Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                value={message}
                placeholder={"Enter the Message"}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <input
              type="button"
              onClick={handleSubmit}
              value={"SUBMIT"}
              style={{
                backgroundColor: "#b2b2b2",
                borderRadius: 10,
                padding: 7,
              }}
            />
          </Form>
        </Card>
      </center>
      <Footer />
    </div>
  );
}
