import {Route, Routes } from "react-router-dom";
import AllCustomers from "./components/pages/AllCustomers"
import Customer from "./components/pages/Customer"
import Search from "./components/pages/Search";
import AddCustomer from "./components/pages/AddCustomer";

export default function Path() {
  return (
    <Routes>
      <Route strict exact path="/:id" element={<Customer/>} />
      <Route strict exact path="/Search" element={<Search/>} />
      <Route strict exact path="/addCustomer" element={<AddCustomer/>} />
      <Route strict exact path="/" element={<AllCustomers/>} />
    </Routes>
  );
}