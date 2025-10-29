// using Microsoft.AspNetCore.Mvc;
// using EmployeeAPI.Models;
// using System.Collections.Generic;

// namespace EmployeeAPI.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class EmpController : ControllerBase
//     {
//         private static List<Employee> employees = new List<Employee>
//         {
//             new Employee { Id = 1, Name = "Sagar", Department = "IT", Salary = 50000 },
//             new Employee { Id = 2, Name = "Ravi", Department = "HR", Salary = 45000 },
//             new Employee { Id = 3, Name = "Sagar", Department = "IT", Salary = 50000 },

//         };

//         [HttpGet]
//         public ActionResult<IEnumerable<Employee>> GetEmployees()
//         {
//             return Ok(employees);
//         }

//         [HttpPost]
//         public ActionResult AddEmployee(Employee emp)
//         {
//             emp.Id = employees.Count + 1;
//             employees.Add(emp);
//             return Ok(new { message = "Employee added successfully", data = emp });
//         }
//     }
// }
using Microsoft.AspNetCore.Mvc;
using EmployeeAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "Sagar", Department = "IT", Salary = 50000 },
            new Employee { Id = 2, Name = "Ravi", Department = "HR", Salary = 45000 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(employees);
        }

        [HttpPost]
        public ActionResult AddEmployee(Employee emp)
        {
            emp.Id = employees.Count > 0 ? employees.Max(e => e.Id) + 1 : 1;
            employees.Add(emp);
            return Ok(new { message = "Employee added successfully", data = emp });
        }

        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, Employee updatedEmp)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return NotFound(new { message = "Employee not found" });

            emp.Name = updatedEmp.Name;
            emp.Department = updatedEmp.Department;
            emp.Salary = updatedEmp.Salary;

            return Ok(new { message = "Employee updated successfully", data = emp });
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return NotFound(new { message = "Employee not found" });

            employees.Remove(emp);
            return Ok(new { message = "Employee deleted successfully" });
        }
    }
}
