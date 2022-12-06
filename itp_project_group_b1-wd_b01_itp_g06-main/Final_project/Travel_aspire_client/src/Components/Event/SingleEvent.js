import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import "./event.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let ID = null;

function SingleEvent() {
  useEffect(() => {
    ID = sessionStorage.getItem("eventId");
    console.log("eventId : ", ID);
    ID ? getSingleEventDate() : alert("Something error, Please try again..!");
  });

  const [eventdetails, setEventDetails] = useState([]);
  const getSingleEventDate = () => {
    axios
      .get(`http://localhost:3000/EventManagement/${ID}`)
      .then((response) => {
        console.log(response.data);
        setEventDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useNavigate();
  const EventBook = (eventdetails) => {
    console.log("eventdetails", eventdetails);
    window.sessionStorage.setItem("eventdetails", JSON.stringify(eventdetails));
    history.push("/EventRegisterForm");
  };

  return (
    <div>
      <NavBar />

      <div>
        <div>
          <div className="containerr">
            <div>
              <img
                component="img"
                src={eventdetails.ConverPhoto}
                alt="green iguana"
                width={"3000px"}
                height={"500px"}
              />

              <div className="text-block">
                <div className="text1">{eventdetails.EventName}</div>
                <div className="text1">{eventdetails.PerformanceName}</div>
              </div>
            </div>
          </div>
          <center>
            <div
              style={{
                border: "1px solid #000",
                borderRadius: 10,
                marginTop: "40px",
                // filter: "blur(8px)",
                width: "400px",
              }}
            >
              <img
                component="img"
                src={eventdetails.Imge}
                alt="green iguana"
                width={"400px"}
                height={"300px"}
                style={{ borderRadius: 10 }}
              />
              <h2>{eventdetails.PerformanceName}</h2>
              <h4>Location - {eventdetails.Destination}</h4>
              <h4>Date - {eventdetails.StartingTime}</h4>
            </div>
          </center>
          <div>
            <Container>
              <h3 style={{ font: "20px" }}>Overview</h3>
              <p>
                Duration : {eventdetails.Description} <br />
                Price : {eventdetails.EventBookingPrice}
              </p>
            </Container>
          </div>
          <center style={{ margin: 20 }}>
            <Button variant="outlined" style={{ marginRight: 10 }}>
              Cancel
            </Button>
            <Button variant="contained">
              <a
                href="/EventRegisterForm"
                onClick={() => EventBook(eventdetails)}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Register
              </a>
            </Button>
          </center>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SingleEvent;
