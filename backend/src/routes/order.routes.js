const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/order.controller')
const authMiddleware = require('../middleware/auth.middleware')
router.use(authMiddleware)
router.post('/create',OrderController.createOrder)
router.get('/newOrderCurrentUser',OrderController.getNewOrderCurrentUser)
router.post('/pay',OrderController.orderPayment)
// router.get('/foods/:id',OrderController.getFoodById)

module.exports = router