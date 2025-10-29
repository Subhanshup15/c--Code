// import React from "react";

// function EmployeeTable({ employees, handleEdit, handleDelete }) {
//   return (
//     <div className="card shadow-sm">
//       <div className="card-body">
//         <h4 className="mb-3">📋 Employee List</h4>
//         <table className="table table-striped table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Salary (₹)</th>
//               <th>Details</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {/* static id */}
//           {/* <tbody>
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
//         </tbody> */}
//           <tbody>
//             {employees.length > 0 ? (
//               employees.map((emp, i) => (   // add i here
//                 <tr key={emp.id}>
//                   <td>{i + 1}</td> {/* Serial number instead of emp.id */}
//                   <td>{emp.name}</td>
//                   <td>{emp.department}</td>
//                   <td>{emp.salary}</td>
//                   <td>{emp.details}</td>
//                   <td>
//                     <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(emp)}>Edit</button>{" "}
//                     <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center text-muted" style={{ textAlign: "center" }}>
//                   No employees found
//                 </td>
//               </tr>
//             )}
//           </tbody>

//         </table>
//       </div>
//     </div>

//   );
// }

// export default EmployeeTable;

// import React from "react";

// function EmployeeTable({
//   employees,
//   handleEdit,
//   handleDelete,
//   currentPage,
//   totalPages,
//   onPageChange,
//   loading,
// }) {
//   return (
//     <div className="card shadow-sm mt-4">
//       <div className="card-body">
//         <h4 className="mb-3">📋 Employee List</h4>

//         {loading ? (
//           <div className="text-center py-5 text-secondary">
//             <div className="spinner-border text-primary" role="status"></div>
//             <p className="mt-3">Loading employees...</p>
//           </div>
//         ) : (
//           <>
//             <table className="table table-striped table-hover">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Department</th>
//                   <th>Salary (₹)</th>
//                   <th>Details</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {employees && employees.length > 0 ? (
//                   employees.map((emp, i) => (
//                     <tr key={emp.id}>
//                       <td>{(currentPage - 1) * 10 + i + 1}</td>
//                       <td>{emp.name}</td>
//                       <td>{emp.department}</td>
//                       <td>{emp.salary}</td>
//                       <td>{emp.details}</td>
//                       <td>
//                         <button
//                           className="btn btn-sm btn-warning me-2"
//                           onClick={() => handleEdit(emp)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="btn btn-sm btn-danger"
//                           onClick={() => handleDelete(emp.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center text-muted">
//                       No employees found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             {/* Pagination Controls */}
//             <div className="d-flex justify-content-between align-items-center mt-3">
//               <button
//                 className="btn btn-outline-primary btn-sm"
//                 disabled={currentPage === 1}
//                 onClick={() => onPageChange(currentPage - 1)}
//               >
//                 ← Previous
//               </button>

//               <span>
//                 Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
//               </span>

//               <button
//                 className="btn btn-outline-primary btn-sm"
//                 disabled={currentPage === totalPages}
//                 onClick={() => onPageChange(currentPage + 1)}
//               >
//                 Next →
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EmployeeTable;


// import React from "react";

// function EmployeeTable({
//   employees,
//   handleEdit,
//   handleDelete,
//   currentPage,
//   totalPages,
//   onPageChange,
//   loading,
//   pageSize,
//   onPageSizeChange, // ✅ NEW: Function to handle change in page size
// }) {
//   return (
//     <div className="card shadow-sm mt-4">
//       <div className="card-body">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4>📋 Employee List</h4>

//           {/* ✅ Page Size Selector */}
//           <div className="d-flex align-items-center">
//             <label className="me-2 fw-bold">Page Size:</label>
//             <select
//               className="form-select form-select-sm"
//               style={{ width: "80px" }}
//               value={pageSize}
//               onChange={(e) => onPageSizeChange(Number(e.target.value))}
//             >
//               {[5, 10, 20, 50, 100].map((size) => (
//                 <option key={size} value={size}>
//                   {size}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {loading ? (
//           <div className="text-center py-5 text-secondary">
//             <div className="spinner-border text-primary" role="status"></div>
//             <p className="mt-3">Loading employees...</p>
//           </div>
//         ) : (
//           <>
//             <table className="table table-striped table-hover">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Department</th>
//                   <th>Salary (₹)</th>
//                   <th>Details</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {employees && employees.length > 0 ? (
//                   employees.map((emp, i) => (
//                     <tr key={emp.id}>
//                       <td>{(currentPage - 1) * pageSize + i + 1}</td>
//                       <td>{emp.name}</td>
//                       <td>{emp.department}</td>
//                       <td>{emp.salary}</td>
//                       <td>{emp.details}</td>
//                       <td>
//                         <button
//                           className="btn btn-sm btn-warning me-2"
//                           onClick={() => handleEdit(emp)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="btn btn-sm btn-danger"
//                           onClick={() => handleDelete(emp.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center text-muted">
//                       No employees found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             {/* ✅ Pagination Controls */}
//             <div className="d-flex justify-content-between align-items-center mt-3">
//               <button
//                 className="btn btn-outline-primary btn-sm"
//                 disabled={currentPage === 1}
//                 onClick={() => onPageChange(currentPage - 1)}
//               >
//                 ← Previous
//               </button>

