// import React, { useState, useEffect } from "react";

// function EmployeeManager() {
//   const API_BASE = "http://localhost:5000"; // your .NET API URL
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch employees
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/emp`);
//       const data = await res.json();
//       setEmployees(data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   // Add or Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       const responseText = await res.text();
//       console.log("Server Response:", responseText);

//       if (!res.ok) throw new Error(`Failed to save employee: ${res.statusText}`);

//       alert(isEditing ? "Employee updated!" : "Employee added!");
//       fetchEmployees();
//       resetForm();
//     } catch (err) {
//       console.error("Error in handleSubmit:", err);
//       alert("Something went wrong while saving employee!");
//     }
//   };

//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?"))
//       return;

//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete");
//       alert("Employee deleted!");
//       fetchEmployees();
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   return (
//     <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
//       <h2>Employee Management (CRUD)</h2>

//       <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Department"
//           value={form.department}
//           onChange={(e) => setForm({ ...form, department: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Salary"
//           value={form.salary}
//           onChange={(e) => setForm({ ...form, salary: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Details"
//           value={form.details}
//           onChange={(e) => setForm({ ...form, details: e.target.value })}
//         />

//         <button type="submit">{isEditing ? "Update" : "Add"}</button>
//         {isEditing && (
//           <button type="button" onClick={resetForm}>
//             Cancel
//           </button>
//         )}
//       </form>

//       <h3>Employee List</h3>
//       <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Salary (₹)</th>
//             <th>Details</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.length > 0 ? (
//             employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.department}</td>
//                 <td>{emp.salary}</td>
//                 <td>{emp.details}</td>
//                 <td>
//                   <button onClick={() => handleEdit(emp)}>Edit</button>{" "}
//                   <button onClick={() => handleDelete(emp.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center" }}>
//                 No employees found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeManager;





// import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeTable from "./EmployeeTable";

// function EmployeeManager() {
//   const API_BASE = "http://localhost:5000"; // your backend API base URL
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch all employees
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/emp`);
//       const data = await res.json();
//       setEmployees(data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   // Add or Update Employee
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       alert(isEditing ? "Employee updated!" : "Employee added!");
//       fetchEmployees();
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong while saving employee!");
//     }
//   };

//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete");
//       alert("Employee deleted!");
//       fetchEmployees();
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   return (
//     <div style={{ padding: 20, maxWidth: 800, margin: "auto",marginTop:100,border:"1px solid" }}>


//       <EmployeeForm
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         resetForm={resetForm}
//         isEditing={isEditing}
//       />

//       <EmployeeTable
//         employees={employees}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default EmployeeManager;



// import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeTable from "./EmployeeTable";

// function EmployeeManager() {
//   const API_BASE = "http://localhost:5000"; // backend API base URL
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false); // NEW: for page loading

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [employeesPerPage] = useState(5); // Show 5 employees per page

//   // Fetch all employees
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/emp`);
//       const data = await res.json();
//       setEmployees(data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add or Update Employee
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       alert(isEditing ? "Employee updated!" : "Employee added!");
//       fetchEmployees();
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong while saving employee!");
//     }
//   };

//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete");
//       alert("Employee deleted!");
//       fetchEmployees();
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   // Pagination logic
//   const indexOfLastEmployee = currentPage * employeesPerPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
//   const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
//   const totalPages = Math.ceil(employees.length / employeesPerPage);

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div
//       style={{
//         padding: 20,
//         maxWidth: 800,
//         margin: "auto",
//         marginTop: 100,
//         border: "1px solid #ddd",
//         borderRadius: 10,
//         background: "#fdfdfd",
//       }}
//     >
//       <EmployeeForm
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         resetForm={resetForm}
//         isEditing={isEditing}
//       />

//       {loading ? (
//         <div className="text-center py-4">
//           <div className="spinner-border text-primary" role="status"></div>
//           <p className="mt-2">Loading employees...</p>
//         </div>
//       ) : (
//         <>
//           <EmployeeTable
//             employees={employees}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             loading={loading}
//           />


//           {/* Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="d-flex justify-content-center mt-3">
//               <nav>
//                 <ul className="pagination">
//                   <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//                     <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
//                       Previous
//                     </button>
//                   </li>
//                   {[...Array(totalPages)].map((_, i) => (
//                     <li
//                       key={i + 1}
//                       className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
//                     >
//                       <button
//                         className="page-link"
//                         onClick={() => handlePageChange(i + 1)}
//                       >
//                         {i + 1}
//                       </button>
//                     </li>
//                   ))}
//                   <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
//                     <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
//                       Next
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default EmployeeManager;
// EmployeeManager.jsx
// ----------------------------
// This component manages employees — fetching, adding, editing, deleting,
// and showing paginated results in a clean UI.

// import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeTable from "./EmployeeTable";

// function EmployeeManager() {
//   // ✅ Backend API Base URL
//   const API_BASE = "http://localhost:5000";

//   // ✅ State to store all employee records
//   const [employees, setEmployees] = useState([]);

//   // ✅ State for the employee form fields
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });

//   // ✅ State to track if the user is editing an employee
//   const [isEditing, setIsEditing] = useState(false);

//   // ✅ Loading state to handle loader display
//   const [loading, setLoading] = useState(false);

//   // ✅ Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [employeesPerPage] = useState(5); // show 5 employees per page

//   // 🔹 Fetch all employees when the component mounts
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // 🔹 Fetch all employee data from backend API
//   const fetchEmployees = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/emp`);
//       const data = await res.json();

