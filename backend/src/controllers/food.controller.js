const foodModel = require("../models/Food.ts");

class FoodController {
  async getAllFoods(req, res) {
    let items = await foodModel.find();
    return res.send(items);
  }
}

module.exports = new FoodController();
