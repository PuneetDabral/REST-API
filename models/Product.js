const mongoose = require('mongoose');

//to create a schema in mongodb
const ProductSchema = new mongoose.Schema(
    {
       title:{type:String, required:true, unique:true},
           desc:{type:String, required:true},
           img :{type:String, required:true},
           categories : {type:Array},
           size :{type:String},
           color :{type:String},
           price:{type:Number, required:true},
           inStock:{type:Boolean, default:true},
           

    },{timestamps:true}
);

module.exports = mongoose.model("Product",ProductSchema) //create a user schema in database 
