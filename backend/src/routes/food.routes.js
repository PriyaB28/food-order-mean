const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/food.controller')


router.get('/foods',FoodController.getAllFoods)

module.exports = router