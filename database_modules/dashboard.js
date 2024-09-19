const mongoose = require("mongoose");
const dashboard = new mongoose.Schema({
    date:{
        type: String,
        require: true
    },
    dashboard:{
        total_visitors:[
            {
                country : {
                    type: Array,
                    require:true
                },
                visitors:{
                    type: Number,
                    require:true
                }
            }
        ],
        visitors_facebook:[
            {
                country : {
                    type: Array,
                    require:true
                },
                visitors:{
                    type: Number,
                    require:true
                }
            }
        ],
        visitor_instagram:[
            {
                country : {
                    type: Array,
                    require:true
                },
                visitors:{
                    type: Number,
                    require:true
                }
            }
        ]
}
})
const dashboardModel = new mongoose.model("dashboard",dashboard);
module.exports = dashboardModel;