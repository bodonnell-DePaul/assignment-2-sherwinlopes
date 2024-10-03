import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Form.css';

function TodoForm() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Todo Item</Form.Label>
                <Form.Control type="text" placeholder="Add todo item" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yyyy" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default TodoForm;