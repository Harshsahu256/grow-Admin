

// import React, { useEffect, useState } from "react";
// import { getAllFilesForAdmin, approveFileByAdmin } from "../services/apiService";
// import { Card, Table, Spinner, Button, Form } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminFiles = () => {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [approvalCard, setApprovalCard] = useState(null);
//   const [approving, setApproving] = useState(false);

//   useEffect(() => {
//     loadFiles();
//   }, []);

//   const loadFiles = async () => {
//     try {
//       const data = await getAllFilesForAdmin();

//       // ✅ LOCAL STORAGE SYNC
//       const savedApprovals = JSON.parse(localStorage.getItem("approvedFiles")) || {};

//       const updatedFiles = data.map((file) => {
//         if (savedApprovals[file._id]) {
//           return {
//             ...file,
//             approved: true,
//             approvedAmount: savedApprovals[file._id]
//           };
//         }
//         return file;
//       });

//       setFiles(updatedFiles);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load files!");
//       setLoading(false);
//     }
//   };

//   const handleApproveSubmit = async () => {
//     if (!approvalCard.amount || Number(approvalCard.amount) <= 0) {
//       toast.error("Please enter a valid amount!");
//       return;
//     }

//     try {
//       setApproving(true);

//       await approveFileByAdmin(
//         approvalCard.file._id,
//         approvalCard.amount
//       );

//       toast.success("✅ File approved successfully!", {
//         position: "bottom-right",
//         autoClose: 2000,
//       });

//       // ✅ LOCAL STORAGE UPDATE
//       const saved = JSON.parse(localStorage.getItem("approvedFiles")) || {};
//       saved[approvalCard.file._id] = approvalCard.amount;
//       localStorage.setItem("approvedFiles", JSON.stringify(saved));

//       // ✅ UI UPDATE
//       setFiles((prev) =>
//         prev.map((f) =>
//           f._id === approvalCard.file._id
//             ? { ...f, approved: true, approvedAmount: approvalCard.amount }
//             : f
//         )
//       );

//       setApprovalCard(null);
//     } catch (error) {
//       console.error("Approve error:", error);
//       toast.error(error.message || "Approval failed!");
//     } finally {
//       setApproving(false);
//     }
//   };

//   return (
//     <>
//       <Card className="p-4 shadow-sm mt-4">
//         <h3 className="mb-3">Uploaded Files</h3>

//         {loading ? (
//           <div className="text-center py-4">
//             <Spinner animation="border" />
//           </div>
//         ) : (
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>Preview</th>
//                 <th>File Name</th>
//                 <th>User</th>
//                 <th>Email</th>
//                 <th>Uploaded At</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {files.map((file) => (
//                 <tr key={file._id}>
//                   <td style={{ width: "90px" }}>
//                     {file.fileUrl.match(/\.(jpg|jpeg|png|webp)$/i) ? (
//                       <img
//                         src={file.fileUrl}
//                         alt="preview"
//                         style={{
//                           width: "70px",
//                           height: "55px",
//                           objectFit: "cover",
//                           borderRadius: "6px",
//                         }}
//                       />
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>

//                   <td>{file.fileName}</td>
//                   <td>{file.uploadedBy?.fullName}</td>
//                   <td>{file.uploadedBy?.email}</td>
//                   <td>{new Date(file.createdAt).toLocaleString()}</td>

//                   <td>
//                     {file.approved ? (
//                       <div
//                         style={{
//                           backgroundColor: "#c5f7c7",
//                           padding: "8px 12px",
//                           borderRadius: "6px",
//                           color: "#0d7b0d",
//                           fontWeight: "600",
//                           lineHeight: "1.4",
//                         }}
//                       >
//                         ✅ Approved
//                         <br />
//                         Amount: ₹{file.approvedAmount}
//                       </div>
//                     ) : (
//                       <Button
//                         variant="warning"
//                         size="sm"
//                         onClick={() =>
//                           setApprovalCard({ file, amount: "" })
//                         }
//                       >
//                         Approve
//                       </Button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Card>

//       {approvalCard && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0,0,0,0.7)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 10000,
//           }}
//         >
//           <Card style={{ width: "450px", padding: "20px" }}>
//             <h5 className="mb-3 text-center">Add Amount</h5>

