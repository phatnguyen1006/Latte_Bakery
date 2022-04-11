import React from "react";
import { Outlet } from "react-router-dom";

import "../../components/Sidebar/sidebar.css"

import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}
