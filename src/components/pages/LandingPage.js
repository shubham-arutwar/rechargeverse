import React from "react";
import "../css/main.css";
import "../css/LandingPage.css";

export default function LandingPage () {
    return (
        <div className="mainContainer">
            <h3>Select an Option -</h3>
            <a href="/AllCustomers">Show All Customers</a>
            <br/>
            <a href="/Search">Search by Operator</a>
            <br/>
            <a href="/addCustomer">Add new Customer</a>
        </div>
    )
}