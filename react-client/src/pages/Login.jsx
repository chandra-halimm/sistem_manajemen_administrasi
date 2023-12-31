import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleemail = (inputemail) => {
    setemail(inputemail);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    const requestingData = {
      email: email,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3300/login",
      data: requestingData,
    })
      .then(() => {
        localStorage.setItem("email");
        window.location.replace("/dashboard");
      })
      .catch(() => {
        // alert("email atau password salah");
        window.location.replace("/dashboard");
      });
  };
  console.log(handleemail);

  return (
    <Container>
      <div className="row mt-5 d-flex align-self-center align-items-center justify-content-center">
        <div className="col-7">
          <h1 className="fw-bold text-center mb-5">Let's get started</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(event) => {
                  handleemail(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(event) => {
                  const inputPassword = event.target.value;
                  handlePassword(inputPassword);
                  console.log(inputPassword);
                }}
              />
            </Form.Group>

            <Button
              className="mt-3 w-100"
              variant="warning text-white py-2"
              type="submit"
              onClick={() => userLogin()}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
