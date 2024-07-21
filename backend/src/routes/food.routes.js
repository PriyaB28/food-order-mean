const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/food.controller')


router.get('/foods',FoodController.getAllFoods)
router.get('/foods/:id',FoodController.getFoodById)

module.exports = router