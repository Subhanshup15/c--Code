using Microsoft.EntityFrameworkCore;
using EmployeeAPI.Models;  // make sure your model namespace matches


////this for databse ///
namespace EmployeeAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
