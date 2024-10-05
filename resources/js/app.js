require('./bootstrap');

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import App from "./Layouts/App"
import Login from "./Login"

import IpIndex from "./Pages/IpIndex";
import Guest from "./Guest";

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/ip" element = {<App />}>
                <Route index element={<IpIndex/>} />     
            </Route>
            <Route path="/login" element={<Guest />} >
                <Route index element={<Login />} />
            </Route>
        </Routes>

    </BrowserRouter>
)