import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import UsersListPage from "../pages/UserListPage";
import AccountPage from "../pages/AccountPage";

const RouterPage = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Default route → Login page */}
        <Route path="/" element={<Login />} />

        {/* ✅ Protected/Admin route → Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersListPage />} />
           <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
};

export default RouterPage;
