import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const TraningForm = ({obj, onAdd, onEdit}) => {
    const [form, setForm] = useState(obj)

    const handleNameChange = e => {
        const {name, value, type} = e.target
        const value_format = type == "number" ? Number.parseInt(value) : value
        setForm(prevForm => ({...prevForm, [name]:value_format}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (form.id)
            onEdit(form)
        else
            onAdd(form)
        setForm({id: "",date: "",passed: 0,})
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="align-items-end">
                    <Col sm={2}>
                        <Form.Group controlId="formDate">
                            <Form.Label>Дата(ДД.ММ.ГГ)</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="date"
                                onChange={handleNameChange}
                                value={form.date}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Form.Group controlId="formPassed">
                            <Form.Label>Пройдено км</Form.Label>
                            <Form.Control 
                                type="number"
                                name="passed"
                                onChange={handleNameChange}
                                value={form.passed}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Button variant="outline-dark" type="submit">
                            OK
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}


export default TraningForm;


TraningForm.defaultProps = {
    obj: {
        id: "",
        date: "",
        passed: 0,
    },
};