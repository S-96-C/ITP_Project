import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AgentRegisterForm() {
  let SingleAgent = JSON.parse(sessionStorage.getItem("SingleAgent"));
  // console.log("SingleAgent : ", SingleAgent);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Email, setEmail] = useState("");

  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [postImage, setPostImage] = useState({ myFile: "" });

  const BookAgent = () => {
    console.log("Agent First Name : ", SingleAgent.FirstName);
    console.log("Agent Last Name : ", SingleAgent.LastName);
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("ContactNumber : ", ContactNumber);
    console.log("Email : ", Email);

    if (
      FirstName == "" ||
      LastName == "" ||
      ContactNumber == "" ||
      Email == "" ||
      ContactNumber.length < 10
    ) {
      console.log("error01");
      alert("Please fill all required Fields");
    } else {
      axios
        .post(`http://localhost:3000/AgentBooking`, {
          AgentFirstName: SingleAgent.FirstName,
          AgentLastName: SingleAgent.LastName,
          FirstName: FirstName,
          LastName: LastName,
          ContactNumber: ContactNumber,
          EMail: Email,
        })
        .then((res) => {
          console.log(res.data);
          alert("Agent has been Successfully Booked..!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.data);
        });
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
                  Agent First Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={SingleAgent.FirstName}
                    disabled
                    placeholder="Event Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Agent Last Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={SingleAgent.LastName}
                    disabled
                    placeholder="Event Performancer Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Your First Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your First Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Your Last Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Your Last Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Your Conatct Number
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="Your Conatct Number"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Your Email
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your EMail"
                  />
                </Col>
              </Form.Group>
              <center>
                <div className="button">
                  <input
                    type="button"
                    onClick={BookAgent}
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

export default AgentRegisterForm;
