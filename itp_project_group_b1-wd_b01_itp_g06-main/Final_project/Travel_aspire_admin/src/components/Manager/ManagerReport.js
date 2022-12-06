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
import { useHistory } from "react-router-dom";

export default function ManagerReport() {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:3000/ManagerManagement").then((response) => {
      setFoods(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [foods]);

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
                Manager Management Report
              </span>
            </div>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{""}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>FirstName</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  LastName
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  MobileNumber
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Qualifications
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Language
                </TableCell>
              </TableRow>
            </TableHead>
            {foods.map((item) => (
              <TableBody>
                <TableRow
                  key="Name"
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={item.ProfileImage}
                      alt="image"
                      width={"40px"}
                      style={{ borderRadius: 1000 }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.FirstName}
                  </TableCell>
                  <TableCell align="right">{item.LastName}</TableCell>
                  <TableCell align="right">{item.Email}</TableCell>
                  <TableCell align="right">{item.MobileNumber}</TableCell>
                  <TableCell align="right">{item.Qualifications}</TableCell>
                  <TableCell align="right">{item.Language}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </PDFExport>
    </Paper>
  );
}
