using Microsoft.AspNetCore.Mvc;
using EmployeeAPI.Models;
using System.Collections.Generic;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "Sagar", Department = "IT", Salary = 50000 },
            new Employee { Id = 2, Name = "Ravi", Department = "HR", Salary = 45000 },
            new Employee { Id = 3, Name = "Sagar", Department = "IT", Salary = 50000 },

        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(employees);
        }

        [HttpPost]
        public ActionResult AddEmployee(Employee emp)
        {
            emp.Id = employees.Count + 1;
            employees.Add(emp);
            return Ok(new { message = "Employee added successfully", data = emp });
        }
    }
}
