import React from "react";
import { Link } from "react-router-dom";
import useCustomers from "../hooks/useCustomers"

const AllCustomers = ({ newCustomers }) => {

  const {error, data, loading} = useCustomers();  
  console.log({loading,error,data});

  const tableHeader = () => {
    return (
          <tr>
            <td className="hader-data">Number</td>
            <td className="hader-data">Operator</td>
            <td className="hader-data">Current Plan</td>
            <td className="hader-data">Service Type</td>
            <td className="hader-data">Status</td>
          </tr>
    )
  };

  const renderAllCustomers = (Customers) => {
    return Customers.map(({ id, number, operator, current_plan, service_type, status }) => (
          <tr key={id}>
            <td><Link to={`/${id}`}>{number}</Link></td>
            <td>{operator}</td>
            <td>{current_plan}</td>
            <td>{service_type}</td>
            <td>{status}</td>
          </tr>
    ));
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={5}>Customers</th>
          </tr>
          {tableHeader()}
        </thead>
        <tbody>
          {renderAllCustomers(newCustomers || data.Customers)}
        </tbody>
      </table>
    </div>
  )
};

export default AllCustomers;