import { gql, useLazyQuery } from "@apollo/client";
import React, {useState} from "react";
import "../css/main.css"
import "../css/AddCustomer.css"

const GET_BY_OPERATOR = gql`
query GetByOperator($operator: String!){
    Customers(where: {operator: {_eq: $operator}}) {
      number
      operator
      current_plan
    }
  }
`;

export default function Search() {
    
    const [operator, setOperator] = useState("");

    const [getNumbers, {loading,error,data,called}] = useLazyQuery(GET_BY_OPERATOR, {
        variables: {
            operator,
        },
    });

    // console.log({
    //     called,
    //     loading,
    //     error,
    //     data,  
    //     });

    return (
        <div className="mainContainer">
            <div className="inputContainer">
                <h4>Enter the Operator name to gett all respective numbers</h4>
                <input value={operator} onKeyPress={() => getNumbers()} onChange={(e) => setOperator(e.target.value)}/>
            </div>
            {loading && <div>loading...</div>}
            {error && <div>something went wrong</div>}
            {data && (
                <ol>
                    {data.Customers.map(({number, current_plan})=>{
                        return <li><div className="singleRow">{" "}{current_plan}{" | "}{number}</div></li>
                    })}
                </ol>
            )}
        </div>
    )
}