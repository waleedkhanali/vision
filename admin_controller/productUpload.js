const dashboard = require("../database_modules/dashboard")


const router = require("../admin_routes/routes");
const showAdminPage = async(req,res) => {
    res.render("admin");
}
const showAdminPage1 = async(req,res) => {
    res.status(200).json({msg:"hello"})
}
const showDashboard =  async (req,res) => {
    var data = await dashboard.find({});
    res.send(JSON.stringify(data))
}

const showBanner = (req,res) => {
    res.render("admin/banner")
}
const showLogo = (req,res) => {
    res.render("admin/logo")
}
const showThumb = (req,res) => {
    res.render("admin/thumb")
}
const showIntro = (req,res) => {
    res.render("admin/intro")
}
const showDesigns = (req,res) => {
    res.render("admin/designs")
}

module.exports = {showAdminPage,showAdminPage1,showDashboard,showBanner,showLogo,showThumb,showIntro,showDesigns};