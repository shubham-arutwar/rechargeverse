import React from "react";
import { Link } from "react-router-dom";
import useCustomers from "../hooks/useCustomers"

const AllCustomers = ({ newCustomers }) => {

  const {error, data, loading} = useCustomers();  
  // console.log({loading,error,data});

  const tableHeader = () => {
    return (
          <tr>
            <td className="hader-data">ID</td>
            <td className="hader-data">Number</td>
            <td className="hader-data">Operator</td>
          </tr>
    )
  };

  const renderAllCustomers = (Customers) => {
    return Customers.map(({ id, number, operator}) => (
          <tr key={id}>
            <td>{id}</td>
            <td><Link to={`/${id}`}>{number}</Link></td>
            <td>{operator}</td>
          </tr>
    ));
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h4>Click on a number to get more details</h4>
      <table>
        <thead>
          <tr>
            <th colSpan={6}>Customers</th>
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