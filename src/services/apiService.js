

import axios from "axios";
import { API_BASE_URL, API_ENDPOINT } from "./api";

/* ----------------------------------------
   🧠 Helper: Get token safely
---------------------------------------- */
const getToken = () => JSON.parse(localStorage.getItem("admin"))?.token;

/* ----------------------------------------
   🔑 Admin Login
---------------------------------------- */
export const loginAdmin = async (email, password) => {
  try {
    const url = `${API_BASE_URL}${API_ENDPOINT.LOGIN}`.replace(/([^:]\/)\/+/g, "$1");
    console.log("🔹 Calling Login API:", url);

    const response = await axios.post(url, { email, password });
    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Login API error:", error);
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   👥 Get All Users
---------------------------------------- */
export const getAllUsers = async () => {
  try {
    const token = getToken();
    const url = `${API_BASE_URL}/users`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.users || response.data; // return user array
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   🏦 Create New Bank Account
---------------------------------------- */
export const createAccount = async ({ accountNumber, ifscCode }) => {
  try {
    const token = getToken();
    const url = `${API_BASE_URL}/createAccount`.replace(/([^:]\/)\/+/g, "$1");

    const response = await axios.post(
      url,
      { accountNumber, ifscCode },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
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
    const token = getToken();
    const url = `${API_BASE_URL}/getAllAccounts`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
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
    const token = getToken();
    const url = `${API_BASE_URL}/getAllAccounts/${id}`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.put(url, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
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
    const token = getToken();
    const url = `${API_BASE_URL}/deleteAccount/${id}`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   📈 Add New Trade (Allot to a User)
---------------------------------------- */
export const addPosition = async ({ userId, companyName, buy, sell, totalPrice }) => {
  try {
    const token = getToken();
    const url = `${API_BASE_URL}/addPosition`.replace(/([^:]\/)\/+/g, "$1");

    const response = await axios.post(
      url,
      { userId, companyName, buy, sell, totalPrice },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data; // returns { message, position }
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   📊 Get All Trades (for Recent Allotments)
---------------------------------------- */
export const getAllPositions = async () => {
  try {
    const token = getToken();
    const url = `${API_BASE_URL}/positions`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // { positions: [...] }
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};


export const getAllFilesForAdmin = async () => {
  try {
    const token = getToken();
    const url = `${API_BASE_URL}${API_ENDPOINT.GET_FILES}`.replace(/([^:]\/)\/+/g, "$1");

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

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
    const token = getToken(); // ya localStorage.getItem("token")
    const url = `${API_BASE_URL}/approve`.replace(/([^:]\/)\/+/g, "$1");

    const response = await axios.post(
      url,
      { fileId, amount }, // ✅ amount bhi send karna zaruri hai
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Approve file error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

/* ----------------------------------------
   💸 Get All Withdraw Requests (Admin)
---------------------------------------- */
export const getAllWithdrawRequests = async () => {
  try {
    const token = getToken();

    const url = `${API_BASE_URL}/getAllWithdrawRequests`;  // ✅ Clean URL

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // ✅ Backend kya bhej raha hai uske hisab se adjust
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
    const token = getToken();

    const url = `${API_BASE_URL}/update/${id}`; // ✅ Clean URL

    const response = await axios.patch(
      url,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Withdraw Update Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};


export const getAllMessages = async () => {
  try {
    const token = getToken(); // ya localStorage.getItem("token")
    const url = `${API_BASE_URL}/messages`; // Backend route, adjust if different

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Backend kya bhej raha hai, usually array of messages
    return response.data || [];
  } catch (error) {
    console.error("❌ Fetch messages error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};