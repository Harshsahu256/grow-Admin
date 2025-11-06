// import React, { useEffect, useState } from "react";
// import { getAllFilesForAdmin } from "../services/apiService";
// import { Card, Table, Spinner } from "react-bootstrap";

// const AdminFiles = () => {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadFiles();
//   }, []);

//   const loadFiles = async () => {
//     try {
//       const data = await getAllFilesForAdmin();
//       setFiles(data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <Card className="p-4 shadow-sm mt-4">
//       <h3 className="mb-3">Uploaded Files</h3>

//       {loading ? (
//         <div className="text-center py-4">
//           <Spinner animation="border" />
//         </div>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>Preview</th>
//               <th>File Name</th>
//               <th>User</th>
//               <th>Email</th>
//               <th>Uploaded At</th>
//               <th>Download</th>
//             </tr>
//           </thead>

//           <tbody>
//             {files.map((file) => (
//               <tr key={file._id}>
//                 <td style={{ width: "90px" }}>
//                   {file.fileUrl.endsWith(".jpg") ||
//                   file.fileUrl.endsWith(".png") ||
//                   file.fileUrl.endsWith(".jpeg") ? (
//                     <img 
//                       src={file.fileUrl}
//                       alt="preview"
//                       style={{ width: "70px", height: "55px", objectFit: "cover", borderRadius: "6px" }}
//                     />
//                   ) : (
//                     "N/A"
//                   )}
//                 </td>

//                 <td>{file.fileName}</td>
//                 <td>{file.uploadedBy?.fullName}</td>
//                 <td>{file.uploadedBy?.email}</td>
//                 <td>{new Date(file.createdAt).toLocaleString()}</td>

//                 <td>
//                   <a 
//                     href={file.fileUrl} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                   >
//                     Download
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Card>
//   );
// };

// export default AdminFiles;

import React, { useEffect, useState } from "react";
import { getAllFilesForAdmin } from "../services/apiService";
import { Card, Table, Spinner, Button } from "react-bootstrap";

const AdminFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Overlay viewer state
  const [viewFile, setViewFile] = useState(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const data = await getAllFilesForAdmin();
      setFiles(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
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
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              {files.map((file) => (
                <tr key={file._id}>
                  <td style={{ width: "90px" }}>
                    {file.fileUrl.match(/\.(jpg|jpeg|png|webp)$/i) ? (
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
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setViewFile(file.fileUrl)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* ✅ Overlay Viewer */}
      {viewFile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* Close Button */}
          <div
            onClick={() => setViewFile(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "25px",
              fontSize: "32px",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
              padding: "5px 12px",
              borderRadius: "50%",
            }}
          >
            ✖
          </div>

          {/* If it's an image */}
          {viewFile.match(/\.(jpg|jpeg|png|webp)$/i) ? (
            <img
              src={viewFile}
              alt="view"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "8px",
                boxShadow: "0px 0px 15px rgba(255,255,255,0.4)",
              }}
            />
          ) : (
            // If PDF or other file show in iframe
            <iframe
              src={viewFile}
              title="file-viewer"
              style={{
                width: "80%",
                height: "85%",
                border: "none",
                background: "#fff",
                borderRadius: "6px",
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AdminFiles;
