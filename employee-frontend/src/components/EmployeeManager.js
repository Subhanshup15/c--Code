import React, { useState, useEffect } from "react";

function EmployeeManager() {
  const API_BASE = "http://localhost:5000"; // your .NET API URL
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    department: "",
    salary: "",
    details: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/emp`);
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.department || !form.salary) {
      alert("Please fill all fields");
      return;
    }

    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing
        ? `${API_BASE}/api/emp/${form.id}`
        : `${API_BASE}/api/emp`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: form.id,
          name: form.name,
          department: form.department,
          salary: Number(form.salary),
          details: form.details,
        }),
      });

      const responseText = await res.text();
      console.log("Server Response:", responseText);

      if (!res.ok) throw new Error(`Failed to save employee: ${res.statusText}`);

      alert(isEditing ? "Employee updated!" : "Employee added!");
      fetchEmployees();
      resetForm();
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      alert("Something went wrong while saving employee!");
    }
  };

  const handleEdit = (emp) => {
    setForm(emp);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?"))
      return;

    try {
      const res = await fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      alert("Employee deleted!");
      fetchEmployees();
    } catch (err) {
      console.error(err);
      alert("Error deleting employee!");
    }
  };

  const resetForm = () => {
    setForm({ id: 0, name: "", department: "", salary: "", details: "" });
    setIsEditing(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      <h2>Employee Management (CRUD)</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />
        <input
          type="text"
          placeholder="Details"
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
        />

        <button type="submit">{isEditing ? "Update" : "Add"}</button>
        {isEditing && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <h3>Employee List</h3>
      <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary (₹)</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeManager;
