import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import todosData from './todoItems';
import './ListTab.css';

function getColorVariant(dueDate) {
    const date = new Date();
    const due_date = new Date(dueDate);
    const new_date = (due_date - date) / (1000 * 60 * 60 * 24);

    if (new_date > 7) {
        return 'primary';
    } else if (new_date <= 7 && new_date >= 4) {
        return 'success';
    } else if (new_date < 4 && new_date >= 2) {
        return 'warning';
    } else {
        return 'danger';
    }
}

function ListTab() {
    const [todos, setTodos] = useState(todosData);

    const handleDateChange = (index, newDate) => {
        const updatedTodos = [...todos];
        updatedTodos[index].dueDate = newDate;
        setTodos(updatedTodos);
    };

    const handleDescriptionChange = (index, newDescription) => {
        const updatedTodos = [...todos];
        updatedTodos[index].description = newDescription;
        setTodos(updatedTodos);
    };

    return (
        <Tab.Container defaultActiveKey={todos[0].title}>
            <ListGroup>
                {todos.map((todoItem, index) => (
                    <ListGroup.Item
                        key={index}
                        eventKey={todoItem.title}
                        variant={getColorVariant(todoItem.dueDate)}
                    >
                        {todoItem.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Tab.Content>
                {todos.map((todoItem, index) => (
                    <Tab.Pane
                        key={index}
                        eventKey={todoItem.title}>
                        <p
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            onChange={(e) => handleDescriptionChange(index, e.target.innerText)}
                        >
                            {todoItem.description}
                        </p>
                        <input
                            type="date"
                            defaultValue={todoItem.dueDate}
                            onChange={(e) => handleDateChange(index, e.target.value)}
                        />
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    );
}

export default ListTab;
