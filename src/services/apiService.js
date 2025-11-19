

// import axios from "axios";
// import { API_BASE_URL, API_ENDPOINT } from "./api";

// /* ----------------------------------------
//    🧠 Helper: Get token safely
// ---------------------------------------- */
// const getToken = () => JSON.parse(localStorage.getItem("admin"))?.token;

// /* ----------------------------------------
//    🔑 Admin Login
// ---------------------------------------- */
// export const loginAdmin = async (email, password) => {
//   try {
//     const url = `${API_BASE_URL}${API_ENDPOINT.LOGIN}`.replace(/([^:]\/)\/+/g, "$1");
//     console.log("🔹 Calling Login API:", url);

//     const response = await axios.post(url, { email, password });
//     console.log("✅ API Response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("❌ Login API error:", error);
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    👥 Get All Users
// ---------------------------------------- */
// export const getAllUsers = async () => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/users`.replace(/([^:]\/)\/+/g, "$1");
//     const response = await axios.get(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data.users || response.data; // return user array
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    🏦 Create New Bank Account
// ---------------------------------------- */
// export const createAccount = async ({ accountNumber, ifscCode }) => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/createAccount`.replace(/([^:]\/)\/+/g, "$1");

//     const response = await axios.post(
//       url,
//       { accountNumber, ifscCode },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    📋 Get All Bank Accounts
// ---------------------------------------- */
// export const getAllAccounts = async () => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/getAllAccounts`.replace(/([^:]\/)\/+/g, "$1");
//     const response = await axios.get(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    ✏️ Update Account
// ---------------------------------------- */
// export const updateAccount = async (id, updatedData) => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/getAllAccounts/${id}`.replace(/([^:]\/)\/+/g, "$1");
//     const response = await axios.put(url, updatedData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    ❌ Delete Account
// ---------------------------------------- */
// export const deleteAccount = async (id) => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/deleteAccount/${id}`.replace(/([^:]\/)\/+/g, "$1");
//     const response = await axios.delete(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    📈 Add New Trade (Allot to a User)
// ---------------------------------------- */

// export const addPosition = async ({ userId, companyName, buy, sell, quantity, gain }) => {
//   try {
//     const token = JSON.parse(localStorage.getItem("admin"))?.token;
//     const url = `${API_BASE_URL}/addPosition`;

//     const response = await axios.post(
//       url,
//       { userId, companyName, buy, sell, quantity, gain }, // ✅ gain included
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else throw { message: error.message || "Something went wrong" };
//   }
// };


// /* ----------------------------------------
//    📊 Get All Trades (for Recent Allotments)
// ---------------------------------------- */
// export const getAllPositions = async () => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/positions`.replace(/([^:]\/)\/+/g, "$1");
//     const response = await axios.get(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data; // { positions: [...] }
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else if (error.message) throw { message: error.message };
//     else throw { message: "Something went wrong" };
//   }
// };


// export const getAllFilesForAdmin = async () => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}${API_ENDPOINT.GET_FILES}`.replace(/([^:]\/)\/+/g, "$1");

//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     return response.data.files || [];
//   } catch (error) {
//     console.error("❌ Error fetching admin files:", error.response?.data || error.message);
//     throw error;
//   }
// };


// /* ----------------------------------------
//    ✅ Approve File (Admin)
// ---------------------------------------- */
// export const approveFileByAdmin = async (fileId, amount) => {
//   try {
//     const token = getToken(); // ya localStorage.getItem("token")
//     const url = `${API_BASE_URL}/approve`.replace(/([^:]\/)\/+/g, "$1");

//     const response = await axios.post(
//       url,
//       { fileId, amount }, // ✅ amount bhi send karna zaruri hai
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("❌ Approve file error:", error.response?.data || error.message);
//     throw error.response?.data || { message: "Something went wrong" };
//   }
// };

// /* ----------------------------------------
//    💸 Get All Withdraw Requests (Admin)
// ---------------------------------------- */
// export const getAllWithdrawRequests = async () => {
//   try {
//     const token = getToken();

//     const url = `${API_BASE_URL}/getAllWithdrawRequests`;  // ✅ Clean URL

//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // ✅ Backend kya bhej raha hai uske hisab se adjust
//     return (
//       response.data.withdrawRequests ||
//       response.data.requests ||
//       response.data ||
//       []
//     );
//   } catch (error) {
//     console.error("❌ Withdraw request fetch error:", error.response?.data || error.message);
//     throw error.response?.data || { message: "Something went wrong" };
//   }
// };



