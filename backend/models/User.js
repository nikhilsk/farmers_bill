const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: {
    type:String,
    required:true,
  },
  username: {
    type: String,
    required: true,
    min:6
  },
  password:{
      type: String,
      required:true
  },
  date:{
      type:Date,
      default:new Date()
  },
  token:{
    type:String,
    default:""
  },
  userType:{
    type:String,
  }
});

module.exports = mongoose.model("User", userSchema);
