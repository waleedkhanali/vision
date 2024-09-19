const products = require("../database_modules/products");
const caches = require("../database_modules/caches");
const manageThumb = async (req,res) => {
    const getProducts = await products.find({product_type:"THUMB"});
    res.render("admin/manage_thumb",{
        products: JSON.stringify(getProducts)
    })
}
const manageBanner = async (req,res) => {
    const getProducts = await products.find({product_type:"BANNER"});
    res.render("admin/manage_banner",{
        products: JSON.stringify(getProducts)
    })
}
const manageLogo = async (req,res) => {
    const getProducts = await products.find({product_type:"LOGO"});
    res.render("admin/manage_logo",{
        products: JSON.stringify(getProducts)
    })
}
const modifyProduct = async (req,res) => {
    try{
    var showOnTop = req.body.showOnTop;
    var deletedImage = req.body.deletedImage;
    var normalArray = req.body.normalArray;
   
    if(showOnTop != ""){
        const updateProducts = await products.updateMany({_id:showOnTop},{$set:{product_show: true}});
        console.log("add")
        console.log(updateProducts)
    }
    if(normalArray != ""){
        const updateProducts = await products.updateMany({_id:normalArray},{$set:{product_show: false}});
        console.log("add1")
        console.log(updateProducts)
    }
    if(deletedImage != ""){
        const findData = await products.findOne({_id:deletedImage});
         const deleteData = await products.deleteOne({_id:deletedImage});
        const saveCache = new caches({
            delete_url:findData.delete_url
        })
        saveCache.save();
    }
    res.send({"code":200})
}catch(err){
    res.send(err);
    console.log(err)
}
}
const getCache = async (req,res) => {
    const getAllCache = await caches.find({});
    res.render("admin/caches",{
        cache: JSON.stringify(getAllCache)
    })
}
const clearCache = async (req,res) => {
    const id = req.body.id;
    const getAllCache = await caches.deleteOne({_id:[id]});
    res.send({"code":200})
}
module.exports = {manageThumb,manageBanner,manageLogo,modifyProduct,getCache,clearCache};