import React from 'react'
import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const UpdateForm = () => {

    

    const [validated, setValidated] = useState(false);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/api/findOne/fuheuihgssj.com")
            .then((res) => {
                console.log(res.data);
                const setD=res.data;
                setName(setD.name);
                setEmail(setD.email);
                setPassword(setD.password);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const setData={
            name:name,
            password:password
        }

        axios.put("http://localhost:8000/api/update/fuheuihgssj.com",setData)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        setValidated(true);
    };
    return (
        <div>
            <Container >
                <Row >
                    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{}}>                                          
                    
                        <Row className="mb-3 " style={{ marginTop: '10rem', backgroundColor: '#F0F8FF' }}>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    className="input-field"
                                    required
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formPlaintextPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className="input-field"
                                    required
                                    type="text"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control                                   
                                        className="input-field"
                                        type="text"
                                        // placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" style={{ alignItems: "center", display: "flex", justifyContent: "center", backgroundColor: '#F0F8FF' }}>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"


                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default UpdateForm