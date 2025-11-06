// export const API_BASE_URL = "http://localhost:5000/api/admin";

// export const API_ENDPOINT = {
//    LOGIN: "/login", // endpoint for admin login
//     USERS: "/users",  
//      GET_ACCOUNTS: "/getAllAccounts",
     
// };

// 🌐 Base URL for all Admin APIs
// export const API_BASE_URL = "https://app.smigc.in/api/admin";

export const API_BASE_URL = "http://localhost:5000/api/admin";


// 📍 All Endpoints
export const API_ENDPOINT = {
  LOGIN: "/login", // Admin login
  USERS: "/users", // Get all users
  GET_ACCOUNTS: "/getAllAccounts", // Get all accounts
  CREATE_ACCOUNT: "/createAccount", // Create new bank account

  // 🆕 Position-related endpoints
  ADD_POSITION: "/addPosition", // Create new trade/position
  GET_POSITIONS: "/positions", // Get all trades (for dashboard)
  GET_FILES: "/files"

};
