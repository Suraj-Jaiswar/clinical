import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
  updatedOn:{
    type: Date,
    default: Date.now
  }
});


var User = mongoose.model("User", user);

export default User;
