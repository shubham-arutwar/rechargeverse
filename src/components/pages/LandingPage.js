import React from "react";
import "../css/main.css";
import "../css/LandingPage.css";

export default function LandingPage () {
    return (
        <div className="mainContainer">
            <a href="/AllCustomers">Show AllCustomers</a>
            <br/>
            <a href="/Search">Search by Operator</a>
            <br/>
            <a href="/addCustomer">Add new Customer</a>
        </div>
    )
}