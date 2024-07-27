const {foodModel} = require("../models/Food");

class FoodController {
  async getAllFoods(req, res) {
    try {
      const items = await foodModel.find();
      if (!items || items.length === 0) {
        return res.status(404).send({ message: "No foods found" });
      }
      return res.send(items);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: error.message });
    }
  }
  async getFoodById(req, res) {
    const id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ message: "Invalid food ID" });
    }
    try {
      const item = await foodModel.findById(id).exec();
      if (!item) {
        return res.status(404).send({ message: "Food not found" });
      }
      return res.send(item);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }
}

module.exports = new FoodController();
