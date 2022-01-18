const mongoose = require('mongoose');

//to create a schema in mongodb
const UserSchema = new mongoose.Schema(
    {
        username :{type:String, required:true,unique:true},
           email :{type:String, required:true,unique:true},
           password :{type:String, required:true},
           isAdmin:{
               type:Boolean,
               default:false
           },

    },{timestamps:true}
);

module.exports = mongoose.model("user",UserSchema) //create a user schema in database 
