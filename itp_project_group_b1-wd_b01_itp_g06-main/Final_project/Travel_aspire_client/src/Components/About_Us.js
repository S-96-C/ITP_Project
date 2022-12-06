import React from "react";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function About_Us() {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center", fontSize: 50 }}>About Us....</div>
      <img
        src="./ani.png"
        style={{ width: 600, marginLeft: 450, marginTop: 40, marginBottom: 40 }}
      ></img>
      <div>
        <p style={{ fontSize: 20 }}>
          When using a website builder to create your website, the About Us page
          is one of the first supporting pages you’ll likely design, regardless
          of the industry you’re in. They may go by different labels—About,
          Story, Mission—but these types of pages generally serve the same key
          purpose: to be the page for a brand to say, “This is who we are.” When
          a visitor wants to learn more about you or your business, the About
          page is the page they’ll look for. Unfortunately, About Us pages are
          often treated as an obligation rather than an opportunity to build
          trust, tell your story, and share what makes you you
        </p>
      </div>
      <div style={{ textAlign: "center", fontSize: 50, paddingTop: 40 }}>
        Team
      </div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem", marginLeft: 50 }}>
              <Card.Img variant="top" src="./ani.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", marginLeft: 10 }}>
              <Card.Img variant="top" src="./ani.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", marginLeft: 10 }}>
              <Card.Img variant="top" src="./ani.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          textAlign: "center",
          fontSize: 50,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Projects
      </div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About_Us;
