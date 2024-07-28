const { default: mongoose ,Types,Schema} = require('mongoose');
const OrderStatus = require('../constants/order_status');

const { Food, foodSchema } = require("./Food");

const OrderItem = {
  food: Food,
  price: Number,
  quantity: Number,
};


const OrderItemSchema = mongoose.Schema<
  OrderItem >
  {
    food: { type: foodSchema, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  };

const Order = {
  id: String,
  items: [OrderItem],
  totalPrice: Number,
  name: String,
  address: String,
  paymentId: String,
  status: OrderStatus,
  user: Types.ObjectId,
  createdAt: Date,
  updatedAt: Date,
};

const orderSchema = mongoose.Schema({
    name: { type: String, required: true },
    // address: { type: String, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, default: OrderStatus.NEW },
    user: { type: Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  });

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel ;
