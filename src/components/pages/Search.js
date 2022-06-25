import { gql, useLazyQuery } from "@apollo/client";
import React, {useState} from "react";

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

    console.log({
        called,
        loading,
        error,
        data,  
        });

    return (
        <div>
            <input value={operator} onChange={(e) => setOperator(e.target.value)}/>
            <button onClick={() => getNumbers()}>Search</button>
            {loading && <div>loading...</div>}
            {error && <div>something went wrong</div>}
            {data && (
                <ol>
                    {data.Customers.map(({number, current_plan})=>{
                        return <li>{" "}{current_plan}{" | "}{number}</li>
                    })}
                </ol>
            )}
        </div>
    )
}