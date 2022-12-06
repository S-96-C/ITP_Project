import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

let flightDetails = "";
let pricenew = 0;
// Function Checking
function FlightBook() {
  flightDetails = JSON.parse(sessionStorage.getItem("flightDetails"));
  console.log(flightDetails);

  const [NoOfSeats, setNoOfSeats] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");
  const [NicNumber, setNicNumber] = useState("");
  const [Address, setAddress] = useState("");

  const FlightBooking = () => {
    console.log("NoOfSeats", NoOfSeats);
    console.log("FirstName", FirstName);
    console.log("LastName", LastName);
    console.log("Email", Email);
    console.log("Contactnumber", Contactnumber);
    console.log("PassportNumber", PassportNumber);
    console.log("NicNumber", NicNumber);
    console.log("Address", Address);

    if (check === 0) {
      alert("Please Select a Seat..");
    } else {
      if (
        NoOfSeats === "" ||
        FirstName === "" ||
        LastName === "" ||
        PassportNumber === "" ||
        NicNumber === "" ||
        Address === "" ||
        check === "" ||
        Contactnumber === "" ||
        Email === "" ||
        Contactnumber.length != 10
      ) {
        console.log("error01");
        alert("Please fill all required Fields");
      } else {
        axios
          .post(`http://localhost:3000/FlightBooking`, {
            AirlineName: flightDetails.AirlineName,
            FromLocation: flightDetails.FromLocation,
            ToLocation: flightDetails.ToLocation,
            NoOfSeats: NoOfSeats,
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Contactnumber: Contactnumber,
            PassportNumber: PassportNumber,
            NicNumber: NicNumber,
            Address: Address,
            Price: check,
          })
          .then((res) => {
            console.log(res);
            alert("Flight Ticket have been Successfully Booked...!");
            window.location.reload(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const [check, setcheck] = useState(0);
  const PriceCaculation = (Seats) => {
    setNoOfSeats(Seats);
    if (Seats === "") {
      console.log("Null");
      setcheck(0);
    } else {
      pricenew = flightDetails.SeatsPrice * Seats;
      console.log("pricenew : ", pricenew);
      setcheck(pricenew);
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <center style={{ padding: 50 }}>
          <h2>Flight Booking Form</h2>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Airline Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  defaultValue={flightDetails.AirlineName}
                  disabled
                  placeholder="Airline"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Departing Airport
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  defaultValue={flightDetails.FromLocation}
                  disabled
                  placeholder="Dep.Air."
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Destination Airport
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  defaultValue={flightDetails.ToLocation}
                  disabled
                  placeholder="Dest.Air."
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Number of Seats
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  onChange={(e) => PriceCaculation(e.target.value)}
                  placeholder="NOS"
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
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Passport Number
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  onChange={(e) => setPassportNumber(e.target.value)}
                  placeholder="Passport Number"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                NIC Number
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  onChange={(e) => setNicNumber(e.target.value)}
                  placeholder="NIC"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Address
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Price
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="text" value={check} placeholder="Price" />
              </Col>
            </Form.Group>
            <center>
              <div className="button">
                <input
                  type="button"
                  onClick={FlightBooking}
                  value={"SUBMIT"}
                  className="btn btn-block app-sidebar__heading Login-Button"
                />
              </div>
            </center>
          </Form>
        </center>
      </Container>
      <Footer />
    </div>
  );
}

export default FlightBook;
