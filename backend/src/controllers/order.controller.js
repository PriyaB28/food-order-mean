const OrderModel = require("../models/order.js");
const OrderStatus = require("../constants/order_status.js");

class OrderController {
  /**
   * Create a new order
   * @async
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async createOrder(req, res) {
    try {
      const reqOrder = req.body;
      if (reqOrder.items.length <= 0) {
        res.status(HTTP_BAD_REQUEST).send("Cart Is Empty!");
        return;
      }
      await OrderModel.deleteOne({
        user: req.user.user_id,
        status: OrderStatus.NEW,
      });

      const newOrder = new OrderModel({ ...reqOrder, user: req.user.user_id });
      await newOrder.save();
      res.send(newOrder);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: error.message });
    }
  }

  async getNewOrderCurrentUser(req, res) {
    try {
      const order = await OrderModel.findOne({
        user: req.user.user_id,
        status: OrderStatus.NEW,
      });
      res.send(order);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }

  async orderPayment(req, res) {
    const { paymentId } = req.body;
    try {
      const order = await OrderModel.findOne({
        user: req.user.user_id,
        status: OrderStatus.NEW,
      });
      if (!order) {
        return res.status(404).send("Order Not Found");
      }
      order.paymentId = paymentId;
      order.status = OrderStatus.PAYED;
      await order.save();
      res.send(order);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.message);
    }
  }
}

module.exports = new OrderController();
