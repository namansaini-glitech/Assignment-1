import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Sdata from './Sdata';
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from './img/4.png'
import { Navbar, Card, Container, Nav, Carousel, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">OhLocal</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Product</Nav.Link>
                <Nav.Link href="#action2">Price</Nav.Link>
                <Nav.Link href="#action2">Live Bids</Nav.Link>
                <Nav.Link href="#action2">Help and Support</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="tittle">
        <h1 style={{ fontSize: "80px", fontWeight: "bold" }} >All Bids from Merchants</h1>
        <h3>some subheading for the offers of Merchants</h3>
      </div>
      <br />
      <br />
      <div style={{ marginLeft: "500px" }} className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Watchs</h3>
              <p>Buy Watches</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <Card style={{ width: '25rem' , height : '30rem'}}>
  <Card.Img variant="top" src={img4} />
  <Card.Body>
    <Card.Title>Watchmart Street-4 shop</Card.Title>
    <Card.Text>
      Bajaj Platini PX97 Torque 36-Litres Personal Air Cooler(White)-for Medium Room.
    </Card.Text>
    <Button variant="primary">Buy Now</Button>
  </Card.Body>
</Card>
    </>
  );
}

export default App;
