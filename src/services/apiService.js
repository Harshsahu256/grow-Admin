import axios from "axios";
import { API_BASE_URL, API_ENDPOINT } from "./api";

export const loginAdmin = async (email, password) => {
  try {
    // Construct URL safely
    const url = `${API_BASE_URL}${API_ENDPOINT.LOGIN}`.replace(/([^:]\/)\/+/g, "$1");
    console.log("🔹 Calling Login API:", url, { email, password });

    const response = await axios.post(url, { email, password });

    console.log("✅ API Response:", response.data); // check what backend returns
    return response.data; // token/admin info
  } catch (error) {
    console.error("❌ Login API error:", error);

    // Give meaningful message
    if (error.response && error.response.data) {
      throw error.response.data;
    } else if (error.message) {
      throw { message: error.message };
    } else {
      throw { message: "Something went wrong" };
    }
  }
};



// ✅ New: getAllUsers function
export const getAllUsers = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("admin"))?.token; // assuming token stored
    const url = `${API_BASE_URL}/users`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // array of users
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};


export const createAccount = async ({ accountNumber, ifscCode }) => {
  try {
    const token = JSON.parse(localStorage.getItem("admin"))?.token;
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



// ✅ Get All Accounts
export const getAllAccounts = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("admin"))?.token;
    const url = `${API_BASE_URL}/getAllAccounts`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
    return response.data; // array of accounts
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

// ✅ Update Account
export const updateAccount = async (id, updatedData) => {
  try {
    const token = JSON.parse(localStorage.getItem("admin"))?.token;
    const url = `${API_BASE_URL}/getAllAccounts/${id}`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.put(url, updatedData, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};

// ✅ Delete Account
export const deleteAccount = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("admin"))?.token;
    const url = `${API_BASE_URL}/deleteAccount/${id}`.replace(/([^:]\/)\/+/g, "$1");
    const response = await axios.delete(url, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) throw error.response.data;
    else if (error.message) throw { message: error.message };
    else throw { message: "Something went wrong" };
  }
};