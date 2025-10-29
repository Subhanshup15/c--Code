// import React, { useState, useEffect } from "react";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({ name: "", department: "", salary: "" });
//   const API_BASE = "http://localhost:5000"; // backend URL

//   // Fetch employee list
//   useEffect(() => {
//     fetch(`${API_BASE}/api/emp`)
//       .then((res) => res.json())
//       .then((data) => setEmployees(data))
//       .catch((err) => console.error("Error:", err));
//   }, []);

//   // Add new employee
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch(`${API_BASE}/api/emp`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: form.name,
//         department: form.department,
//         salary: Number(form.salary),
//       }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         setEmployees([...employees, result.data]);
//         setForm({ name: "", department: "", salary: "" });
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Employee Management</h2>

//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Add Employee</button>
//       </form>

//       <h3>Employee List</h3>
//       <ul>
//         {employees.map((emp) => (
//           <li key={emp.id}>
//             {emp.name} - {emp.department} - ₹{emp.salary}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";

function App() {
  const API_BASE = "http://localhost:5000";
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ id: 0, name: "", department: "", salary: "" });
  const [isEditing, setIsEditing] = useState(false);

  //  FETCH all employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    fetch(`${API_BASE}/api/emp`)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Fetch error:", err));
  };

  //  HANDLE form submit (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.department) {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      // Update employee
      fetch(`${API_BASE}/api/emp/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Employee updated!");
          fetchEmployees();
          setForm({ id: 0, name: "", department: "", salary: "" });
          setIsEditing(false);
        });
    } else {
      // Add new employee
      fetch(`${API_BASE}/api/emp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Employee added!");
          fetchEmployees();
          setForm({ id: 0, name: "", department: "", salary: "" });
        });
    }
  };

  //  Edit button click
  const handleEdit = (emp) => {
    setForm(emp);
    setIsEditing(true);
  };

  //  Delete button click
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      fetch(`${API_BASE}/api/emp/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          alert("Employee deleted!");
          fetchEmployees();
        });
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      <h2>Employee Management (CRUD)</h2>

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
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setForm({ id: 0, name: "", department: "", salary: "" });
            }}
          >
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>{" "}
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
