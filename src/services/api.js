// export const API_BASE_URL = "http://localhost:5000/api/admin";

// export const API_ENDPOINT = {
//    LOGIN: "/login", // endpoint for admin login
//     USERS: "/users",  
//      GET_ACCOUNTS: "/getAllAccounts",
     
// };

// 🌐 Base URL for all Admin APIs
// export const API_BASE_URL = "https://app.smigc.in/api/admin";

// export const API_BASE_URL = "http://localhost:5000/api/admin";


// // 📍 All Endpoints
// export const API_ENDPOINT = {
//   LOGIN: "/login", // Admin login
//   USERS: "/users", // Get all users
//   GET_ACCOUNTS: "/getAllAccounts", // Get all accounts
//   CREATE_ACCOUNT: "/createAccount", // Create new bank account

//   // 🆕 Position-related endpoints
//   ADD_POSITION: "/addPosition", // Create new trade/position
//   GET_POSITIONS: "/positions", // Get all trades (for dashboard)
//   GET_FILES: "/files",

//   // ✅ Approve File
//   APPROVE_FILE: "/approve",
  
//  GET_WITHDRAW: "/getAllWithdrawRequests",

//  UPDATE_WITHDRAW: "/update"  



// };


// src/services/api.js (Admin specific API endpoints)

export const API_BASE_URL = "http://localhost:5000/api/admin"; // Base URL for admin APIs



// export const API_BASE_URL = "https://app.smigc.in/api/admin";


// 📍 All Admin Endpoints
export const API_ENDPOINT = {
  // Authentication
  LOGIN: "/login", // Admin login

  // User Management
  USERS: "/users", // Get all users (could be expanded for filtering by status)
GET_PENDING_USERS: "/admin/pending-users",
APPROVE_USER: "/admin/approve-user",
REJECT_USER: "/admin/reject-user",


  // Bank Account Management
  GET_ALL_ACCOUNTS: "/getAllAccounts", // Get all bank accounts (admin view)
  CREATE_ACCOUNT: "/createAccount", // Create new bank account
  UPDATE_ACCOUNT: "/getAllAccounts", // Update existing bank account (used with ID: /getAllAccounts/:id)
  DELETE_ACCOUNT: "/deleteAccount", // Delete bank account (used with ID: /deleteAccount/:id)

  // Trading Positions/Trades Management
  ADD_POSITION: "/addPosition", // Add new trade/position
  GET_POSITIONS: "/positions", // Get all trades/positions
  UPDATE_POSITION: "/updatePosition", // Update a specific position (used with ID: /updatePosition/:id)

  // File Management
  GET_FILES: "/files", // Get all uploaded files
  APPROVE_FILE: "/approve", // Approve a specific file

  // Withdraw Request Management
  GET_WITHDRAW_REQUESTS: "/getAllWithdrawRequests", // Get all withdraw requests
  UPDATE_WITHDRAW_REQUEST_STATUS: "/update", // Update withdraw request status (used with ID: /update/:id)

  // Contact Messages
  GET_MESSAGES: "/messages", // Get all contact messages

  DELETE_POSITION: "/deletePosition", // /deletePosition/:id

 UPDATE_USER_STATUS : "/update-status",

  // Contact Management
  GET_CONTACT: "/contact",          // Get current contact details
  UPDATE_CONTACT: "/contact", // Update contact details

  // User totalAmount management
  GET_USERS_AMOUNT: "/users-amount",          // GET all users with totalAmount
  UPDATE_USER_AMOUNT: "/update-amount",       // PUT to update user's totalAmount (use /:userId)

};
