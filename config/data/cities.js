let citiesCreate = [
    {
    "name": "Bangkok",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/R.5734e2df48e9b3cf68ab86e8882fd4f0?rik=u0nlmzhBXiJr%2fQ&riu=http%3a%2f%2fwww.rossocorallo.info%2fwp-content%2fuploads%2f2018%2f09%2fBANGKOK.jpg&ehk=wo1GrgynMxo6Vc84TwhBYiLf1%2bLKSfDDOyoaYh5gD1w%3d&risl=&pid=ImgRaw&r=0",
    "population":  146225,
    "userId":  "6375e7b7a417c13e23b73296"
},
{
    "name": "Paris",
    "continent": "Europa",
    "photo": "https://th.bing.com/th/id/OIP.O4PbNOQOoFVAn-uYa2YjlwHaE7?pid=ImgDet&rs=1",
    "population":  2161000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "London",
    "continent": "Europa",
    "photo": "https://th.bing.com/th/id/OIP.TkikEEic7v6no4kGo17YjAHaE7?pid=ImgDet&rs=1",
    "population":  8982000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "Dubai",
    "continent": "Asia",
    "photo": "./img/dubai.jpg",
    "population":  3331000,
    "userId":  "6375e7b7a417c13e23b73296" 
},

{
    "name": "Singapore",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/R.2f2b66825122407974df71ece3db35aa?rik=FeBVaaV9b0QqcA&pid=ImgRaw&r=0",
    "population":  5677000,
    "userId":  "6375e7b7a417c13e23b73296" 
},

{
    "name": "Kuala Lumpur",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/OIP.LKjK9yHAi5ZB7h3fOMLbZwHaE7?pid=ImgDet&rs=1",
    "population":  1808000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "New York",
    "continent": "América",
    "photo": "https://th.bing.com/th/id/R.4fd54315fb45a293e51c7ee097cd52f5?rik=PRPFuXQJFKQ%2b%2bw&pid=ImgRaw&r=0",
    "population":  8468000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "Tokyo",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/OIP.qtCC2f_p1HfItk686yZp5AHaEN?pid=ImgDet&rs=1",
    "population":  13960000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "Antalya",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/OIP.U4j5WPuu4AG-rUhgJowGcQHaEj?pid=ImgDet&rs=1",
    "population":  2619832,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "Seoul",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/R.b57a6fe173330835c632777856acc252?rik=lDehlowjgkbxAA&pid=ImgRaw&r=0",
    "population":  9776000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "Osaka",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/R.05f9129ca3219789386a95e5adbeb634?rik=ib14jqjMHuL1ug&pid=ImgRaw&r=0",
    "population":  2691000,
    "userId":  "6375e7b7a417c13e23b73296"
},

{
    "name": "Mecca",
    "continent": "Asia",
    "photo": "https://th.bing.com/th/id/R.c84a4a3676dfd7790d9b281825997295?rik=I8Hi2auqbUmsMg&pid=ImgRaw&r=0",
    "population":  1579000,
    "userId":  "6375e7b7a417c13e23b73296"
}]

require("dotenv").config();
require("../database");
const City = require("../../models/City")

citiesCreate.forEach((e)=>{
    City.create(
        {
        name: e.name,
        continent: e.continent,
        photo: e.photo,
        population: e.population,
        userId: e.userId
    }
    )
})