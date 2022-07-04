import React, {useState} from "react";
import { gql, useMutation } from "@apollo/client";
import "../css/main.css";
import "../css/AddCustomer.css";

const ADDCUSTOMER = gql`
mutation AddCustomer(
        $number: numeric!,
        $operator: String!,
        $current_plan: Int!,
        $service_type: String!,
        $status: String!){
        insert_Customers_one(object: {
            number: $number,
            operator: $operator,
            current_plan: $current_plan,
            service_type: $service_type,
            status: $status,
        }) {
            id
            number
            operator
            current_plan
            service_type
            status
        }
}`;

export default function AddCustomer () {

    const [number, setNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [current_plan, setPlan] = useState("");
    const [service_type, setType] = useState("");
    const [status, setStatus] = useState("");

    const [addCustomer, {data, loading, error}] = useMutation(ADDCUSTOMER, {
        variables: {
            number,
            operator,
            current_plan,
            service_type,
            status,
        }
    });

    // console.log({loading,error,data});

    return (
        <div className="mainContainer">
            <div className="inputContainer">
                <div className="singleRow">
                    <div className="h4ContainerI"><h4>Number</h4></div>
                    <input minLength={10} maxLength={10} value={number} onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div className="singleRow">
                    <div className="h4ContainerI"><h4>Operator</h4></div>
                    <input minLength={2} maxLength={10} value={operator} onChange={(e) => setOperator(e.target.value)}/>
                </div>
                <div className="singleRow">
                    <div className="h4ContainerI"><h4>Current Plan</h4></div>
                    <input minLength={3} maxLength={4} value={current_plan} onChange={(e) => setPlan(e.target.value)}/>
                </div>
                <div className="singleRow">
                    <div className="h4ContainerI"><h4>Service Type</h4></div>
                    <input value={service_type} onChange={(e) => setType(e.target.value)}/>
                </div>
                <div className="singleRow">
                    <div className="h4ContainerI"><h4>Status</h4></div>
                    <input value={status} onChange={(e) => setStatus(e.target.value)}/>
                </div>
                <div className="singleRow">
                    <button className="addBtn" onClick={()=>addCustomer()}>Add Entry</button>
                </div>
            </div>
            <div className="outputContainer">
                {loading && <div>loading...</div>}
                {error && <div>Number already exists</div>}
                {data && (
                    <div>
                        <div><h4>Generated ID: </h4><h4>{data.insert_Customers_one.id}</h4></div>
                        <div><h4>Number: </h4><h4>{data.insert_Customers_one.number}</h4></div>
                        <div><h4>Operator: </h4><h4>{data.insert_Customers_one.operator}</h4></div>
                        <div><h4>Current Plan: </h4><h4>{data.insert_Customers_one.current_plan}</h4></div>
                        <div><h4>Service Type: </h4><h4>{data.insert_Customers_one.service_type}</h4></div>
                        <div><h4>Status: </h4><h4>{data.insert_Customers_one.status}</h4></div>
                    </div>
                )}
            </div>
        </div>
    )
}