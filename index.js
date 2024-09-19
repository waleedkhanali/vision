const express = require("express");
const hbs = require("hbs");
const path = require("path");
const jwt = require("jsonwebtoken");
const url = require("url");
const fs = require("fs"); 
const { platform } = require("os");
const fileUpload = require('express-fileupload');
const { lookup } = require('geoip-lite');
const bodyParser = require('body-parser')
const templatePath = path.join(__dirname,"/template/views");
const partialPath = path.join(__dirname,"/template/partials");
const staticPath = path.join(__dirname,"/src");
const cookieParser = require('cookie-parser');
const addData = require("./modules/analytics");
hbs.registerPartials(partialPath);
const app = express();
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
const product = require("./database_modules/products")
require("./database_modules/db_connection");
const dashboard = require("./database_modules/dashboard");
const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString);
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.key,
  resave: false,
  saveUninitialized: true,
  
}))
// parse application/json
app.use(bodyParser.json())
const routesz = require("./admin_routes/routes")
app.use("/admin",routesz)

app.use(express.static(staticPath));
app.get("/",async(req,res) => {
    try{
        var fullUrl =   req.originalUrl;
        var data = url.parse(fullUrl, true)
        var platform = data.query.from;
        console.log(platform)
    res.render("index");
    addData(req)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})
app.get("/thumb",(req,res) => {
    res.render("thumb")
})
app.get("/session",(req,res) => {
    req.session.varified = "true";
    res.send("session acttivated")
})
app.get("/homepage",(req,res) => {
    res.render("index")
})
app.get("/getAllThumbnail", async (req,res) => {
    try{
    const productData = await product.find({product_type:"THUMB"});
    res.send(JSON.stringify(productData));
    }catch(err){
        res.send(err)
    }
})
app.get("/getAllBanner", async (req,res) => {
    try{
    const productData = await product.find({product_type:"BANNER"});
    res.send(JSON.stringify(productData));
    }catch(err){
        res.send(err)
    }
})
app.get("/banner",(req,res) => {
    res.render("banner")
})
app.get("/logos",(req,res) => {
    res.render("logo");
})
app.listen(8000,() => {
    console.log("i am listening")
})