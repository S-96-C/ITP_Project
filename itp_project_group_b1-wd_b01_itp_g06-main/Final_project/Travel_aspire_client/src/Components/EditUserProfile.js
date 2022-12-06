import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

function EditUserProfile() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Country, setCountry] = useState("");

  const navigate = useNavigate();

  let UserID = sessionStorage.getItem("userID");

  const [UserDetails, setUserDetails] = useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/UserDetails/${UserID}`)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  const handleSubmit = () => {
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("UserName : ", UserName);
    console.log("Email : ", Email);
    console.log("ContactNumber : ", ContactNumber);
    console.log("Address : ", Address);
    console.log("Country : ", Country);

    axios
      .patch(`http://localhost:3000/UserDetails/${UserID}`, {
        FirstName: FirstName ? FirstName : UserDetails.FirstName,
        LastName: LastName ? LastName : UserDetails.LastName,
        UserName: UserName ? UserName : UserDetails.UserName,
        Email: Email ? Email : UserDetails.Email,
        ContactNumber: ContactNumber
          ? ContactNumber
          : UserDetails.ContactNumber,
        Address: Address ? Address : UserDetails.Address,
        Country: Country ? Country : UserDetails.Country,
      })
      .then((res) => {
        alert("Thanks for filling out our form!");
        //   window.location.reload(true);
        //   console.log(res.data._id);
        //   window.sessionStorage.setItem("userID", res.data._id);
        navigate("/UserProfile");
      })
      .catch((error) => {
        console.log("Something error, Please try again later.");
      });
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
                defaultValue={UserDetails.FirstName}
                placeholder={"Enter the FirstName"}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                defaultValue={UserDetails.LastName}
                placeholder={"Enter the LastName"}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                defaultValue={UserDetails.UserName}
                placeholder={"Enter the UserName"}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={UserDetails.Email}
                placeholder={"Enter the Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ContactNumber</Form.Label>
              <Form.Control
                type="number"
                defaultValue={UserDetails.ContactNumber}
                placeholder={"Enter the ContactNumber"}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                defaultValue={UserDetails.Address}
                placeholder={"Enter the Address"}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                defaultValue={UserDetails.Country}
                placeholder={"Enter the Country"}
                onChange={(e) => setCountry(e.target.value)}
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

export default EditUserProfile;
