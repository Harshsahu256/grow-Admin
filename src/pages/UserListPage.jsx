// import React, { useEffect, useState } from "react";
// import { Container, Table, Spinner } from "react-bootstrap";
// import { getAllUsers } from "../services/apiService"; // aapka API function

// const UsersListPage = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const data = await getAllUsers();
//       console.log("Users API Response:", data);
//       setUsers(data.users || []); // <-- sirf users array set karo
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchUsers();
// }, []);

//   return (
//     <Container fluid style={{ padding: "20px", color: "#000" }}>
//       <h2 className="mb-4">All Users</h2>

//       {loading ? (
//         <div
//           className="d-flex justify-content-center align-items-center"
//           style={{ height: "50vh" }}
//         >
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <Table striped bordered hover responsive variant="light">
//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>DOB</th>
//               <th>Mobile</th>
//               <th>Email</th>
//               <th>PAN</th>
//               <th>IFSC</th>
//               <th>Bank Name</th>
//               <th>Branch</th>
//               <th>Account No.</th>
//               <th>Aadhar</th>
//               <th>Nominee Name</th>
//               <th>Nominee Relation</th>
//               <th>Nominee Aadhar</th>
//               <th>Password</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.fullName}</td>
//                 <td>{user.dob}</td>
//                 <td>{user.mobileNumber}</td>
//                 <td>{user.email}</td>
//                 <td>{user.panCardNumber}</td>
//                 <td>{user.ifscCode}</td>
//                 <td>{user.bankName}</td>
//                 <td>{user.bankBranchName}</td>
//                 <td>{user.accountNumber}</td>
//                 <td>{user.aadharNumber}</td>
//                 <td>{user.nomineeName}</td>
//                 <td>{user.nomineeRelation}</td>
//                 <td>{user.nomineeAadhar}</td>
//                 <td>{user.password}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default UsersListPage;


import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, FormControl, InputGroup } from "react-bootstrap";
import { getAllUsers } from "../services/apiService";

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // search filter

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        console.log("Users API Response:", data);
        setUsers(data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter users by name, email, or account number
  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.accountNumber.includes(search)
  );

  return (
    <Container fluid style={{ padding: "20px", color: "#000" }}>
      <h2 className="mb-4">All Users</h2>

      {/* Search Box */}
      <InputGroup className="mb-3" style={{ maxWidth: "400px" }}>
        <FormControl
          placeholder="Search by Name, Email, or Account"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <Table
            striped
            bordered
            hover
            responsive
            variant="light"
            style={{ minWidth: "1200px", textAlign: "center" }}
          >
            <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
              <tr>
                <th>Full Name</th>
                <th>DOB</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>PAN</th>
                <th>IFSC</th>
                <th>Bank Name</th>
                <th>Branch</th>
                <th>Account No.</th>
                <th>Aadhar</th>
                <th>Nominee Name</th>
                <th>Nominee Relation</th>
                <th>Nominee Aadhar</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullName}</td>
                  <td>{user.dob}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.panCardNumber}</td>
                  <td>{user.ifscCode}</td>
                  <td>{user.bankName}</td>
                  <td>{user.bankBranchName}</td>
                  <td>{user.accountNumber}</td>
                  <td>{user.aadharNumber}</td>
                  <td>{user.nomineeName}</td>
                  <td>{user.nomineeRelation}</td>
                  <td>{user.nomineeAadhar}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default UsersListPage;
