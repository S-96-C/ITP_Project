import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Agent() {
  const [agentDetails, setagentDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/AgentManagement`)
      .then((res) => {
        // console.log(res.data);
        setagentDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const singleAgent = (item) => {
    window.sessionStorage.setItem("SingleAgent", JSON.stringify(item));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <center>
          <img
            src="./Assets/Images/agent.png"
            alt="image"
            width={"600px"}
            style={{ marginTop: 50, marginBottom: 50 }}
          />
          <p>
            Trip SL Pvt. Ltd is a subsidiary of Problem Solver, one of the
            biggest hotel chains in Srilanka. The Problem Solver founded in 2020
            has two years provided impeccable service and outstanding
            hospitality. Trip SL Pvt. Ltd built on this strong foundation aims
            to provide great customer satisfaction and an exemplary holiday
            experience. Planning a once in a lifetime holiday or a yearly
            corporate retreat? No problem! Trip SL can get you what you want and
            in the minimal time. One of the best destination management
            companies in Sri Lanka , it has the experience and infrastructure to
            handle any customer demand. In addition to destination management,
            Trip SL also plans Event , Package , Flight Booking , Agent Booking,
            Vehicle Rental , Hotel Reservation and much, much more
          </p>
        </center>
        <div>
          <h1>Our Guides</h1>
          <div class="row">
            {agentDetails
              ? agentDetails.map((item) => (
                  <div className="card_Agent">
                    <div className="card-img">
                      <div className="card-img-background">
                        <img className="image" src={item.ProfileImage} />
                      </div>
                      <div className="profile">
                        <p className="name" />
                        <a
                          href="/AgentSingleProfile"
                          onClick={() => singleAgent(item)}
                          style={{ color: "#000", textDecoration: "none" }}
                        >
                          <h3>
                            {item.FirstName} {item.LastName}
                          </h3>
                        </a>
                        <p />
                      </div>
                      <div className="summary">
                        <p>
                          Email - {item.Email} <br />
                          {/* ContactNumber - {item.ContactNumber} <br /> */}
                          Language - {item.Language} <br />
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Agent;
