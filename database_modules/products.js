const mongoose = require("mongoose");
const products = new mongoose.Schema({
    product_type:{
        type:String,
        require:true
    },
    product_url:{
        type:String,
        require:true
    },
    product_name:{
        type:String,
        require:true
    },
    product_show:{
        type:Boolean,
        require:true
    },
    delete_url:{
        type:String,
        require:true
    }
})
const productModel = new mongoose.model("product",products);
module.exports = productModel;