import {Route, Routes } from "react-router-dom";
import AllCustomers from "./components/pages/AllCustomers"
import Customer from "./components/pages/Customer"
import Search from "./components/pages/Search";
import AddCustomer from "./components/pages/AddCustomer";
import LandingPage from "./components/pages/LandingPage";

export default function Path() {
  return (
    <Routes>
      <Route strict exact path="/AllCustomers" element={<AllCustomers/>} />
      <Route strict exact path="/:id" element={<Customer/>} />
      <Route strict exact path="/Search" element={<Search/>} />
      <Route strict exact path="/addCustomer" element={<AddCustomer/>} />
      <Route strict exact path="/" element={<LandingPage/>} />
    </Routes>
  );
}