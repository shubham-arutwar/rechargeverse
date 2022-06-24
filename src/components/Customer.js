import React from "react";
import useCustomer from "./hooks/useCustomer";
import "./css/Customer.css";
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
            <h3>{data.Customers_by_pk.number}</h3>
            <h4>{data.Customers_by_pk.operator}</h4>
            <h4>{data.Customers_by_pk.current_plan}</h4>
            <h4>{data.Customers_by_pk.service_type}</h4>
            <h4>{data.Customers_by_pk.status}</h4>
        </div>
    )
}