// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import RouterPage from "../src/routes/Routerpage";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterPage />
  </React.StrictMode>
);
