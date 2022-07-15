import React, { Component } from "react";
import { useNavigate, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import TodosList from './toDo/TodosList';
import EditTodo from './toDo/EditTodo';
import CreateTodo from './toDo/CreateTodo'
import Home from "./reservationApp/pages/home/Home";
import List from "./reservationApp/pages/list/List";
import Hotel from "./reservationApp/pages/hotel/Hotel";

function SwitchRoutes(props) {
    const location = useLocation()

    return (
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<List />} />
                <Route path="/hotels/:id" element={<Hotel />} />
                <Route path="/todo" exact element={<TodosList />} />
                <Route path="/edit/:id" element={<EditTodo />} exact />
                <Route path="/create" element={<CreateTodo />} />
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}


export default SwitchRoutes;