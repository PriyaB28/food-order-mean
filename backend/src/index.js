const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./config/db");
const foodModel = require("./models/Food");
const userModel = require("./models/User");
const foodRouter = require("./routes/food.routes.js");
const loginRouter = require("./routes/login.routes.js");
const orderRouter = require("./routes/order.routes.js");

dotenv.config({ path: "../.env" });

const Port = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    credentials: true,
    // origin: ["http://localhost:4200"],
    origin: ["https://food-frontend-92qe.onrender.com"],
  })
);

app.get("/", async (req, res) => {
  res.send("hello");
});

// app.get("/seed", async (req, res) => {
//     let result = await userModel.create([
// {
//   name:'user',
//   email:'user@gmail.com',
//   password:'user123',
//   isAdmin:true
// }
//     ])
//     res.send("done");
//   }
// )
app.get("/seed", async (req, res) => {
  let result = await foodModel.create([
    {
      category: "pizza",
      name: "Pizza Pepperoni",
      cookTime: "10-20",
      price: 10,
      favorite: false,
      origins: ["italy"],
      stars: 4.5,
      imageUrl: "assets/images/f1.png",
      tags: ["FastFood", "Pizza", "Lunch"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
    },
    {
      category: "chicken",
      name: "Meatball",
      price: 20,
      cookTime: "20-30",
      favorite: true,
      origins: ["persia", "middle east", "china"],
      stars: 4.7,
      imageUrl: "assets/images/meatball.png",
      tags: ["SlowFood", "Lunch"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
    },
    {
      category: "burger",
      name: "Hamburger",
      price: 5,
      cookTime: "10-15",
      favorite: false,
      origins: ["germany", "us"],
      stars: 3.5,
      imageUrl: "assets/images/f7.png",
      tags: ["FastFood", "Hamburger"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
    },
    {
      category: "fries",
      name: "Fried Potatoes",
      price: 2,
      cookTime: "15-20",
      favorite: true,
      origins: ["belgium", "france"],
      stars: 3.3,
      imageUrl: "assets/images/f5.png",
      tags: ["FastFood", "Fry"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
    },
    {
      category: "chicken",
      name: "Chicken Soup",
      price: 11,
      cookTime: "40-50",
      favorite: false,
      origins: ["india", "asia"],
      stars: 3.0,
      imageUrl: "assets/images/chicken.png",
      tags: ["SlowFood", "Soup"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
    },
    {
      category: "pizza",
      name: "Vegetables Pizza",
      price: 9,
      cookTime: "40-50",
      favorite: false,
      origins: ["italy"],
      stars: 4.0,
      imageUrl: "assets/images/f6.png",
      tags: ["FastFood", "Pizza", "Lunch"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
    },
  ]);

  res.send("done");
});
app.use("/api/foodItems", foodRouter);
app.use("/api/user", loginRouter);
app.use("/api/order", orderRouter);
app.listen(Port, () => {
  console.log("server started :" + Port);
});
dbConnection();
