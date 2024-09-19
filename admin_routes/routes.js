const express = require("express");
const {
    showAdminPage,
    showAdminPage1,
    showDashboard,
    showBanner,
    showLogo,
    showThumb,
    showIntro,
    showDesigns
} = require("../admin_controller/productUpload");
const {manageThumb,manageBanner,manageLogo,modifyProduct,getCache,clearCache} = require("../admin_controller/manage_products");
const {addLogo,addBanner,addThumb,addIntro,addDesigns} = require("../admin_controller/addProduct")
const router = express.Router();
const session = require('express-session');
function securityCheck(req,res,next){
    if(req.session.varified == "true"){
        next()
    }else{
        res.send("no admin pge found")
    }
}
// router.use(securityCheck);
var a = 2;

router.route("/").get(showAdminPage)
router.route("/get").get(showAdminPage1);
router.route("/dashboard").get(showDashboard)
router.route("/add_logo").post(addLogo);
router.route("/add_banner").post(addBanner);
router.route("/add_thumb").post(addThumb);
router.route("/add_intro").post(addIntro);
router.route("/add_designs").post(addDesigns);
router.route("/logo").get(showLogo);
router.route("/banner").get(showBanner);
router.route("/thumb").get(showThumb);
router.route("/intro").get(showIntro);
router.route("/designs").get(showDesigns);
router.route("/manage_thumb").get(manageThumb)
router.route("/manage_banner").get(manageBanner)
router.route("/manage_logo").get(manageLogo)
router.route("/modify_thumb").post(modifyProduct)
router.route("/caches").get(getCache)
router.route("/clearCache").post(clearCache)

module.exports = router;