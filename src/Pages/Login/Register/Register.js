import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigateLogin = () => {
    navigate('/login');
  }
  const handleShowPassword = () => {
    const pass = passwordRef.current;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  return (
    <div className='container w-25 mx-auto m-5' style={{ 'minWidth': '350px' }}>
      <h2 className="text-center">Please Register</h2>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Control ref={nameRef} type="text" placeholder="Your Name" id="name" required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" id="email" required />
        </Form.Group>
        <Form.Group className="password mb-3 d-flex align-items-center" >
          <Form.Control ref={passwordRef} type="password" placeholder="Password" id="password" required />
          <Form.Check label='Show' className='show-pass' type="checkbox" onClick={handleShowPassword} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className='w-100' variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {/* {errorElement} */}
      <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
    </div>
  );
};

export default Register;