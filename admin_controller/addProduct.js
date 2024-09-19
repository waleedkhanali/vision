const path = require("path");
const product = require("../database_modules/products");
const fs = require("fs");
const fileUpload = require("./fileSave")
const addLogo = async (req,res) => {
    try{
        var files = req.files.file;
        var tempPath = path.join(__dirname,`../tempFiles/${files.name}`);
        files.mv(tempPath).then(async () => {
        var product_name = req.body.logo_name;
        var product_showas = req.body.showas;
        const form = new FormData()
        console.log(product_showas)
        const upload_product = new product({
            product_type:"LOGO",
            product_name:product_name,
            product_url: null,
            product_show: product_showas,
            delete_url: null
        });
        console.log("iuploaded")
        var file_data = fs.readFileSync(tempPath);
        var fullData = file_data;
        form.append("image",fullData);
        const upload_data = await fileUpload(tempPath,form);
        const parseData = JSON.parse(upload_data);
        upload_product.product_url = parseData.data.url;
        upload_product.delete_url = parseData.data.delete_url;
        upload_product.save();
        res.send({"code":parseData.status})
    })
       
    }catch(err){
        res.send({"code":"400"})
    }
}
const addBanner = async (req,res) => {
    try{
        var files = req.files.file;
        var tempPath = path.join(__dirname,`../tempFiles/${files.name}`);
        files.mv(tempPath).then(async () => {
        var product_name = req.body.logo_name;
        var product_showas = req.body.showas;
        const form = new FormData()
        console.log(product_showas)
        const upload_product = new product({
            product_type:"BANNER",
            product_name:product_name,
            product_url: null,
            product_show: product_showas,
            delete_url: null
        });
        console.log("iuploaded")
        var file_data = fs.readFileSync(tempPath);
        var fullData = file_data;
        form.append("image",fullData);
        const upload_data = await fileUpload(tempPath,form);
        const parseData = JSON.parse(upload_data);
        upload_product.product_url = parseData.data.url;
        upload_product.delete_url = parseData.data.delete_url;
        upload_product.save();
        res.send({"code":parseData.status})
    })
       
    }catch(err){
        res.send({"code":"400"})
    }
}
const addThumb = async (req,res) => {
    try{
        var files = req.files.file;
        var tempPath = path.join(__dirname,`../tempFiles/${files.name}`);
        files.mv(tempPath).then(async () => {
        var product_name = req.body.logo_name;
        var product_showas = req.body.showas;
        const form = new FormData()
        console.log(product_showas)
        const upload_product = new product({
            product_type:"THUMB",
            product_name:product_name,
            product_url: null,
            product_show: product_showas,
            delete_url: null
        });
        console.log("iuploaded")
        var file_data = fs.readFileSync(tempPath);
        var fullData = file_data;
        form.append("image",fullData);
        const upload_data = await fileUpload(tempPath,form);
        const parseData = JSON.parse(upload_data);
        upload_product.product_url = parseData.data.url;
        upload_product.delete_url = parseData.data.delete_url;
        upload_product.save();
        res.send({"code":parseData.status})
    })
       
    }catch(err){
        res.send({"code":"400"})
    }
}
const addIntro = async (req,res) => {
    try{
        var files = req.files.file;
        var tempPath = path.join(__dirname,`../tempFiles/${files.name}`);
        files.mv(tempPath).then(async () => {
        var product_name = req.body.logo_name;
        var product_showas = req.body.showas;
        const form = new FormData()
        console.log(product_showas)
        const upload_product = new product({
            product_type:"INTRO",
            product_name:product_name,
            product_url: null,
            product_show: product_showas,
            delete_url: null
        });
        console.log("iuploaded")
        var file_data = fs.readFileSync(tempPath);
        var fullData = file_data;
        form.append("image",fullData);
        const upload_data = await fileUpload(tempPath,form);
        const parseData = JSON.parse(upload_data);
        upload_product.product_url = parseData.data.url;
        upload_product.delete_url = parseData.data.delete_url;
        upload_product.save();
        res.send({"code":parseData.status})
    })
       
    }catch(err){
        res.send({"code":"400"})
    }
}
const addDesigns = async (req,res) => {
    try{
        var files = req.files.file;
        var tempPath = path.join(__dirname,`../tempFiles/${files.name}`);
        files.mv(tempPath).then(async () => {
        var product_name = req.body.logo_name;
        var product_showas = req.body.showas;
        const form = new FormData()
        console.log(product_showas)
        const upload_product = new product({
            product_type:"DESIGNS",
            product_name:product_name,
            product_url: null,
            product_show: product_showas,
            delete_url: null
        });
        console.log("iuploaded")
        var file_data = fs.readFileSync(tempPath);
        var fullData = file_data;
        form.append("image",fullData);
        const upload_data = await fileUpload(tempPath,form);
        const parseData = JSON.parse(upload_data);
        upload_product.product_url = parseData.data.url;
        upload_product.delete_url = parseData.data.delete_url;
        upload_product.save();
        res.send({"code":parseData.status})
    })
       
    }catch(err){
        res.send({"code":"400"})
    }
}
module.exports = {addLogo,addBanner,addThumb,addIntro,addDesigns};