//       console.log("Fetched employees:", data); // 👀 debug API response

//       // ✅ Ensure that employees is always an array
//       //    Some APIs return { data: [...] } or a single object
//       setEmployees(Array.isArray(data) ? data : data.data || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setEmployees([]); // fallback to empty array to avoid crashes
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Handle form submit for adding or updating an employee
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Basic validation
//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       // ✅ Decide API method and URL based on editing state
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       // ✅ Send employee data to backend
//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       // ✅ Notify success and refresh data
//       alert(isEditing ? "Employee updated!" : "Employee added!");
//       fetchEmployees(); // refresh table
//       resetForm(); // clear form
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong while saving employee!");
//     }
//   };

//   // 🔹 When user clicks edit, populate form and enable editing mode
//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   // 🔹 Delete employee by ID
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;

//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete");
//       alert("Employee deleted!");
//       fetchEmployees(); // refresh after delete
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   // 🔹 Reset form fields and editing state
//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   // ✅ PAGINATION LOGIC
//   const indexOfLastEmployee = currentPage * employeesPerPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;

//   // Slice current page's employees safely
//   const currentEmployees = employees.slice(
//     indexOfFirstEmployee,
//     indexOfLastEmployee
//   );

//   // Total number of pages
//   const totalPages = Math.ceil(employees.length / employeesPerPage);

//   // Handle pagination navigation
//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   // ✅ JSX UI rendering
//   return (
//     <div
//       style={{
//         padding: 20,
//         maxWidth: 800,
//         margin: "auto",
//         marginTop: 100,
//         border: "1px solid #ddd",
//         borderRadius: 10,
//         background: "#fdfdfd",
//       }}
//     >
//       {/* 🔹 Employee form for Add/Edit */}
//       <EmployeeForm
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         resetForm={resetForm}
//         isEditing={isEditing}
//       />

//       {/* 🔹 Display loading spinner while fetching */}
//       {loading ? (
//         <div className="text-center py-4">
//           <div className="spinner-border text-primary" role="status"></div>
//           <p className="mt-2">Loading employees...</p>
//         </div>
//       ) : (
//         <>
//           {/* 🔹 Employee Table */}
//           <EmployeeTable
//             employees={currentEmployees} // ✅ show only paginated employees
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//           />

//           {/* 🔹 Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="d-flex justify-content-center mt-3">
//               <nav>
//                 <ul className="pagination">
//                   {/* Previous button */}
//                   <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//                     <button
//                       className="page-link"
//                       onClick={() => handlePageChange(currentPage - 1)}
//                     >
//                       Previous
//                     </button>
//                   </li>

//                   {/* Page numbers */}
//                   {[...Array(totalPages)].map((_, i) => (
//                     <li
//                       key={i + 1}
//                       className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
//                     >
//                       <button
//                         className="page-link"
//                         onClick={() => handlePageChange(i + 1)}
//                       >
//                         {i + 1}
//                       </button>
//                     </li>
//                   ))}

//                   {/* Next button */}
//                   <li
//                     className={`page-item ${
//                       currentPage === totalPages ? "disabled" : ""
//                     }`}
//                   >
//                     <button
//                       className="page-link"
//                       onClick={() => handlePageChange(currentPage + 1)}
//                     >
//                       Next
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default EmployeeManager;



