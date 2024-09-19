const fs = require("fs");
const fileSave = async(tempPath,form) => {
    return new Promise(async function (resolve, reject) {
       await fs.readFile(tempPath, {encoding: 'base64'},async function (err, data1) {
        if(err){
          reject();
        }
        form.append('image', data1)
          const saveFile = await fetch("https://api.imgbb.com/1/upload?key=80527a494ab10bce45ea01fbd988ad56",{
            method: "POST",
            body: form
        })
        resolve(saveFile.text());
   
   
     })
    })
    
  
}
module.exports = fileSave;