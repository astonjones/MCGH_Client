import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'

function LoginPage(props) {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    // const [data, setData] = useState(null);

    const login = () => {
        axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:5000/auth/login",
        }).then((res) => console.log(res))
        props.getUser();
    }
    return (
    <>
    <div className="loginForm">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" onChange={(e) => setLoginUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={login}>
                Submit
            </Button>
        </Form>
    </div>
    </>
    )
  }
  
  export default LoginPage