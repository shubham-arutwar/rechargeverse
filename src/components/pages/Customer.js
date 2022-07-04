import React from "react";
import useCustomer from "../hooks/useCustomer";
import "../css/Customer.css";
import { useParams } from "react-router-dom";


export default function Customer() {

    const {id} = useParams();

    const {data, loading, error} = useCustomer(id);

    console.log({
        error,
        loading,
        data
    });

    if(error) return <div>something went wrong</div>

    if(loading) return <div>loading...</div>

    return (
        <div className="Customer">
            <div className="singleRow"><div className="h4ContainerO"><h4>Generated ID: </h4></div><h4>{data.Customers_by_pk.id}</h4></div>
            <div className="singleRow"><div className="h4ContainerO"><h4>Number: </h4></div><h4>{data.Customers_by_pk.number}</h4></div>
            <div className="singleRow"><div className="h4ContainerO"><h4>Operator: </h4></div><h4>{data.Customers_by_pk.operator}</h4></div>
            <div className="singleRow"><div className="h4ContainerO"><h4>Current Plan: </h4></div><h4>{data.Customers_by_pk.current_plan}</h4></div>
            <div className="singleRow"><div className="h4ContainerO"><h4>Service Type: </h4></div><h4>{data.Customers_by_pk.service_type}</h4></div>
            <div className="singleRow"><div className="h4ContainerO"><h4>Status: </h4></div><h4>{data.Customers_by_pk.status}</h4></div>
        </div>
    )
}