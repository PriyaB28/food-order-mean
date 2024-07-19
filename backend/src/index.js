const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./config/db");
const foodModel = require("./models/Food.ts");
const foodRouter = require("./routes/food.routes");

dotenv.config({ path: "../.env" });

const Port = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/", async (req, res) => {
  console.log("hello");
  res.send("hello");
});

// app.get("/seed", async (req, res) => {
//   let result = await foodModel.create([
//     {
//       id: "1",
//       category: "pizza",
//       name: "Pizza Pepperoni",
//       cookTime: "10-20",
//       price: 10,
//       favorite: false,
//       origins: ["italy"],
//       stars: 4.5,
//       imageUrl: "assets/images/f1.png",
//       tags: ["FastFood", "Pizza", "Lunch"],
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
//     },
//     {
//       id: "2",
//       category: "chicken",
//       name: "Meatball",
//       price: 20,
//       cookTime: "20-30",
//       favorite: true,
//       origins: ["persia", "middle east", "china"],
//       stars: 4.7,
//       imageUrl: "assets/images/meatball.png",
//       tags: ["SlowFood", "Lunch"],
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
//     },
//     {
//       id: "3",
//       category: "burger",
//       name: "Hamburger",
//       price: 5,
//       cookTime: "10-15",
//       favorite: false,
//       origins: ["germany", "us"],
//       stars: 3.5,
//       imageUrl: "assets/images/f7.png",
//       tags: ["FastFood", "Hamburger"],
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
//     },
//     {
//       id: "4",
//       category: "fries",
//       name: "Fried Potatoes",
//       price: 2,
//       cookTime: "15-20",
//       favorite: true,
//       origins: ["belgium", "france"],
//       stars: 3.3,
//       imageUrl: "assets/images/f5.png",
//       tags: ["FastFood", "Fry"],
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
//     },
//     {
//       id: "5",
//       category: "chicken",
//       name: "Chicken Soup",
//       price: 11,
//       cookTime: "40-50",
//       favorite: false,
//       origins: ["india", "asia"],
//       stars: 3.0,
//       imageUrl: "assets/images/chicken.png",
//       tags: ["SlowFood", "Soup"],
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
//     },
//     {
//       id: "6",
//       category: "pizza",
//       name: "Vegetables Pizza",
//       price: 9,
//       cookTime: "40-50",
//       favorite: false,
//       origins: ["italy"],
//       stars: 4.0,
//       imageUrl: "assets/images/f6.png",
//       tags: ["FastFood", "Pizza", "Lunch"],
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat imperdiet metus pretium volutpat. Sed viverra justo non leo malesuada, sit amet ornare nisl porta. Nam suscipit augue vitae elementum elementum. Morbi consectetur dolor at orci viverra, id euismod est posuere.",
//     },
//   ]);

//   console.log(result);
//   res.send("done");
// });
app.use("/foodItems", foodRouter);
app.listen(Port, () => {
    console.log("server started :" + Port);
});
dbConnection();
