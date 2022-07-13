import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'antd';

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

const columns = [
    {
        title: 'Description',
        dataIndex: 'todo_description',
        key: 'todo_description',
    },
    {
        title: 'Responsible',
        dataIndex: 'todo_responsible',
        key: 'todo_responsible',
    },
    {
        title: 'Priority',
        dataIndex: 'todo_priority',
        key: 'todo_priority',
    },
    {
        title: 'Action',
        dataIndex: '_id',
        key: '_id',
        render: (text) => <Link to={"/edit/" + text}>Edit</Link>
    },
]

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todo's List</h3>
                <Table columns={columns} dataSource={this.state.todos} >
                </Table>
            </div>
        )
    }
}