//               <span>
//                 Page <strong>{currentPage}</strong> of{" "}
//                 <strong>{totalPages}</strong>
//               </span>

//               <button
//                 className="btn btn-outline-primary btn-sm"
//                 disabled={currentPage === totalPages}
//                 onClick={() => onPageChange(currentPage + 1)}
//               >
//                 Next →
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EmployeeTable;
// import React from "react";

// function EmployeeTable({
//   employees,
//   handleEdit,
//   handleDelete,
//   currentPage,
//   totalPages,
//   onPageChange,
//   loading,
//   pageSize,
//   onPageSizeChange, // ✅ NEW: Function to handle change in page size
// }) {
//   return (
//     <div className="card shadow-sm mt-4">
//       <div className="card-body">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4>📋 Employee List</h4>

//           {/* ✅ Page Size Selector */}
//           <div className="d-flex align-items-center">
//             <label className="me-2 fw-bold">Page Size:</label>
//             <select
//               className="form-select form-select-sm"
//               style={{ width: "80px" }}
//               value={pageSize}
//               onChange={(e) => onPageSizeChange(Number(e.target.value))}
//             >
//               {[5, 10, 20, 50, 100].map((size) => (
//                 <option key={size} value={size}>
//                   {size}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {loading ? (
//           <div className="text-center py-5 text-secondary">
//             <div className="spinner-border text-primary" role="status"></div>
//             <p className="mt-3">Loading employees...</p>
//           </div>
//         ) : (
//           <>
//             <table className="table table-striped table-hover">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Department</th>
//                   <th>Salary (₹)</th>
//                   <th>Details</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {employees && employees.length > 0 ? (
//                   employees.map((emp, i) => (
//                     <tr key={emp.id}>
//                       <td>{(currentPage - 1) * pageSize + i + 1}</td>
//                       <td>{emp.name}</td>
//                       <td>{emp.department}</td>
//                       <td>{emp.salary}</td>
//                       <td>{emp.details}</td>
//                       <td>
//                         <button
//                           className="btn btn-sm btn-warning me-2"
//                           onClick={() => handleEdit(emp)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="btn btn-sm btn-danger"
//                           onClick={() => handleDelete(emp.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center text-muted">
//                       No employees found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             {/* ✅ Pagination Controls */}
//             <div className="d-flex justify-content-between align-items-center mt-3">
//               <button
//                 className="btn btn-outline-primary btn-sm"
//                 disabled={currentPage === 1}
//                 onClick={() => onPageChange(currentPage - 1)}
//               >
//                 ← Previous
//               </button>

//               <span>
//                 Page <strong>{currentPage}</strong> of{" "}
//                 <strong>{totalPages}</strong>
//               </span>

//               <button
//                 className="btn btn-outline-primary btn-sm"
//                 disabled={currentPage === totalPages}
//                 onClick={() => onPageChange(currentPage + 1)}
//               >
//                 Next →
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EmployeeTable;


import React from "react";

function EmployeeTable({
  employees,
  handleEdit,
  handleDelete,
  currentPage,
  totalPages,
  onPageChange,
  loading,
  pageSize,
  onPageSizeChange,
  searchQuery,
  onSearchChange, // ✅ New handler for search input
}) {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>📋 Employee List</h4>

          {/* 🔍 Search Box */}
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ width: "250px" }}
            placeholder="Search by name or department..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div>
           
        </div>

        {/* Page size selector */}
        <div className="d-flex justify-content-end mb-3">
          <label className="me-2 fw-bold">Page Size:</label>
          <select
            className="form-select form-select-sm"
            style={{ width: "80px" }}
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {[5, 10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="text-center py-5 text-secondary">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Loading employees...</p>
          </div>
        ) : (
          <>
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Salary (₹)</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {employees && employees.length > 0 ? (
                  employees.map((emp, i) => (
                    <tr key={emp.id}>
                      <td>{(currentPage - 1) * pageSize + i + 1}</td>
                      <td>{emp.name}</td>
                      <td>{emp.department}</td>
                      <td>{emp.salary}</td>
                      <td>{emp.details}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => handleEdit(emp)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(emp.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                className="btn btn-outline-primary btn-sm"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                ← Previous
              </button>

              <span>
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{totalPages}</strong>
              </span>

              <button
                className="btn btn-outline-primary btn-sm"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EmployeeTable;
