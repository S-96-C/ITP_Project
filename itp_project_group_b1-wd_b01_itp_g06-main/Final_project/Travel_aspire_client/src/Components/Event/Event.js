import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Event() {
  const [event, setEvent] = useState("");

  axios
    .get("http://localhost:3000/EventManagement")
    .then((response) => {
      setEvent(response.data);
      console.log("inserted", response.data);
    })
    .catch((error) => {
      console.log("error message", error.data);
    });

  const history = useNavigate();
  function viewEvent(_id) {
    window.sessionStorage.setItem("eventId", _id);
    history.push("/SingleEvent");
  }

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <img
            src="./Assets/Images/EventBackground.png"
            alt="Image"
            width={"100%"}
            height={"500px"}
          />
        </div>
        <Container>
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <div class="row">
              {event
                ? event.map((item) => (
                    <div class="column">
                      <div class="card">
                        <a
                          href="/SingleEvent"
                          onClick={() => viewEvent(item._id)}
                        >
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={item.Imge}
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                style={{ textDecoration: "none" }}
                              >
                                {item.EventName}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <div style={{ textDecoration: "none" }}>
                                  <LocationOnIcon />
                                  {item.Destination}
                                </div>
                                <div>
                                  <AttachMoneyIcon />
                                  {item.EventBookingPrice}
                                </div>
                                <div>
                                  <EventIcon />
                                  {item.StartingTime}
                                </div>
                              </Typography>
                            </CardContent>
                          </Card>
                        </a>
                      </div>
                    </div>
                  ))
                : "Loading..."}

              {/* <div class="column">
                <div class="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./Assets/Images/Event01.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div> */}

              {/* <div class="column">
                <div class="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./Assets/Images/Event01.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div> */}

              {/* <div class="column">
                <div class="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./Assets/Images/Event01.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div> */}
              {/* <div class="column">
                <div class="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./Assets/Images/Event01.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Event;