// /* ----------------------------------------
//    ✅ Update Withdraw Request Status
// ---------------------------------------- */
// export const updateWithdrawRequestStatus = async (id, status) => {
//   try {
//     const token = getToken();

//     const url = `${API_BASE_URL}/update/${id}`; // ✅ Clean URL

//     const response = await axios.patch(
//       url,
//       { status },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("❌ Withdraw Update Error:", error.response?.data || error.message);
//     throw error.response?.data || { message: "Something went wrong" };
//   }
// };


// export const getAllMessages = async () => {
//   try {
//     const token = getToken(); // ya localStorage.getItem("token")
//     const url = `${API_BASE_URL}/messages`; // Backend route, adjust if different

//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // Backend kya bhej raha hai, usually array of messages
//     return response.data || [];
//   } catch (error) {
//     console.error("❌ Fetch messages error:", error.response?.data || error.message);
//     throw error.response?.data || { message: "Something went wrong" };
//   }
// };


// export const updatePosition = async (id, updatedData) => {
//   try {
//     const token = getToken();
//     const url = `${API_BASE_URL}/updatePosition/${id}`.replace(/([^:]\/)\/+/g, "$1");

//     const response = await axios.put(url, updatedData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) throw error.response.data;
//     else throw { message: error.message || "Something went wrong" };
//   }
// };


// src/services/apiService.js (Admin specific API service)

import axios from "axios";
import { API_BASE_URL, API_ENDPOINT } from "./api"; // Ensure correct import from your api.js

// Create an Axios instance for admin-specific API calls
const adminAPI = axios.create({
  baseURL: API_BASE_URL, // Use the admin base URL
  headers: {
    "Content-Type": "application/json",
  },
});

/* ----------------------------------------
   🧠 Helper: Axios Interceptor for Admin Token
   All requests made through `adminAPI` will automatically include the admin token.
---------------------------------------- */
adminAPI.interceptors.request.use(
  (config) => {
    const adminData = JSON.parse(localStorage.getItem("admin"));
    const token = adminData ? adminData.token : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ----------------------------------------
// 🔐 ADMIN LOGIN (NO TOKEN REQUIRED)
// ----------------------------------------
export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${API_ENDPOINT.LOGIN}`, {
      email,
      password,
    });

    // Save admin + token properly
    localStorage.setItem(
      "admin",
      JSON.stringify({
        token: response.data.token,
        admin: response.data.admin,
      })
    );

    return response.data;
  } catch (error) {
    console.error("❌ Login Error:", error);
    throw error.response?.data || { message: "Login failed" };
  }
};

// ----------------------------------------
// 👥 GET ALL USERS (ADMIN)
// ----------------------------------------
export const getAllUsers = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.USERS);
    return response.data.users || response.data;
  } catch (error) {
    console.error("❌ Get Users Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ----------------------------------------
// 👥 GET PENDING USERS
// ----------------------------------------
export const getPendingUsers = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_PENDING_USERS);
    return response.data;
  } catch (error) {
    console.error("❌ Get Pending Users Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ----------------------------------------
// 👍 APPROVE USER
// ----------------------------------------
export const approveUser = async (userId) => {
  try {
    const response = await adminAPI.put(API_ENDPOINT.APPROVE_USER, { userId });
    return response.data;
  } catch (error) {
    console.error("❌ Approve Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ----------------------------------------
// ❌ REJECT USER
// ----------------------------------------
export const rejectUser = async (userId, reason) => {
  try {
    const response = await adminAPI.put(API_ENDPOINT.REJECT_USER, {
      userId,
      reason,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Reject Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ----------------------------------------
// 🏦 Bank Account Management
// ----------------------------------------

/* ----------------------------------------
   🏦 Create New Bank Account
---------------------------------------- */
export const createAccount = async ({ accountNumber, ifscCode }) => {
  try {
    const response = await adminAPI.post(API_ENDPOINT.CREATE_ACCOUNT, { accountNumber, ifscCode });
    return response.data;
  } catch (error) {
    console.error("❌ Create Account API error:", error);
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   📋 Get All Bank Accounts
---------------------------------------- */
export const getAllAccounts = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_ALL_ACCOUNTS);
    return response.data;
  } catch (error) {
    console.error("❌ Get All Accounts API error:", error);
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   ✏️ Update Account
---------------------------------------- */
export const updateAccount = async (id, updatedData) => {
  try {
    const response = await adminAPI.put(`${API_ENDPOINT.UPDATE_ACCOUNT}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("❌ Update Account API error:", error);
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   ❌ Delete Account
---------------------------------------- */
export const deleteAccount = async (id) => {
  try {
    const response = await adminAPI.delete(`${API_ENDPOINT.DELETE_ACCOUNT}/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Delete Account API error:", error);
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

// ----------------------------------------
// 📈 Trading Positions/Trades Management
// ----------------------------------------

/* ----------------------------------------
   📈 Add New Trade (Allot to a User)
---------------------------------------- */
export const addPosition = async ({ userId, companyName, buy, sell, quantity, gain }) => {
  try {
    const response = await adminAPI.post(API_ENDPOINT.ADD_POSITION, { userId, companyName, buy, sell, quantity, gain });
    return response.data;
  } catch (error) {
    console.error("❌ Error adding position:", error);
    if (error.response && error.response.data) throw error.response.data;
    else throw { message: error.message || "Something went wrong" };
  }
};

/* ----------------------------------------
   📊 Get All Trades (for Recent Allotments)
---------------------------------------- */
export const getAllPositions = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_POSITIONS);
    return response.data; // { positions: [...] }
  } catch (error) {
    console.error("❌ Error fetching positions:", error);
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   📝 Update Position API
---------------------------------------- */
export const updatePosition = async (id, updatedData) => {
  try {
    const response = await adminAPI.put(`${API_ENDPOINT.UPDATE_POSITION}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating position:", error);
    if (error.response && error.response.data) throw error.response.data;
    else throw { message: error.message || "Something went wrong" };
  }
};

// ----------------------------------------
// 📂 File Management
// ----------------------------------------

export const getAllFilesForAdmin = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_FILES);
    return response.data.files || [];
  } catch (error) {
    console.error("❌ Error fetching admin files:", error.response?.data || error.message);
    throw error;
  }
};

