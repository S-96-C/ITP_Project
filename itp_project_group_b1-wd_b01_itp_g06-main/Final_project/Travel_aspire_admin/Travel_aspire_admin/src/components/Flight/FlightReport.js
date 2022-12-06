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
// export function
export default function FlightReport() {
  const [cleaning, setCleaning] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:3000/FlightManagement").then((response) => {
      setCleaning(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [cleaning]);

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
        style={{ padding: "5px 700px 5px 700px" }}
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
                Flight Management Report
              </span>
            </div>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  Airline Name
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Departing Airport
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Destination Airport
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Departure Time
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Arrival Time
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Duration
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Total Seats
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Seat Price
                </TableCell>
              </TableRow>
            </TableHead>
            {cleaning.map((item) => (
              <TableBody>
                <TableRow
                  key="Name"
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {item.AirlineName}
                  </TableCell>
                  <TableCell align="right">{item.DepartingAirport}</TableCell>
                  <TableCell align="right">{item.DestinationAirport}</TableCell>
                  <TableCell align="right">{item.DepartureTime}</TableCell>
                  <TableCell align="right">{item.ArrivalTime}</TableCell>
                  <TableCell align="right">{item.Duration}</TableCell>
                  <TableCell align="right">{item.TotalSeats}</TableCell>
                  <TableCell align="right">{item.SeatPrice}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </PDFExport>
    </Paper>
  );
}
