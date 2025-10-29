import React from "react";

function EmployeeForm({ form, setForm, handleSubmit, resetForm, isEditing }) {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">👨‍💼 Employee Management (CRUD)</h2>

      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow-sm mb-4 bg-light border-0"
      >
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Employee Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Department"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Salary (₹)"
              value={form.salary}
              onChange={(e) => setForm({ ...form, salary: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
            />
          </div>
        </div>



        <div className="mt-3 text-center">
          <button type="submit" className="btn btn-primary me-2">
            {isEditing ? "Update Employee" : "Add Employee"}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
