import React from "react";
import { Container, Button, TextField } from "@mui/material";
import { Col, Row } from 'antd';
import "./contact-form.css";
import mapimg from "../image/Googlemap-img.jpg";

export default function ContactForm() {
  return (
    <Container>
      <Row>
        <Col span={12}>
          <h1>Contact us!</h1>
          <p>
            Please fill all the required information, and we will get back to you as
            soon as possible!
          </p>
          <form className="contact-form">
            <TextField
              id="first-name"
              label="First name"
              variant="standard"
              fullWidth
              margin="dense"
            />
            <TextField
              id="last-name"
              label="Last name"
              variant="standard"
              fullWidth
              margin="dense"
            />
            <TextField
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              margin="dense"
            />
            <TextField
              id="phone-number"
              label="Phone number"
              variant="standard"
              fullWidth
              margin="dense"
            />
            <TextField
              id="message"
              label="Leave a message"
              variant="standard"
              fullWidth
              margin="dense"
            />
            <Button className="contact-form-btn" margin="dense" variant="contained">
              Send
            </Button>
          </form>
        </Col>
        <Col span={12}>
          <img className="imag" src={mapimg}></img>
        </Col>
      </Row>
    </Container>
  );
}
