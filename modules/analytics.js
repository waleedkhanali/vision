const requestIp = require('request-ip');
const fs = require("fs"); 
const { lookup } = require('geoip-lite');
const hbs = require("hbs");
const path = require("path");
const url = require("url");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
// bacon
const addData = async(req) =>{
var ip= requestIp.getClientIp(req);
const dashboard = require("../database_modules/dashboard");


let obj = new Date(); 
let day = obj.getUTCDate(); 
let month = obj.getUTCMonth() + 1; 
let year = obj.getUTCFullYear(); 
var date = day+":"+month+":"+year;

var fullUrl =   req.originalUrl;
var url_data = url.parse(fullUrl, true)
var platform = url_data.query.from;
let lookup_country = lookup(req.ip);
var country;
const findData = await dashboard.findOne({date});
console.log(findData)
console.log("data is coming")
if(findData != null){
  console.log("entering in this part")
if(lookup_country != null){
  country = lookup_country.country;
}
if(platform == "facebook"){
  var visitoronSite = findData.dashboard.visitors_facebook[0].visitors + 1;
  var country_old = checkCountry(country,findData.dashboard.visitors_facebook[0].country); 
  const updateData = await dashboard.updateOne({date},{$set:
    {
      "dashboard.visitors_facebook.0.visitors": visitoronSite,
      "dashboard.visitors_facebook.0.country": country_old

}
})
}
else if(platform == "instagram"){
  var visitoronSite = findData.dashboard.visitor_instagram[0].visitors + 1;
  var country_old = checkCountry(country,findData.dashboard.visitor_instagram[0].country); 
  const updateData = await dashboard.updateOne({date},{$set:
    {
      "dashboard.visitor_instagram.0.visitors": visitoronSite,
      "dashboard.visitor_instagram.0.country": country_old

}
})
}else{
  console.log("enter there")
  var visitoronSite = findData.dashboard.total_visitors[0].visitors+ 1;
  var country_old = checkCountry(country,findData.dashboard.total_visitors[0].country); 
  const updateData = await dashboard.updateOne({date},{$set:
    {
      "dashboard.total_visitors.0.visitors": visitoronSite,
      "dashboard.total_visitors.0.country": country_old

}
})
}
}else{
  let newData;
  console.log(date);
  if(platform == "facebook"){
    newData = new dashboard({
      date:date,
      dashboard:{
        visitors_facebook:[
        {
            country : country,
            visitors: 1
        }],
        visitor_instagram:[
          {
              country : [],
              visitors: 0
          }],
          total_visitors:[{
                country : [],
                visitors: 0
            }]

  }
    })
  }
  else if(platform == "instagram"){
    newData = new dashboard({
      date:date,
      dashboard:{
        visitors_facebook:[
        {
            country : [],
            visitors: 0
        }],
        visitor_instagram:[
          {
              country : country,
              visitors: 1
          }],
          total_visitors:[{
                country : [],
                visitors: 0
            }]

  }
    })
  }else{
   newData = new dashboard({
      date:date,
      dashboard:{
        visitors_facebook:[
        {
            country : [],
            visitors: 0
        }],
        visitor_instagram:[
          {
              country : [],
              visitors: 0
          }],
          total_visitors:[{
                country : country,
                visitors: 1
            }]

  }
    })
  }
   const result = await newData.save();
  console.log(newData)
}


// // FOR FACEBOOK VISITORS
// if(platform == "facebook"){
//     var visitor_facebook = data.dashboard.visitors_facebook.at(-1).visitors;
//     var visitor_totle = data.dashboard.total_visitors.at(-1).visitors;
//     visitor_totle++;
//     visitor_facebook++;
//     var day_facebook = data.dashboard.visitors_facebook.at(-1).day;
//     var day_totle = data.dashboard.total_visitors.at(-1).day;
//   if(day_facebook == day){
//     var write_data  = data.dashboard.visitors_facebook.at(-1)
//     write_data.country.push(country);
//     write_data.visitors = visitor_facebook;
//     data.dashboard.visitors_facebook.pop();
//     data.dashboard.visitors_facebook.push(write_data);
//   }else{
//     var country_data = [];
//     var write_data  = data.dashboard.visitors_facebook.concat({day,country:country_data,visitors:visitor_facebook});
//     write_data.at(-1).country.push(country);
//      data.dashboard.visitors_facebook = write_data;
    
//   }
//   //////////////////ADDING TOTAL DATA/////////////////////////////
//   if(day_totle == day){
//     var write_data1  = data.dashboard.total_visitors.at(-1)
//     write_data1.country.push(country);
//     write_data1.visitors = visitor_totle;
//     data.dashboard.total_visitors.pop();
//     data.dashboard.total_visitors.push(write_data1);
   
//     console.log("same day")
//   }else{
//     var country_data = [];
//     var write_data1  = data.dashboard.total_visitors.concat({day,country:country_data,visitors:visitor_totle});
//     write_data1.at(-1).country.push(country);

//     data.dashboard.total_visitors = write_data1;
//     console.log(write_data1)
//     console.log("diffrent day")
//   }

// }else if(platform == "instagram"){
//     var visitor_instagram = data.dashboard.visitor_instagram.at(-1).visitors;
//     var visitor_totle = data.dashboard.total_visitors.at(-1).visitors;

//     visitor_totle++;
//     visitor_instagram++;
//      var day_instagram = data.dashboard.visitor_instagram.at(-1).day;
//      var day_totle = data.dashboard.total_visitors.at(-1).day;
//    if(day_instagram == day){
//      var write_data  = data.dashboard.visitor_instagram.at(-1)
//      write_data.country.push(country);
//     write_data.visitors = visitor_instagram;
//     data.dashboard.visitor_instagram.pop();
//     data.dashboard.visitor_instagram.push(write_data);
//   }else{
//     var country_data = [];
//     var write_data  = data.dashboard.visitor_instagram.concat({day,country:country_data,visitors:visitor_instagram});
//     write_data.at(-1).country.push(country);
//     data.dashboard.visitor_instagram = write_data;
    
//   }
//   if(day_totle == day){
//     var write_data1  = data.dashboard.total_visitors.at(-1)
//     write_data1.country.push(country);
//     write_data1.visitors = visitor_totle;
//     data.dashboard.total_visitors.pop();
//     data.dashboard.total_visitors.push(write_data1);
//   }else{
//     var country_data = [];
//     var write_data1  = data.dashboard.total_visitors.concat({day,country:country_data,visitors:visitor_totle});
//     write_data1.at(-1).country.push(country);
//     data.dashboard.total_visitors = write_data1;
    
//   }
//     // console.log(data.dashboard.total_visitors.concat({day,country,visitor_iins))
//     // console.log(data.dashboard.visitor_instagram.concat({day,platform,country,visitors}))
// }else{
//     var visitor_totle = data.dashboard.total_visitors.at(-1).visitors;
//     var day_totle = data.dashboard.total_visitors.at(-1).day;
//     visitor_totle++;
//     if(day_totle == day){
//         var write_data1  = data.dashboard.total_visitors.at(-1)
//         write_data1.country.push(country);
//         write_data1.visitors = visitor_totle;
//       }else{
//         var country_data = [];
//         var write_data  = data.dashboard.total_visitors.concat({day,country:country_data,visitors:visitor_totle});
//         write_data.at(-1).country.push(country);
//         data.dashboard.total_visitors = write_data;
//       }
//     }
//     var encrypt_data = cryptr.encrypt(JSON.stringify(data));
//      fs.writeFileSync(path.join(__dirname,"../analytics/analytics.json"),encrypt_data);



}
function checkCountry(country,db_country){
  if(country == null || country == undefined){
    return db_country;
  }
  else{
    return db_country.push(country);
  }
  
}
module.exports = addData;
