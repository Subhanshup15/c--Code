// // var builder = WebApplication.CreateBuilder(args);

// // builder.Services.AddControllers();

// // // Allow React frontend
// // // 1 Enable CORS service

// // builder.Services.AddCors(options =>
// // {
// //     options.AddPolicy("AllowReactApp",
// //         policy => policy
// //             .AllowAnyOrigin()
// //             .AllowAnyHeader()
// //             .AllowAnyMethod());
// // });

// // var app = builder.Build();
// // // 2 Use CORS before routing

// // app.UseCors("AllowReactApp");
// // app.MapControllers();

// // app.Run();


// //// use of mysql databse //

// using EmployeeAPI.Data;
// using Microsoft.EntityFrameworkCore;

// var builder = WebApplication.CreateBuilder(args);

// //1. Add MySQL database connection
// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
//     new MySqlServerVersion(new Version(8, 0, 25))));

// //2. Add Controllers
// builder.Services.AddControllers();

// //3. Enable CORS for React frontend
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowReactApp",
//         policy => policy
//             .AllowAnyOrigin()   // allow any frontend (e.g., React)
//             .AllowAnyHeader()
//             .AllowAnyMethod());
// });

// var app = builder.Build();

// //USE FOR DUMMY DATAFROM DBINITIALIZER//
// using (var scope = app.Services.CreateScope())
// {
//     var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
//     context.Database.Migrate();
//     DbInitializer.Seed(context);
// }


// //4. Use CORS (must be before routing)
// app.UseCors("AllowReactApp");

// //5. Map Controllers (API endpoints)
// app.MapControllers();


// /// USE THIS COMD IN CLI (  ( dotnet ef migrations add InitialCreate) THAN (dotnet ef database update))
//     /*   (
//    USE THIS  (DATA folder /DbInitializer.cs)

// using EmployeeAPI.Models;
// using Bogus;

// namespace EmployeeAPI.Data
// {
//     public static class DbInitializer
//     {
//         public static void Seed(AppDbContext context)
//         {
//             if (!context.Employees.Any())
//             {
//                 var faker = new Faker<Employee>()
//                     .RuleFor(e => e.Name, f => f.Name.FullName())
//                     .RuleFor(e => e.Department, f => f.Commerce.Department())
//                     .RuleFor(e => e.Salary, f => f.Random.Int(30000, 90000))
//                     .RuleFor(e => e.Details, f => f.Name.JobTitle());

//                 var employees = faker.Generate(10000); // create 10 fake employees
//                 context.Employees.AddRange(employees);
//                 context.SaveChanges();
//             }
//         }
//     }
// }

  
//   )*/
// using (var scope = app.Services.CreateScope())
// {
//     var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
//     db.Database.Migrate(); // Automatically apply migrations
//     DbInitializer.Seed(db); // Then seed data

// }

// //6. Run the application
// app.Run();


using EmployeeAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// 1️⃣ Connect to MySQL Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 25))));

// 2️⃣ Add Controllers
builder.Services.AddControllers();

// 3️⃣ Enable CORS (for React frontend)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .AllowAnyOrigin()   // You can restrict this to your React URL later
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

// 4️⃣ Apply Migrations and Seed Data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    // Automatically apply pending migrations
    context.Database.Migrate();

    // Seed data (both custom and faker)
    DbInitializer.Seed(context);

    // Example: manual seeding for testing (optional)
    if (!context.Employees.Any())
    {
        for (int i = 1; i <= 30; i++)
        {
            context.Employees.Add(new EmployeeAPI.Models.Employee
            {
                Name = $"Employee {i}",
                Department = "Development",
                Salary = 30000 + (i * 1000),
                Details = $"Details about Employee {i}"
            });
        }
        context.SaveChanges();
    }
}

// 5️⃣ Use CORS before routing
app.UseCors("AllowReactApp");

// 6️⃣ Map Controllers (API endpoints)
app.MapControllers();

// 7️⃣ Run the Application
app.Run();
