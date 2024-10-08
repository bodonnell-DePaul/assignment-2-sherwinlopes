//Sherwin Sylvester Lopes
//ID: 2172717
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from './Form';
import ListTab from './ListTab';

import './TodoList.css';


function TodoList() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Assignment 2: Sherwin's ToDo List</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form />
                    </Col>
                    <Col md={8}>
                        <ListTab />
                    </Col>
                </Row>
            </Container>
        </div>
    );
    }

export default TodoList;