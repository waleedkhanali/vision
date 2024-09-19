var tl = gsap.timeline();
function display_nav(){
    var right = document.getElementById("right");
     right.classList.remove("anim_nav_remove");
    right.classList.add("anim_nav")
}
 function hide_nav(){
    var right = document.getElementById("right");
    right.classList.add("anim_nav_remove");
      setTimeout(function(){
        right.classList.remove("anim_nav");
    },2000)
  
}
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
        smooth: true,
        lerp: 0.05
})
tl.to("#yellow1",{
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out"
})
tl.from("#yellow2",{
    top: "100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out"
},"anim")

tl.to("#loader",{
    delay: 0.6,
    duration: 0.7,
    color: "black"
},"anim")
tl.to("#loader",{
    display: "none"
})
var page4 = document.getElementById("page4");
const whatsAppBtn = document.getElementById("whatsAppBtn");
var checkElem = page4.getBoundingClientRect();
const observer = new IntersectionObserver(element => {
    element.forEach(elem => {
        if(elem.isIntersecting){  
           whatsAppBtn.classList.add("showLogo")
           whatsAppBtn.classList.remove("hideLogo")
        }else{
            whatsAppBtn.classList.add("hideLogo")
            whatsAppBtn.classList.remove("showLogo")
        }
    })
})
observer.observe(page4)