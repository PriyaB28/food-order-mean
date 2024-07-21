const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin:Boolean
  });
  
  module.exports = mongoose.model('user',UserSchema)