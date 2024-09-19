const mongoose = require("mongoose");
const caches = new mongoose.Schema({
    delete_url:{
        type:String,
        require:true
    }
})
const cachesModel = new mongoose.model("caches",caches);
module.exports = cachesModel;