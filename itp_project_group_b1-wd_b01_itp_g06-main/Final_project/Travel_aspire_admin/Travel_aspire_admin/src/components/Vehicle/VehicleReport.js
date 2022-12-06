import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
// import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import { padding } from "@mui/system";
import Button from "@mui/material/Button";

export default function VehicleReport() {
  const [vehicle, setVehicle] = useState([]);
  const getRequest = () => {
    axios.get("http://localhost:3000/VehicleManagement").then((response) => {
      console.log(response.data);
      setVehicle(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [vehicle]);

  const PDFExportComponent = useRef(null);
  const pdfonclick = (e) => {
    PDFExportComponent.current.save();
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* <Button primary={true} onClick={pdfonclick}>Browse</Button> */}
      <Button
        variant="outlined"
        onClick={pdfonclick}
        style={{ padding: "5px 500px 5px 500px" }}
      >
        Export
      </Button>
      <PDFExport ref={PDFExportComponent}>
        <div>
          <div
            className="row"
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div className="column" style={{ float: "left", width: "50%" }}>
              <img src="/img/LOGONEW.png" width="40%" />
            </div>
            <div
              className="column"
              style={{ float: "left", width: "50%", textAlign: "right" }}
            >
              <span>info@SLIIT.com</span>
              <br />
              <span style={{ color: "#4ad7d1" }}>WWW.SLIIT.com</span>
              <br />
              <span>011 1111 543</span>
            </div>
          </div>
          <div style={{ textAlign: "center", background: "#b6b7b8" }}>
            <div style={{ paddingBottom: "100px" }}>
              <span style={{ fontSize: "70px" }}>
                <span style={{ fontWeight: "bold", color: "#03807b" }}>
                  Annual Report
                </span>
                <br />
                Vehicle Management Report
              </span>
            </div>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{""}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Model
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Car Number
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Colour
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Driver
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Seat
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  ChildSeat
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Gps
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            {vehicle.map((item) => (
              <TableBody>
                <TableRow
                  key="Name"
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={item.Image}
                      alt="image"
                      width={"40px"}
                      style={{ borderRadius: 1000 }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.category}
                  </TableCell>
                  <TableCell align="right">{item.Model}</TableCell>
                  <TableCell align="right">{item.CarNumber}</TableCell>
                  <TableCell align="right">{item.colour}</TableCell>
                  <TableCell align="right">{item.Driver}</TableCell>
                  <TableCell align="right">{item.Seat}</TableCell>
                  <TableCell align="right">{item.ChildSeat}</TableCell>
                  <TableCell align="right">{item.Gps}</TableCell>
                  <TableCell align="right">{item.Price}</TableCell>
                  <TableCell align="right">{item.Description}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </PDFExport>
    </Paper>
  );
}
