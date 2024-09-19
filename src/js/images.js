const images = [
    "img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12","img13","img14","img15"
,"img1","img2","img3","img4","img5","img6","img7","img8",
];
var val = 1;
images.forEach((elem) => {
    console.log(`#line${val}`)
    var img_container = document.getElementById(`line${val}`);
    var div = document.createElement("div");
    div.className = "img_main"
    var overlay = document.createElement("div");
    overlay.innerHTML = "overlay";
    overlay.className = "overlay";
    var img = document.createElement("img");
    img.src = "images/images/"+elem+".jpg";
    img_container.appendChild(div);
    div.appendChild(overlay);
    div.appendChild(img);
    if(val == 3){
        val =1;
    }else{
    val++;
    }

})
var elem = document.querySelectorAll(".elem");

elem.forEach(function(elem){
    elem.addEventListener("click",function(){
        var name = elem.className;
        var url = "/"+elem.children[0].innerHTML.toLowerCase();
        console.log(main.scrollTop)
       var name1 =  name.replace("elem ","");
     var open = document.querySelector(".open");
     open.style.height = "100vh";
     setTimeout(function(){
        window.location.href = url
    },2000)
    })
})