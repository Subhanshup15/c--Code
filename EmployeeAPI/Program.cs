var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Allow React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AllowReactApp");
app.MapControllers();

app.Run();
