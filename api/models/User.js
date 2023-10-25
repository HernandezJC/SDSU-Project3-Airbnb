 const mongoose = require('mongoose');
 const {Schema} = mongoose;

//  Schema
 const UserSchema = new Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
 });

//  userModel
 const UserModel = mongoose.model("User", UserSchema);

 module.exports = UserModel;