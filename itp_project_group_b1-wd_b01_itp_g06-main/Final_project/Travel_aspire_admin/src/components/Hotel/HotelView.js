
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const use_style = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function HotelView() {
  const classes = use_style();

  const [hostel, setHostel] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:3000/HotelManagement").then((response) => {
      setHostel(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [hostel]);

  function deleteHotel(_id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your data has been successfully Deleted!", {
          icon: "success",
        });
        fetch(`http://localhost:3000/HotelManagement/${_id}`, {
          method: "DELETE",
        })
          .then((response) => {
            response.json();
            swal(
              "Good job!",
              "Your data has been successfully Deleted",
              "success"
            );
          })
          .catch((error) => {
            swal("Sorry!", "Something Error...", "error");
          });
      }
    });
  }

  const history = useHistory();
  function editHotel(_id) {
    console.log("Travel Aspire" + _id);
    window.sessionStorage.setItem("HotelID", _id);
    history.push("/HotelUpdate");
  }

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            {/* <div className="logo-src" /> */}
            {/* <img src={logo} style={{ width: 110 }} /> */}
            <div>
              <h3>Travel Aspire</h3>
            </div>
            {/* <div style={{ fontFamily: "lyncer", fontSize: "10" }}>SLIIT</div> */}
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>
          <div className="app-header__content">
            <div className="app-header-left">
              <div className="search-wrapper">
                <div className="input-holder">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <button className="search-icon">
                    <span />
                  </button>
                </div>
                <button className="close" />
              </div>
            </div>
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                      <div className="btn-group">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="p-0 btn"
                        >
                          <i className="fa fa-angle-down ml-2 opacity-8" />
                        </a>
                        <div
                          tabIndex={-1}
                          role="menu"
                          aria-hidden="true"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            User Account
                          </button>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Settings
                          </button>
                          <h6 tabIndex={-1} className="dropdown-header">
                            Header
                          </h6>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Actions
                          </button>
                          <div tabIndex={-1} className="dropdown-divider" />
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Dividers
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">SLIIT </div>
                      <div className="widget-subheading">
                        Full-Stack Developer
                      </div>
                    </div>
                    <div className="widget-content-right header-user-info ml-3">
                      <button
                        type="button"
                        className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                      >
                        <i className="fa text-white fa-calendar pr-1 pl-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">Dashboards</li>
                  <li>
                    <a href="/" className="mm-active">
                      <i className="metismenu-icon pe-7s-rocket" />
                      Dashboard
                    </a>
                  </li>
                  <li className="app-sidebar__heading">Components</li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      HOTEL
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/HotelAdd">
                          <i className="metismenu-icon" />
                          HOTEL | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/HotelView">
                          <i className="metismenu-icon"></i> HOTEL | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/HotelUpdate">
                          <i className="metismenu-icon"></i> HOTEL | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/HotelReport">
                          <i className="metismenu-icon"></i> HOTEL | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      VEHICLE
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/VehicleAdd">
                          <i className="metismenu-icon" />
                          VEHICLE | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/VehicleView">
                          <i className="metismenu-icon"></i> VEHICLE | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/VehicleUpdate">
                          <i className="metismenu-icon"></i> VEHICLE | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/VehicleReport">
                          <i className="metismenu-icon"></i> VEHICLE | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      FOOD
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/FoodAdd">
                          <i className="metismenu-icon" />
                          FOOD | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/FoodView">
                          <i className="metismenu-icon"></i> FOOD | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/FoodUpdate">
                          <i className="metismenu-icon"></i> FOOD | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/FoodReport">
                          <i className="metismenu-icon"></i> FOOD | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      PACKAGE
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/PackageAdd">
                          <i className="metismenu-icon" />
                          PACKAGE | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/PackageView">
                          <i className="metismenu-icon"></i> PACKAGE | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/PackageUpdate">
                          <i className="metismenu-icon"></i> PACKAGE | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/PackageReport">
                          <i className="metismenu-icon"></i> PACKAGE | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      EVENT
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/EventAdd">
                          <i className="metismenu-icon" />
                          EVENT | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/EventView">
                          <i className="metismenu-icon"></i> EVENT | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/EventUpdate">
                          <i className="metismenu-icon"></i> EVENT | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/EventReport">
                          <i className="metismenu-icon"></i> EVENT | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      AGENT
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/AgentAdd">
                          <i className="metismenu-icon" />
                          AGENT | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/AgentView">
                          <i className="metismenu-icon"></i> AGENT | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/AgentUpdate">
                          <i className="metismenu-icon"></i> AGENT | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/AgentReport">
                          <i className="metismenu-icon"></i> AGENT | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      FLIGHT
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/FlightAdd">
                          <i className="metismenu-icon" />
                          FLIGHT | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/FlightView">
                          <i className="metismenu-icon"></i> FLIGHT | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/FlightUpdate">
                          <i className="metismenu-icon"></i> FLIGHT | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/FlightReport">
                          <i className="metismenu-icon"></i> FLIGHT | REPORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      MANAGER
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/ManagerAdd">
                          <i className="metismenu-icon" />
                          MANAGER | ADD
                        </a>
                      </li>
                      <li>
                        <a href="/ManagerView">
                          <i className="metismenu-icon"></i> MANAGER | VIEW
                        </a>
                      </li>
                      <li>
                        <a href="/ManagerUpdate">
                          <i className="metismenu-icon"></i> MANAGER | UPDATE
                        </a>
                      </li>
                      <li>
                        <a href="/ManagerReport">
                          <i className="metismenu-icon"></i> MANAGER | REPORT
                        </a>
                      </li>
                      <li>
                        <a href="/EventBookings">
                          <i className="metismenu-icon"></i> EVENT | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/FlightBookings">
                          <i className="metismenu-icon"></i> FLIGHT | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/HotelBookings">
                          <i className="metismenu-icon"></i> HOTEL | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/VehicleBookings">
                          <i className="metismenu-icon"></i> VEHICLE | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/FoodBookings">
                          <i className="metismenu-icon"></i> FOOD | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/PackageBookings">
                          <i className="metismenu-icon"></i> PACKAGE | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/AgentBookings">
                          <i className="metismenu-icon"></i> AGENT | BOOKINGS
                        </a>
                      </li>
                      <li>
                        <a href="/Contactus">
                          <i className="metismenu-icon"></i> Contact_Us
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                    </div>
                    <div>
                     <h3>View All Hotel Details.</h3> 
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Form Here */}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>{""}</TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        MobileNumber
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Address
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Street
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        State
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Province
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Country
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Price
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {hostel
                    .filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.Name.toLocaleLowerCase().includes(
                          searchTerm.toLocaleLowerCase()
                        )
                      ) {
                        return val;
                      }
                    })
                    .map((item) => (
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
                              style={{ borderRadius: 100 }}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item.Name}
                          </TableCell>
                          <TableCell align="right">
                            {item.MobileNumber}
                          </TableCell>
                          <TableCell align="right">{item.Address}</TableCell>
                          <TableCell align="right">{item.Street}</TableCell>
                          <TableCell align="right">{item.State}</TableCell>
                          <TableCell align="right">{item.Province}</TableCell>
                          <TableCell align="right">{item.Country}</TableCell>
                          <TableCell align="right">{item.Price}</TableCell>
                          <TableCell align="right">
                            <div>
                              <div style={{ display: "inline-block" }}>
                                <Button
                                  // variant="outlined"
                                  onClick={() => editHotel(item._id)}
                                  color="primary"
                                >
                                  <EditIcon />
                                </Button>
                              </div>
                              <div style={{ display: "inline-block" }}>
                                <Button
                                  // variant="outlined"
                                  onClick={() => deleteHotel(item._id)}
                                  color="secondary"
                                >
                                  <DeleteIcon />
                                </Button>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
              </TableContainer>
            </div>
            <div className="app-wrapper-footer">
              <div className="app-footer">
                <div className="app-footer__inner">
                  <div className="app-footer-left">
                    {}
                  </div>
                  <div className="app-footer-right">
                    <ul className="nav">
                      <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                          Copyright Travel Aspire. All rights reserved
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelView;

