import React, {useState} from "react";
import { gql, useMutation } from "@apollo/client";

const ADDCUSTOMER = gql`
mutation AddCustomer($number: numeric!, $operator: String!, $current_plan: Int!){
    insert_Customers_one(object: {
        number: $number,
        operator: $operator,
        current_plan: $current_plan,
        service_type: "Prepaid",
        status: "Active"
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

    const [addCustomer, {data, loading, error}] = useMutation(ADDCUSTOMER, {
        variables: {
            number,
            operator,
            current_plan,
        }
    });

    console.log({loading,error,data});

    return (
        <div>
            <input value={number} onChange={(e) => setNumber(e.target.value)}/>
            <input value={operator} onChange={(e) => setOperator(e.target.value)}/>
            <input value={current_plan} onChange={(e) => setPlan(e.target.value)}/>
            <button onClick={()=>addCustomer()}>Add Entry</button>
            {loading && <div>loading...</div>}
            {error && <div>Number already exists</div>}
            {data && (
                <div>
                    <h3>{data.insert_Customers_one.number}</h3>
                    <h4>{data.insert_Customers_one.operator}</h4>
                    <h4>{data.insert_Customers_one.current_plan}</h4>
                    <h4>{data.insert_Customers_one.service_type}</h4>
                    <h4>{data.insert_Customers_one.status}</h4>
                </div>
            )}
        </div>
    )
}