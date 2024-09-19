const mongoose = require("mongoose");

require('dotenv').config();
mongoose.connect(`mongodb+srv://webservice614:${process.env.password}@cluster0.39ini.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`).then(data => {
    console.log("conected successfully")
})
