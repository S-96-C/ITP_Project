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

function FoodBook() {
  let FoodDetail = JSON.parse(sessionStorage.getItem("FoodDetail"));
  console.log(FoodDetail);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [EMail, setEMail] = useState("");

  const FoodBooking = () => {
    console.log("FoodName : ", FoodDetail.Name);
    console.log("Quantity : ", newqty);
    console.log("Price : ", newPrice);
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("ContactNumber : ", ContactNumber);
    console.log("EMail : ", EMail);

    if (
      FirstName == "" ||
      LastName == "" ||
      ContactNumber == "" ||
      EMail == "" ||
      ContactNumber.length != 10
    ) {
      console.log("error01");
      alert("Please fill all required Fields");
    } else {
      axios
        .post(`http://localhost:3000/FoodsBooking`, {
          FoodName: FoodDetail.Name,
          Quantity: newqty,
          Price: newPrice,
          FirstName: FirstName,
          LastName: LastName,
          ContactNumber: ContactNumber,
          EMail: EMail,
        })
        .then((res) => {
          console.log(res.data);
          alert("Order Successfully...!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let newprice = 0;
  const [newPrice, setnewPrice] = useState();
  const [newqty, setqty] = useState();
  const priceCal = (qty) => {
    setqty(qty);
    newprice = qty * FoodDetail.Price;
    console.log(newprice);
    setnewPrice(newprice);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <center style={{ padding: 50 }}>
          <h2>Order Details</h2>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Food Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  defaultValue={FoodDetail.Name}
                  disabled
                  placeholder="FoodName"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={2} />
              <Form.Label column sm={3}>
                Quantity
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  onChange={(e) => priceCal(e.target.value)}
                  placeholder="Quantity"
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
                  type="text"
                  defaultValue={newPrice}
                  disabled
                  placeholder="Price"
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
                ContactNumber
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="ContactNumber"
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
                  onChange={(e) => setEMail(e.target.value)}
                  placeholder="Email"
                />
              </Col>
            </Form.Group>
            <center>
              <div className="button">
                <input
                  type="button"
                  onClick={FoodBooking}
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

export default FoodBook;
