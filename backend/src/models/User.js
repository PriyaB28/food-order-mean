const mongoose = require("mongoose");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
UserSchema.plugin(mongooseLeanVirtuals)

module.exports = mongoose.model("user", UserSchema);
