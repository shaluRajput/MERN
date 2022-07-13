import React, { Component } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import TodosList from './TodosList';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo'

function SwitchRoutes(props) {
    const location = useLocation()

    return (
        <React.Fragment>
            <Routes>
                <Route path="/" exact element={<TodosList />} />
                <Route path="/edit/:id" element={<EditTodo />} exact />
                <Route path="/create" element={<CreateTodo />} />
            </Routes>

        </React.Fragment>
    );
}


export default SwitchRoutes;