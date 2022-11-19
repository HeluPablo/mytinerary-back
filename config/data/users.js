let users = [
  {
    "name": "Ignacio",
    "lastName": "Borraz",
    "role": "admin",
    "photo": "https://www.lansweeper.com/wp-content/uploads/2018/05/ASSET-USER-ADMIN.png",
    "age": 32,
    "email": "ignacioborraz@hotmail.com",
    "password": "Hola1234",
    "code": "asd54561dasd",
    "verified": true,
    "logged": true
  },
  {
    "name": "Alejandro",
    "lastName": "Sanchez",
    "role": "admin",
    "photo": "https://www.lansweeper.com/wp-content/uploads/2018/05/ASSET-USER-ADMIN.png",
    "age": 27,
    "email": "alesanchez@gmail.com",
    "password": "Queso5871",
    "code": "igudijr3873sfsd",
    "verified": true,
    "logged": true
  },
  {
    "name": "Pablo",
    "lastName": "Helu",
    "role": "admin",
    "photo": "https://www.lansweeper.com/wp-content/uploads/2018/05/ASSET-USER-ADMIN.png",
    "age": 25,
    "email": "pablo_andaas@hotmail.com",
    "password": "pablo123",
    "code": "bcvncv4156456",
    "verified": true,
    "logged": true
  }  
];

require("dotenv").config();
require("../database");
const User = require("../../models/User");

users.forEach((element) => {
  User.create({
        name: element.name,
        lastName: element.lastName,
        role: element.role,
        photo: element.photo,
        age: element.age,
        email: element.email,
        password: element.password,
        code: element.code,
        verified: element.verified,
        logged: element.logged
  });
});
