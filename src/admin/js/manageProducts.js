function addProductInLine(line,elem){
   console.log(line)
    var allProducts = document.getElementById(`line${line}`);
     var image_container = document.createElement("div");
   var image1 = document.createElement("img");
     var overlay = document.createElement("div");
       image1.src = elem.product_url;
   overlay.innerHTML = '<i class="fa-solid fa-trash"></i>';
      image_container.className = "image_container";
       image1.className = "product_image";
      overlay.className = "overlay";
    image_container.appendChild(image1);
    image_container.appendChild(overlay);
     allProducts.appendChild(image_container);
     image1.setAttribute("_id",elem._id);
}

function hide_manager_tab(ele){
   console.log(ele.innerHTML)
   if(ele.innerHTML == '<i class="fa-solid fa-indent"></i>'){
   console.log("running")
   document.getElementById("manage_tab").style.right= "-50vw";
   var owl_carousel = document.querySelector(".owl-carousel");
   owl_carousel.style.width = "100%";
   ele.innerHTML = '<i class="fa-solid fa-outdent"></i>';
   setTimeout(function(){
        $('.owl-carousel').owlCarousel('refresh')
        document.getElementById("allProducts").style.width = "100%"
   },2000)
   }else{
        document.getElementById("allProducts").style.width = "80%"
   var owl_carousel = document.querySelector(".owl-carousel");
   owl_carousel.style.width = "80%";
   ele.innerHTML = '<i class="fa-solid fa-outdent"></i>';
  
   setTimeout(function(){
        document.getElementById("manage_tab").style.right= "0vw";
         $('.owl-carousel').owlCarousel('refresh')
   },2000)
       ele.innerHTML = '<i class="fa-solid fa-indent"></i>'
   }
  
}
//////////////DROP FUNCTIONS HERE/////////////////
function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
console.log(ev)
ev.dataTransfer.setData("text", ev.target.id);
ev.dataTransfer.setData("db_id",ev.target.getAttribute("_id"))
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
var db_id = ev.dataTransfer.getData("db_id");
var div = document.createElement("div");
var overlay = document.createElement("div");
div.className = "item";
overlay.innerHTML = '<i class="fa-solid fa-trash"></i>';
overlay.className = "carousel_overlay"

showOnTop.push(db_id);
var dataId = document.getElementById(data)
div.appendChild(dataId)
div.appendChild(overlay)
dataId.className = "image_carousel"
var owl_item = document.createElement('div');
overlay.addEventListener("dblclick",function(){


showOnTop = showOnTop.filter(function(e) { return e !== db_id })
manage_tab.appendChild(dataId);
dataId.classList = "images_tabs";
div.remove();
$('.owl-carousel').owlCarousel('refresh')


})
$('.owl-carousel').trigger('add.owl.carousel', [div])
}
function saveInfo(){
var err;
showOnTop.forEach(elem => {
deletedImage.forEach(elem1 => {
   if(elem == elem1){
       err = true
   }
})
})
if(err){
alert("hello")
}else{
 alert("saved");
 fetch("/admin/modify_thumb",{
   method:"POST",
    headers: {
'Content-Type': 'application/json'
},
   body:JSON.stringify({showOnTop:showOnTop,deletedImage:deletedImage,normalArray:normalArray})
}).then(response => {
   return response.text();
}).then(data => {
   console.log
})
}
}

