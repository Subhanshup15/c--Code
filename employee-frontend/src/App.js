import React, { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", department: "", salary: "" });
  const API_BASE = "http://localhost:5000"; // backend URL

  // Fetch employee list
  useEffect(() => {
    fetch(`${API_BASE}/api/emp`)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  // Add new employee
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE}/api/emp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        department: form.department,
        salary: Number(form.salary),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setEmployees([...employees, result.data]);
        setForm({ name: "", department: "", salary: "" });
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Employee Management</h2>

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Employee</button>
      </form>

      <h3>Employee List</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.department} - ₹{emp.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
