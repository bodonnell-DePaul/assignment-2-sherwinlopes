import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import todos from './todoItems';



import './ListTab.css';


function getColorVariant(dueDate) {
    const currentDate = new Date();
    const due = new Date(dueDate);
    const timeDiff = (due - currentDate) / (1000 * 60 * 60 * 24); // milliseconds to days

    if (timeDiff > 7) {
        return 'primary'; // More than 7 days
    } else if (timeDiff <= 7 && timeDiff >= 4) {
        return 'success'; // 4 to 7 days
    } else if (timeDiff < 4 && timeDiff >= 2) {
        return 'warning'; // 2 to 4 days
    } else {
        return 'danger'; // Less than 2 days
    }
}

function ListTab() {
    return (

        <Tab.Container defaultActiveKey={todos[0].title}>
            <ListGroup>
                {todos.map((todos, index) => (
                    <ListGroup.Item
                        key={index}
                        eventKey={todos.title}
                        variant={getColorVariant(todos.dueDate)}>
                        {todos.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Tab.Content>
                {todos.map((todos, index) => (
                    <Tab.Pane
                        key={index}
                        eventKey={todos.title}>
                        <p contentEditable="true">{todos.description}</p>
                        <input
                            type="date"
                            defaultValue={todos.dueDate}
                            onChange={(e) => { }} />
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>

    );
}

export default ListTab;