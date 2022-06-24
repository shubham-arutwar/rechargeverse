import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const ALLCUSTOMERS = gql`
query{
    Customers {
      id
      number
      operator
      current_plan
      service_type
      status
    }
  }
  
`;

const AllCustomers = ({ newCustomers }) => {
  const { loading, error, data } = useQuery(ALLCUSTOMERS);

  const tableHeader = () => {
    return (
      <div>
        <thead>
            <tr>
              <th>Customers</th>
            </tr>
          </thead>
          <tr>
            <td>Number</td>
            <td>Operator</td>
            <td>Current Plan</td>
            <td>Service Type</td>
            <td>Status</td>
          </tr>
      </div>
    )
  }

  const renderAllCustomers = (Customers) => {
    return Customers.map(({ id, number, operator, current_plan, service_type, status }) => (
        <table>
          <div key={id}>
            <Link to={`/Customers/${id}`}>
              <tbody>
                <tr>
                  <td>{number}</td>
                  <td>{operator}</td>
                  <td>{current_plan}</td>
                  <td>{service_type}</td>
                  <td>{status}</td>
                </tr>
              </tbody>    
            </Link>
          </div>
        </table>
    ));
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{renderAllCustomers(newCustomers || data.Customers)}</div>;
};

export default AllCustomers;