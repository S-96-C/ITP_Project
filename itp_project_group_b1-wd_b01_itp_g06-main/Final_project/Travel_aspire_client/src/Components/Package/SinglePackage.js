import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";
import "./package.css";
import { IoFastFoodSharp, IoTelescope } from "react-icons/io5";
import { compose } from "@mui/system";

function SinglePackage() {
  let PackageDetails = JSON.parse(sessionStorage.getItem("PackageDetails"));
  console.log("PackageDetails", PackageDetails);

  const [MCFPon, setMCFPon] = useState(false);
  const [HLVP, setHLVP] = useState(false);
  const [PEODP, setPEODP] = useState(false);
  const [RCP, setRCP] = useState(false);
  const [PEBP, setPEBP] = useState(false);

  let totalPrice = parseInt(PackageDetails.price);
  const [newprice, setnewprice] = useState();

  const MasterChefFoodsPricefun = () => {
    setMCFPon(!MCFPon);
    console.log(MCFPon);
    if (MCFPon == false) {
      totalPrice = totalPrice + PackageDetails.MasterChefFoodsPrice;
    } else {
      totalPrice = totalPrice;
    }
    // console.log(totalPrice);
    setnewprice(totalPrice);
  };

  const HighLuxaryVechilePriceFun = () => {
    setHLVP(!HLVP);
    if (MCFPon == false) {
      totalPrice = totalPrice + PackageDetails.HighLuxaryVechilePrice;
    } else {
      totalPrice = totalPrice;
    }
    console.log(totalPrice);
    setnewprice(totalPrice);
  };

  const PerExtraOneDayPriceFun = () => {
    setPEODP(!PEODP);
    if (PEODP == false) {
      totalPrice = totalPrice + PackageDetails.PerExtraOneDayPrice;
    } else {
      totalPrice = totalPrice;
    }
    setnewprice(totalPrice);
  };

  const RentCameraPriceFun = () => {
    setRCP(!RCP);
    if (RCP == false) {
      totalPrice = totalPrice + PackageDetails.RentCameraPrice;
    } else {
      totalPrice = totalPrice;
    }
    setnewprice(totalPrice);
  };

  const PerExtraBedPriceFun = () => {
    setPEBP(!PEBP);
    if (PEBP == false) {
      totalPrice = totalPrice + PackageDetails.PerExtraBedPrice;
    } else {
      totalPrice = totalPrice;
    }
    setnewprice(totalPrice);
  };

  const bookpackage = (newprice) => {
    window.sessionStorage.setItem("packagePrice", newprice);
  };
  
  return (
    <div>
      <NavBar />
      <img src={PackageDetails.Image}width={"100%"} />
      <Container>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h1>{PackageDetails.name}</h1>
            <h3>{PackageDetails.includes}</h3>
            <h3>Rs {PackageDetails.price}/night</h3>
          </div>
          <div>
            <h1>Overview</h1>
            <p>
              Duration : 03 Nights / 05 Days
              <br /> description : {PackageDetails.description}
              <br />
              Language : English
            </p>
          </div>
        </div>
        <div>
          <h2>Add Extra features</h2><br></br>
          <h5>(Only Your can select only one extra features)</h5>
          <div className="row">
          <br></br>
            {MCFPon == true ? (
              <div
                onClick={() => MasterChefFoodsPricefun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                  backgroundColor: "#b2b2b2",
                }}
                className="crd"
              >
                <center>
                  <h3>Master chef foods</h3>
                  <h4>RS {PackageDetails.MasterChefFoodsPrice}</h4>
                </center>
              </div>
            ) : (
              <div
                onClick={() => MasterChefFoodsPricefun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                }}
                className="crd"
              >
                <center>
                  <h3>Master chef foods</h3>
                  <h4>RS {PackageDetails.MasterChefFoodsPrice}</h4>
                </center>
              </div>
            )}
            {HLVP ? (
              <div
                onClick={() => HighLuxaryVechilePriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                  backgroundColor: "#b2b2b2",
                }}
                className="crd"
              >
                <center>
                  <h4>High Luxary Vechile Price</h4>
                  <h4>Rs {PackageDetails.HighLuxaryVechilePrice}</h4>
                </center>
              </div>
            ) : (
              <div
                onClick={() => HighLuxaryVechilePriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                }}
                className="crd"
              >
                <center>
                  <h4>High Luxary Vechile Price</h4>
                  <h4>Rs {PackageDetails.HighLuxaryVechilePrice}</h4>
                </center>
              </div>
            )}
            {PEODP == true ? (
              <div
                onClick={() => PerExtraOneDayPriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                  backgroundColor: "#b2b2b2",
                }}
                className="crd"
              >
                <center>
                  <h4>Per Extra One Day Price</h4>
                  <h4>Rs {PackageDetails.PerExtraOneDayPrice}</h4>
                </center>
              </div>
            ) : (
              <div
                onClick={() => PerExtraOneDayPriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                }}
                className="crd"
              >
                <center>
                  <h4>Per Extra One Day Price</h4>
                  <h4>Rs {PackageDetails.PerExtraOneDayPrice}</h4>
                </center>
              </div>
            )}
            {RCP == true ? (
              <div
                onClick={() => RentCameraPriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                  backgroundColor: "#b2b2b2",
                }}
                className="crd"
              >
                <center>
                  <h4>Per Extra Bed Price</h4>
                  <h4>Rs {PackageDetails.PerExtraBedPrice}</h4>
                </center>
              </div>
            ) : (
              <div
                onClick={() => RentCameraPriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                }}
                className="crd"
              >
                <center>
                  <h4>Per Extra Bed Price</h4>
                  <h4>Rs {PackageDetails.PerExtraBedPrice}</h4>
                </center>
              </div>
            )}
            {PEBP == true ? (
              <div
                onClick={() => PerExtraBedPriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                  backgroundColor: "#b2b2b2",
                }}
                className="crd"
              >
                <center>
                  <h4>Rent Camera Price</h4>
                  <h4>Rs {PackageDetails.RentCameraPrice}</h4>
                </center>
              </div>
            ) : (
              <div
                onClick={() => PerExtraBedPriceFun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                }}
                className="crd"
              >
                <center>
                  <h4>Rent Camera Price</h4>
                  <h4>Rs {PackageDetails.RentCameraPrice}</h4>
                </center>
              </div>
            )}
          </div>
        </div>
        {}
        <div>
          <h2 style={{ paddingTop: "30px", fontSize: "35px" }}>
            Total Bill - Rs {newprice}
          </h2>
        </div>
        <center style={{ margin: 20 }}>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="contained">
            <a
              href="/PackageBook"
              onClick={() => bookpackage(newprice)}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Reserve !
            </a>
          </Button>
        </center>
      </Container>
      <Footer />
    </div>
  );
}

export default SinglePackage;