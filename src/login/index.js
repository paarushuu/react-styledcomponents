import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider, keyframes,  css } from 'styled-components';
import { Form, Input, Button, Container, Col, FormGroup } from 'reactstrap';
import { userActions } from '../redux/actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { device } from "../utils/device";

const LoginContainer = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid mediumspringgreen;
  margin: 0 auto;
@media ${device.laptop} {
    max-width: 400px;
  }

  @media ${device.desktop} {
    max-width: 400px;
  }
`;
const Label  = styled.label`
text-align:left;
`  
function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });;
    
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
           <LoginContainer>
            
            <Form name="form" onSubmit={handleSubmit}>
            <h2>Login</h2>
                <FormGroup row>
                    <Label sm={2}>Username</Label>
                    <Col sm={10}>
                    <Input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                     </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                    </Col>
                </FormGroup>
                <div className="form-group">
                    <Button  className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </Button >
                </div>
            </Form>
        </LoginContainer>
           
       
    );
}

export { LoginPage };