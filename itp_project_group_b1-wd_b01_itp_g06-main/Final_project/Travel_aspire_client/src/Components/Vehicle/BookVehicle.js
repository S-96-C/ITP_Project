import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "@mui/material";
import axios from "axios";

function BookVehicle() {
  let VehicleDetails = JSON.parse(sessionStorage.getItem("VehicleDetails"));
  console.log(VehicleDetails);

  const [NoOfDays, setNoOfDays] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [Price, setPrice] = useState();

  const VehicleBooking = () => {
    console.log("VehicleDetails.category : ", VehicleDetails.category);
    console.log("VehicleDetails.Model : ", VehicleDetails.Model);
    console.log("NoOfDays : ", NoOfDays);
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("Email : ", Email);
    console.log("Contactnumber : ", Contactnumber);
    console.log("Price : ", newprice);

    if (
      NoOfDays == "" ||
      FirstName == "" ||
      LastName == "" ||
      Contactnumber == "" ||
      Email == "" ||
      Contactnumber.length != 10
    ) {
      console.log("error01");
      alert("Please fill all required Fields");
    } else {
      axios
        .post(`http://localhost:3000/VehicleBooking`, {
          VegicleCategory: VehicleDetails.category,
          VehicleModel: VehicleDetails.Model,
          NoOfDays: NoOfDays,
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Contactnumber: Contactnumber,
          Price: newprice,
        })
        .then((res) => {
          console.log(res.data);
          alert("Vehicle Ticket have been Successfully Booked...!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  };

  let pricenew = 0;
  const [newprice, setnewprice] = useState();
  const priceCaculation = (days) => {
    setNoOfDays(days);
    pricenew = days * VehicleDetails.Price;
    console.log(pricenew);
    setnewprice(pricenew);
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
                  Car Category
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={VehicleDetails.category}
                    disabled
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Car Model
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={VehicleDetails.Model}
                    disabled
                    placeholder="TotalMembers"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  No Of Days
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={(e) => priceCaculation(e.target.value)}
                    placeholder="No Of Days"
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
                  Price
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    value={newprice}
                    disabled
                    // onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </Col>
              </Form.Group>
              <center>
                <div className="button">
                  <input
                    type="button"
                    onClick={VehicleBooking}
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

export default BookVehicle;
