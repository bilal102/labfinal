var mongoose=require("mongoose");

var productSchema=mongoose.Schema({

    name:String,
    category:String,
    price:String,
    details:String
});

var Product=mongoose.model("product",productSchema);
module.exports=Product;