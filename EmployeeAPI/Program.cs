// var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddControllers();

// // Allow React frontend
// // 1 Enable CORS service

// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowReactApp",
//         policy => policy
//             .AllowAnyOrigin()
//             .AllowAnyHeader()
//             .AllowAnyMethod());
// });

// var app = builder.Build();
// // 2 Use CORS before routing

// app.UseCors("AllowReactApp");
// app.MapControllers();

// app.Run();


//// use of mysql databse //

using EmployeeAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//1. Add MySQL database connection
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 25))));

//2. Add Controllers
builder.Services.AddControllers();

//3. Enable CORS for React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .AllowAnyOrigin()   // allow any frontend (e.g., React)
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

//4. Use CORS (must be before routing)
app.UseCors("AllowReactApp");

//5. Map Controllers (API endpoints)
app.MapControllers();

//6. Run the application
app.Run();