// import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeTable from "./EmployeeTable";

// function EmployeeManager() {
//   const API_BASE = "http://localhost:5000"; // ✅ Change if backend runs elsewhere

//   // State management
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   //  Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(5); // Show 10 per page
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(0);

//   // Load data on first render and whenever page changes
//   useEffect(() => {
//     fetchEmployees(currentPage);
//   }, [currentPage]);

//   //Fetch employees with pagination
//   const fetchEmployees = async (page = 1) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/emp?page=${page}&pageSize=${pageSize}`);
//       const data = await res.json();

//       if (data.success) {
//         setEmployees(data.data || []);
//         setTotalPages(data.pagination.totalPages);
//         setTotalRecords(data.pagination.totalRecords);
//         setCurrentPage(data.pagination.currentPage);
//       } else {
//         setEmployees([]);
//       }
//     } catch (err) {
//       console.error("❌ Fetch error:", err);
//       alert("Failed to fetch employees!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add or Update employee
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields!");
//       return;
//     }

//     try {
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       const result = await res.json();
//       alert(result.message || "Employee saved!");

//       resetForm();
//       fetchEmployees(currentPage); // refresh current page
//     } catch (err) {
//       console.error(err);
//       alert("Error saving employee!");
//     }
//   };

//   //  Edit
//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   //  Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");

//       alert("Employee deleted!");
//       fetchEmployees(currentPage); // reload after deletion
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   //  Reset form
//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   //  Page change
//   const handlePageChange = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div
//       style={{
//         padding: 20,
//         maxWidth: 800,
//         margin: "auto",
//         marginTop: 80,
//         border: "1px solid #ddd",
//         borderRadius: 10,
//         background: "#fff",
//       }}
//     >
//       {/*  Form Section */}
//       <EmployeeForm
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         resetForm={resetForm}
//         isEditing={isEditing}
//       />

//       {/*  Table + Pagination Section */}
//       <EmployeeTable
//         employees={employees}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//         loading={loading}
//       />

//       {/*  Show total count */}
//       <div className="text-end mt-3 text-secondary">
//         Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> — Total{" "}
//         <strong>{totalRecords}</strong> employees
//       </div>
//     </div>
//   );
// }

// export default EmployeeManager;



// import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeTable from "./EmployeeTable";

// function EmployeeManager() {
//   const API_BASE = "http://localhost:5000"; // backend API base URL
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // ✅ Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchEmployees(currentPage, pageSize);
//   }, [currentPage, pageSize]);

//   // 📡 Fetch employees (server pagination)
//   const fetchEmployees = async (page = 1, size = pageSize) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/emp?page=${page}&pageSize=${size}`);
//       const data = await res.json();

//       if (data.success) {
//         setEmployees(data.data || []);
//         setTotalPages(data.pagination.totalPages);
//         setTotalRecords(data.pagination.totalRecords);
//         setCurrentPage(data.pagination.currentPage);
//       } else {
//         setEmployees([]);
//       }
//     } catch (err) {
//       console.error("❌ Fetch error:", err);
//       alert("Failed to fetch employees!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       const result = await res.json();
//       alert(result.message || "Employee saved!");

//       resetForm();
//       fetchEmployees(currentPage, pageSize);
//     } catch (err) {
//       console.error(err);
//       alert("Error saving employee!");
//     }
//   };

//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete");

//       alert("Employee deleted!");
//       fetchEmployees(currentPage, pageSize);
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     setCurrentPage(pageNumber);
//   };

//   const handlePageSizeChange = (newSize) => {
//     setPageSize(newSize);
//     setCurrentPage(1); // Reset to first page on size change
//   };

//   return (
//     <div
//       style={{
//         padding: 20,
//         maxWidth: 900,
//         margin: "auto",
//         marginTop: 80,
//         border: "1px solid #ddd",
//         borderRadius: 10,
//         background: "#fff",
//       }}
//     >
//       <EmployeeForm
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         resetForm={resetForm}
//         isEditing={isEditing}
//       />

//       <EmployeeTable
//         employees={employees}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//         loading={loading}
//         pageSize={pageSize}
//         onPageSizeChange={handlePageSizeChange} // ✅ Pass the handler
//       />

//       <div className="text-end mt-3 text-secondary">
//         Showing <strong>{employees.length}</strong> of{" "}
//         <strong>{totalRecords}</strong> employees
//       </div>
//     </div>
//   );
// }

