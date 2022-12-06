import React, { useEffect, useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

let Fromfromnom = 0;
let FromfromNOC = 0;
let FromfromNOB = 0;
let FromfromACV = null;

let Totalprice = 0;

function HotelReserve() {
  let SingleHotel = JSON.parse(sessionStorage.getItem("SingleHotel"));

  const [TotalMembers, setTotalMembers] = useState(0);
  const [NoOfChild, setNoOfChild] = useState(0);
  const [NoOfBed, setNoOfBed] = useState(0);
  const [AC, setAC] = useState("flase");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [Price, setPrice] = useState();
  const [Email, setEmail] = useState("");

  const HotelBooking = () => {
    console.log("SingleHotel.Name : ", SingleHotel.Name);
    console.log("TotalMembers : ", TotalMembers);
    console.log("NoOfChild : ", NoOfChild);
    console.log("NoOfBed : ", NoOfBed);
    console.log("AC : ", AC);
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("Contactnumber : ", Contactnumber);
    console.log("totalpricenew : ", totalpricenew);
    console.log("Email : ", Email);

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
      axios
        .post(`http://localhost:3000/HotelBooking`, {
          HotelName: SingleHotel.Name,
          TotalMembers: Fromfromnom,
          NoOfChild: FromfromNOC,
          NoOfBed: FromfromNOB,
          AC: FromfromACV,
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Contactnumber: Contactnumber,
          Price: totalpricenew,
        })
        .then((res) => {
          console.log(res.data);
          alert("Hotel Reservation have been Successfully Done...!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  };

  let basicPrice = SingleHotel.Price;

  const NoOFMember = (nom) => {
    if (nom == "") {
      console.log("null");
    } else {
      console.log("nom : ", nom);
      Fromfromnom = nom;
      mainCaculation();
    }
  };

  const NoOFChild = (NOC) => {
    if (NOC == "") {
      console.log("null");
    } else {
      console.log("NOC : ", NOC);
      FromfromNOC = NOC;
      mainCaculation();
    }
  };

  const NoOFBed = (NOB) => {
    if (NOB == "") {
      console.log("null");
    } else {
      console.log("NOB : ", NOB);
      FromfromNOB = NOB;
      mainCaculation();
    }
  };

  const ACFun = (ACV) => {
    if (ACV == "") {
      console.log("null");
    } else {
      console.log("ACV : ", ACV);
      FromfromACV = ACV;
      mainCaculation();
    }
  };

  const [totalpricenew, newtotalpricenew] = useState(0);
  const mainCaculation = () => {
    console.log("Fromfromnom : ", Fromfromnom);
    console.log("FromfromNOC : ", FromfromNOC);
    console.log("FromfromNOB : ", FromfromNOB);
    console.log("FromfromACV : ", FromfromACV);

    if (FromfromACV == "true") {
      console.log("true true");
      Totalprice = Fromfromnom * 6000 + FromfromNOC * 4000 + FromfromNOB * 2000;
      console.log("Totalprice : ", Totalprice);
      newtotalpricenew(Totalprice);
    } else {
      console.log("false false");
      Totalprice = Fromfromnom * 5000 + FromfromNOC * 3000 + FromfromNOB * 1000;
      console.log("Totalprice : ", Totalprice);
      newtotalpricenew(Totalprice);
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
                  Hotel Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={SingleHotel.Name}
                    disabled
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Total Members
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    defaultValue={TotalMembers}
                    onChange={(e) => NoOFMember(e.target.value)}
                    placeholder="TotalMembers"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  No Of Child
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={(e) => NoOFChild(e.target.value)}
                    placeholder="No Of Children"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  No Of Bed
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={(e) => NoOFBed(e.target.value)}
                    placeholder="No Of Beds"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  AC
                </Form.Label>
                <Col sm={4}>
                  <Form.Select
                    defaultValue={AC}
                    onChange={(e) => ACFun(e.target.value)}
                  >
                    <option value={"false"}>False</option>
                    <option value={"true"}>True</option>
                  </Form.Select>
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
                  Contactnumber
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={(e) => setContactnumber(e.target.value)}
                    placeholder="Contactnumber"
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
                    value={totalpricenew}
                    placeholder="Price"
                    disabled
                  />
                </Col>
              </Form.Group>
              <center>
                <div className="button">
                  <input
                    type="button"
                    onClick={HotelBooking}
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

export default HotelReserve;