//             <Form.Control
//               type="number"
//               placeholder="Enter amount"
//               className="mb-3"
//               value={approvalCard.amount}
//               onChange={(e) =>
//                 setApprovalCard({ ...approvalCard, amount: e.target.value })
//               }
//               disabled={approving}
//             />

//             <div className="d-flex justify-content-end gap-2">
//               <Button
//                 variant="secondary"
//                 onClick={() => setApprovalCard(null)}
//                 disabled={approving}
//               >
//                 Cancel
//               </Button>

//               <Button
//                 variant="success"
//                 onClick={handleApproveSubmit}
//                 disabled={approving}
//               >
//                 {approving ? (
//                   <Spinner animation="border" size="sm" />
//                 ) : (
//                   "Approve"
//                 )}
//               </Button>
//             </div>
//           </Card>
//         </div>
//       )}
//     </>
//   );
// };

// export default AdminFiles;



import React, { useEffect, useState } from "react";
import { getAllFilesForAdmin, approveFileByAdmin } from "../services/apiService";
import { Card, Table, Spinner, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [approvalCard, setApprovalCard] = useState(null);
  const [approving, setApproving] = useState(false);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const data = await getAllFilesForAdmin();
      console.log("API response:", data); // debug

      // Handle undefined or unexpected structure safely
      setFiles(data?.files || data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load files!");
      setLoading(false);
    }
  };

  const handleApproveSubmit = async () => {
    if (!approvalCard.amount || Number(approvalCard.amount) <= 0) {
      toast.error("Please enter a valid amount!");
      return;
    }

    try {
      setApproving(true);

      const response = await approveFileByAdmin(
        approvalCard.file._id,
        approvalCard.amount
      );

      toast.success("✅ File approved successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });

      // Update state: mark file as approved
      setFiles((prev) =>
        prev.map((f) =>
          f._id === approvalCard.file._id
            ? { ...f, status: "approved", amount: approvalCard.amount }
            : f
        )
      );

      setApprovalCard(null);
    } catch (error) {
      console.error("Approve error:", error);
      toast.error(error.message || "Approval failed!");
    } finally {
      setApproving(false);
    }
  };

  return (
    <>
      <Card className="p-4 shadow-sm mt-4">
        <h3 className="mb-3">Uploaded Files</h3>

        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Preview</th>
                <th>File Name</th>
                <th>User</th>
                <th>Email</th>
                <th>Uploaded At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {(files || []).map((file) => (
                <tr key={file._id}>
                  <td style={{ width: "90px" }}>
                    {file.fileUrl?.match(/\.(jpg|jpeg|png|webp)$/i) ? (
                      <img
                        src={file.fileUrl}
                        alt="preview"
                        style={{
                          width: "70px",
                          height: "55px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>

                  <td>{file.fileName}</td>
                  <td>{file.uploadedBy?.fullName}</td>
                  <td>{file.uploadedBy?.email}</td>
                  <td>{new Date(file.createdAt).toLocaleString()}</td>

                  <td>
                    {file.status === "approved" ? (
                      <div
                        style={{
                          backgroundColor: "#c5f7c7",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          color: "#0d7b0d",
                          fontWeight: "600",
                          lineHeight: "1.4",
                        }}
                      >
                        ✅ Approved
                        <br />
                        Amount: ₹{file.amount}
                      </div>
                    ) : (
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() =>
                          setApprovalCard({ file, amount: "" })
                        }
                      >
                        Approve
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {approvalCard && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <Card style={{ width: "450px", padding: "20px" }}>
            <h5 className="mb-3 text-center">Add Amount</h5>

            <Form.Control
              type="number"
              placeholder="Enter amount"
              className="mb-3"
              value={approvalCard.amount}
              onChange={(e) =>
                setApprovalCard({ ...approvalCard, amount: e.target.value })
              }
              disabled={approving}
            />

            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="secondary"
                onClick={() => setApprovalCard(null)}
                disabled={approving}
              >
                Cancel
              </Button>

              <Button
                variant="success"
                onClick={handleApproveSubmit}
                disabled={approving}
              >
                {approving ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Approve"
                )}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default AdminFiles;


// import React, { useEffect, useState } from "react";
// import { getAllFilesForAdmin, approveFileByAdmin } from "../services/apiService";
// import { Card, Table, Spinner, Button, Form } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminFiles = () => {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [approvalCard, setApprovalCard] = useState(null);
//   const [approving, setApproving] = useState(false);

//   useEffect(() => {
//     loadFiles();
//   }, []);

//   const loadFiles = async () => {
//     try {
//       const data = await getAllFilesForAdmin();
//       console.log("API response:", data); // debug

//       setFiles(data?.files || data || []);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load files!");
//       setLoading(false);
//     }
//   };

//   const handleApproveSubmit = async () => {
//     if (!approvalCard.amount || Number(approvalCard.amount) <= 0) {
//       toast.error("Please enter a valid amount!");
//       return;
//     }

//     try {
//       setApproving(true);

//       await approveFileByAdmin(
//         approvalCard.file._id,
//         approvalCard.amount
//       );

//       toast.success("✅ File approved successfully!", {
//         position: "bottom-right",
//         autoClose: 2000,
//       });

//       // Update state: mark file as approved
//       setFiles((prev) =>
//         prev.map((f) =>
//           f._id === approvalCard.file._id
//             ? { ...f, status: "approved", amount: approvalCard.amount }
//             : f
//         )
//       );

//       setApprovalCard(null);
//     } catch (error) {
//       console.error("Approve error:", error);
//       toast.error(error.message || "Approval failed!");
//     } finally {
//       setApproving(false);
//     }
//   };

//   return (
//     <>
//       <Card className="p-4 shadow-sm mt-4">
//         <h3 className="mb-3">Uploaded Files</h3>

//         {loading ? (
//           <div className="text-center py-4">
//             <Spinner animation="border" />
//           </div>
//         ) : (
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>Preview</th>
//                 <th>File Name</th>
//                 <th>User</th>
//                 <th>Email</th>
//                 <th>Uploaded At</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {(files || []).map((file) => (
//                 <tr key={file._id}>
//                   <td style={{ width: "90px" }}>
//                     {file.fileUrl?.match(/\.(jpg|jpeg|png|webp)$/i) ? (
//                       <img
//                         src={file.fileUrl}
//                         alt="preview"
//                         style={{
//                           width: "70px",
//                           height: "55px",
//                           objectFit: "cover",
//                           borderRadius: "6px",
//                         }}
//                       />
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>

//                   <td>{file.fileName}</td>
//                   <td>{file.uploadedBy?.fullName}</td>
//                   <td>{file.uploadedBy?.email}</td>
//                   <td>{new Date(file.createdAt).toLocaleString()}</td>

//                   <td>
//                     {file.status === "approved" ? (
//                       <Button
//                         variant="success"
//                         size="sm"
//                         disabled
//                         style={{ cursor: "not-allowed" }}
//                       >
//                         ✅ Approved: ₹{file.amount}
//                       </Button>
//                     ) : (
//                       <Button
//                         variant="warning"
//                         size="sm"
//                         onClick={() =>
//                           setApprovalCard({ file, amount: "" })
//                         }
//                       >
//                         Approve
//                       </Button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Card>

//       {approvalCard && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0,0,0,0.7)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 10000,
//           }}
//         >
//           <Card style={{ width: "450px", padding: "20px" }}>
//             <h5 className="mb-3 text-center">Add Amount</h5>

//             <Form.Control
//               type="number"
//               placeholder="Enter amount"
//               className="mb-3"
//               value={approvalCard.amount}
//               onChange={(e) =>
//                 setApprovalCard({ ...approvalCard, amount: e.target.value })
//               }
//               disabled={approving}
//             />

//             <div className="d-flex justify-content-end gap-2">
//               <Button
//                 variant="secondary"
//                 onClick={() => setApprovalCard(null)}
//                 disabled={approving}
//               >
//                 Cancel
//               </Button>

//               <Button
//                 variant="success"
//                 onClick={handleApproveSubmit}
//                 disabled={approving}
//               >
//                 {approving ? (
//                   <Spinner animation="border" size="sm" />
//                 ) : (
//                   "Approve"
//                 )}
//               </Button>
//             </div>
//           </Card>
//         </div>
//       )}
//     </>
//   );
// };

// export default AdminFiles;