// export default EmployeeManager;





// import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeTable from "./EmployeeTable";

// function EmployeeManager() {
//   const API_BASE = "http://localhost:5000"; // backend API base URL
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     id: 0,
//     name: "",
//     department: "",
//     salary: "",
//     details: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // ✅ Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchEmployees(currentPage, pageSize);
//   }, [currentPage, pageSize]);

//   // 📡 Fetch employees (server pagination)
//   const fetchEmployees = async (page = 1, size = pageSize) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/emp?page=${page}&pageSize=${size}`);
//       const data = await res.json();

//       if (data.success) {
//         setEmployees(data.data || []);
//         setTotalPages(data.pagination.totalPages);
//         setTotalRecords(data.pagination.totalRecords);
//         setCurrentPage(data.pagination.currentPage);
//       } else {
//         setEmployees([]);
//       }
//     } catch (err) {
//       console.error("❌ Fetch error:", err);
//       alert("Failed to fetch employees!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.department || !form.salary) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const method = isEditing ? "PUT" : "POST";
//       const url = isEditing
//         ? `${API_BASE}/api/emp/${form.id}`
//         : `${API_BASE}/api/emp`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: form.id,
//           name: form.name,
//           department: form.department,
//           salary: Number(form.salary),
//           details: form.details,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       const result = await res.json();
//       alert(result.message || "Employee saved!");

//       resetForm();
//       fetchEmployees(currentPage, pageSize);
//     } catch (err) {
//       console.error(err);
//       alert("Error saving employee!");
//     }
//   };

//   const handleEdit = (emp) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete");

//       alert("Employee deleted!");
//       fetchEmployees(currentPage, pageSize);
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting employee!");
//     }
//   };

//   const resetForm = () => {
//     setForm({ id: 0, name: "", department: "", salary: "", details: "" });
//     setIsEditing(false);
//   };

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     setCurrentPage(pageNumber);
//   };

//   const handlePageSizeChange = (newSize) => {
//     setPageSize(newSize);
//     setCurrentPage(1); // Reset to first page on size change
//   };

//   return (
//     <div
//       style={{
//         padding: 20,
//         maxWidth: 900,
//         margin: "auto",
//         marginTop: 80,
//         border: "1px solid #ddd",
//         borderRadius: 10,
//         background: "#fff",
//       }}
//     >
//       <EmployeeForm
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         resetForm={resetForm}
//         isEditing={isEditing}
//       />

//       <EmployeeTable
//         employees={employees}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//         loading={loading}
//         pageSize={pageSize}
//         onPageSizeChange={handlePageSizeChange} // ✅ Pass the handler
//       />

//       <div className="text-end mt-3 text-secondary">
//         Showing <strong>{employees.length}</strong> of{" "}
//         <strong>{totalRecords}</strong> employees
//       </div>
//     </div>
//   );
// }

// export default EmployeeManager;



import React, { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function EmployeeManager() {
  const API_BASE = "http://localhost:5000"; 
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    department: "",
    salary: "",
    details: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  // Debounced search
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchEmployees(currentPage, pageSize, searchQuery);
    }, 400); // delay 400ms after user stops typing

    return () => clearTimeout(delay);
  }, [currentPage, pageSize, searchQuery]);

  // Fetch employees from API
  const fetchEmployees = async (page = 1, size = pageSize, search = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/api/emp?page=${page}&pageSize=${size}&search=${search}`
      );
      const data = await res.json();

      if (data.success) {
        setEmployees(data.data || []);
        setTotalPages(data.pagination.totalPages);
        setTotalRecords(data.pagination.totalRecords);
        setCurrentPage(data.pagination.currentPage);
      } else {
        setEmployees([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch employees!");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 900,
        margin: "auto",
        marginTop: 80,
        border: "1px solid #ddd",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      <EmployeeForm
        form={form}
        setForm={setForm}
        handleSubmit={() => {}}
        resetForm={() => {}}
        isEditing={isEditing}
      />

      <EmployeeTable
        employees={employees}
        handleEdit={() => {}}
        handleDelete={() => {}}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={loading}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <div className="text-end mt-3 text-secondary">
        Showing <strong>{employees.length}</strong> of{" "}
        <strong>{totalRecords}</strong> employees
      </div>
    </div>
  );
}

export default EmployeeManager;
