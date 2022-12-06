import React from "react";
import "./Footer";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import background from "./footerimg.png";

function Footer() {
  return (
    <div>
      <div className="row" style={{ backgroundImage: `url(${background})` }}>
        <div className="column">
          <div className="col-sm-4 col-md-3 item">
            <img
              src="./Assets/Images/logo.png"
              alt="footer logo"
              style={{ marginLeft: 50 }}
              width="100px"
            />
          </div>
        </div>

        <div className="column">
          <div className="col-sm-4 col-md-8 item">
            <div style={{ fontSize: 10 }}>
              <h2>Quick Links </h2>
            </div>
            <ul>
              {/* <li> */}
              <a href="#" style={{ textDecoration: "none" }}>
                Terms & Conditions
              </a>
              <br />
              {/* </li> */}
              <a href="#" style={{ textDecoration: "none" }}>
                Contact Us
              </a>
              <br />
              <a href="#" style={{ textDecoration: "none" }}>
                About Us
              </a>
              <br />
              <a href="#" style={{ textDecoration: "none" }}>
                Map
              </a>
              <br />
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="col-sm-4 col-md-8 item">
            <h3>Travel Aspire (PVT) LTD</h3>
            <p>
              46/26, Navam Mavam Mawatha, <br />
              Colombo 02,
              <br />
              Sri Lanka
            </p>
          </div>
        </div>

        <div className="column">
          <div className="col-lg-8   item social">
            <p>Telephone : +94 11 234 5700</p>
            <p>RESERVATIONS : +94 11 470 9400</p>
            <p>WHATSAPP : +94 11 470 9400</p>
            <p>FAX : +94 11 234 5729</p>
            <p>EMAIL : reservations@travelaspire.com</p>
          </div>
        </div>
      </div>
      <center>
        <p>
          <TiSocialFacebook size={30} /> <TiSocialTwitter size={30} />{" "}
          <TiSocialInstagramCircular size={30} />{" "}
        </p>
        <p>Copyright @ Travel Aspire Alrights Reservered</p>
      </center>
    </div>
  );
}

export default Footer;
