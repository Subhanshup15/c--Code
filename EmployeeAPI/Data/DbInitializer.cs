using EmployeeAPI.Models;
using Bogus;

namespace EmployeeAPI.Data
{
    public static class DbInitializer
    {
        public static void Seed(AppDbContext context)
        {
            if (!context.Employees.Any())
            {
                // Generate 10000 random employees using Bogus
                var faker = new Faker<Employee>()
                    .RuleFor(e => e.Name, f => f.Name.FullName())
                    .RuleFor(e => e.Department, f => f.Commerce.Department())
                    .RuleFor(e => e.Salary, f => f.Random.Int(30000, 90000))
                    .RuleFor(e => e.Details, f => f.Name.JobTitle());

                var employees = faker.Generate(10000);
                context.Employees.AddRange(employees);
                context.SaveChanges();
            }
        }
    }
}
