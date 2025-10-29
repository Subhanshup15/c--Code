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



/// crud opration fro static
/// 
// using Microsoft.AspNetCore.Mvc;
// using EmployeeAPI.Models;
// using System.Collections.Generic;
// using System.Linq;

// namespace EmployeeAPI.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class EmpController : ControllerBase
//     {
//         private static List<Employee> employees = new List<Employee>
//         {
//             new Employee { Id = 1, Name = "Sagar", Department = "IT", Salary = 50000,details="Experienced software developer with expertise in C# and .NET." },
//             new Employee { Id = 2, Name = "Ravi", Department = "HR", Salary = 45000  , details="Skilled HR professional with a focus on talent acquisition and employee relations."},
//         };

//         [HttpGet]
//         public ActionResult<IEnumerable<Employee>> GetEmployees()
//         {
//             return Ok(employees);
//         }

//         [HttpPost]
//         public ActionResult AddEmployee(Employee emp)
//         {
//             emp.Id = employees.Count > 0 ? employees.Max(e => e.Id) + 1 : 1;
//             employees.Add(emp);
//             return Ok(new { message = "Employee added successfully", data = emp });
//         }

//         [HttpPut("{id}")]
//         public ActionResult UpdateEmployee(int id, Employee updatedEmp)
//         {
//             var emp = employees.FirstOrDefault(e => e.Id == id);
//             if (emp == null)
//                 return NotFound(new { message = "Employee not found" });

//             emp.Name = updatedEmp.Name;
//             emp.Department = updatedEmp.Department;
//             emp.Salary = updatedEmp.Salary;
//             emp.details = updatedEmp.details;

//             return Ok(new { message = "Employee updated successfully", data = emp });
//         }

//         [HttpDelete("{id}")]
//         public ActionResult DeleteEmployee(int id)
//         {
//             var emp = employees.FirstOrDefault(e => e.Id == id);
//             if (emp == null)
//                 return NotFound(new { message = "Employee not found" });

//             employees.Remove(emp);
//             return Ok(new { message = "Employee deleted successfully" });
//         }
//     }
// }


//without pagination 


// using EmployeeAPI.Data;
// using EmployeeAPI.Models;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace EmployeeAPI.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class EmpController : ControllerBase
//     {
//         private readonly AppDbContext _context;

//         public EmpController(AppDbContext context)
//         {
//             _context = context;
//         }

//         // GET api/emp
//         [HttpGet]
//         public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
//         {
//             return await _context.Employees.ToListAsync();
//         }






//         // GET api/emp/5
//         [HttpGet("{id}")]
//         public async Task<ActionResult<Employee>> GetEmployee(int id)
//         {
//             var emp = await _context.Employees.FindAsync(id);
//             if (emp == null)
//                 return NotFound();

//             return emp;
//         }

//         // POST api/emp
//         [HttpPost]
//         public async Task<ActionResult<Employee>> PostEmployee(Employee emp)
//         {
//             _context.Employees.Add(emp);
//             await _context.SaveChangesAsync();
//             return CreatedAtAction(nameof(GetEmployee), new { id = emp.Id }, emp);
//         }

//         // ✅ FIXED PUT api/emp/5
//         [HttpPut("{id}")]
//         public async Task<IActionResult> PutEmployee(int id, [FromBody] Employee emp)
//         {
//             var existingEmp = await _context.Employees.FindAsync(id);
//             if (existingEmp == null)
//                 return NotFound();

//             // update only fields that changed
//             existingEmp.Name = emp.Name;
//             existingEmp.Department = emp.Department;
//             existingEmp.Salary = emp.Salary;
//             existingEmp.Details = emp.Details;

//             await _context.SaveChangesAsync();

//             return Ok(existingEmp);
//         }

//         // DELETE api/emp/5
//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeleteEmployee(int id)
//         {
//             var emp = await _context.Employees.FindAsync(id);
//             if (emp == null)
//                 return NotFound();

//             _context.Employees.Remove(emp);
//             await _context.SaveChangesAsync();

//             return NoContent();
//         }
//     }
// }

/// with pagiantion 


using EmployeeAPI.Data;
using EmployeeAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmpController(AppDbContext context)
        {
            _context = context;
        }

        // ✅ GET api/emp?page=1&pageSize=5 (Paginated)
        // [HttpGet]
        // public async Task<IActionResult> GetEmployees([FromQuery] int page = 1, [FromQuery] int pageSize = 5)
        // {
        //     if (page < 1) page = 1;
        //     if (pageSize < 1) pageSize = 5;

        //     var totalRecords = await _context.Employees.CountAsync();
        //     var totalPages = (int)Math.Ceiling(totalRecords / (double)pageSize);

        //     var employees = await _context.Employees
        //         .OrderBy(e => e.Id)
        //         .Skip((page - 1) * pageSize)
        //         .Take(pageSize)
        //         .ToListAsync();

        //     return Ok(new
        //     {
        //         success = true,
        //         message = "Employee data fetched successfully.",
        //         pagination = new
        //         {
        //             currentPage = page,
        //             pageSize,
        //             totalRecords,
        //             totalPages
        //         },
        //         data = employees
        //     });
        // }


        // ✅ GET api/emp?page=1&pageSize=10&search=John
        [HttpGet]
        public async Task<IActionResult> GetEmployees(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string? search = "")
        {
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = 5;

            // ✅ Filter by search term (name or department)
            var query = _context.Employees.AsQueryable();

            if (!string.IsNullOrEmpty(search))
            {
                search = search.ToLower();
                query = query.Where(e =>
                    e.Name.ToLower().Contains(search) ||
                    e.Department.ToLower().Contains(search));
            }

            var totalRecords = await query.CountAsync();
            var totalPages = (int)Math.Ceiling(totalRecords / (double)pageSize);

            var employees = await query
                .OrderBy(e => e.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return Ok(new
            {
                success = true,
                message = "Employee data fetched successfully.",
                pagination = new
                {
                    currentPage = page,
                    pageSize,
                    totalRecords,
                    totalPages
                },
                data = employees
            });
        }

        // ✅ GET api/emp/5 (Get by ID)
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            var emp = await _context.Employees.FindAsync(id);
            if (emp == null)
                return NotFound(new { success = false, message = "Employee not found." });

            return Ok(new { success = true, data = emp });
        }

        // ✅ POST api/emp (Create new employee)
        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] Employee emp)
        {
            if (!ModelState.IsValid)
                return BadRequest(new { success = false, message = "Invalid employee data." });

            _context.Employees.Add(emp);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployeeById), new { id = emp.Id },
                new { success = true, message = "Employee created successfully.", data = emp });
        }

        // ✅ PUT api/emp/5 (Update employee)
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateEmployee(int id, [FromBody] Employee emp)
        {
            var existingEmp = await _context.Employees.FindAsync(id);
            if (existingEmp == null)
                return NotFound(new { success = false, message = "Employee not found." });

            existingEmp.Name = emp.Name;
            existingEmp.Department = emp.Department;
            existingEmp.Salary = emp.Salary;
            existingEmp.Details = emp.Details;

            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Employee updated successfully.", data = existingEmp });
        }

        // ✅ DELETE api/emp/5 (Delete employee)
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var emp = await _context.Employees.FindAsync(id);
            if (emp == null)
                return NotFound(new { success = false, message = "Employee not found." });

            _context.Employees.Remove(emp);
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Employee deleted successfully." });
        }
    }
}
