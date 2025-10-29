import React from "react";

function EmployeeTable({ employees, handleEdit, handleDelete }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="mb-3">📋 Employee List</h4>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary (₹)</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* static id */}
          {/* <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>{emp.details}</td>
                <td>
                  <button onClick={() => handleEdit(emp)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No employees found
              </td>
            </tr>
          )}
        </tbody> */}
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp, i) => (   // add i here
                <tr key={emp.id}>
                  <td>{i + 1}</td> {/* Serial number instead of emp.id */}
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.details}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(emp)}>Edit</button>{" "}
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted" style={{ textAlign: "center" }}>
                  No employees found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>

  );
}

export default EmployeeTable;
