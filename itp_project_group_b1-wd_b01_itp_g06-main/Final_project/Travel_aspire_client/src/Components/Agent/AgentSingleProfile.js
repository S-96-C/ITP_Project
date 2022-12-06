import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Button from "@mui/material/Button";

function AgentSingleProfile() {
  let SingleAgent = JSON.parse(sessionStorage.getItem("SingleAgent"));
  // console.log("SingleAgent :", SingleAgent);

  // Agent Profile 
  return (
    <div>
      <NavBar />

      <Container>
        <div className="row">
          <div>
            <img
              className="image02"
              src={SingleAgent.ProfileImage}
              alt="profileImage"
            />
          </div>
          <div>
            <p>
              {" "}
              <h3>
                {SingleAgent.FirstName} {SingleAgent.LastName}
              </h3>{" "}
              <br />
              Email - {SingleAgent.Email} <br />
              ContactNumber - {SingleAgent.ContactNumber}
              <br />
              Language - {SingleAgent.Language}
              <br />
              Descriptions - {SingleAgent.Description}
            </p>
          </div>
        </div>

        <center style={{ margin: 20 }}>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="contained">
            <a
              href="/AgentRegisterForm"
              // onClick={() => AgentBook(SingleAgent)}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Booking
            </a>
          </Button>
        </center>
      </Container>

      <Footer />
    </div>
  );
}

export default AgentSingleProfile;
