import React, { useEffect, useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

let eventdetails = "";

function EventRegisterForm() {
  eventdetails = JSON.parse(sessionStorage.getItem("eventdetails"));
  console.log("eventdetails", eventdetails);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contactnumber, setContactnumber] = useState("");

  const CreateCleaningCompany = () => {
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("Email : ", Email);
    console.log("Contactnumber : ", Contactnumber);

    if (
      FirstName == "" ||
      LastName == "" ||
      Contactnumber == "" ||
      Email == "" ||
      Contactnumber.length != 10
    ) {
      console.log("error01");
      alert("Please fill all required Fields");
    } else {
      if (validator.isEmail(Email)) {
        alert("Done!");
      console.log("eventDetails.firstname : ", FirstName);
      console.log("eventDetails.lastname : ", LastName);
      console.log("eventDetails.Email : ", Email);
      console.log("eventDetails.contact number : ", Contactnumber);
      axios
        .post(`http://localhost:3000/EventBooking`, {
          EventName: eventdetails.EventName,
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Contactnumber: Contactnumber,
          Status: "Processing",
        })
        .then((response) => {
          console.log("response : ", response);
          alert("Event Successfully Booked...!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }else {
      alert("Please Enter a valid Email!");
    }
    }
  };

  return (
    <div>
      <NavBar />
      <center style={{ padding: 50 }}>
        <Container>
          <Form>
            <center>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Event Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={eventdetails.EventName}
                    disabled
                    placeholder="Event Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Event Performancer Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={eventdetails.PerformanceName}
                    disabled
                    placeholder="Event Performancer Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Event Price
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={eventdetails.EventBookingPrice}
                    disabled
                    placeholder="Event Price"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  First Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Last Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Email
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Contact Number
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={(e) => setContactnumber(e.target.value)}
                    placeholder="Contact Number"
                  />
                </Col>
              </Form.Group>
              <center>
                <div className="button">
                  <input
                    type="button"
                    onClick={CreateCleaningCompany}
                    value={"SUBMIT"}
                    className="btn btn-block app-sidebar__heading Login-Button"
                  />
                </div>
              </center>
            </center>
          </Form>
        </Container>
      </center>
      <Footer />
    </div>
  );
}

export default EventRegisterForm;
