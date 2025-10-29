# 🧑‍💼 Employee Management System

A full-stack CRUD web application built with **ASP.NET Core Web API**, **React.js**, and **MySQL (XAMPP)**.  
This app allows users to add, view, update, and delete employee records with a responsive Bootstrap UI.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js + Bootstrap |
| Backend | ASP.NET Core Web API (.NET 8 or above) |
| Database | MySQL (XAMPP) |
| ORM | Entity Framework Core |
| API Testing | Postman / Browser |

---

## 🗂️ Folder Structure

Employee-Management-App/
┣ Backend/EmployeeAPI/
┃ ┣ Controllers/
┃ ┣ Data/
┃ ┣ Models/
┃ ┣ appsettings.json
┃ ┣ Program.cs
┃ ┗ ...
┣ Frontend/employee-frontend/
┃ ┣ src/
┃ ┗ public/
┗ README.md



---

## ⚙️ 1️⃣ Backend Setup — ASP.NET Core API

### 📦 Create Web API Project
```bash
dotnet new webapi -n EmployeeAPI
cd EmployeeAPI

## Add Required Packages
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools

##Database Setup (XAMPP MySQL):
CREATE DATABASE employee_db;

appsettings.json
add this new 
{
 ///add this new for data connection///
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;port=3306;database=employee_db;user=root;password=;"
  },

//////rend////
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}


##🧠 Create Model — Models/Employee.cs


##🧩 Create Database Context — Data/AppDbContext.cs


##⚙️ Configure Services — Program.cs

##🧾 Create Controller — Controllers/EmpController.cs

##🧱 Create Database Tables
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update



🌐 2️⃣ Frontend Setup — React + Bootstrap
📦 Create React App
npx create-react-app employee-frontend
cd employee-frontend

⚙️ Install Bootstrap
npm install bootstrap

Add this in src/index.js:
//import "bootstrap/dist/css/bootstrap.min.css";