/* ----------------------------------------
   ✅ Approve File (Admin)
---------------------------------------- */
export const approveFileByAdmin = async (fileId, amount) => {
  try {
    const response = await adminAPI.post(API_ENDPOINT.APPROVE_FILE, { fileId, amount });
    return response.data;
  } catch (error) {
    console.error("❌ Approve file error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ----------------------------------------
// 💸 Withdraw Request Management
// ----------------------------------------

/* ----------------------------------------
   💸 Get All Withdraw Requests (Admin)
---------------------------------------- */
export const getAllWithdrawRequests = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_WITHDRAW_REQUESTS);
    return (
      response.data.withdrawRequests ||
      response.data.requests ||
      response.data ||
      []
    );
  } catch (error) {
    console.error("❌ Withdraw request fetch error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   ✅ Update Withdraw Request Status
---------------------------------------- */
export const updateWithdrawRequestStatus = async (id, status) => {
  try {
    const response = await adminAPI.patch(`${API_ENDPOINT.UPDATE_WITHDRAW_REQUEST_STATUS}/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error("❌ Withdraw Update Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ----------------------------------------
// 📧 Contact Message Management
// ----------------------------------------

export const getAllMessages = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_MESSAGES);
    return response.data || [];
  } catch (error) {
    console.error("❌ Fetch messages error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};



// ❌ Delete Position
export const deletePosition = async (id) => {
  try {
    const response = await adminAPI.delete(`${API_ENDPOINT.DELETE_POSITION}/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error deleting position:", error);
    if (error.response && error.response.data) throw error.response.data;
    else throw { message: "Something went wrong" };
  }
};




export const updateUserStatus = async (userId, status) => {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINT.UPDATE_USER_STATUS}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
    body: JSON.stringify({ userId, status }),
  });

  const data = await res.json();
  return data;
};

// ----------------------------------------
// 📞 Admin Contact Management
// ----------------------------------------
export const getAdminContact = async () => {
  try {
    const response = await adminAPI.get("/contact");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching contact details:", error.response?.data || error.message);
    throw error;
  }
};

export const updateAdminContact = async (contactData) => {
  try {
    const response = await adminAPI.put(API_ENDPOINT.UPDATE_CONTACT, contactData);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating contact details:", error.response?.data || error.message);
    throw error;
  }
};


// Get all users with totalAmount
// ---------------------------------------
export const getUsersAmount = async () => {
  try {
    const response = await adminAPI.get(API_ENDPOINT.GET_USERS_AMOUNT);
    return response.data; // { success: true, data: [...] }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// ---------------------------------------
// Update a specific user's totalAmount
// ---------------------------------------
export const updateUseTotalAmount = async (userId, newAmount) => {
  try {
    const response = await adminAPI.put(`${API_ENDPOINT.UPDATE_USER_AMOUNT}/${userId}`, {
      newAmount,
    });
    return response.data; // { success: true, totalAmount: ... }
  } catch (error) {
    console.error("Error updating amount:", error);
    throw error;
  }
};